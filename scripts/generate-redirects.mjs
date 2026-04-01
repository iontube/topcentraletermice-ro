import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const products = JSON.parse(
  readFileSync(fileURLToPath(new URL('../src/data/products.json', import.meta.url)), 'utf-8')
);

const all = [...(products.gaz || []), ...(products.peleti || []), ...(products.lemne || [])];
let redirects = '';

for (const p of all) {
  if (p.affiliate && p.slug) {
    redirects += `/out/${p.slug}/ ${p.affiliate} 302\n`;
    redirects += `/out/${p.slug} ${p.affiliate} 302\n`;
  }
}

const outDir = fileURLToPath(new URL('../public', import.meta.url));
writeFileSync(`${outDir}/_redirects`, redirects);
console.log(`Generated ${all.length} redirects`);
