import { readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const IMAGE_EXT = /\.(jpe?g|png|webp|gif|avif)$/i
const VIRTUAL_ID = 'virtual:image-manifest'
const RESOLVED_ID = '\0' + VIRTUAL_ID

function listImages(dir) {
  try {
    return readdirSync(dir)
      .filter((file) => IMAGE_EXT.test(file))
      .sort()
  } catch {
    return []
  }
}

/**
 * Exposes the files in public/avatars and public/img as a virtual module,
 * read once at dev/build start. Endpoints use it to decide whether a person
 * has a real headshot yet or should fall back to the generated placeholder.
 * Drop a file into either folder and restart `astro dev` to pick it up.
 */
export default function imageManifest() {
  return {
    name: 'image-manifest',
    hooks: {
      'astro:config:setup': ({ config, updateConfig }) => {
        const publicDir = fileURLToPath(config.publicDir)
        updateConfig({
          vite: {
            plugins: [
              {
                name: 'image-manifest',
                resolveId(id) {
                  return id === VIRTUAL_ID ? RESOLVED_ID : undefined
                },
                load(id) {
                  if (id !== RESOLVED_ID) return undefined
                  const manifest = {
                    avatars: listImages(`${publicDir}/avatars`),
                    img: listImages(`${publicDir}/img`),
                  }
                  return `export default ${JSON.stringify(manifest)}`
                },
              },
            ],
          },
        })
      },
    },
  }
}
