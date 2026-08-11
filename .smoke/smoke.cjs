// Full-page screenshot. Emulates prefers-reduced-motion to bypass entrance animations
// so the screenshot reflects the final visual state, not a mid-animation frame.
const puppeteer = require('puppeteer');
const path = require('node:path');
const fs = require('node:fs');

const outDir = path.resolve(__dirname, 'shots');
fs.mkdirSync(outDir, { recursive: true });

const widths = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 1024, height: 768 },
  { name: 'mobile', width: 390, height: 844 },
];

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  try {
    for (const w of widths) {
      const page = await browser.newPage();
      await page.setViewport({ width: w.width, height: w.height, deviceScaleFactor: 1 });
      await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
      await page.goto('http://localhost:3030/', { waitUntil: 'networkidle0', timeout: 30000 });
      await new Promise((r) => setTimeout(r, 600));
      const out = path.join(outDir, `home-${w.name}.png`);
      await page.screenshot({ path: out, fullPage: true });
      console.log('saved', out);
      await page.close();
    }
  } finally {
    await browser.close();
  }
})();
