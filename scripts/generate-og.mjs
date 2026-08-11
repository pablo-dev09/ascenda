// Generates og-cover.png (1200x630) without external deps.
// Run with: node scripts/generate-og.mjs
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const W = 1200;
const H = 630;

// Create a PNG from raw RGBA pixels.
function createPng(width, height, rgba) {
  // PNG signature
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  function chunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, 'ascii');
    const crcInput = Buffer.concat([typeBuf, data]);
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(crcInput) >>> 0, 0);
    return Buffer.concat([len, typeBuf, data, crc]);
  }

  function crc32(buf) {
    let table = crc32.table;
    if (!table) {
      table = new Uint32Array(256);
      for (let n = 0; n < 256; n++) {
        let c = n;
        for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
        table[n] = c;
      }
      crc32.table = table;
    }
    let c = 0xffffffff;
    for (let i = 0; i < buf.length; i++) c = table[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
    return c ^ 0xffffffff;
  }

  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  // Raw image data with filter byte per row
  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0; // None filter
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }
  const idat = zlib.deflateSync(raw, { level: 9 });

  return Buffer.concat([
    signature,
    chunk('IHDR', ihdr),
    chunk('IDAT', idat),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

// --- Drawing helpers ---
function setPixel(buf, x, y, r, g, b, a) {
  if (x < 0 || y < 0 || x >= W || y >= H) return;
  const i = (y * W + x) * 4;
  // Alpha blending
  const af = a / 255;
  const dr = buf[i] * (1 - af) + r * af;
  const dg = buf[i + 1] * (1 - af) + g * af;
  const db = buf[i + 2] * (1 - af) + b * af;
  buf[i] = dr;
  buf[i + 1] = dg;
  buf[i + 2] = db;
  buf[i + 3] = 255;
}

function fillRect(buf, x0, y0, w, h, r, g, b, a = 255) {
  for (let y = y0; y < y0 + h; y++)
    for (let x = x0; x < x0 + w; x++) setPixel(buf, x, y, r, g, b, a);
}

function fillRoundedRect(buf, x, y, w, h, radius, r, g, b, a = 255) {
  for (let yy = y; yy < y + h; yy++) {
    for (let xx = x; xx < x + w; xx++) {
      const inX = xx >= x + radius && xx < x + w - radius;
      const inY = yy >= y + radius && yy < y + h - radius;
      if (inX || inY) {
        setPixel(buf, xx, yy, r, g, b, a);
        continue;
      }
      // corner check
      const cx = inX ? xx : xx < x + radius ? x + radius : x + w - radius - 1;
      const cy = inY ? yy : yy < y + radius ? y + radius : y + h - radius - 1;
      const dx = xx - cx;
      const dy = yy - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        setPixel(buf, xx, yy, r, g, b, a);
      }
    }
  }
}

function drawLine(buf, x0, y0, x1, y1, r, g, b, a = 255, thickness = 2) {
  const dx = x1 - x0;
  const dy = y1 - y0;
  const steps = Math.max(Math.abs(dx), Math.abs(dy));
  for (let i = 0; i <= steps; i++) {
    const t = steps === 0 ? 0 : i / steps;
    const x = Math.round(x0 + dx * t);
    const y = Math.round(y0 + dy * t);
    for (let oy = -thickness; oy <= thickness; oy++)
      for (let ox = -thickness; ox <= thickness; ox++)
        if (ox * ox + oy * oy <= thickness * thickness)
          setPixel(buf, x + ox, y + oy, r, g, b, a);
  }
}

// Render a 5x7 bitmap font for the words we need
const FONT = {
  // 5x7 font, each char is 5 wide, 7 tall, with 1 col spacing
  A: ['01110','10001','10001','11111','10001','10001','10001'],
  B: ['11110','10001','10001','11110','10001','10001','11110'],
  C: ['01110','10001','10000','10000','10000','10001','01110'],
  D: ['11110','10001','10001','10001','10001','10001','11110'],
  E: ['11111','10000','10000','11110','10000','10000','11111'],
  F: ['11111','10000','10000','11110','10000','10000','10000'],
  G: ['01110','10001','10000','10111','10001','10001','01110'],
  H: ['10001','10001','10001','11111','10001','10001','10001'],
  I: ['11111','00100','00100','00100','00100','00100','11111'],
  J: ['00111','00010','00010','00010','00010','10010','01100'],
  K: ['10001','10010','10100','11000','10100','10010','10001'],
  L: ['10000','10000','10000','10000','10000','10000','11111'],
  M: ['10001','11011','10101','10001','10001','10001','10001'],
  N: ['10001','11001','10101','10011','10001','10001','10001'],
  O: ['01110','10001','10001','10001','10001','10001','01110'],
  P: ['11110','10001','10001','11110','10000','10000','10000'],
  Q: ['01110','10001','10001','10001','10101','10010','01101'],
  R: ['11110','10001','10001','11110','10100','10010','10001'],
  S: ['01111','10000','10000','01110','00001','00001','11110'],
  T: ['11111','00100','00100','00100','00100','00100','00100'],
  U: ['10001','10001','10001','10001','10001','10001','01110'],
  V: ['10001','10001','10001','10001','10001','01010','00100'],
  W: ['10001','10001','10001','10001','10101','11011','10001'],
  X: ['10001','10001','01010','00100','01010','10001','10001'],
  Y: ['10001','10001','01010','00100','00100','00100','00100'],
  Z: ['11111','00001','00010','00100','01000','10000','11111'],
  ' ': ['00000','00000','00000','00000','00000','00000','00000'],
  '0': ['01110','10001','10011','10101','11001','10001','01110'],
  '1': ['00100','01100','00100','00100','00100','00100','01110'],
  '2': ['01110','10001','00001','00010','00100','01000','11111'],
  '3': ['11110','00001','00001','01110','00001','00001','11110'],
  '4': ['00010','00110','01010','10010','11111','00010','00010'],
  '5': ['11111','10000','11110','00001','00001','10001','01110'],
  '6': ['00110','01000','10000','11110','10001','10001','01110'],
  '7': ['11111','00001','00010','00100','01000','01000','01000'],
  '8': ['01110','10001','10001','01110','10001','10001','01110'],
  '9': ['01110','10001','10001','01111','00001','00010','01100'],
  ':': ['00000','00100','00100','00000','00100','00100','00000'],
  '.': ['00000','00000','00000','00000','00000','00000','00100'],
  '-': ['00000','00000','00000','11111','00000','00000','00000'],
  '/': ['00001','00010','00010','00100','01000','01000','10000'],
  ',': ['00000','00000','00000','00000','00100','00100','01000'],
};

function drawText(buf, text, x, y, scale, r, g, b, a = 255) {
  const upper = text.toUpperCase();
  let cursor = x;
  for (const ch of upper) {
    const glyph = FONT[ch] || FONT[' '];
    for (let row = 0; row < 7; row++) {
      for (let col = 0; col < 5; col++) {
        if (glyph[row][col] === '1') {
          for (let sy = 0; sy < scale; sy++)
            for (let sx = 0; sx < scale; sx++)
              setPixel(buf, cursor + col * scale + sx, y + row * scale + sy, r, g, b, a);
        }
      }
    }
    cursor += (5 + 1) * scale;
  }
}

function textWidth(text, scale) {
  return text.length * 6 * scale;
}

// --- Build the cover ---
const buf = Buffer.alloc(W * H * 4, 0);

// Background gradient: deep navy at top to blacker at bottom
for (let y = 0; y < H; y++) {
  const t = y / H;
  const r = Math.round(2 + (10 - 2) * t);
  const g = Math.round(6 + (24 - 6) * t);
  const b = Math.round(17 + (60 - 17) * t);
  for (let x = 0; x < W; x++) {
    const i = (y * W + x) * 4;
    buf[i] = r;
    buf[i + 1] = g;
    buf[i + 2] = b;
    buf[i + 3] = 255;
  }
}

// Tech-blue radial glow
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const dx = x - W * 0.7;
    const dy = y - H * 0.3;
    const d = Math.sqrt(dx * dx + dy * dy);
    const maxD = Math.min(W, H) * 0.55;
    if (d < maxD) {
      const a = (1 - d / maxD) * 70;
      setPixel(buf, x, y, 31, 124, 223, a);
    }
  }
}

