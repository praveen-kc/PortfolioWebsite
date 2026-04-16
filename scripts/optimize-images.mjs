import sharp from 'sharp'
import { readdir, mkdir } from 'fs/promises'
import { join, extname, basename } from 'path'

const INPUT = 'public/images/source'
const OUTPUT = 'public/images/projects'

const files = await readdir(INPUT).catch(() => [])
await mkdir(OUTPUT, { recursive: true })

for (const file of files) {
  const ext = extname(file).toLowerCase()
  if (!['.jpg', '.jpeg', '.png', '.gif'].includes(ext)) continue
  const name = basename(file, ext)
  const src = join(INPUT, file)

  await sharp(src).webp({ quality: 82 }).toFile(join(OUTPUT, `${name}.webp`))
  await sharp(src).resize(400).webp({ quality: 75 }).toFile(join(OUTPUT, `${name}-thumb.webp`))
  const buf = await sharp(src).resize(32).webp({ quality: 20 }).toBuffer()
  console.log(`${name}: placeholder base64 length ${buf.toString('base64').length}`)
}
console.log('Done.')
