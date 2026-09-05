// SEO.jsx
//
// Reusable per-route SEO component. Every page passes its own title,
// description and canonical path here instead of relying on the single
// static <title>/<meta> block in index.html.
import { Helmet } from "react-helmet-async";
import { SITE_NAME, DEFAULT_OG_IMAGE, absoluteUrl } from "../../config/seo";

export default function SEO({
  title,
  description,
  canonical,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  robots = "index, follow",
  schema,
}) {
  const canonicalUrl = absoluteUrl(canonical);
  const ogImage = image.startsWith("http") ? image : absoluteUrl(image);
  const schemas = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
