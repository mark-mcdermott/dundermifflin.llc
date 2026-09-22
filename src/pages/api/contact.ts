import type { APIContext, APIRoute } from 'astro'
import { RESEND_API_KEY } from 'astro:env/server'
import { Resend } from 'resend'
import { CONTACT_EMAIL } from '../../lib/site'

export const prerender = false

const LIMITS = { name: 100, email: 200, message: 5000 } as const
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const RECENT_CAP = 5000

/** Per-instance sliding window. Fluid Compute reuses instances, so this catches bursts without a store. */
const recent = new Map<string, number[]>()

function overLimit(ip: string): boolean {
  const now = Date.now()
  const hits = (recent.get(ip) ?? []).filter((at) => now - at < WINDOW_MS)
  hits.push(now)
  if (recent.size >= RECENT_CAP) recent.clear()
  recent.set(ip, hits)
  return hits.length > MAX_PER_WINDOW
}

type Outcome = 'sent' | 'invalid' | 'ratelimited' | 'forbidden' | 'unavailable' | 'failed'

const STATUS: Record<Outcome, number> = {
  sent: 200,
  invalid: 400,
  forbidden: 403,
  ratelimited: 429,
  unavailable: 503,
  failed: 502,
}

const MESSAGE: Record<Outcome, string> = {
  sent: 'Thanks, your message is on its way.',
  invalid: 'Please fill in your name, a valid email address, and a message.',
  forbidden: 'This form only accepts submissions from the site itself.',
  ratelimited: 'Too many messages in a short time. Please try again later.',
  unavailable: 'The contact form is not configured yet. Email us directly instead.',
  failed: 'Something went wrong sending your message. Email us directly instead.',
}

interface Submission {
  name: string
  email: string
  message: string
  trap: string
}

const clean = (value: unknown, max: number) => (typeof value === 'string' ? value.trim().slice(0, max) : '')

async function readSubmission(request: Request): Promise<Submission> {
  const type = request.headers.get('content-type') ?? ''
  const raw: Record<string, unknown> = type.includes('application/json')
    ? ((await request.json().catch(() => ({}))) as Record<string, unknown>)
    : Object.fromEntries((await request.formData().catch(() => new FormData())).entries())
  return {
    name: clean(raw.name, LIMITS.name),
    email: clean(raw.email, LIMITS.email),
    message: clean(raw.message, LIMITS.message),
    trap: clean(raw.company, 50),
  }
}

function sameOrigin(request: Request): boolean {
  const source = request.headers.get('origin') ?? request.headers.get('referer')
  if (!source) return false
  try {
    return new URL(source).origin === new URL(request.url).origin
  } catch {
    return false
  }
}

const wantsJson = (request: Request) => request.headers.get('accept')?.includes('application/json') ?? false

function respond({ request, redirect }: APIContext, outcome: Outcome): Response {
  if (wantsJson(request)) {
    return new Response(JSON.stringify({ ok: outcome === 'sent', status: outcome, message: MESSAGE[outcome] }), {
      status: STATUS[outcome],
      headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
    })
  }
  return redirect(outcome === 'sent' ? '/contact?sent=1' : `/contact?error=${outcome}`, 303)
}

export const POST: APIRoute = async (context) => {
  const { request, clientAddress } = context
  if (!sameOrigin(request)) return respond(context, 'forbidden')

  const submission = await readSubmission(request)
  // Bots fill the hidden field; pretend it worked so they move on.
  if (submission.trap) return respond(context, 'sent')

  const valid = submission.name && submission.message && EMAIL_PATTERN.test(submission.email)
  if (!valid) return respond(context, 'invalid')
  if (overLimit(clientAddress)) return respond(context, 'ratelimited')
  if (!RESEND_API_KEY) return respond(context, 'unavailable')

  const resend = new Resend(RESEND_API_KEY)
  const { error } = await resend.emails.send({
    from: `Dunder Mifflin Contact <contact@${CONTACT_EMAIL.split('@')[1]}>`,
    to: [CONTACT_EMAIL],
    replyTo: submission.email,
    subject: `[dundermifflin.llc] Message from ${submission.name}`,
    text: [
      `From: ${submission.name} <${submission.email}>`,
      `IP: ${clientAddress}`,
      `User agent: ${request.headers.get('user-agent') ?? 'unknown'}`,
      '',
      submission.message,
    ].join('\n'),
  })

  if (error) {
    console.error('contact form: resend rejected the message', error)
    return respond(context, 'failed')
  }
  return respond(context, 'sent')
}

export const GET: APIRoute = () =>
  new Response(JSON.stringify({ error: 'Method Not Allowed', message: 'POST name, email and message to this endpoint.' }), {
    status: 405,
    headers: { 'Content-Type': 'application/json; charset=utf-8', Allow: 'POST' },
  })
