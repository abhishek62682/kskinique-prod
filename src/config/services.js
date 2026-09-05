// services.js
//
// Single source of truth for every treatment on the site: SERVICES is keyed
// by category (skin/hair/laser), each value an array of service objects
// carrying everything needed for both the listing card and its dedicated
// detail page (desc/img for cards; about/specs/suitability/benefits/procedure
// for the detail page). Add a new treatment by adding one object to the
// relevant category's array.

import acneAcneScarsImg from "../assets/skin/acne-acne-scars.webp";
import hyperPigmentationImg from "../assets/skin/hyper-pigmentation.webp";
import darkCirclesLipPigmentationImg from "../assets/skin/dark-circles-lip-pigmentation.webp";
import skinBrighteningImg from "../assets/skin/skin-brightening.webp";
import antiAgeingTreatmentsImg from "../assets/skin/anti-ageing-treatments.webp";
import openPoresImg from "../assets/skin/open-pores.webp";
import skinRejuvenationImg from "../assets/skin/skin-rejuvenation.webp";

import prpTherapyImg from "../assets/hair/prp-therapy.webp";
import gfcTherapyImg from "../assets/hair/gfc-therapy.webp";
import microneedlingForHairImg from "../assets/hair/microneedling-for-hair.webp";
import exosomeHairTherapyImg from "../assets/hair/exosome-hair-therapy.webp";
import scalpPeelsScrubsImg from "../assets/hair/scalp-peels-scrubs.webp";

import laserHairReductionImg from "../assets/laser/laser-hair-reduction.webp";
import tattooRemovalImg from "../assets/laser/tattoo-removal.webp";
import underEyeLipsImg from "../assets/laser/under-eye-lips.webp";
import bodyPigmentationImg from "../assets/laser/body-pigmentation.webp";
import laserToningImg from "../assets/laser/laser-toning.webp";
import carbonLaserFacialImg from "../assets/laser/carbon-laser-facial.webp";

const IMG = "https://storage.googleapis.com/uxpilot-auth.appspot.com";

export const CATEGORY_DESCRIPTIONS = {
  skin: "Dermatologist-led treatments for acne, pigmentation, texture, and every skin concern in between, personalized to your skin type.",
  hair: "Restorative treatments to manage hair loss, scalp health, and long-term hair growth, tailored to the root cause.",
  laser: "Advanced laser technology for hair reduction, pigmentation, tattoo removal, and more, safe for every skin tone.",
};

export function getCategoryLabel(category) {
  return category.charAt(0).toUpperCase() + category.slice(1);
}

