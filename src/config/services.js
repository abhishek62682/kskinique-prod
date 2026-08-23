// services.js
//
// Single source of truth for every treatment on the site, grouped by category,
// each service carrying everything needed for both the listing card and its
// dedicated detail page (desc/img for cards; about/quickFacts/suitability/
// benefits/procedure/faqs for the detail page). Add a new treatment by adding
// one object to the relevant category's `services` array.

import acneAcneScarsImg from "../assets/skin/acne-acne-scars.webp";
import pigmentationMelasmaImg from "../assets/skin/pigmentation-melasma.webp";
import chemicalPeelsImg from "../assets/skin/chemical-peels.webp";
import hydrafacialImg from "../assets/skin/hydrafacial.webp";
import skinBrighteningImg from "../assets/skin/skin-brightening.webp";
import antiAgeingTreatmentsImg from "../assets/skin/anti-ageing-treatments.webp";
import stretchMarksImg from "../assets/skin/stretch-marks.webp";
import openPoresImg from "../assets/skin/open-pores.webp";
import microneedlingImg from "../assets/skin/microneedling.webp";
import skinRejuvenationImg from "../assets/skin/skin-rejuvenation.webp";

import prpTherapyImg from "../assets/hair/prp-therapy.webp";
import gfcTherapyImg from "../assets/hair/gfc-therapy.webp";
import hairFallTreatmentImg from "../assets/hair/hair-fall-treatment.webp";
import hairThinningImg from "../assets/hair/hair-thinning.webp";
import dandruffTreatmentImg from "../assets/hair/dandruff-treatment.webp";
import scalpDisordersImg from "../assets/hair/scalp-disorders.webp";

import laserHairReductionImg from "../assets/laser/laser-hair-reduction.webp";
import tattooRemovalImg from "../assets/laser/tattoo-removal.webp";
import qSwitchLaserImg from "../assets/laser/q-switch-laser.webp";
import laserToningImg from "../assets/laser/laser-toning.webp";
import carbonLaserFacialImg from "../assets/laser/carbon-laser-facial.webp";

const IMG = "https://storage.googleapis.com/uxpilot-auth.appspot.com";