// Subtle grid lines
for (let x = 0; x < W; x += 60) {
  for (let y = 0; y < H; y++) {
    setPixel(buf, x, y, 255, 255, 255, 10);
  }
}
for (let y = 0; y < H; y += 60) {
  for (let x = 0; x < W; x++) {
    setPixel(buf, x, y, 255, 255, 255, 10);
  }
}

// Decorative shield on the right
const shieldCx = 920;
const shieldCy = 315;
const shieldW = 240;
const shieldH = 280;
for (let yy = 0; yy < shieldH; yy++) {
  for (let xx = 0; xx < shieldW; xx++) {
    const cx = shieldCx - shieldW / 2 + xx;
    const cy = shieldCy - shieldH / 2 + yy;
    const normX = (xx - shieldW / 2) / (shieldW / 2);
    const normY = (yy - shieldH / 2) / (shieldH / 2);
    // Shield equation
    const inShield = normY <= -0.6 + 0.4 * Math.abs(normX) * 1.2 ? false :
      (normY >= -1) && (Math.abs(normX) <= 1 - Math.max(0, normY) * 0.4) && (Math.abs(normX) <= 1 - Math.max(0, -normY - 0.6) * 0.5);
    if (Math.abs(normX) <= 0.95 && normY >= -1 && normY <= 1) {
      // shield body
      if (Math.abs(normX) <= 0.95 - Math.max(0, -normY - 0.5) * 0.5 && Math.abs(normX) <= 0.95 - Math.max(0, normY) * 0.6) {
        const t = (yy / shieldH);
        const r = Math.round(20 + (40 - 20) * t);
        const g = Math.round(50 + (90 - 50) * t);
        const b = Math.round(110 + (180 - 110) * t);
        setPixel(buf, cx, cy, r, g, b, 80);
      }
    }
  }
}

