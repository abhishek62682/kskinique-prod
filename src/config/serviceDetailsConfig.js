// serviceDetailsConfig.js
//
// Template content for the Service Details page. `getServiceDetails(slug)` currently
// applies the same DEFAULT_* content to every service — replace the DEFAULT_* blocks
// below with real per-service data (e.g. a map keyed by slug) when that content is ready.

import { SERVICES_CONFIG } from "./servicesConfig";
import { slugify } from "../utils/slugify";

const ALL_SERVICES = Object.entries(SERVICES_CONFIG).flatMap(([category, items]) =>
  items.map((item) => ({ ...item, category, slug: slugify(item.title) }))
);

const DEFAULT_QUICK_FACTS = [
  { label: "Duration", value: "30–45 mins" },
  { label: "Sessions", value: "4–6 sessions" },
  { label: "Downtime", value: "None to minimal" },
  { label: "Results", value: "Visible in 2–3 sessions" },
];

const DEFAULT_SUITABILITY = [
  "You're looking for a treatment tailored to your specific skin or hair concern.",
  "You want a solution backed by clinical expertise rather than generic, one-size-fits-all products.",
  "You've tried home remedies or over-the-counter products without lasting results.",
  "You're in good general health and have no active infections in the treatment area.",
];

const DEFAULT_BENEFITS = [
  {
    icon: "ri-shield-check-line",
    title: "Clinically Proven",
    description: "Backed by dermatologist-led protocols and safe, tested techniques.",
  },
  {
    icon: "ri-heart-pulse-line",
    title: "Personalized Care",
    description: "Every plan is tailored to your skin type, concern, and goals.",
  },
  {
    icon: "ri-sparkling-2-line",
    title: "Visible Results",
    description: "Designed to deliver noticeable, lasting improvement over time.",
  },
  {
    icon: "ri-time-line",
    title: "Minimal Downtime",
    description: "Get back to your routine quickly with little to no recovery time.",
  },
];

const DEFAULT_PROCEDURE = [
  {
    number: "01",
    title: "Consultation",
    description: "We assess your concerns, skin type, and medical history to confirm suitability.",
  },
  {
    number: "02",
    title: "Preparation",
    description: "The treatment area is cleansed and prepped, with a numbing agent applied if needed.",
  },
  {
    number: "03",
    title: "Treatment",
    description: "Our specialist performs the procedure using advanced, clinically approved techniques.",
  },
  {
    number: "04",
    title: "Aftercare",
    description: "You'll receive personalized aftercare guidance to support recovery and results.",
  },
];

const DEFAULT_FAQS = [
  {
    q: "Is this treatment painful?",
    a: "Most patients experience minimal discomfort. Numbing agents are used where needed to keep you comfortable throughout.",
  },
  {
    q: "How many sessions will I need?",
    a: "This depends on your specific concern and how your skin responds. Your specialist will share a realistic plan during your consultation.",
  },
  {
    q: "When will I see results?",
    a: "Some improvements are visible within the first few sessions, while full results typically build over the full course of treatment.",
  },
  {
    q: "Is there any downtime after treatment?",
    a: "Most of our treatments involve little to no downtime, so you can usually return to your daily routine right away.",
  },
];

export function getServiceDetails(slug) {
  const service = ALL_SERVICES.find((item) => item.slug === slug);
  if (!service) return null;

  return {
    ...service,
    quickFacts: DEFAULT_QUICK_FACTS,
    about: `${service.desc} Our approach combines advanced technology with a personalised consultation, so every step of your ${service.title.toLowerCase()} journey is guided by experienced specialists at Skinique.`,
    suitability: DEFAULT_SUITABILITY,
    benefits: DEFAULT_BENEFITS,
    procedure: DEFAULT_PROCEDURE,
    faqs: DEFAULT_FAQS,
  };
}
