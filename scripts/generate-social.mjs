// Generates the social preview card (.github/social-preview.svg + .png, 1280×640):
// the logo mark + "Jason Ruesch" wordmark over the brand gradient, with a tagline
// and a categories line — the same recipe as the splash screens / favicon.
//
// Text is converted to outlined paths with Manrope 700 (scripts/fonts/Manrope-Bold.ttf),
// so both outputs render identically with no installed font required. The SVG is
// self-contained; upload the PNG under Settings → Social preview.
//
// Run with: npm run generate:social

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import opentype from "opentype.js";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", ".github");
mkdirSync(outDir, { recursive: true });

const fontBuf = readFileSync(join(__dirname, "fonts", "Manrope-Bold.ttf"));
const font = opentype.parse(
  fontBuf.buffer.slice(
    fontBuf.byteOffset,
    fontBuf.byteOffset + fontBuf.byteLength,
  ),
);

const W = 1280;
const H = 640;

// Advance width of a string, honouring kerning + optional letter tracking.
function measure(text, fontSize, tracking = 0) {
  const scale = fontSize / font.unitsPerEm;
  const glyphs = font.stringToGlyphs(text);
  let w = 0;
  for (let i = 0; i < glyphs.length; i++) {
    w += glyphs[i].advanceWidth * scale;
    if (i < glyphs.length - 1) {
      w +=
        (font.getKerningValue(glyphs[i], glyphs[i + 1]) || 0) * scale +
        tracking;
    }
  }
  return w;
}

// Render a string as positioned per-glyph <path>s. Each glyph is emitted at the
// font's native em units and placed with a transform, so the path data stays
// integer-clean — fractional, minus-delimited coordinates in one big path made
// some glyphs (notably "p") drop out of the SVG rasteriser.
function text(str, x, baseline, fontSize, tracking, fill) {
  const scale = fontSize / font.unitsPerEm;
  const glyphs = font.stringToGlyphs(str);
  let penX = x;
  let out = "";
  for (let i = 0; i < glyphs.length; i++) {
    const d = glyphs[i].getPath(0, 0, font.unitsPerEm).toPathData(0);
    if (d) {
      out += `\n  <g transform="translate(${penX.toFixed(2)}, ${baseline.toFixed(2)}) scale(${scale})"><path d="${d}" fill="${fill}" /></g>`;
    }
    penX += glyphs[i].advanceWidth * scale;
    if (i < glyphs.length - 1) {
      penX +=
        (font.getKerningValue(glyphs[i], glyphs[i + 1]) || 0) * scale +
        tracking;
    }
  }
  return out;
}

// --- Logo + wordmark lockup, centred horizontally ---
const logoSize = 150;
const logoScale = logoSize / 64; // source logo.svg viewBox is 64×64
const wmSize = 120;
const wmTracking = -3;
const gap = 44;
const cy = 280; // vertical centre of the lockup

const wmWidth = measure("Jason Ruesch", wmSize, wmTracking);
const lockupX = (W - (logoSize + gap + wmWidth)) / 2;
const logoY = cy - logoSize / 2;

const wmBox = font.getPath("Jason Ruesch", 0, 0, wmSize).getBoundingBox();
const wmBaseline = cy - (wmBox.y1 + wmBox.y2) / 2; // optically centre on cy
const wmSvg = text(
  "Jason Ruesch",
  lockupX + logoSize + gap,
  wmBaseline,
  wmSize,
  wmTracking,
  "#ffffff",
);

// --- Tagline + categories, centred ---
const tagline = "Software developer & designer.";
const tagSvg = text(
  tagline,
  (W - measure(tagline, 40)) / 2,
  462,
  40,
  0,
  "#cbd5e1",
);

const cats = "FRONTEND ENGINEERING  ·  DESIGN SYSTEMS  ·  ACCESSIBILITY";
const catSvg = text(
  cats,
  (W - measure(cats, 22, 3)) / 2,
  524,
  22,
  3,
  "#94a3b8",
);

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a0a14" />
      <stop offset="1" stop-color="#0e0820" />
    </linearGradient>
    <radialGradient id="glow-purple" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="#a855f7" stop-opacity="0.55" />
      <stop offset="1" stop-color="#a855f7" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="glow-magenta" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="#d946ef" stop-opacity="0.45" />
      <stop offset="1" stop-color="#d946ef" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="glow-cyan" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="#22d3ee" stop-opacity="0.5" />
      <stop offset="1" stop-color="#22d3ee" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Base -->
  <rect width="${W}" height="${H}" fill="url(#bg)" />

  <!-- Atmospheric glows -->
  <circle cx="200" cy="120" r="380" fill="url(#glow-purple)" />
  <circle cx="1080" cy="540" r="420" fill="url(#glow-cyan)" />
  <circle cx="700" cy="320" r="320" fill="url(#glow-magenta)" />

  <!-- Faint grid texture -->
  <g stroke="#ffffff" stroke-opacity="0.04" stroke-width="1">
    <line x1="0" y1="160" x2="1280" y2="160" />
    <line x1="0" y1="320" x2="1280" y2="320" />
    <line x1="0" y1="480" x2="1280" y2="480" />
    <line x1="320" y1="0" x2="320" y2="640" />
    <line x1="640" y1="0" x2="640" y2="640" />
    <line x1="960" y1="0" x2="960" y2="640" />
  </g>

  <!-- Brand mark -->
  <g transform="translate(${lockupX.toFixed(1)}, ${logoY.toFixed(1)}) scale(${logoScale.toFixed(4)})">
    <rect x="17.2" y="0" width="46.8" height="12.4" rx="6.2" fill="#a855f7" />
    <rect x="34.4" y="25.8" width="12.4" height="12.4" rx="6.2" fill="#d946ef" />
    <rect x="0" y="51.6" width="46.8" height="12.4" rx="6.2" fill="#22d3ee" />
  </g>

  <!-- Wordmark + tagline + categories (outlined Manrope 700) -->${wmSvg}${tagSvg}${catSvg}
</svg>`;

writeFileSync(join(outDir, "social-preview.svg"), svg + "\n");
await sharp(Buffer.from(svg)).png().toFile(join(outDir, "social-preview.png"));

console.log(`Generated .github/social-preview.svg and .png (${W}×${H})`);