export const SERVICES = [
  {
    category: "skin",
    label: "Skin",
    description:
      "Dermatologist-led treatments for acne, pigmentation, texture, and every skin concern in between, personalized to your skin type.",
    services: [
      {
        slug: "acne-acne-scars",
        title: "Acne & Acne Scars",
        desc: "Targeted treatment for active breakouts and the scars they leave behind.",
        img: acneAcneScarsImg,
        quickFacts: [
          { label: "Duration", value: "30–45 mins" },
          { label: "Sessions", value: "6–8 sessions" },
          { label: "Downtime", value: "None to minimal" },
          { label: "Results", value: "Visible in 4–6 weeks" },
        ],
        about:
          "Our acne protocol combines medical-grade extractions, peels, and laser resurfacing to calm active breakouts and smooth post-acne scarring. Dr. Kajal designs a plan around your acne type, hormonal, cystic, or comedonal, rather than a one-size-fits-all routine.",
        suitability: [
          "You have persistent or recurring breakouts that haven't responded to over-the-counter products.",
          "You have visible acne scarring, pitting, or dark marks left behind by past breakouts.",
          "You want a dermatologist-guided plan instead of trial-and-error skincare.",
        ],
        benefits: [
          { icon: "ri-shield-check-line", title: "Dermatologist-Led", description: "Every plan is designed and monitored by a qualified dermatologist." },
          { icon: "ri-drop-line", title: "Clearer Skin", description: "Reduces active breakouts, inflammation, and future flare-ups." },
          { icon: "ri-sparkling-2-line", title: "Smoother Texture", description: "Fades scarring and evens out post-acne skin texture." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We assess your acne type, triggers, and scarring pattern." },
          { number: "02", title: "Preparation", description: "Skin is cleansed and prepped for extractions or peel/laser application." },
          { number: "03", title: "Treatment", description: "A combination of extraction, peels, or laser resurfacing is applied as needed." },
          { number: "04", title: "Aftercare", description: "You'll get a home-care routine to prevent new breakouts and protect healing skin." },
        ],
        faqs: [
          { q: "Will this treatment help with acne scars too?", a: "Yes, active acne and scarring are often treated together using peels, microneedling, or laser resurfacing depending on scar type." },
          { q: "How soon will my breakouts calm down?", a: "Most patients see visibly calmer skin within 4–6 weeks, though full scar improvement takes longer." },
          { q: "Can I wear makeup after treatment?", a: "We recommend avoiding makeup for 24 hours after extractions or laser sessions to let your skin recover, after which you can resume your normal routine." },
          { q: "Is this suitable for sensitive or acne-prone skin?", a: "Yes, every protocol is tailored to your specific skin sensitivity, and a patch test is done where needed before more intensive treatments." },
        ],
      },
      {
        slug: "pigmentation-melasma",
        title: "Pigmentation & Melasma",
        desc: "Advanced treatments to fade dark spots, sun damage, and stubborn melasma.",
        img: pigmentationMelasmaImg,
        quickFacts: [
          { label: "Duration", value: "30–40 mins" },
          { label: "Sessions", value: "6–8 sessions" },
          { label: "Downtime", value: "None to minimal" },
          { label: "Results", value: "Visible in 6–8 weeks" },
        ],
        about:
          "Pigmentation and melasma are treated with a combination of peels, laser toning, and targeted topicals to gently break down excess pigment without irritating the skin barrier. Treatment is paced carefully, since melasma especially responds best to a slow, consistent approach.",
        suitability: [
          "You have dark spots, sun damage, or uneven patches of skin tone.",
          "You have melasma, symmetrical brown patches, often on the cheeks or upper lip.",
          "You've tried brightening creams without lasting improvement.",
        ],
        benefits: [
          { icon: "ri-sun-line", title: "Evens Skin Tone", description: "Fades dark spots and patches for a more uniform complexion." },
          { icon: "ri-shield-check-line", title: "Melasma-Safe Protocols", description: "Gentle, dermatologist-paced approach that avoids triggering rebound pigmentation." },
          { icon: "ri-sparkling-2-line", title: "Long-Term Brightening", description: "Combines in-clinic treatment with home care for lasting results." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We identify the type and depth of your pigmentation." },
          { number: "02", title: "Preparation", description: "Skin is prepped and, for melasma, pre-conditioned to reduce flare-up risk." },
          { number: "03", title: "Treatment", description: "Peels or laser toning are applied in gentle, controlled sessions." },
          { number: "04", title: "Aftercare", description: "Strict sun protection and a maintenance routine are prescribed to lock in results." },
        ],
        faqs: [
          { q: "Is melasma treatment different from regular pigmentation treatment?", a: "Yes, melasma is hormonally driven and needs a gentler, more gradual protocol to avoid rebound darkening." },
          { q: "Will the pigmentation come back?", a: "With consistent sun protection and maintenance, results are long-lasting, though melasma can be sensitive to sun and hormonal changes." },
          { q: "Can I get this treatment if I'm pregnant or breastfeeding?", a: "Some treatments aren't recommended during pregnancy or breastfeeding, we'll review your history at consultation and suggest safe alternatives if needed." },
          { q: "How soon can I go out in the sun after treatment?", a: "Strict sun protection is essential for at least a few weeks post-treatment to protect your results and avoid rebound pigmentation." },
        ],
      },
      {
        slug: "chemical-peels",
        title: "Chemical Peels",
        desc: "Customized exfoliation to improve texture, tone, and clarity.",
        img: chemicalPeelsImg,
        quickFacts: [
          { label: "Duration", value: "30 mins" },
          { label: "Sessions", value: "4–6 sessions" },
          { label: "Downtime", value: "1–3 days" },
          { label: "Results", value: "Visible after 1st session" },
        ],
        about:
          "Chemical peels use a customized acid formulation to gently exfoliate the outer skin layer, revealing brighter, smoother skin underneath. Strength and formulation are adjusted to your skin type and concern, from mild glow-boosting peels to deeper resurfacing peels.",
        suitability: [
          "You want to improve dullness, rough texture, or uneven tone.",
          "You have mild acne, pigmentation, or early signs of aging.",
          "You want a quick-recovery treatment with visible results.",
        ],
        benefits: [
          { icon: "ri-sparkling-2-line", title: "Instant Glow", description: "Reveals brighter, smoother skin from the very first session." },
          { icon: "ri-drop-line", title: "Improves Texture", description: "Softens rough patches, congestion, and uneven tone." },
          { icon: "ri-time-line", title: "Minimal Downtime", description: "Most peels allow you to return to your routine within days." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We choose a peel strength and formulation suited to your skin." },
          { number: "02", title: "Preparation", description: "Skin is cleansed and a protective barrier is applied where needed." },
          { number: "03", title: "Treatment", description: "The peel solution is applied for a controlled, timed duration." },
          { number: "04", title: "Aftercare", description: "You'll be guided through peeling, hydration, and sun protection at home." },
        ],
        faqs: [
          { q: "Will my skin visibly peel afterward?", a: "Mild peels cause little to no visible peeling; deeper peels may cause light flaking for a few days." },
          { q: "How many sessions will I need?", a: "Most patients see the best results with a course of 4–6 sessions spaced a few weeks apart." },
          { q: "Can chemical peels be combined with other treatments?", a: "Yes, peels are often paired with treatments like microneedling or laser toning for enhanced results, your specialist will advise on the right combination." },
          { q: "Is there an age limit for chemical peels?", a: "No strict age limit, peel strength and frequency are adjusted based on your skin's needs, not your age." },
        ],
      },
      {
        slug: "hydrafacial",
        title: "HydraFacial",
        desc: "A soothing, medical-grade facial that cleanses, extracts, and hydrates in one session.",
        img: hydrafacialImg,
        quickFacts: [
          { label: "Duration", value: "45–60 mins" },
          { label: "Sessions", value: "Monthly maintenance" },
          { label: "Downtime", value: "None" },
          { label: "Results", value: "Immediate glow" },
        ],
        about:
          "HydraFacial combines cleansing, gentle exfoliation, painless extraction, and deep hydration in a single, soothing session. It's a low-downtime treatment that leaves skin visibly plumper and brighter immediately after, making it a popular pre-event treatment.",
        suitability: [
          "You want an instant glow with zero downtime.",
          "You have congested pores, dullness, or dehydrated skin.",
          "You want a relaxing, low-commitment treatment you can repeat monthly.",
        ],
        benefits: [
          { icon: "ri-drop-line", title: "Deep Hydration", description: "Infuses skin with hydrating serums for a plump, dewy finish." },
          { icon: "ri-sparkling-2-line", title: "Instant Results", description: "Visible glow and smoother texture right after your session." },
          { icon: "ri-heart-pulse-line", title: "Gentle & Relaxing", description: "A comfortable, non-irritating treatment suitable for most skin types." },
        ],
        procedure: [
          { number: "01", title: "Cleanse", description: "Skin is cleansed and gently exfoliated to lift away dead skin cells." },
          { number: "02", title: "Extract", description: "A painless vortex extraction clears out congestion from pores." },
          { number: "03", title: "Hydrate", description: "Antioxidant and hydrating serums are infused into the skin." },
          { number: "04", title: "Protect", description: "A finishing layer of SPF and hydration locks in your glow." },
        ],
        faqs: [
          { q: "Is HydraFacial suitable before an event?", a: "Yes, it's one of our most popular pre-event treatments because results are visible immediately with no downtime." },
          { q: "How often should I get one?", a: "Monthly sessions work well for maintaining hydration, clarity, and glow." },
          { q: "Is HydraFacial suitable for sensitive skin?", a: "Yes, it's one of the gentler treatments available and can be customized further for sensitive or reactive skin types." },
          { q: "Can men get a HydraFacial too?", a: "Absolutely, HydraFacial works well for all skin types and genders looking for deep cleansing and hydration." },
        ],
      },
      {
        slug: "skin-brightening",
        title: "Skin Brightening",
        desc: "Restore radiance and fade dullness with a tailored brightening protocol.",
        img: skinBrighteningImg,
        quickFacts: [
          { label: "Duration", value: "30–45 mins" },
          { label: "Sessions", value: "6–8 sessions" },
          { label: "Downtime", value: "None to minimal" },
          { label: "Results", value: "Visible in 4–6 weeks" },
        ],
        about:
          "Our skin brightening protocol combines peels, laser toning, and antioxidant infusions to target dullness, tan, and uneven tone. The approach is customized to your baseline skin tone for a natural, healthy radiance rather than an artificial lightening effect.",
        suitability: [
          "You have dull, tired-looking, or tan-affected skin.",
          "You want an even, radiant complexion without a harsh or artificial look.",
          "Your skin tone looks uneven across your face or body.",
        ],
        benefits: [
          { icon: "ri-sun-line", title: "Restores Radiance", description: "Targets dullness and tan for visibly brighter skin." },
          { icon: "ri-contrast-2-line", title: "Evens Tone", description: "Reduces patchiness for a more uniform complexion." },
          { icon: "ri-sparkling-2-line", title: "Natural-Looking Glow", description: "Calibrated to your skin tone for results that look like healthy skin, not a filter." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We assess your baseline tone and the cause of dullness or unevenness." },
          { number: "02", title: "Preparation", description: "Skin is cleansed and prepped for peel or laser toning." },
          { number: "03", title: "Treatment", description: "A brightening peel or laser session is performed." },
          { number: "04", title: "Aftercare", description: "Sun protection and a brightening home-care routine maintain your results." },
        ],
        faqs: [
          { q: "Will this make my skin unnaturally lighter?", a: "No, the goal is to restore your natural radiance and even tone, not lighten your skin beyond its baseline." },
          { q: "How long do results last?", a: "With consistent sun protection, brightening results typically last several months between maintenance sessions." },
          { q: "Is skin brightening safe for all skin types?", a: "Yes, the protocol is customized to your skin type and tone to ensure safe, even results." },
          { q: "Can I combine this with sunscreen and makeup?", a: "Yes, and we recommend daily sunscreen to protect and prolong your brightening results." },
        ],
      },
      {
        slug: "anti-ageing-treatments",
        title: "Anti-ageing Treatments",
        desc: "Comprehensive age-management treatments to restore firmness, elasticity, and glow.",
        img: antiAgeingTreatmentsImg,
        quickFacts: [
          { label: "Duration", value: "30–45 mins" },
          { label: "Sessions", value: "4–6 sessions" },
          { label: "Downtime", value: "None to minimal" },
          { label: "Results", value: "Visible in 6–8 weeks" },
        ],
        about:
          "Our anti-ageing protocols combine collagen-stimulating treatments like microneedling and laser toning with targeted skincare to soften fine lines and restore youthful firmness. Every plan is built around your skin's specific signs of ageing rather than a generic routine.",
        suitability: [
          "You're noticing early fine lines, loss of firmness, or dullness.",
          "You want to slow visible signs of ageing before they become more pronounced.",
          "You prefer a preventive, non-surgical approach to youthful skin.",
        ],
        benefits: [
          { icon: "ri-heart-pulse-line", title: "Boosts Collagen", description: "Stimulates your skin's natural collagen for lasting firmness." },
          { icon: "ri-sparkling-2-line", title: "Softer Fine Lines", description: "Visibly smooths early lines and improves skin texture." },
          { icon: "ri-shield-check-line", title: "Preventive Care", description: "Slows visible signs of ageing before they progress." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We assess your skin's firmness, texture, and specific signs of ageing." },
          { number: "02", title: "Preparation", description: "Skin is cleansed and prepped for your chosen treatment." },
          { number: "03", title: "Treatment", description: "Microneedling, peels, or laser toning is performed to stimulate collagen." },
          { number: "04", title: "Aftercare", description: "A supportive skincare routine helps extend and enhance your results." },
        ],
        faqs: [
          { q: "At what age should I start anti-ageing treatments?", a: "Preventive treatments can start in your late 20s or 30s, but it's never too late to begin, your plan is built around your skin, not your age." },
          { q: "Is this a surgical treatment?", a: "No, our anti-ageing protocols are entirely non-surgical, using peels, microneedling, and laser technology." },
          { q: "Will I need to repeat sessions regularly?", a: "Most patients benefit from periodic maintenance sessions to sustain collagen stimulation and results over time." },
          { q: "Can this be combined with injectables like Botox?", a: "Yes, many patients combine non-surgical anti-ageing treatments with injectables for a more complete result, we'll advise what suits you best." },
        ],
      },
      {
        slug: "microneedling",
        title: "Microneedling",
        desc: "Collagen-induction therapy to smooth scars, fine lines, and uneven texture.",
        img: microneedlingImg,
        quickFacts: [
          { label: "Duration", value: "45 mins" },
          { label: "Sessions", value: "4–6 sessions" },
          { label: "Downtime", value: "1–2 days" },
          { label: "Results", value: "Progressive over weeks" },
        ],
        about:
          "Microneedling uses fine, sterile needles to create controlled micro-injuries that trigger your skin's natural collagen production. It's effective for acne scarring, fine lines, and overall texture, with results that continue to improve over the following weeks.",
        suitability: [
          "You have acne scars, enlarged pores, or uneven texture.",
          "You want to stimulate natural collagen without lasers or surgery.",
          "You're comfortable with 1–2 days of mild downtime.",
        ],
        benefits: [
          { icon: "ri-heart-pulse-line", title: "Stimulates Collagen", description: "Triggers your skin's own repair process for lasting improvement." },
          { icon: "ri-sparkling-2-line", title: "Smooths Scarring", description: "Reduces the appearance of acne scars and enlarged pores." },
          { icon: "ri-time-line", title: "Progressive Results", description: "Skin continues to improve for weeks after each session." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We assess your scarring, texture, and skin sensitivity." },
          { number: "02", title: "Preparation", description: "A topical numbing cream is applied for comfort." },
          { number: "03", title: "Treatment", description: "A sterile microneedling device is passed over the treatment area." },
          { number: "04", title: "Aftercare", description: "Soothing, barrier-repair skincare supports healing over the next few days." },
        ],
        faqs: [
          { q: "Does microneedling hurt?", a: "A numbing cream is applied beforehand, so most patients feel only mild pressure or warmth." },
          { q: "When will I see results?", a: "Initial glow appears within days, with scar and texture improvement building over 4–6 weeks per session." },
          { q: "How many sessions are typically recommended?", a: "Most patients see the best results with a course of 4–6 sessions, spaced about a month apart." },
          { q: "Can microneedling be done on other body areas besides the face?", a: "Yes, it's also effective on areas like the neck, hands, and body for scarring or texture concerns." },
        ],
      },
      {
        slug: "stretch-marks",
        title: "Stretch Marks",
        desc: "Specialized protocols to fade stretch marks and improve skin texture.",
        img: stretchMarksImg,
        quickFacts: [
          { label: "Duration", value: "30–45 mins" },
          { label: "Sessions", value: "6–8 sessions" },
          { label: "Downtime", value: "None to minimal" },
          { label: "Results", value: "Visible in 8–12 weeks" },
        ],
        about:
          "Stretch mark treatment combines microneedling and laser technology to stimulate collagen remodeling in the affected area, gradually softening the texture and color of stretch marks. Results are most noticeable on newer, reddish-purple stretch marks, but older marks also improve.",
        suitability: [
          "You have stretch marks from growth, pregnancy, or weight changes.",
          "You want to improve their texture and color rather than remove them entirely.",
          "You're looking for a non-surgical option with minimal downtime.",
        ],
        benefits: [
          { icon: "ri-heart-pulse-line", title: "Stimulates Remodeling", description: "Encourages collagen renewal in the treated area." },
          { icon: "ri-contrast-2-line", title: "Softens Appearance", description: "Reduces the texture and color contrast of stretch marks." },
          { icon: "ri-time-line", title: "Minimal Downtime", description: "Fits easily into your routine between sessions." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We assess the age, color, and texture of your stretch marks." },
          { number: "02", title: "Preparation", description: "The treatment area is cleansed and prepped." },
          { number: "03", title: "Treatment", description: "Microneedling or laser is applied to stimulate collagen remodeling." },
          { number: "04", title: "Aftercare", description: "A supportive skincare routine helps maintain and enhance results." },
        ],
        faqs: [
          { q: "Can stretch marks be fully removed?", a: "Complete removal isn't realistic with any treatment, but texture and color can improve significantly over a course of sessions." },
          { q: "Do newer stretch marks respond better?", a: "Yes, newer reddish-purple marks typically respond faster than older, white, mature stretch marks." },
          { q: "Which body areas can be treated?", a: "Common areas include the abdomen, thighs, hips, and arms, any area affected by stretch marks can be assessed for treatment." },
          { q: "Is this treatment painful?", a: "Most patients experience only mild discomfort, and a numbing cream can be applied for added comfort during laser sessions." },
        ],
      },
      {
        slug: "open-pores",
        title: "Open Pores",
        desc: "Targeted treatments to minimize the appearance of enlarged pores.",
        img: openPoresImg,
        quickFacts: [
          { label: "Duration", value: "30 mins" },
          { label: "Sessions", value: "4–6 sessions" },
          { label: "Downtime", value: "None to minimal" },
          { label: "Results", value: "Visible in 4–6 weeks" },
        ],
        about:
          "Enlarged pores are treated with a combination of peels, microneedling, and pore-refining skincare to tighten skin texture and reduce oil buildup. The goal is smoother-looking skin with pores that appear visibly minimized, both in person and in photos.",
        suitability: [
          "You have visibly enlarged pores, especially around the nose and cheeks.",
          "Your skin tends to be oily or congested.",
          "You want smoother-looking skin texture overall.",
        ],
        benefits: [
          { icon: "ri-contrast-2-line", title: "Refines Texture", description: "Minimizes the visible size of enlarged pores." },
          { icon: "ri-drop-line", title: "Balances Oil", description: "Helps regulate excess oil that contributes to pore congestion." },
          { icon: "ri-sparkling-2-line", title: "Smoother Finish", description: "Skin looks more refined, both in person and in photos." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We assess your skin type and the underlying cause of enlarged pores." },
          { number: "02", title: "Preparation", description: "Skin is deep-cleansed to clear congestion before treatment." },
          { number: "03", title: "Treatment", description: "A peel or microneedling session refines skin texture." },
          { number: "04", title: "Aftercare", description: "A pore-friendly home-care routine helps maintain results." },
        ],
        faqs: [
          { q: "Can pores actually be made smaller?", a: "Pore size is largely genetic, but treatment can visibly minimize their appearance by improving texture and reducing congestion." },
          { q: "Will this help with blackheads too?", a: "Yes, the same protocol that refines pores also helps clear the congestion that leads to blackheads." },
          { q: "How long do results last?", a: "With consistent home care and periodic maintenance sessions, refined pore appearance can be sustained long-term." },
          { q: "Is this suitable for oily skin?", a: "Yes, this protocol is especially well-suited for oily and congestion-prone skin types." },
        ],
      },
      {
        slug: "skin-rejuvenation",
        title: "Skin Rejuvenation",
        desc: "Revitalize tired, dull skin and restore overall texture and tone.",
        img: skinRejuvenationImg,
        quickFacts: [
          { label: "Duration", value: "45 mins" },
          { label: "Sessions", value: "4–6 sessions" },
          { label: "Downtime", value: "None to minimal" },
          { label: "Results", value: "Visible in 4–6 weeks" },
        ],
        about:
          "Skin rejuvenation combines peels, laser toning, and hydration therapy to refresh tired-looking skin, improving texture, tone, and radiance in one comprehensive protocol. It's designed for patients who want an overall reset rather than treating a single concern.",
        suitability: [
          "Your skin feels tired, dull, or lacking in overall radiance.",
          "You want a comprehensive treatment rather than addressing one concern at a time.",
          "You're preparing for an event or season change and want an overall refresh.",
        ],
        benefits: [
          { icon: "ri-sparkling-2-line", title: "Overall Refresh", description: "Improves tone, texture, and radiance in one protocol." },
          { icon: "ri-drop-line", title: "Restores Hydration", description: "Replenishes moisture for a healthier-looking complexion." },
          { icon: "ri-heart-pulse-line", title: "Revives Dull Skin", description: "Brings back a healthy, awake appearance to tired skin." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We assess your overall skin health and rejuvenation goals." },
          { number: "02", title: "Preparation", description: "Skin is cleansed and prepped for your chosen combination therapy." },
          { number: "03", title: "Treatment", description: "A tailored mix of peels, laser toning, or hydration therapy is applied." },
          { number: "04", title: "Aftercare", description: "A maintenance routine helps sustain your refreshed glow." },
        ],
        faqs: [
          { q: "How is this different from a HydraFacial?", a: "Skin rejuvenation is a more comprehensive, dermatologist-led protocol combining multiple modalities, while HydraFacial is a single-session hydrating treatment." },
          { q: "How often should I do this?", a: "Most patients benefit from a rejuvenation course every few months, or seasonally." },
          { q: "Is there any downtime after treatment?", a: "Most rejuvenation protocols involve little to no downtime, though this can vary depending on the specific combination used." },
          { q: "Can this help with early signs of ageing too?", a: "Yes, skin rejuvenation is often combined with collagen-stimulating treatments to address early fine lines alongside dullness and texture." },
        ],
      },
    ],
  },
  {
    category: "hair",
    label: "Hair",
    description:
      "Restorative treatments to manage hair loss, scalp health, and long-term hair growth, tailored to the root cause.",
    services: [
      {
        slug: "prp-therapy",
        title: "PRP Therapy",
        desc: "Platelet-rich plasma therapy to stimulate natural hair regrowth.",
        img: prpTherapyImg,
        quickFacts: [
          { label: "Duration", value: "45–60 mins" },
          { label: "Sessions", value: "4–6 sessions" },
          { label: "Downtime", value: "None to minimal" },
          { label: "Results", value: "Visible in 3–4 months" },
        ],
        about:
          "PRP therapy uses your own blood's growth factors, concentrated and re-injected into the scalp, to stimulate hair follicles and encourage natural regrowth. It's a well-researched, minimally invasive option for early to moderate hair thinning.",
        suitability: [
          "You're experiencing early to moderate hair thinning.",
          "You want a natural, non-surgical approach using your own blood's growth factors.",
          "You're looking to strengthen existing hair rather than a transplant.",
        ],
        benefits: [
          { icon: "ri-heart-pulse-line", title: "Natural Regrowth", description: "Uses your own platelets to stimulate hair follicles." },
          { icon: "ri-shield-check-line", title: "Minimally Invasive", description: "No surgery, no synthetic products, just your own blood plasma." },
          { icon: "ri-sparkling-2-line", title: "Strengthens Hair", description: "Improves thickness and density of existing hair over time." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We assess your hair loss pattern and confirm suitability." },
          { number: "02", title: "Blood Draw", description: "A small blood sample is drawn and processed to concentrate the platelets." },
          { number: "03", title: "Injection", description: "The PRP is injected into the scalp at the areas of thinning." },
          { number: "04", title: "Aftercare", description: "You'll get scalp-care guidance to support regrowth between sessions." },
        ],
        faqs: [
          { q: "Is PRP therapy painful?", a: "A numbing agent is applied to the scalp beforehand, so discomfort is minimal." },
          { q: "How many sessions will I need?", a: "Most patients see visible improvement after 4–6 sessions spaced about a month apart." },
          { q: "Are there any side effects of PRP therapy?", a: "Since PRP uses your own blood, side effects are minimal, mild redness or tenderness at injection sites is normal and resolves quickly." },
          { q: "How long do PRP results last?", a: "Results build gradually and are typically maintained with periodic touch-up sessions every few months." },
        ],
      },
      {
        slug: "gfc-therapy",
        title: "GFC Therapy",
        desc: "Growth factor concentrate therapy for advanced hair restoration.",
        img: gfcTherapyImg,
        quickFacts: [
          { label: "Duration", value: "45–60 mins" },
          { label: "Sessions", value: "4–6 sessions" },
          { label: "Downtime", value: "None to minimal" },
          { label: "Results", value: "Visible in 3–4 months" },
        ],
        about:
          "GFC (Growth Factor Concentrate) therapy delivers a concentrated blend of growth factors directly to the scalp to stimulate dormant follicles and support healthier, thicker hair growth. It's often recommended alongside or as an alternative to PRP for more advanced thinning.",
        suitability: [
          "You have moderate hair thinning that hasn't responded well to topical treatments.",
          "You want a more concentrated growth-factor option than standard PRP.",
          "You're looking for a non-surgical path to thicker, healthier hair.",
        ],
        benefits: [
          { icon: "ri-heart-pulse-line", title: "Activates Follicles", description: "Stimulates dormant follicles to resume healthy growth." },
          { icon: "ri-sparkling-2-line", title: "Thicker Hair", description: "Improves density and hair shaft thickness over a course of sessions." },
          { icon: "ri-shield-check-line", title: "Advanced Formulation", description: "A more concentrated growth-factor option for stubborn thinning." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We evaluate your scalp and hair thinning pattern." },
          { number: "02", title: "Preparation", description: "The scalp is cleansed and prepped for injection." },
          { number: "03", title: "Treatment", description: "The growth factor concentrate is injected into thinning areas." },
          { number: "04", title: "Aftercare", description: "A gentle scalp-care routine supports the treated follicles." },
        ],
        faqs: [
          { q: "How is GFC different from PRP?", a: "GFC uses a more concentrated growth-factor formulation, often recommended for more advanced thinning or when PRP alone isn't enough." },
          { q: "Can I combine GFC with other hair treatments?", a: "Yes, GFC is often combined with microneedling or mesotherapy for enhanced results, your specialist will tailor this to your scalp." },
          { q: "Is GFC therapy painful?", a: "A numbing agent is applied to the scalp beforehand, so most patients experience only mild discomfort." },
          { q: "How soon will I see results?", a: "Most patients notice reduced shedding within a few weeks, with visible thickness improvements over 3–4 months." },
        ],
      },
      {
        slug: "hair-fall-treatment",
        title: "Hair Fall Treatment",
        desc: "Comprehensive diagnostics and treatment plans to halt shedding and promote regrowth.",
        img: hairFallTreatmentImg,
        quickFacts: [
          { label: "Duration", value: "30–45 mins" },
          { label: "Sessions", value: "6+ sessions" },
          { label: "Downtime", value: "None" },
          { label: "Results", value: "Visible in 3 months" },
        ],
        about:
          "Hair fall is investigated thoroughly, from nutritional and hormonal factors to scalp health, before building a treatment plan combining medical therapy, PRP/GFC, and scalp care to bring shedding under control and support regrowth.",
        suitability: [
          "You're noticing excessive daily hair shedding.",
          "You want to identify the underlying cause, not just treat the symptom.",
          "You're looking for a structured, medically guided plan.",
        ],
        benefits: [
          { icon: "ri-search-eye-line", title: "Root-Cause Diagnosis", description: "Identifies the underlying reason behind your hair fall." },
          { icon: "ri-shield-check-line", title: "Medically Guided", description: "A structured plan combining medical and in-clinic therapies." },
          { icon: "ri-heart-pulse-line", title: "Reduces Shedding", description: "Helps bring excessive hair fall under control over time." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We review your medical history, diet, and hair fall pattern." },
          { number: "02", title: "Diagnosis", description: "Scalp assessment and, if needed, basic investigations identify the cause." },
          { number: "03", title: "Treatment", description: "A combination of medical therapy and in-clinic procedures is started." },
          { number: "04", title: "Follow-up", description: "Progress is tracked and the plan is adjusted over your treatment course." },
        ],
        faqs: [
          { q: "Is some hair fall normal?", a: "Yes, shedding 50–100 hairs a day is normal, we help identify when it crosses into excessive hair fall that needs treatment." },
          { q: "How soon will shedding reduce?", a: "Most patients notice reduced shedding within 8–12 weeks of starting a tailored plan." },
          { q: "Do I need blood tests before starting treatment?", a: "Basic investigations may be recommended if a nutritional or hormonal cause is suspected, to guide the most effective treatment plan." },
          { q: "Is hair fall treatment different for men and women?", a: "The underlying causes can differ, so your plan is tailored to your specific pattern and history rather than a generic protocol." },
        ],
      },
      {
        slug: "hair-thinning",
        title: "Hair Thinning",
        desc: "Targeted therapies to restore density and thickness to thinning hair.",
        img: hairThinningImg,
        quickFacts: [
          { label: "Duration", value: "30–45 mins" },
          { label: "Sessions", value: "6+ sessions" },
          { label: "Downtime", value: "None" },
          { label: "Results", value: "Visible in 3–4 months" },
        ],
        about:
          "Hair thinning is addressed with a combination of PRP/GFC therapy, medical treatment, and scalp care designed to strengthen existing hair and encourage thicker regrowth. Plans are tailored to whether thinning is genetic, hormonal, or stress-related.",
        suitability: [
          "You've noticed your hair feels or looks visibly thinner over time.",
          "You want to strengthen existing hair rather than lose more density.",
          "You're looking for a plan tailored to the cause of your thinning.",
        ],
        benefits: [
          { icon: "ri-heart-pulse-line", title: "Restores Density", description: "Strengthens existing hair and supports thicker regrowth." },
          { icon: "ri-shield-check-line", title: "Cause-Specific Care", description: "Tailored to genetic, hormonal, or stress-related thinning." },
          { icon: "ri-sparkling-2-line", title: "Visibly Fuller Hair", description: "Improves the look and feel of hair density over your treatment course." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We assess your hair density and possible underlying causes." },
          { number: "02", title: "Preparation", description: "The scalp is prepped for your chosen in-clinic treatment." },
          { number: "03", title: "Treatment", description: "PRP, GFC, or medical therapy is administered as appropriate." },
          { number: "04", title: "Follow-up", description: "Density is reassessed and the plan is adjusted over time." },
        ],
        faqs: [
          { q: "Can thinning hair really become thicker again?", a: "With early, consistent treatment, existing hair often becomes visibly thicker and healthier, especially when the underlying cause is addressed." },
          { q: "Is this treatment suitable for both men and women?", a: "Yes, hair thinning treatment is tailored individually regardless of gender." },
          { q: "How long before I notice a difference?", a: "Most patients start noticing improved thickness and reduced shedding within 3–4 months of consistent treatment." },
          { q: "Will I need to continue treatment indefinitely?", a: "Many patients transition to periodic maintenance sessions once results stabilize, rather than ongoing frequent treatment." },
        ],
      },
      {
        slug: "dandruff-treatment",
        title: "Dandruff Treatment",
        desc: "Medical-grade solutions to manage and eliminate persistent dandruff.",
        img: dandruffTreatmentImg,
        quickFacts: [
          { label: "Duration", value: "20–30 mins" },
          { label: "Sessions", value: "4–6 sessions" },
          { label: "Downtime", value: "None" },
          { label: "Results", value: "Visible in 2–4 weeks" },
        ],
        about:
          "Persistent dandruff is treated with medical-grade scalp therapy and topical treatment to control flaking, itchiness, and underlying seborrheic dermatitis, going beyond what over-the-counter shampoos can address.",
        suitability: [
          "You have persistent flaking that doesn't improve with anti-dandruff shampoos.",
          "Your scalp feels itchy, irritated, or inflamed.",
          "You want a dermatologist-guided plan instead of trial-and-error products.",
        ],
        benefits: [
          { icon: "ri-drop-line", title: "Controls Flaking", description: "Reduces visible flaking and scalp buildup." },
          { icon: "ri-heart-pulse-line", title: "Soothes Irritation", description: "Calms itchiness and inflammation at the scalp level." },
          { icon: "ri-shield-check-line", title: "Medical-Grade Care", description: "Goes beyond over-the-counter shampoos for lasting control." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We assess your scalp condition and rule out related concerns." },
          { number: "02", title: "Diagnosis", description: "The type and severity of dandruff or scalp irritation is identified." },
          { number: "03", title: "Treatment", description: "Medical-grade scalp therapy and topical treatment are applied." },
          { number: "04", title: "Home Care", description: "You'll get a maintenance routine to keep flaking under control." },
        ],
        faqs: [
          { q: "Is dandruff the same as a dry scalp?", a: "Not always, dandruff can stem from several causes including fungal overgrowth, which we assess and treat accordingly." },
          { q: "How quickly will flaking reduce?", a: "Most patients see noticeable improvement within 2–4 weeks of starting treatment." },
          { q: "Can dandruff come back after treatment?", a: "With a consistent maintenance routine, flaking is generally well-controlled, though some scalps may need periodic touch-ups." },
          { q: "Is this treatment suitable for colored or chemically treated hair?", a: "Yes, treatment is adjusted to be gentle on colored or chemically treated hair while still effectively managing dandruff." },
        ],
      },
      {
        slug: "scalp-disorders",
        title: "Scalp Disorders",
        desc: "Targeted therapies for itchiness, inflammation, and complex scalp conditions.",
        img: scalpDisordersImg,
        quickFacts: [
          { label: "Duration", value: "30 mins" },
          { label: "Sessions", value: "6+ sessions" },
          { label: "Downtime", value: "None" },
          { label: "Results", value: "Progressive over weeks" },
        ],
        about:
          "Complex scalp conditions, from folliculitis to psoriasis-related scalp issues, are diagnosed and treated with medical therapy tailored to the specific condition, aiming to restore a calm, healthy scalp as the foundation for healthy hair.",
        suitability: [
          "You have ongoing scalp itchiness, redness, or inflammation.",
          "You've been diagnosed with or suspect a scalp condition beyond simple dandruff.",
          "You want a proper diagnosis before starting any hair treatment.",
        ],
        benefits: [
          { icon: "ri-search-eye-line", title: "Accurate Diagnosis", description: "Identifies the specific scalp condition before treatment begins." },
          { icon: "ri-heart-pulse-line", title: "Restores Scalp Health", description: "Calms inflammation and irritation at the source." },
          { icon: "ri-shield-check-line", title: "Medically Supervised", description: "Treated as a medical condition, not just a cosmetic concern." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We review your symptoms and scalp history in detail." },
          { number: "02", title: "Diagnosis", description: "A scalp examination identifies the underlying condition." },
          { number: "03", title: "Treatment", description: "A tailored medical therapy plan is started." },
          { number: "04", title: "Follow-up", description: "Your scalp is reassessed and the plan is adjusted as it improves." },
        ],
        faqs: [
          { q: "Can scalp disorders affect hair growth?", a: "Yes, untreated scalp conditions can contribute to hair thinning or shedding, which is why we treat the scalp before or alongside hair loss treatment." },
          { q: "Are these conditions curable?", a: "Many scalp conditions can be effectively managed and controlled with the right treatment plan, even if not always permanently cured." },
          { q: "Do I need a scalp biopsy or special tests?", a: "Most scalp conditions can be diagnosed through examination alone; further tests are only recommended if needed for an accurate diagnosis." },
          { q: "How long does treatment typically take?", a: "This varies by condition, some clear up in a few weeks, while chronic conditions may need ongoing management." },
        ],
      },
    ],
  },
  {
    category: "laser",
    label: "Laser",
    description:
      "Advanced laser technology for hair reduction, pigmentation, tattoo removal, and more, safe for every skin tone.",
    services: [
      {
        slug: "laser-hair-reduction",
        title: "Laser Hair Reduction",
        desc: "Safe, effective, and long-lasting reduction of unwanted hair.",
        img: laserHairReductionImg,
        quickFacts: [
          { label: "Duration", value: "20–60 mins" },
          { label: "Sessions", value: "6–8 sessions" },
          { label: "Downtime", value: "None" },
          { label: "Results", value: "Visible after 3rd session" },
        ],
        about:
          "Using advanced laser technology calibrated for Indian skin tones, we deliver safe, effective, and long-lasting hair reduction across the face and body. Sessions are spaced to target hair in its active growth phase for the best long-term results.",
        suitability: [
          "You want a long-term reduction in unwanted body or facial hair.",
          "You're tired of regular shaving, waxing, or threading.",
          "You want a treatment calibrated safely for your skin tone.",
        ],
        benefits: [
          { icon: "ri-flashlight-line", title: "Long-Lasting Results", description: "Significantly reduces hair regrowth over a full treatment course." },
          { icon: "ri-shield-check-line", title: "Safe for All Skin Tones", description: "Technology calibrated specifically for Indian skin." },
          { icon: "ri-time-line", title: "Saves Time", description: "Cuts down on regular shaving, waxing, or threading routines." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We assess your hair and skin type to set laser parameters." },
          { number: "02", title: "Preparation", description: "The area is cleansed and shaved just before treatment." },
          { number: "03", title: "Treatment", description: "Laser pulses target hair follicles across the treatment area." },
          { number: "04", title: "Aftercare", description: "Soothing gel and sun protection guidance are provided post-session." },
        ],
        faqs: [
          { q: "Is laser hair reduction safe for Indian skin tones?", a: "Yes, we use laser technology specifically calibrated for darker skin tones, and Dr. Kajal has extensive experience treating a wide range of skin types safely." },
          { q: "How many sessions are needed for full results?", a: "Most areas require 6–8 sessions spaced 4–6 weeks apart, aligned with your natural hair growth cycle." },
          { q: "Does laser hair reduction hurt?", a: "Most patients feel only mild warmth or a light snapping sensation, and cooling technology is used to keep you comfortable." },
          { q: "Can I get laser hair reduction on any part of the body?", a: "Yes, it's commonly done on the face, underarms, legs, arms, and bikini area, among others." },
        ],
      },
      {
        slug: "tattoo-removal",
        title: "Tattoo Removal",
        desc: "Safe, effective breakdown of tattoo ink using advanced Q-switched lasers.",
        img: tattooRemovalImg,
        quickFacts: [
          { label: "Duration", value: "15–30 mins" },
          { label: "Sessions", value: "6–10 sessions" },
          { label: "Downtime", value: "3–7 days" },
          { label: "Results", value: "Progressive fading" },
        ],
        about:
          "Tattoo removal uses Q-switched laser technology to break down ink particles into fragments small enough for your body to naturally clear, gradually fading the tattoo over a series of sessions spaced to allow proper healing between treatments.",
        suitability: [
          "You want to fade or fully remove an existing tattoo.",
          "You're prepared for a multi-session process with healing time between sessions.",
          "You want it done safely with medical-grade laser technology.",
        ],
        benefits: [
          { icon: "ri-flashlight-line", title: "Effective Ink Breakdown", description: "Q-switched laser technology targets ink particles precisely." },
          { icon: "ri-shield-check-line", title: "Medically Supervised", description: "Performed with proper aftercare protocols to protect your skin." },
          { icon: "ri-time-line", title: "Gradual, Safe Fading", description: "Sessions are spaced to allow safe healing between treatments." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We assess your tattoo's ink colors, size, and skin type." },
          { number: "02", title: "Preparation", description: "The area is cleansed and a numbing agent applied if needed." },
          { number: "03", title: "Treatment", description: "Q-switched laser pulses break down the tattoo ink." },
          { number: "04", title: "Aftercare", description: "Detailed wound care instructions support healing between sessions." },
        ],
        faqs: [
          { q: "Does tattoo removal hurt?", a: "A numbing agent is used to minimize discomfort, though some sensation is normal during treatment." },
          { q: "How many sessions will full removal take?", a: "This depends on ink color, depth, and size, most tattoos need 6–10 sessions spaced 6–8 weeks apart." },
          { q: "Will there be scarring after tattoo removal?", a: "When proper aftercare is followed, scarring is uncommon, our team will guide you through the healing process to minimize any risk." },
          { q: "Can all tattoo colors be removed?", a: "Most ink colors respond well to Q-switched laser treatment, though some colors may require more sessions than others." },
        ],
      },
      {
        slug: "q-switch-laser",
        title: "Q-Switch Laser",
        desc: "High-precision laser technology for pigmentation, tattoos, and skin toning.",
        img: qSwitchLaserImg,
        quickFacts: [
          { label: "Duration", value: "20–30 mins" },
          { label: "Sessions", value: "6–8 sessions" },
          { label: "Downtime", value: "None to minimal" },
          { label: "Results", value: "Progressive over sessions" },
        ],
        about:
          "Q-Switch laser delivers extremely short, high-energy pulses that target pigment and ink with precision while sparing the surrounding skin. It's a versatile technology used for pigmentation correction, tattoo removal, and overall skin toning.",
        suitability: [
          "You have pigmentation, sun spots, or tattoo ink you want to target.",
          "You want a precise, high-technology laser treatment.",
          "You're looking for gradual, controlled improvement over several sessions.",
        ],
        benefits: [
          { icon: "ri-flashlight-line", title: "High Precision", description: "Targets pigment and ink with minimal effect on surrounding skin." },
          { icon: "ri-sparkling-2-line", title: "Versatile Treatment", description: "Effective for pigmentation, toning, and tattoo removal." },
          { icon: "ri-shield-check-line", title: "Controlled Sessions", description: "Gradual, dermatologist-paced approach for safe results." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We identify your target concern and set laser parameters." },
          { number: "02", title: "Preparation", description: "The treatment area is cleansed and prepped." },
          { number: "03", title: "Treatment", description: "Q-Switch laser pulses are applied to the target area." },
          { number: "04", title: "Aftercare", description: "Sun protection and soothing skincare support your results." },
        ],
        faqs: [
          { q: "What can Q-Switch laser treat?", a: "It's commonly used for pigmentation, sun spots, tattoo removal, and overall skin toning." },
          { q: "Is downtime required?", a: "Most sessions involve little to no downtime, though tattoo removal may need a few days to heal." },
          { q: "How many sessions will I need?", a: "This depends on your specific concern, but most protocols involve 6–8 sessions spaced a few weeks apart." },
          { q: "Is Q-Switch laser safe for darker skin tones?", a: "Yes, when performed by a trained specialist with the right settings, it's a safe option for a range of skin tones." },
        ],
      },
      {
        slug: "laser-toning",
        title: "Laser Toning",
        desc: "Advanced laser toning to target deep pigmentation and improve overall clarity.",
        img: laserToningImg,
        quickFacts: [
          { label: "Duration", value: "20–30 mins" },
          { label: "Sessions", value: "6–8 sessions" },
          { label: "Downtime", value: "None" },
          { label: "Results", value: "Visible in 6–8 weeks" },
        ],
        about:
          "Laser toning uses low-energy laser passes across the skin to gently break down deep pigmentation and stimulate an overall brighter, more even complexion. It's a gentle, no-downtime option well suited for melasma and stubborn pigmentation.",
        suitability: [
          "You have deep or stubborn pigmentation that hasn't responded to topical treatment.",
          "You want a no-downtime laser option.",
          "You're looking for a gradual, gentle approach suitable for melasma.",
        ],
        benefits: [
          { icon: "ri-flashlight-line", title: "Targets Deep Pigment", description: "Reaches pigmentation that topical treatments alone can't address." },
          { icon: "ri-time-line", title: "No Downtime", description: "Return to your routine immediately after each session." },
          { icon: "ri-sparkling-2-line", title: "Improves Clarity", description: "Builds toward a brighter, more even complexion over your course." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We assess your pigmentation depth and skin sensitivity." },
          { number: "02", title: "Preparation", description: "The treatment area is cleansed before laser application." },
          { number: "03", title: "Treatment", description: "Low-energy laser passes are applied across the skin." },
          { number: "04", title: "Aftercare", description: "Sun protection is essential to protect your results between sessions." },
        ],
        faqs: [
          { q: "Is laser toning safe for melasma?", a: "Yes, laser toning's gentle, low-energy approach makes it one of the safer laser options for melasma when paced correctly." },
          { q: "Will I need ongoing maintenance?", a: "Periodic maintenance sessions help sustain results, especially for melasma-prone skin." },
          { q: "How many sessions are typically needed?", a: "Most patients need 6–8 sessions for visible improvement, spaced a few weeks apart." },
          { q: "Is there any downtime?", a: "No, laser toning involves no downtime, so you can resume your daily routine immediately after each session." },
        ],
      },
      {
        slug: "carbon-laser-facial",
        title: "Carbon Laser Facial",
        desc: "A deep-cleansing laser facial that refines pores and brightens skin instantly.",
        img: carbonLaserFacialImg,
        quickFacts: [
          { label: "Duration", value: "30–40 mins" },
          { label: "Sessions", value: "Monthly maintenance" },
          { label: "Downtime", value: "None" },
          { label: "Results", value: "Immediate glow" },
        ],
        about:
          "Carbon laser facial applies a fine layer of medical-grade carbon to the skin, which is then targeted with laser to deep-clean pores, exfoliate dead skin, and stimulate mild collagen renewal, leaving skin instantly smoother and brighter.",
        suitability: [
          "You want an instant glow with zero downtime.",
          "You have oily or congested skin with visible pores.",
          "You want a laser facial you can repeat monthly for maintenance.",
        ],
        benefits: [
          { icon: "ri-flashlight-line", title: "Deep Pore Cleansing", description: "Draws out impurities and excess oil from deep within pores." },
          { icon: "ri-sparkling-2-line", title: "Instant Brightening", description: "Skin looks visibly smoother and brighter immediately after." },
          { icon: "ri-time-line", title: "No Downtime", description: "A quick, comfortable treatment you can fit into your routine." },
        ],
        procedure: [
          { number: "01", title: "Preparation", description: "A layer of medical-grade carbon paste is applied to clean skin." },
          { number: "02", title: "Absorption", description: "The carbon settles into pores, binding to oil and impurities." },
          { number: "03", title: "Laser Treatment", description: "A laser passes over the skin, vaporizing the carbon along with debris." },
          { number: "04", title: "Finish", description: "A calming serum and SPF complete the session." },
        ],
        faqs: [
          { q: "Is a carbon laser facial painful?", a: "No, most patients describe it as a warm, comfortable sensation with no need for numbing." },
          { q: "How often can I get this done?", a: "It's gentle enough for monthly sessions as part of an ongoing skincare routine." },
          { q: "Is carbon laser facial suitable for acne-prone skin?", a: "Yes, it's particularly effective for oily, acne-prone skin due to its deep-cleansing action on pores." },
          { q: "How soon will I see results?", a: "Results are visible immediately after your very first session." },
        ],
      },
    ],
  },
];

export function getCategory(categorySlug) {
  return SERVICES.find((cat) => cat.category === categorySlug) ?? null;
}

export function getServiceDetails(slug) {
  for (const cat of SERVICES) {
    const service = cat.services.find((s) => s.slug === slug);
    if (service) return { ...service, category: cat.category, categoryLabel: cat.label };
  }
  return null;
}
