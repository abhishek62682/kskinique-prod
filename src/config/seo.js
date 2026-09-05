// seo.js
//
// Central SEO configuration: production domain, site-wide defaults, and
// per-category metadata. Individual service (treatment) metadata is NOT
// duplicated here — it's generated on the fly from the real data in
// services.js (see src/pages/ServiceDetailsPage.jsx), so this file only
// holds things that apply to the site/category level.

// TODO: CONFIRM before deploy. Inferred from the clinic's own verified
// support email (support@kskinique.com, see ContactSection.jsx) since no
// production domain was found in vercel.json / package.json / env files.
// Every canonical URL, sitemap entry, and Open Graph URL on the site
// depends on this being correct.
export const SITE_URL = "https://www.kskinique.com";

export const SITE_NAME = "Skinique Dermatology & Aesthetics";

// Default social-share image (absolute URL, required for OG/Twitter cards).
// Reuses the existing hero background already on the homepage.
export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;

// Real clinic facts, reused from ContactSection.jsx / Footer.jsx — nothing
// invented here. Used for MedicalClinic JSON-LD on the homepage.
export const CLINIC_INFO = {
  name: SITE_NAME,
  legalName: "Skinique by Dr. Kajal Komalan",
  telephone: "+917021210819",
  email: "support@kskinique.com",
  streetAddress:
    "Tower, A Wing, 216, 220, B Wing, 217, 218, opposite Nimantran Hotel, Sector 15, CBD Belapur",
  addressLocality: "Navi Mumbai",
  addressRegion: "Maharashtra",
  postalCode: "400614",
  addressCountry: "IN",
  openingHours: "Mo-Su 11:00-19:00",
  sameAs: ["https://www.instagram.com/skinique_bydr.kajal/reels/?hl=en"],
  mapsUrl: "https://www.google.com/maps?cid=17611080526173218198",
};

/**
 * Prefixes a relative path with SITE_URL to build an absolute canonical/OG URL.
 * Already-absolute URLs are returned unchanged.
 */
export function absoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  // no trailing slash except for the homepage itself
  const normalized = clean.length > 1 ? clean.replace(/\/+$/, "") : clean;
  return `${SITE_URL}${normalized}`;
}

// Per-category SEO copy — one config object instead of conditionals
// scattered through ServiceCategoryPage.jsx.
export const CATEGORY_SEO = {
  skin: {
    title: "Skin Treatments in Navi Mumbai | Skinique Dermatology",
    description:
      "Explore dermatologist-led skin treatments for acne, pigmentation, ageing, texture and other skin concerns at Skinique Dermatology.",
    h1: "Skin Treatments",
  },
  hair: {
    title: "Hair Treatments in Navi Mumbai | Skinique Dermatology",
    description:
      "Explore personalised hair and scalp treatments for hair fall, thinning and scalp concerns at Skinique Dermatology.",
    h1: "Hair Treatments",
  },
  laser: {
    title: "Laser Treatments in Navi Mumbai | Skinique Dermatology",
    description:
      "Explore professional laser treatments for hair reduction, pigmentation and aesthetic concerns at Skinique Dermatology.",
    h1: "Laser Treatments",
  },
};

/**
 * Builds an SEO title for an individual treatment page, keeping it within
 * a sensible length (falls back to a shorter format for long service names).
 */
export function buildServiceTitle(serviceTitle) {
  const long = `${serviceTitle} in Navi Mumbai | Skinique`;
  if (long.length <= 60) return long;
  return `${serviceTitle} | Skinique`;
}

/**
 * Builds a ~140-160 char meta description for a treatment page from its
 * real `about` copy (services.js) rather than a duplicated/invented string.
 */
export function buildServiceDescription(service) {
  const base = service.about || service.desc || "";
  const prefix = `${service.title}: `;
  const budget = 158 - prefix.length;
  if (base.length <= budget) return `${prefix}${base}`;
  // trim to the last whole word within budget, avoid mid-word cuts
  const trimmed = base.slice(0, budget);
  const lastSpace = trimmed.lastIndexOf(" ");
  return `${prefix}${trimmed.slice(0, lastSpace > 0 ? lastSpace : budget)}…`;
}

/**
 * Builds matching visible-breadcrumb + BreadcrumbList JSON-LD data from the
 * same breadcrumb array already passed to PageHero, so the two never drift
 * apart. `items` is [{ label, to }]; the last item has no `to` (it's the
 * current page in PageHero's rendering), so `currentPath` supplies its real
 * URL for the schema, where every item needs a resolvable `item` URL.
 */
export function buildBreadcrumbSchema(items, currentPath) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: absoluteUrl(item.to || currentPath),
    })),
  };
}
