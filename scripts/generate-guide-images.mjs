import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const API_KEY = process.env.OPENAI_API_KEY;
const OUT_DIR = fileURLToPath(new URL('../public/assets/images', import.meta.url));

const images = [
  { filename: 'cum-alegi-cea-mai-buna-centrala-termica-2026.webp', prompt: 'A modern boiler room with a wall-mounted gas condensing boiler, copper pipes, and a clean organized installation. Warm lighting, white walls, professional plumbing. Editorial interior photography style.' },
  { filename: 'centrala-termica-pe-gaz-condensare-montaj-perete.webp', prompt: 'Close-up of a modern white wall-mounted gas condensing boiler installed on a kitchen wall with visible copper pipes and digital display. Clean professional installation, warm lighting. Product photography style.' },
  { filename: 'centrala-pe-peleti-buncar-automatizare-camera-tehnica.webp', prompt: 'A pellet heating boiler in a technical room with pellet storage hopper visible, automatic feeding system, and piping. Clean organized space with wood pellets visible. Professional editorial photography.' },
  { filename: 'centrala-pe-lemne-gazeificare-camera-tehnica-instalatie.webp', prompt: 'A wood gasification boiler in a basement technical room with stacked firewood nearby, pipes and radiator connections visible. Rustic but organized space. Professional documentary photography.' },
  { filename: 'comparatie-cost-incalzire-gaz-peleti-lemne-romania.webp', prompt: 'A split image showing three heating fuel types side by side: natural gas flame, wood pellets in a hand, and stacked firewood. Clean studio photography with warm lighting, comparing the three fuel sources. Editorial style.' },
];

async function gen(prompt, filename) {
  console.log('Generating: ' + filename);
  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST', headers: { 'Authorization': 'Bearer ' + API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: 'gpt-image-1', prompt, n: 1, size: '1536x1024', quality: 'high' }),
  });
  if (!res.ok) { console.error('  FAIL: ' + await res.text()); return; }
  const data = await res.json();
  const sharp = (await import('sharp')).default;
  await sharp(Buffer.from(data.data[0].b64_json, 'base64')).resize(1200, 600, { fit: 'cover' }).webp({ quality: 85 }).toFile(OUT_DIR + '/' + filename);
  console.log('  OK');
}

for (const img of images) { await gen(img.prompt, img.filename); }
console.log('Done!');
