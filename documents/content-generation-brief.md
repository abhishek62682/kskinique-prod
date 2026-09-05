# Skinique Website — Content Generation Brief

Use this as the opening prompt in a new conversation to resume this work.

## Context
The Skinique website (React/Vite project, root of this repo) was built entirely with placeholder content, no real content from the client yet. A content-request document was created to collect real content from the client, and it's saved at:
- `documents/Content Required for the Skinique Website.md` (11 items, in order)

Approved final content goes into a separate master file:
- `documents/Skinique Website - Final Content.md` (same section order as the request document)

I (the developer) go to the client, they tell me everything, and I type in the raw facts here as I get them. Your job: turn my rough notes into polished, structured website copy that matches the site's existing tone and format, ready to drop into the code. Don't just invent generic content, work from what I actually give you, and ask for missing specifics rather than guessing when it matters (e.g. real treatment list, real numbers).

All content across all 11 items comes fresh from the client, treat nothing as pre-confirmed, don't assume or carry over anything from the current placeholder code as if it were real.

## Site reference (source of truth for structure/tone)
- `src/config/services.js` — the schema every service must follow: `quickFacts` (duration, sessions, downtime, results), `about`, `suitability` (bullets), `benefits` (3 items), `procedure` (4 steps), `faqs` (4 Q&As)
- `src/config/testimonials.js` — testimonial format
- `src/components/about/OurStorySection.jsx`, `DoctorSection.jsx` (home + about versions), `Footer.jsx`, `ContactSection.jsx`, `UspSection.jsx`, `Stats.jsx` / `StatsSection.jsx`, `FaqSection.jsx` (general FAQs) — all currently hold placeholder copy to be replaced

## Workflow
0. First, read `documents/Skinique Website - Final Content.md` to see which sections already have content, so you resume from the right place instead of starting over.
1. Go item by item through the document, in order.
2. I give basic/raw facts (client's words, rough notes).
3. You write the full polished version in the site's tone.
4. I review and confirm, or ask for edits.
5. Once confirmed, save that section's final copy into `documents/Skinique Website - Final Content.md`, under its matching heading.
6. Move to the next item.

## Decisions made along the way
- Business hours, clinic address, Google Maps listing → sourced directly from Google Maps, not asked in the document.
- Real before/after patient photos → asked directly to client, not in the document (needs consent/pairing, handled separately).
- QR code image → skipped entirely, not needed.
- FDA Approved / Board Certified badge claims → verify directly with client (compliance-sensitive), not a bulk content item.
- Marketing copy (hero headlines, taglines, button microcopy) → not sourced from client, that's copywriting handled separately.
- Melasma and Pigmentation, if the client lists them separately, ask whether they want one combined service page or two separate ones.
