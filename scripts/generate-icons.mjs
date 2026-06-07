// Generates the PNG brand assets from public/logo.svg:
//   - logo.png             transparent free-standing mark
//   - apple-touch-icon.png mark on a full dark square (iOS rounds it itself)
//   - icon-192/512.png     maskable PWA icons: mark inset into the safe zone on
//                          a full dark square
//
// The mark is composited from logo.svg (aspect-preserving), so this stays
// correct no matter how logo.svg's viewBox or layout changes — update the SVG,
// rerun, and the PNGs follow.
//
// Run with: npm run generate:icons

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const pub = join(dirname(fileURLToPath(import.meta.url)), "..", "public");
const logoSvg = readFileSync(join(pub, "logo.svg"));
const BG = "#0b0b12";
const TRANSPARENT = { r: 0, g: 0, b: 0, alpha: 0 };

// Render the mark to a transparent square of the given size (aspect preserved).
const renderMark = (size) =>
  sharp(logoSvg)
    .resize(size, size, { fit: "contain", background: TRANSPARENT })
    .png()
    .toBuffer();

// Mark centred on a solid dark square. `coverage` is the fraction of the canvas
// the mark spans (smaller for maskable icons so they survive the platform crop).
async function onSquare(size, coverage) {
  const inner = Math.round(size * coverage);
  const offset = Math.round((size - inner) / 2);
  return sharp({
    create: { width: size, height: size, channels: 4, background: BG },
  })
    .composite([{ input: await renderMark(inner), top: offset, left: offset }])
    .png()
    .toBuffer();
}

const jobs = [
  // Transparent free-standing mark.
  [await renderMark(512), "logo.png"],
  // Apple touch icon — fuller mark; iOS applies its own rounded mask.
  [await onSquare(180, 0.72), "apple-touch-icon.png"],
  // Maskable PWA icons — mark kept within the central safe zone.
  [await onSquare(192, 0.62), "icon-192.png"],
  [await onSquare(512, 0.62), "icon-512.png"],
];

for (const [buf, file] of jobs) {
  await sharp(buf).toFile(join(pub, file));
  console.log(`  ${file}`);
}

console.log("\nGenerated brand PNGs in public/");