export const SERVICES = {
  skin: [
      {
        slug: "acne-acne-scars",
        title: "Acne & Acne Scars",
        desc: "Targeted treatment for active breakouts and the scars they leave behind.",
        img: acneAcneScarsImg,
        treatmentOptions: ["Chemical Peels", "Carbon Laser Peel", "Microneedling", "LED Light Therapy"],
        specs: [
          {
            name: "Chemical Peel",
            facts: [
              { label: "Duration", value: "Subjective" },
              { label: "Downtime", value: "Minimum 24 hours to maximum 7 days" },
              { label: "Results", value: "From 1st session onwards" },
              { label: "Sessions", value: "6–8 sessions" },
            ],
          },
          {
            name: "Carbon Laser Peel",
            facts: [
              { label: "Duration", value: "45 minutes" },
              { label: "Downtime", value: "7–10 days" },
              { label: "Results", value: "From 1st session onwards" },
              { label: "Sessions", value: "6–8 sessions" },
            ],
          },
          {
            name: "Microneedling",
            facts: [
              { label: "Duration", value: "1 hour" },
              { label: "Downtime", value: "7–10 days" },
              { label: "Results", value: "From 1st session onwards" },
              { label: "Sessions", value: "6–8 sessions" },
            ],
          },
          {
            name: "LED Light Therapy",
            facts: [
              { label: "Duration", value: "20 minutes" },
              { label: "Downtime", value: "None" },
              { label: "Results", value: "Visible after 3–4 sessions" },
            ],
          },
        ],
        about:
          "Acne is a multi-factorial condition, so your treatment plan is tailored to you rather than applied as a one-size-fits-all routine. Beyond systemic medications and home care, our in-clinic treatments target both active breakouts and the scarring they leave behind.",
        suitability: [
          "You have active acne, whether hormonal or otherwise.",
          "You have acne marks or acne scarring.",
          "You have whiteheads or blackheads.",
          "You have textured skin caused by closed comedones.",
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
        slug: "hyper-pigmentation",
        title: "Hyper Pigmentation",
        desc: "Advanced treatments to fade dark spots, sun damage, and stubborn pigmentation.",
        img: hyperPigmentationImg,
        treatmentOptions: ["Chemical Peels", "Laser Toning", "Spot Laser Treatments", "Spot Peels", "Medi-Facials", "LED Light Therapy"],
        specs: [
          {
            name: "Chemical Peels",
            facts: [
              { label: "Duration", value: "Subjective" },
              { label: "Downtime", value: "Subjective" },
              { label: "Results", value: "Subjective" },
              { label: "Sessions", value: "Subjective" },
            ],
          },
          {
            name: "Laser Toning",
            facts: [
              { label: "Duration", value: "1 hour" },
              { label: "Downtime", value: "Subjective" },
              { label: "Results", value: "Subjective" },
              { label: "Sessions", value: "Subjective" },
            ],
          },
          {
            name: "Spot Laser Treatments",
            facts: [
              { label: "Duration", value: "Subjective" },
              { label: "Downtime", value: "Subjective" },
              { label: "Results", value: "Subjective" },
              { label: "Sessions", value: "Subjective" },
            ],
          },
          {
            name: "Spot Peels",
            facts: [
              { label: "Duration", value: "Subjective" },
              { label: "Downtime", value: "Subjective" },
              { label: "Results", value: "Subjective" },
              { label: "Sessions", value: "Subjective" },
            ],
          },
          {
            name: "Medi-Facials",
            facts: [
              { label: "Duration", value: "1 hour" },
              { label: "Downtime", value: "Subjective" },
              { label: "Results", value: "Subjective" },
              { label: "Sessions", value: "Subjective" },
            ],
          },
          {
            name: "LED Light Therapy",
            facts: [
              { label: "Duration", value: "Subjective" },
              { label: "Downtime", value: "Subjective" },
              { label: "Results", value: "Subjective" },
              { label: "Sessions", value: "Subjective" },
            ],
          },
        ],
        about:
          "Hyperpigmentation can have several causes, including post-inflammatory pigmentation from acne, melasma, sun spots, and other forms of uneven pigmentation. Since each type requires a different approach, your treatment plan is customised to the cause, skin type, and severity of your pigmentation. Skin is prepped beforehand to reduce flare-up risk, and every treatment is performed by Dr. Kajal Komalan, under her direct supervision.",
        suitability: [
          "You have uneven skin tone.",
          "You have tanning or sun-induced pigmentation.",
          "You have post-inflammatory hyperpigmentation (PIH) following acne, injury, or inflammation.",
          "You have melasma.",
          "You have hyperpigmentation on your neck.",
          "You have hyperpigmentation on your body.",
          "You have pigmentation in intimate areas.",
        ],
        benefits: [
          { icon: "ri-sun-line", title: "Evens Skin Tone", description: "Fades dark spots and patches for a more uniform complexion." },
          { icon: "ri-shield-check-line", title: "Dermatologist-Paced Care", description: "A gentle, dermatologist-paced approach suited to your specific cause of pigmentation." },
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
        slug: "insta-glow-brightness",
        title: "Insta Glow & Brightness",
        desc: "An instant boost of radiance and brightness, ideal before a special occasion.",
        img: skinBrighteningImg,
        treatmentOptions: ["Glow Protocol Facial", "Hollywood Facial", "Skin Booster with Microneedling"],
        specs: [
          {
            name: "Glow Protocol Facial",
            facts: [
              { label: "Duration", value: "45 minutes to 1 hour" },
              { label: "Downtime", value: "None" },
              { label: "Results", value: "From 1st session itself" },
              { label: "Sessions", value: "2–6 sessions" },
            ],
          },
          {
            name: "Hollywood Facial",
            facts: [
              { label: "Duration", value: "45 minutes to 1 hour" },
              { label: "Downtime", value: "7–10 days" },
              { label: "Results", value: "From 1st session itself" },
              { label: "Sessions", value: "2–6 sessions" },
            ],
          },
          {
            name: "Skin Booster with Microneedling",
            facts: [
              { label: "Duration", value: "45 minutes to 1 hour" },
              { label: "Downtime", value: "7–10 days" },
              { label: "Results", value: "From 1st session itself" },
              { label: "Sessions", value: "2–6 sessions" },
            ],
          },
        ],
        about:
          "Looking for an instant pick-me-up for dull, tired-looking skin? This category is ideal for those wanting a quick boost of radiance and brightness, especially before a special occasion or for last-minute brides.",
        suitability: [
          "You want instant skin brightening and radiance.",
          "You want a refreshed, healthy-looking complexion.",
          "You want a quick skin pick-me-up before an event.",
          "You want a pre-bridal glow.",
        ],
        benefits: [
          { icon: "ri-sparkling-2-line", title: "Instant Radiance", description: "Visible brightness and glow right after your very first session." },
          { icon: "ri-sun-line", title: "Event-Ready Glow", description: "A quick pick-me-up before a special occasion or your big day." },
          { icon: "ri-time-line", title: "Zero-Downtime Option", description: "Choose the Glow Protocol Facial for an instant boost with no downtime at all." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We assess your skin's tone, radiance, and what's causing the dullness." },
          { number: "02", title: "Preparation", description: "Skin is cleansed and prepped for your chosen facial." },
          { number: "03", title: "Treatment", description: "A Glow Protocol Facial, Hollywood Facial, or Skin Booster with Microneedling is performed." },
          { number: "04", title: "Aftercare", description: "Sun protection and a light home-care routine help maintain your glow." },
        ],
        faqs: [
          { q: "Will this make my skin unnaturally lighter?", a: "No, the goal is to restore your natural radiance and even tone, not lighten your skin beyond its baseline." },
          { q: "How long do results last?", a: "With consistent sun protection, brightening results typically last several months between maintenance sessions." },
          { q: "Is skin brightening safe for all skin types?", a: "Yes, the protocol is customized to your skin type and tone to ensure safe, even results." },
          { q: "Can I combine this with sunscreen and makeup?", a: "Yes, and we recommend daily sunscreen to protect and prolong your brightening results." },
        ],
      },
      {
        slug: "open-pores-textured-skin",
        title: "Open Pores & Textured Skin",
        desc: "Refine enlarged pores and smooth uneven texture for a more even complexion.",
        img: openPoresImg,
        treatmentOptions: ["Laser Toning", "Chemical Peels", "Medi-Facials"],
        specs: [
          {
            name: "Laser Toning",
            facts: [
              { label: "Duration", value: "Approximately 1 hour" },
              { label: "Downtime", value: "Approximately 7–10 days, depending on the treatment chosen and individual skin response" },
              { label: "Results", value: "From 1st session onwards" },
              { label: "Sessions", value: "6–8 sessions" },
            ],
          },
          {
            name: "Chemical Peels",
            facts: [
              { label: "Duration", value: "Approximately 1 hour" },
              { label: "Downtime", value: "Approximately 7–10 days, depending on the treatment chosen and individual skin response" },
              { label: "Results", value: "From 1st session onwards" },
              { label: "Sessions", value: "6–8 sessions" },
            ],
          },
          {
            name: "Medi-Facials",
            facts: [
              { label: "Duration", value: "Approximately 1 hour" },
              { label: "Downtime", value: "Approximately 7–10 days, depending on the treatment chosen and individual skin response" },
              { label: "Results", value: "From 1st session onwards" },
              { label: "Sessions", value: "6–8 sessions" },
            ],
          },
        ],
        about:
          "Visibly enlarged pores and uneven skin texture can make skin appear rough, bumpy, or uneven, and can affect how makeup sits on the skin. Our treatments are designed to refine pores, improve texture, and create a smoother, more even-looking complexion.",
        suitability: [
          "You want smoother, more refined-looking skin, almost \"filter-like\".",
          "You want to improve your skin's texture.",
          "You want to minimize the visible appearance of enlarged pores.",
        ],
        benefits: [
          { icon: "ri-contrast-2-line", title: "Refines Texture", description: "Minimizes the visible size of enlarged pores." },
          { icon: "ri-drop-line", title: "Balances Oil", description: "Helps regulate excess oil that contributes to pore congestion." },
          { icon: "ri-sparkling-2-line", title: "Smoother Finish", description: "Skin looks more refined and even, almost filter-smooth, both in person and in photos." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We assess your skin type and the underlying cause of enlarged pores." },
          { number: "02", title: "Preparation", description: "Skin is deep-cleansed to clear congestion before treatment." },
          { number: "03", title: "Treatment", description: "Laser toning, a chemical peel, or a medi-facial is performed to refine texture and minimize pores." },
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
        slug: "anti-ageing",
        title: "Anti-Ageing",
        desc: "Comprehensive age-management treatments to restore firmness, elasticity, and glow.",
        img: antiAgeingTreatmentsImg,
        treatmentOptions: ["Medi-Facial with Radiofrequency for Skin Tightening", "Microneedling for Fine Lines & Wrinkles", "Laser Toning for Skin Rejuvenation"],
        specs: [
          {
            name: "Medi-Facial with Radiofrequency for Skin Tightening",
            facts: [
              { label: "Duration", value: "Approximately 1 hour" },
              { label: "Downtime", value: "Approximately 2–10 days, depending on the treatment chosen and individual skin response" },
              { label: "Results", value: "Visible improvement typically develops over 6–8 weeks, with results continuing to improve as collagen production is stimulated" },
              { label: "Sessions", value: "6–8 weeks" },
            ],
          },
          {
            name: "Microneedling for Fine Lines & Wrinkles",
            facts: [
              { label: "Duration", value: "Approximately 1 hour" },
              { label: "Downtime", value: "Approximately 2–10 days, depending on the treatment chosen and individual skin response" },
              { label: "Results", value: "Visible improvement typically develops over 6–8 weeks, with results continuing to improve as collagen production is stimulated" },
              { label: "Sessions", value: "6–8 weeks" },
            ],
          },
          {
            name: "Laser Toning for Skin Rejuvenation",
            facts: [
              { label: "Duration", value: "Approximately 1 hour" },
              { label: "Downtime", value: "Approximately 2–10 days, depending on the treatment chosen and individual skin response" },
              { label: "Results", value: "Visible improvement typically develops over 6–8 weeks, with results continuing to improve as collagen production is stimulated" },
              { label: "Sessions", value: "6–8 weeks" },
            ],
          },
        ],
        about:
          "For those looking to prevent or improve early signs of ageing, including fine lines, wrinkles, and loss of skin firmness, we offer non-invasive and minimally invasive treatments to help maintain firmer, smoother, more youthful-looking skin.",
        suitability: [
          "You want to prevent or delay early signs of ageing.",
          "You want to improve fine lines and wrinkles.",
          "You want to improve your skin's firmness and texture.",
          "You want to maintain a youthful, healthy-looking complexion.",
        ],
        benefits: [
          { icon: "ri-heart-pulse-line", title: "Boosts Collagen", description: "Stimulates your skin's natural collagen for lasting firmness." },
          { icon: "ri-sparkling-2-line", title: "Softer Fine Lines", description: "Visibly smooths early lines and improves skin texture." },
          { icon: "ri-shield-check-line", title: "Preventive Care", description: "Slows visible signs of ageing before they progress." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We assess your skin's firmness, texture, and specific signs of ageing." },
          { number: "02", title: "Preparation", description: "Skin is cleansed and prepped for your chosen treatment." },
          { number: "03", title: "Treatment", description: "A radiofrequency medi-facial, microneedling, or laser toning is performed to stimulate collagen." },
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
        slug: "dark-circles-lip-pigmentation",
        title: "Dark Circles & Lip Pigmentation",
        desc: "Brightening treatment for under-eye pigmentation and dark, uneven lips.",
        img: darkCirclesLipPigmentationImg,
        treatmentOptions: ["Peels", "Laser Treatments for the Under-Eye & Lips", "Skin Boosters", "Microneedling"],
        specs: [
          {
            name: "Peels",
            facts: [
              { label: "Duration", value: "Approximately 30 minutes–1 hour" },
              { label: "Downtime", value: "Approximately 7–10 days, depending on the treatment chosen and individual skin response" },
              { label: "Sessions", value: "8–10 sessions" },
            ],
          },
          {
            name: "Laser Treatments for the Under-Eye & Lips",
            facts: [
              { label: "Duration", value: "Approximately 30 minutes–1 hour" },
              { label: "Downtime", value: "Approximately 7–10 days, depending on the treatment chosen and individual skin response" },
              { label: "Sessions", value: "8–10 sessions" },
            ],
          },
          {
            name: "Skin Boosters",
            facts: [
              { label: "Duration", value: "Approximately 30 minutes–1 hour" },
              { label: "Downtime", value: "Approximately 7–10 days, depending on the treatment chosen and individual skin response" },
              { label: "Sessions", value: "8–10 sessions" },
            ],
          },
          {
            name: "Microneedling",
            facts: [
              { label: "Duration", value: "Approximately 30 minutes–1 hour" },
              { label: "Downtime", value: "Approximately 7–10 days, depending on the treatment chosen and individual skin response" },
              { label: "Sessions", value: "8–10 sessions" },
            ],
          },
        ],
        about:
          "Dark circles and lip pigmentation can occur due to multiple factors, so the first step is to understand the underlying cause and customise treatment accordingly. Beyond appropriate topical and systemic care, in-clinic treatment options may also be recommended.",
        suitability: [
          "You have pigmentation, uneven tone, or dullness around your eyes.",
          "You have pigmentation, uneven tone, or dullness around your lips.",
        ],
        benefits: [
          { icon: "ri-search-eye-line", title: "Cause-Specific Treatment", description: "Treatment is tailored to the underlying cause of your pigmentation." },
          { icon: "ri-sparkling-2-line", title: "Brighter Under-Eyes & Lips", description: "Fades pigmentation and evens out tone around the eyes and lips." },
          { icon: "ri-shield-check-line", title: "Complete Care Plan", description: "Combines topical, systemic, and in-clinic treatment for lasting results." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We assess the underlying cause of your pigmentation before recommending a treatment." },
          { number: "02", title: "Preparation", description: "The treatment area is cleansed and prepped for your chosen procedure." },
          { number: "03", title: "Treatment", description: "Peels, laser treatment, skin boosters, or microneedling are applied as needed." },
          { number: "04", title: "Aftercare", description: "You'll be guided through post-treatment care and sun protection at home." },
        ],
        faqs: [],
      },
      {
        slug: "skin-hydration-rejuvenation",
        title: "Skin Hydration & Rejuvenation",
        desc: "A comprehensive refresh for dull, dehydrated skin, restoring hydration and radiance.",
        img: skinRejuvenationImg,
        treatmentOptions: ["HydraFacial", "Mesotherapy", "Oxygenio Facial", "Skin Boosters", "Microneedling"],
        specs: [
          {
            name: "HydraFacial",
            facts: [
              { label: "Duration", value: "Approximately 1–1.5 hours" },
              { label: "Downtime", value: "Treatment-dependent, ranging from none to a few days" },
              { label: "Sessions", value: "A series of 6–8 sessions may be recommended, depending on the treatment and individual skin needs" },
              { label: "Results", value: "From 1st session onwards" },
            ],
          },
          {
            name: "Mesotherapy",
            facts: [
              { label: "Duration", value: "Approximately 1–1.5 hours" },
              { label: "Downtime", value: "Treatment-dependent, ranging from none to a few days" },
              { label: "Sessions", value: "A series of 6–8 sessions may be recommended, depending on the treatment and individual skin needs" },
              { label: "Results", value: "From 1st session onwards" },
            ],
          },
          {
            name: "Oxygenio Facial",
            facts: [
              { label: "Duration", value: "Approximately 1–1.5 hours" },
              { label: "Downtime", value: "Treatment-dependent, ranging from none to a few days" },
              { label: "Sessions", value: "A series of 6–8 sessions may be recommended, depending on the treatment and individual skin needs" },
              { label: "Results", value: "From 1st session onwards" },
            ],
          },
          {
            name: "Skin Boosters",
            facts: [
              { label: "Duration", value: "Approximately 1–1.5 hours" },
              { label: "Downtime", value: "Treatment-dependent, ranging from none to a few days" },
              { label: "Sessions", value: "A series of 6–8 sessions may be recommended, depending on the treatment and individual skin needs" },
              { label: "Results", value: "From 1st session onwards" },
            ],
          },
          {
            name: "Microneedling",
            facts: [
              { label: "Duration", value: "Approximately 1–1.5 hours" },
              { label: "Downtime", value: "Treatment-dependent, ranging from none to a few days" },
              { label: "Sessions", value: "A series of 6–8 sessions may be recommended, depending on the treatment and individual skin needs" },
              { label: "Results", value: "From 1st session onwards" },
            ],
          },
        ],
        about:
          "For dull, dehydrated, or tired-looking skin that needs an overall refresh and boost of radiance, our treatments focus on improving hydration, plumpness, texture, and overall skin quality for a fresh, healthy-looking complexion.",
        suitability: [
          "You want well-hydrated, plump, dewy-looking skin.",
          "You want an overall skin pick-me-up.",
        ],
        benefits: [
          { icon: "ri-sparkling-2-line", title: "Overall Refresh", description: "Improves hydration, plumpness, and texture in one protocol." },
          { icon: "ri-drop-line", title: "Restores Hydration", description: "Replenishes moisture for a healthier-looking complexion." },
          { icon: "ri-heart-pulse-line", title: "Revives Dull Skin", description: "Brings back a healthy, awake appearance to tired skin." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We assess your overall skin health and rejuvenation goals." },
          { number: "02", title: "Preparation", description: "Skin is cleansed and prepped for your chosen combination therapy." },
          { number: "03", title: "Treatment", description: "A HydraFacial, mesotherapy, Oxygenio facial, skin boosters, or microneedling is performed, based on your skin's needs." },
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
  hair: [
      {
        slug: "prp-hair-therapy",
        title: "PRP Hair Therapy",
        desc: "Platelet-rich plasma therapy to stimulate natural hair regrowth.",
        img: prpTherapyImg,
        specs: [
          {
            name: null,
            facts: [
              { label: "Duration", value: "Approximately 1–2 hours" },
              { label: "Downtime", value: "Approximately 24 hours" },
              { label: "Sessions", value: "A series of 6–8 sessions may be recommended, depending on your hair loss and treatment response" },
              { label: "Results", value: "Visible improvement may begin after 3–6 sessions, varying depending on the underlying cause and individual response" },
            ],
          },
        ],
        about:
          "PRP (Platelet-Rich Plasma) is a treatment that uses your own blood. A small sample is collected and centrifuged to concentrate the platelets and growth factors, which are then injected into the scalp to support hair growth and improve hair density.",
        suitability: [
          "You have male pattern hair loss (MPHL).",
          "You have female pattern hair loss (FPHL).",
          "You have diffuse hair fall.",
          "You have alopecia areata (AA).",
          "You want overall hair and scalp rejuvenation.",
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
        slug: "gfc-hair-therapy",
        title: "GFC Hair Therapy",
        desc: "Growth factor concentrate therapy for advanced hair restoration.",
        img: gfcTherapyImg,
        specs: [
          {
            name: null,
            facts: [
              { label: "Duration", value: "Approximately 1–2 hours" },
              { label: "Downtime", value: "Approximately 24 hours" },
              { label: "Sessions", value: "A series of 6–8 sessions may be recommended, depending on your hair loss and treatment response" },
              { label: "Results", value: "Visible improvement may be noticed progressively over 3–6 sessions, varying depending on the underlying cause and individual response" },
            ],
          },
        ],
        about:
          "GFC (Growth Factor Concentrate) is an advanced hair rejuvenation treatment that uses your own blood. The blood is processed to isolate and concentrate growth factors, which are then injected into the scalp to support hair growth, improve hair density, and promote healthier hair follicles.",
        suitability: [
          "You have male pattern hair loss (MPHL).",
          "You have female pattern hair loss (FPHL).",
          "You have diffuse hair fall.",
          "You have alopecia areata (AA).",
          "You want overall hair and scalp rejuvenation.",
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
        slug: "microneedling-for-hair",
        title: "Microneedling for Hair",
        desc: "Collagen-induction therapy to support hair growth and follicle health.",
        img: microneedlingForHairImg,
        specs: [
          {
            name: null,
            facts: [
              { label: "Duration", value: "Approximately 1–2 hours" },
              { label: "Downtime", value: "Approximately 24 hours" },
              { label: "Sessions", value: "A series of 6–8 sessions may be recommended, depending on your hair loss and treatment response" },
              { label: "Results", value: "Visible improvement may be noticed progressively over 3–6 sessions, varying depending on the underlying cause and individual response" },
            ],
          },
        ],
        about:
          "Microneedling creates controlled micro-injuries in the scalp, stimulating the body's natural healing response and enhancing the release of growth factors. This can help support hair growth and improve the health and density of hair follicles.",
        suitability: [
          "You have male pattern hair loss (MPHL).",
          "You have female pattern hair loss (FPHL).",
          "You have diffuse hair fall.",
          "You have alopecia areata (AA).",
          "You want overall hair and scalp rejuvenation.",
        ],
        benefits: [
          { icon: "ri-heart-pulse-line", title: "Stimulates Healing", description: "Triggers your scalp's natural healing response to support hair growth." },
          { icon: "ri-sparkling-2-line", title: "Boosts Growth Factors", description: "Enhances the release of growth factors at the follicle level." },
          { icon: "ri-shield-check-line", title: "Minimally Invasive", description: "A simple in-clinic procedure with minimal downtime." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We assess your scalp and hair loss pattern to confirm suitability." },
          { number: "02", title: "Preparation", description: "The scalp is cleansed and, if needed, numbed for comfort." },
          { number: "03", title: "Treatment", description: "A sterile microneedling device creates controlled micro-injuries across the scalp." },
          { number: "04", title: "Aftercare", description: "You'll get scalp-care guidance to support healing and regrowth." },
        ],
        faqs: [],
      },
      {
        slug: "exosome-hair-therapy",
        title: "Exosome Hair Therapy",
        desc: "A new-age hair rejuvenation treatment using signalling molecules to support scalp health.",
        img: exosomeHairTherapyImg,
        specs: [
          {
            name: null,
            facts: [
              { label: "Duration", value: "Approximately 1–2 hours" },
              { label: "Downtime", value: "Approximately 24 hours" },
              { label: "Sessions", value: "A series of 6–8 sessions may be recommended, depending on your hair loss and treatment response" },
              { label: "Results", value: "Visible improvement may be noticed progressively over 3–6 sessions, varying depending on the underlying cause and individual response" },
            ],
          },
        ],
        about:
          "Exosomes are a new-age hair rejuvenation treatment containing signalling molecules that may help support the scalp environment and promote healthier hair growth. The treatment is performed by microneedling the scalp, followed by a topical application of exosomes to the treated area.",
        suitability: [
          "You have male pattern hair loss (MPHL).",
          "You have female pattern hair loss (FPHL).",
          "You have diffuse hair fall.",
          "You have alopecia areata (AA).",
          "You want overall hair and scalp rejuvenation.",
        ],
        benefits: [
          { icon: "ri-sparkling-2-line", title: "New-Age Formula", description: "Uses signalling molecules to support a healthier scalp environment." },
          { icon: "ri-drop-line", title: "Enhanced Absorption", description: "Microneedling helps the exosomes reach deeper into the scalp." },
          { icon: "ri-heart-pulse-line", title: "Supports Healthier Growth", description: "Promotes an environment suited to stronger hair growth." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We assess your scalp and hair loss pattern to confirm suitability." },
          { number: "02", title: "Preparation", description: "The scalp is cleansed and prepped for microneedling." },
          { number: "03", title: "Treatment", description: "The scalp is microneedled, then exosomes are applied topically to the treated area." },
          { number: "04", title: "Aftercare", description: "You'll get scalp-care guidance to support the treated area as it heals." },
        ],
        faqs: [],
      },
      {
        slug: "scalp-peels-scrubs",
        title: "Scalp Peels & Scrubs",
        desc: "Medical-grade scalp peels and scrubs to deeply cleanse and refresh the scalp.",
        img: scalpPeelsScrubsImg,
        treatmentOptions: ["Medical-Grade Scalp Peels", "Medical-Grade Scalp Scrubs"],
        specs: [
          {
            name: "Medical-Grade Scalp Peels",
            facts: [
              { label: "Duration", value: "Approximately 30–60 minutes" },
              { label: "Downtime", value: "Minimal to none, depending on the treatment used" },
              { label: "Sessions", value: "Customised according to your scalp condition and individual needs" },
              { label: "Results", value: "The scalp may feel cleaner, fresher, and less greasy after the first session, with ongoing improvement with regular treatment" },
            ],
          },
          {
            name: "Medical-Grade Scalp Scrubs",
            facts: [
              { label: "Duration", value: "Approximately 30–60 minutes" },
              { label: "Downtime", value: "Minimal to none, depending on the treatment used" },
              { label: "Sessions", value: "Customised according to your scalp condition and individual needs" },
              { label: "Results", value: "The scalp may feel cleaner, fresher, and less greasy after the first session, with ongoing improvement with regular treatment" },
            ],
          },
        ],
        about:
          "Medical-grade scalp peels and scrubs are designed to deeply cleanse, exfoliate, and refresh the scalp, helping remove excess oil, buildup, and dead skin.",
        suitability: [
          "You have dandruff.",
          "You have a greasy or oily scalp.",
          "You have seborrhoeic dermatitis (SD).",
          "You have scalp buildup.",
          "You have a dull or congested scalp.",
        ],
        benefits: [
          { icon: "ri-drop-line", title: "Deep Cleansing", description: "Removes excess oil, buildup, and dead skin from the scalp." },
          { icon: "ri-heart-pulse-line", title: "Soothes Irritation", description: "Calms itchiness and inflammation at the scalp level." },
          { icon: "ri-shield-check-line", title: "Medical-Grade Care", description: "Goes beyond regular shampoos for lasting scalp health." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We assess your scalp condition and what's causing the buildup or irritation." },
          { number: "02", title: "Preparation", description: "The scalp is cleansed and prepped for your chosen peel or scrub." },
          { number: "03", title: "Treatment", description: "A medical-grade scalp peel or scrub is applied to deeply cleanse and exfoliate." },
          { number: "04", title: "Home Care", description: "You'll get a maintenance routine to keep your scalp feeling fresh and balanced." },
        ],
        faqs: [],
      },
  ],
  laser: [
      {
        slug: "under-eye-lip-pigmentation",
        title: "Under-Eye & Lip Pigmentation",
        desc: "Targeted laser treatment to brighten pigmentation around the under-eyes and lips.",
        img: underEyeLipsImg,
        specs: [
          {
            name: null,
            facts: [
              { label: "Sessions", value: "Typically 6–8 sessions may be recommended depending on the cause and severity of pigmentation" },
              { label: "Results", value: "Improvement may begin to become noticeable after 1–2 sessions, with progressive results over the course of treatment" },
              { label: "Downtime", value: "Approximately 7–10 days, depending on the treatment intensity and individual skin response" },
            ],
          },
        ],
        about:
          "Targeted laser treatments are designed to improve pigmentation and uneven skin tone around the under-eyes and lips, helping create a brighter, more even-looking appearance. Treatment is tailored to the underlying cause of your pigmentation, and may include laser therapy, evaluation of systemic factors, and recommended home care to support and maintain results.",
        suitability: [
          "You have under-eye pigmentation.",
          "You have dark lips.",
          "You have uneven pigmentation around your mouth.",
          "You have dull or uneven skin tone.",
        ],
        benefits: [
          { icon: "ri-search-eye-line", title: "Cause-Specific Treatment", description: "Tailored to the underlying cause of your pigmentation." },
          { icon: "ri-sparkling-2-line", title: "Brighter, Even Tone", description: "Improves pigmentation and unevenness around the eyes and lips." },
          { icon: "ri-shield-check-line", title: "Complete Care Plan", description: "Combines laser therapy with home care to support lasting results." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We identify the underlying cause of your pigmentation." },
          { number: "02", title: "Preparation", description: "The treatment area is cleansed and prepped." },
          { number: "03", title: "Treatment", description: "Targeted laser therapy is applied to the under-eye or lip area." },
          { number: "04", title: "Aftercare", description: "Sun protection and home care are recommended to support your results." },
        ],
        faqs: [],
      },
      {
        slug: "laser-for-body-pigmentation",
        title: "Laser for Body Pigmentation",
        desc: "Laser treatment to even out pigmentation and uneven skin tone on the body.",
        img: bodyPigmentationImg,
        specs: [
          {
            name: null,
            facts: [
              { label: "Sessions", value: "Typically 6–8 sessions may be recommended depending on the area, cause, and severity of pigmentation" },
              { label: "Results", value: "Improvement may be noticed after 1–2 sessions, with progressive results over the course of treatment" },
              { label: "Downtime", value: "Approximately 7–10 days, depending on the treatment intensity and individual skin response" },
            ],
          },
        ],
        about:
          "Laser treatment can help improve uneven skin tone and pigmentation on the body by targeting excess pigment and promoting a more even-looking complexion.",
        suitability: [
          "You have body hyperpigmentation.",
          "You have dark patches or uneven skin tone.",
          "You have post-inflammatory pigmentation.",
          "You have pigmentation caused by friction or inflammation.",
          "You have pigmentation on areas like your neck, underarms, elbows, or knees.",
        ],
        benefits: [
          { icon: "ri-flashlight-line", title: "Targets Excess Pigment", description: "Breaks down pigment to even out tone on the body." },
          { icon: "ri-sparkling-2-line", title: "Treats Multiple Areas", description: "Effective on the neck, underarms, elbows, knees, and more." },
          { icon: "ri-time-line", title: "Progressive Results", description: "Skin looks more even with each session." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We assess the area, cause, and severity of your pigmentation." },
          { number: "02", title: "Preparation", description: "The treatment area is cleansed and prepped." },
          { number: "03", title: "Treatment", description: "Laser is applied to target excess pigment in the affected area." },
          { number: "04", title: "Aftercare", description: "Sun protection is recommended to support your results." },
        ],
        faqs: [],
      },
      {
        slug: "laser-toning",
        title: "Laser Toning",
        desc: "Gentle laser toning to improve overall skin tone, brightness, and pigmentation.",
        img: laserToningImg,
        specs: [
          {
            name: null,
            facts: [
              { label: "Sessions", value: "Typically 6–8 sessions may be recommended depending on the concern and individual response" },
              { label: "Results", value: "Improvement may begin to become noticeable after 1–2 sessions, with progressive results over the course of treatment" },
              { label: "Downtime", value: "Approximately 7–10 days, depending on the treatment intensity and individual skin response" },
            ],
          },
        ],
        about:
          "Laser Toning is a gentle laser-based treatment designed to improve overall skin tone, brightness, and pigmentation. It can be used for concerns such as melasma, uneven skin tone, and other forms of hyperpigmentation.",
        suitability: [
          "You have hyperpigmentation.",
          "You have melasma.",
          "You have uneven skin tone.",
          "You have dullness and lack of radiance.",
        ],
        benefits: [
          { icon: "ri-flashlight-line", title: "Targets Deep Pigment", description: "Reaches pigmentation that topical treatments alone can't address." },
          { icon: "ri-sparkling-2-line", title: "Improves Clarity", description: "Builds toward a brighter, more even complexion over your course." },
          { icon: "ri-shield-check-line", title: "Gentle, Low-Energy Approach", description: "A gentle technology suited to melasma and sensitive pigmentation." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We assess your pigmentation depth and skin sensitivity." },
          { number: "02", title: "Preparation", description: "The treatment area is cleansed before laser application." },
          { number: "03", title: "Treatment", description: "Low-energy laser passes are applied across the skin." },
          { number: "04", title: "Aftercare", description: "Sun protection is essential to protect your results between sessions." },
        ],
        faqs: [],
      },
      {
        slug: "carbon-toning",
        title: "Carbon Toning",
        desc: "Carbon peel and laser treatment to refine pores, texture, and pigmentation.",
        img: carbonLaserFacialImg,
        specs: [],
        about:
          "Carbon Toning combines a carbon peel with TriBeam laser treatment. A layer of carbon is applied to the skin and then treated with the laser to help exfoliate the skin and remove surface impurities. It helps improve skin texture, tone, pore appearance, and acne, while also reducing the appearance of acne marks and pigmentation. Regular treatments may also help reduce the frequency of acne breakouts.",
        suitability: [
          "You have enlarged pores.",
          "You have acne-prone skin.",
          "You have acne marks.",
          "You have uneven skin tone.",
          "You have pigmentation.",
          "You have rough or uneven skin texture.",
        ],
        benefits: [
          { icon: "ri-flashlight-line", title: "Deep Pore Cleansing", description: "Draws out impurities and excess oil from deep within pores." },
          { icon: "ri-sparkling-2-line", title: "Refines Texture & Tone", description: "Improves pore appearance, texture, and pigmentation over time." },
          { icon: "ri-shield-check-line", title: "Helps Manage Acne", description: "May help reduce the frequency of acne breakouts with regular treatment." },
        ],
        procedure: [
          { number: "01", title: "Preparation", description: "A layer of medical-grade carbon paste is applied to clean skin." },
          { number: "02", title: "Absorption", description: "The carbon settles into pores, binding to oil and impurities." },
          { number: "03", title: "Laser Treatment", description: "A laser passes over the skin, vaporizing the carbon along with debris." },
          { number: "04", title: "Finish", description: "A calming serum and SPF complete the session." },
        ],
        faqs: [],
      },
      {
        slug: "tattoo-removal",
        title: "Tattoo Removal",
        desc: "Safe, effective breakdown of tattoo ink using our premium Q-Switched TriBeam Laser.",
        img: tattooRemovalImg,
        specs: [
          {
            name: null,
            facts: [
              { label: "Sessions", value: "Typically 8–10 sessions may be required, depending on the tattoo and individual response" },
              { label: "Results", value: "The tattoo fades progressively with each session, with the extent of clearance varying based on pigment colour, tattoo depth, size, and age" },
            ],
          },
        ],
        about:
          "Tattoo removal is performed using our premium Q-Switched TriBeam Laser, which targets tattoo pigment with high precision to gradually break it down while minimising the risk of skin damage.",
        suitability: [
          "You want to fade or remove an unwanted tattoo, of any size or colour.",
          "You want treatment customised to your tattoo's pigment, skin type, and location.",
        ],
        benefits: [
          { icon: "ri-flashlight-line", title: "High-Precision Ink Breakdown", description: "Our Q-Switched TriBeam Laser targets tattoo pigment with precision." },
          { icon: "ri-shield-check-line", title: "Medically Supervised", description: "Performed with proper aftercare protocols to protect your skin." },
          { icon: "ri-time-line", title: "Gradual, Safe Fading", description: "Sessions are spaced to allow safe healing between treatments." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We assess your tattoo's ink colors, size, and skin type." },
          { number: "02", title: "Preparation", description: "The area is cleansed and a numbing agent applied if needed." },
          { number: "03", title: "Treatment", description: "Q-Switched TriBeam Laser pulses break down the tattoo ink." },
          { number: "04", title: "Aftercare", description: "Detailed wound care instructions support healing between sessions." },
        ],
        faqs: [],
      },
      {
        slug: "laser-hair-reduction",
        title: "Laser Hair Reduction",
        desc: "Safe, effective, long-lasting hair reduction using Primelase technology.",
        img: laserHairReductionImg,
        specs: [
          {
            name: null,
            facts: [
              { label: "Duration", value: "Treatment time varies depending on the body area being treated" },
              { label: "Sessions", value: "Typically 6–7 sessions, followed by maintenance sessions as required" },
              { label: "Results", value: "Progressive hair reduction is seen with each session, varying depending on the area, hair type, skin tone, and individual response" },
            ],
          },
        ],
        about:
          "We use Primelase, a premium laser hair-reduction system featuring ultra-short pulse technology designed to deliver effective hair reduction, including on finer hair, with minimal discomfort. It's suitable for all skin tones and genders, with treatment parameters customised to your skin and hair type.",
        suitability: [
          "You want to reduce the need for frequent waxing or shaving.",
          "You want to treat strawberry skin.",
          "You want to improve Keratosis Pilaris (KP).",
          "You want to reduce ingrown hairs.",
          "You want to manage unwanted facial or body hair.",
          "You want to improve uneven skin tone associated with hair growth and shaving.",
        ],
        benefits: [
          { icon: "ri-flashlight-line", title: "Long-Lasting Results", description: "Significantly reduces hair regrowth over a full treatment course." },
          { icon: "ri-shield-check-line", title: "Safe for All Skin Tones", description: "Suitable for all skin tones and genders." },
          { icon: "ri-time-line", title: "Saves Time", description: "Cuts down on regular shaving, waxing, or threading routines." },
        ],
        procedure: [
          { number: "01", title: "Consultation", description: "We assess your hair and skin type to set laser parameters." },
          { number: "02", title: "Preparation", description: "The area is cleansed and shaved just before treatment." },
          { number: "03", title: "Treatment", description: "Laser pulses target hair follicles across the treatment area." },
          { number: "04", title: "Aftercare", description: "Soothing gel and sun protection guidance are provided post-session." },
        ],
        faqs: [],
      },
  ],
};

export function getAllCategories() {
  return Object.keys(SERVICES).map((category) => getCategory(category));
}

export function getCategory(categorySlug) {
  const services = SERVICES[categorySlug];
  if (!services) return null;
  return {
    category: categorySlug,
    label: getCategoryLabel(categorySlug),
    description: CATEGORY_DESCRIPTIONS[categorySlug],
    services,
  };
}

export function getServiceDetails(slug) {
  for (const category of Object.keys(SERVICES)) {
    const service = SERVICES[category].find((s) => s.slug === slug);
    if (service) return { ...service, category, categoryLabel: getCategoryLabel(category) };
  }
  return null;
}