// Shield stroke - approximate via rectangle outline
const sx0 = shieldCx - shieldW / 2 + 6;
const sy0 = shieldCy - shieldH / 2 + 6;
const sw = shieldW - 12;
const sh = shieldH - 12;
for (let i = 0; i < 4; i++) {
  // Top
  for (let x = sx0; x < sx0 + sw; x++) {
    setPixel(buf, x, sy0 + i, 31, 124, 223, 180);
    setPixel(buf, x, sy0 + sh - 1 - i, 31, 124, 223, 180);
  }
  for (let y = sy0; y < sy0 + sh; y++) {
    setPixel(buf, sx0 + i, y, 31, 124, 223, 180);
    setPixel(buf, sx0 + sw - 1 - i, y, 31, 124, 223, 180);
  }
}

// Ascending chart inside shield
const chartY = shieldCy + 50;
drawLine(buf, shieldCx - 80, chartY + 30, shieldCx - 40, chartY + 5, 31, 124, 223, 220, 3);
drawLine(buf, shieldCx - 40, chartY + 5, shieldCx - 10, chartY + 20, 31, 124, 223, 220, 3);
drawLine(buf, shieldCx - 10, chartY + 20, shieldCx + 30, chartY - 25, 31, 124, 223, 220, 3);
drawLine(buf, shieldCx + 30, chartY - 25, shieldCx + 80, chartY - 70, 31, 124, 223, 220, 3);
// Arrow head
drawLine(buf, shieldCx + 80, chartY - 70, shieldCx + 60, chartY - 60, 31, 124, 223, 220, 3);
drawLine(buf, shieldCx + 80, chartY - 70, shieldCx + 70, chartY - 50, 31, 124, 223, 220, 3);

// Left side: brand + text
// Logo mark - simple shield icon
const markX = 80;
const markY = 100;
const markW = 80;
const markH = 90;
// outer stroke
for (let i = 0; i < 3; i++) {
  for (let x = markX; x < markX + markW; x++) {
    setPixel(buf, x, markY + i, 255, 255, 255, 230);
    setPixel(buf, x, markY + markH - 1 - i, 255, 255, 255, 230);
  }
  for (let y = markY; y < markY + markH; y++) {
    setPixel(buf, markX + i, y, 255, 255, 255, 230);
    setPixel(buf, markX + markW - 1 - i, y, 255, 255, 255, 230);
  }
}
// inner ascending arrow
drawLine(buf, markX + 15, markY + 65, markX + 30, markY + 45, 255, 255, 255, 240, 2);
drawLine(buf, markX + 30, markY + 45, markX + 45, markY + 55, 255, 255, 255, 240, 2);
drawLine(buf, markX + 45, markY + 55, markX + 65, markY + 25, 255, 255, 255, 240, 2);

// Wordmark
drawText(buf, 'ASCENDA', 184, 116, 7, 255, 255, 255, 245);

// Eyebrow
drawText(buf, 'STARTUP DE TECNOLOGIA  /  BRASIL', 80, 230, 3, 142, 192, 240, 230);

// Main headline (large)
drawText(buf, 'TECNOLOGIA QUE PROTEGE.', 80, 280, 8, 255, 255, 255, 255);
drawText(buf, 'SOLUCOES QUE FAZEM CRESCER.', 80, 360, 8, 31, 124, 223, 255);

// Subhead
drawText(buf, 'TECNOLOGIA PROFISSIONAL, SEGURA E ACESSIVEL', 80, 460, 3, 200, 215, 240, 220);
drawText(buf, 'PARA PEQUENAS EMPRESAS QUE QUEREM EVOLUIR.', 80, 490, 3, 200, 215, 240, 220);

// Bottom info
drawText(buf, 'ASCENDA.COM.BR', 80, 560, 3, 180, 180, 180, 200);

// Save
const png = createPng(W, H, buf);
const out = path.resolve(__dirname, '..', 'public', 'og-cover.png');
fs.writeFileSync(out, png);
console.log('Generated', out, png.length, 'bytes');
