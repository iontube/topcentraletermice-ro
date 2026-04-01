import { existsSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const OUT_DIR = fileURLToPath(new URL('../public/assets/images/products', import.meta.url));
if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const products = [
  { slug: 'ariston-clas-one-wifi-24', url: 'https://www.emag.ro/centrala-termica-murala-in-condensare-ariston-clas-one-wifi-24-24-kw-gaz-natural-afisaj-lcd-schimbator-caldura-otel-inoxidabil-control-vocal-fara-kit-inclus-3302123/pd/DVC45CMBM/' },
  { slug: 'ariston-alteas-one-net-24', url: 'https://www.emag.ro/centrala-termica-murala-in-condensare-ariston-alteas-one-net-24-24kw-gaz-natural-gpl-wi-fi-senzor-camera-sensys-hd-inclus-panou-frontal-din-sticla-ecran-tactil-schimbator-caldura-otel-inoxidabil-contr/pd/D9C45CMBM/' },
  { slug: 'immergas-victrix-omnia-25', url: 'https://www.emag.ro/centrala-termica-pe-gaz-in-condensare-immergas-victrix-omnia-25-kit-evacuare-si-pachet-robineti-inclusi-041509-154-ludmctgacm/pd/DKXY25BBM/' },
  { slug: 'viessmann-vitodens-050-w-25', url: 'https://www.emag.ro/centrala-termica-in-condensare-viessmann-vitodens-050-w-25-b0ka-25-kw-cu-wifi-incalzire-si-acm-81723/pd/D7CJ2XMBM/' },
  { slug: 'vaillant-ecotec-pro-286', url: 'https://www.emag.ro/centrala-termica-in-condensatie-inc-acm-vaillant-ecotec-pro-vuw-int-ii-286-5-3-cu-kit-evacuare-25-5-kw-50-30-c-35vle038/pd/DB57F7MBM/' },
  { slug: 'motan-condens-050', url: 'https://www.emag.ro/set-centrala-termica-24-kw-motan-condens-050-termostat-fara-fir-th510-rts-filtru-antimagnetia-10000-gauss-050setv1/pd/DY7LF53BM/' },
  { slug: 'ferroli-bluehelix-alpha-24c', url: 'https://www.emag.ro/centrala-murala-in-condensare-ferroli-bluehelix-alpha-24-c-25-kw-multi-combustion-control-metan-gpl-ready-display-digital-fara-kit-evacuare-0tpf2awa/pd/DDVN2TMBM/' },
  { slug: 'fornello-royal-30kw', url: 'https://www.emag.ro/termosemineu-centrala-pe-peleti-fornello-royal-30-kw-complet-echipat-cu-pompa-de-circulatie-vas-expansiune-supapa-de-siguranta-buncar-de-peleti-25-kg-automatizare-culoare-crem-pana-la-200-mp-642710020/pd/D500PJMBM/' },
  { slug: 'fornello-slimpel-easy-40kw', url: 'https://www.emag.ro/centrala-pe-peleti-fornello-slimpel-easy-40-kw-curatare-mecanica-arzator-si-schimbator-de-caldura-arzator-din-inox-pompa-de-circulatie-tiraj-fortat-buncar-88-kg-ecodesign-a-6427100000626/pd/DV9MPYMBM/' },
  { slug: 'fornello-pellet-king-35kw', url: 'https://www.emag.ro/centrala-termica-monobloc-pe-peleti-fornello-pellet-king-35-kw-pompa-circulatie-vas-expansiune-supapa-de-siguranta-tiraj-fortat-buncar-peleti-80-l-aprindere-automata-telecomanda-recomandat-pentru-250-/pd/DVXC2CBBM/' },
  { slug: 'fornello-royal-18kw', url: 'https://www.emag.ro/termosemineu-pe-peleti-fornello-royal-18-kw-aprindere-automata-telecomanda-buncar-tiraj-fortat-pompa-circulatie-vas-expansiune-ivory-6427100000039/pd/DGJRVJBBM/' },
  { slug: 'fornello-pellet-king-30kw', url: 'https://www.emag.ro/centrala-peleti-fornello-pellet-king-30-kw-complet-echipata-pentru-incalzire-pompa-circulatie-vas-expansiune-automatizare-telecomanda-buncar-peleti-70-kg-tiraj-fortat-culoare-neagra-aprindere-automata/pd/DR00PJMBM/' },
  { slug: 'fiama-fuoco-8kw', url: 'https://www.emag.ro/semineu-pe-peleti-cu-aer-cald-fiama-fuoco-8-kw-aprindere-electrica-tiraj-fortat-wifi-focar-din-fonta-recomandat-pentru-75-mp-bordeaux-fiamafuoco8kwbordeaux/pd/DSXC783BM/' },
  { slug: 'fornello-rossi-camino-compact-25kw', url: 'https://www.emag.ro/centrala-termica-compacta-pe-peleti-fornello-rossi-camino-compact-25-kw-pompa-de-circulatie-vas-expansiune-tiraj-fortat-curatare-manuala-a-arzatorului-si-a-drumurilor-de-fum-ecodesign-a-6427100000596/pd/DRLLXYMBM/' },
  { slug: 'fornello-joker-24kw', url: 'https://www.emag.ro/centrala-pe-combustibil-solid-lemn-carbune-fornello-joker-24-kw-cu-ventilator-si-automatizare-joker24/pd/D2TWYYYBM/' },
  { slug: 'termax-nordik-46kw', url: 'https://www.emag.ro/centrala-cazan-pe-lemn-carbune-termax-nordik-46-kw-cu-ventilator-si-automatizare-diametru-cos-160-mm-volum-manta-apa-100-litri-3-bar-1480-x-800-x-625-mm-9799739198232/pd/DSVSQ1MBM/' },
  { slug: 'blautech-pmsbm28b', url: 'https://www.emag.ro/cazan-pe-lemne-din-tabla-de-otel-28-kw-pmsbm28b-blautech-10720361/pd/DNCNLVYBM/' },
  { slug: 'termax-30kw-pachet', url: 'https://www.emag.ro/pachet-centrala-pe-lemn-termax-30-kw-cu-ardere-standard-volum-manta-apa-90-litri-8-calorifere-pompe-recirculare-aspirator-cenusa-vas-expansiune-50-litri-9799739197433/pd/DM5NK43BM/' },
  { slug: 'eco-plus-30kw', url: 'https://www.emag.ro/cazan-pe-combustibil-solid-eco-plus-30-kw-345-0251/pd/DH4NQVYBM/' },
  { slug: 'arca-aspiro-43r', url: 'https://www.emag.ro/centrala-pe-lemne-cu-gazeificare-arca-aspiro-43r-41-kw-o-cos-fum-180-mm-9789738767966/pd/DS4PC9BBM/' },
];

const delay = (ms) => new Promise(r => setTimeout(r, ms));

async function getImageUrl(pageUrl) {
  const res = await fetch(pageUrl, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36', 'Accept': 'text/html', 'Accept-Language': 'ro-RO,ro;q=0.9' },
  });
  const html = await res.text();
  const ogMatch = html.match(/property="og:image"\s+content="([^"]+)"/);
  if (ogMatch) return ogMatch[1];
  return null;
}

async function downloadImage(url, slug) {
  const outPath = OUT_DIR + '/' + slug + '.webp';
  if (existsSync(outPath)) { console.log('  SKIP'); return; }
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const buffer = Buffer.from(await res.arrayBuffer());
    const sharp = (await import('sharp')).default;
    await sharp(buffer).resize(500, 500, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } }).webp({ quality: 85 }).toFile(outPath);
    console.log('  OK');
  } catch (e) { console.log('  FAIL: ' + e.message); }
}

console.log('Downloading ' + products.length + ' images...\n');
for (const p of products) {
  console.log(p.slug + ':');
  const imgUrl = await getImageUrl(p.url);
  if (imgUrl) await downloadImage(imgUrl, p.slug);
  else console.log('  NO IMAGE');
  await delay(2000 + Math.random() * 3000);
}
console.log('\nDone!');
