// scripts/generate-sitemap.mjs
//
// Regenerates public/sitemap.xml from the real treatment data in
// src/config/services.js. Run with: node scripts/generate-sitemap.mjs
//
// This reads services.js as TEXT (not as an ES module import) on purpose —
// that file imports .webp/.png assets directly, which plain Node can't
// resolve. Parsing avoids adding a bundler dependency just to run a
// maintenance script, while still deriving every URL from the single real
// data source instead of a hand-maintained duplicate list.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_URL = "https://www.kskinique.com";

const servicesSource = readFileSync(
  path.join(__dirname, "../src/config/services.js"),
  "utf-8"
);

// Isolate each category's array body so a slug is attributed to the right
// category, then pull every `slug: "..."` inside it.
const categoryBlocks = {};
const categoryNames = ["skin", "hair", "laser"];
for (let i = 0; i < categoryNames.length; i++) {
  const name = categoryNames[i];
  const nextName = categoryNames[i + 1];
  const startMarker = `\n  ${name}: [`;
  const endMarker = nextName ? `\n  ${nextName}: [` : "\n];";
  const start = servicesSource.indexOf(startMarker);
  const end = servicesSource.indexOf(endMarker, start + 1);
  categoryBlocks[name] = servicesSource.slice(start, end === -1 ? undefined : end);
}

const staticUrls = ["/", "/about", "/services", "/services/skin", "/services/hair", "/services/laser", "/contact"];

const serviceUrls = [];
for (const [category, block] of Object.entries(categoryBlocks)) {
  const slugMatches = [...block.matchAll(/slug:\s*"([^"]+)"/g)];
  for (const m of slugMatches) {
    serviceUrls.push(`/services/${category}/${m[1]}`);
  }
}

const allUrls = [...staticUrls, ...serviceUrls];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map((url) => `  <url>\n    <loc>${SITE_URL}${url}</loc>\n  </url>`).join("\n")}
</urlset>
`;

writeFileSync(path.join(__dirname, "../public/sitemap.xml"), xml);
console.log(`sitemap.xml written with ${allUrls.length} URLs (${serviceUrls.length} treatment pages).`);
