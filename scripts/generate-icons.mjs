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

// Mark coverage: the fraction of the canvas the mark spans. Matches Evolonix's
// favicon.svg / logo.png, where the mark sits in the central 36 of a 64 box —
// i.e. 14/64 (≈21.9%) padding on every side.
const COVERAGE = 36 / 64;

// Render the mark to a transparent square of the given size (aspect preserved).
const renderMark = (size) =>
  sharp(logoSvg)
    .resize(size, size, { fit: "contain", background: TRANSPARENT })
    .png()
    .toBuffer();

// Mark centred on a square `background`, inset to COVERAGE so it carries the
// same top/bottom padding as the Evolonix marks.
async function compose(size, background) {
  const inner = Math.round(size * COVERAGE);
  const offset = Math.round((size - inner) / 2);
  return sharp({
    create: { width: size, height: size, channels: 4, background },
  })
    .composite([{ input: await renderMark(inner), top: offset, left: offset }])
    .png()
    .toBuffer();
}

const jobs = [
  // General-purpose raster of the mark on a full dark square (matches Evolonix).
  [await compose(1024, BG), "logo.png"],
  // Apple touch icon — iOS applies its own rounded mask.
  [await compose(180, BG), "apple-touch-icon.png"],
  // Maskable PWA icons — mark kept within the central safe zone.
  [await compose(192, BG), "icon-192.png"],
  [await compose(512, BG), "icon-512.png"],
];

for (const [buf, file] of jobs) {
  await sharp(buf).toFile(join(pub, file));
  console.log(`  ${file}`);
}

console.log("\nGenerated brand PNGs in public/");
