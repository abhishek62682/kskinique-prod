// testimonials.js
//
// Real Google review data for Skinique - Dr. Kajal Komalan
// (Maps cid: 17611080526173218198). Update this file when new reviews come in.
// Avatar images are downloaded from Google and stored locally as webp in
// ../assets/testimonials/ (see that folder to swap/update a photo).

import drShriyaVermaAvatar from "../assets/testimonials/dr-shriya-verma.webp";
import nivyaJomichanAvatar from "../assets/testimonials/nivya-jomichan.webp";
import mahimaGandhiAvatar from "../assets/testimonials/mahima-gandhi.webp";
import sreethiPillaiAvatar from "../assets/testimonials/sreethi-pillai.webp";
import niharikaJainAvatar from "../assets/testimonials/niharika-jain.webp";
import binuJoyAvatar from "../assets/testimonials/binu-joy.webp";
import saiquaTaghazzulAvatar from "../assets/testimonials/saiqua-taghazzul.webp";
import shreedharDhuleAvatar from "../assets/testimonials/shreedhar-dhule.webp";

export const GOOGLE_RATING = {
  rating: 5.0,
  mapsUrl: "https://www.google.com/maps?cid=17611080526173218198",
};

export const TESTIMONIALS = [
  {
    name: "Dr Shriya Verma",
    avatar: drShriyaVermaAvatar,
    rating: 5,
    concern: "Consultation",
    quote:
      "Had a consult with Dr Kajal and I must say that she cleared all my doubts very patiently. She is very well spoken and knowledgeable. It's a beautiful clinic…",
  },
  {
    name: "Nivya Jomichan",
    avatar: nivyaJomichanAvatar,
    rating: 5,
    concern: "HydraFacial",
    quote:
      "I'm so happy I visited Dr. Kajal Komalan for a HydraFacial and Vitamin C peel. She was incredibly thorough and understood my skin immediately, she even called…",
  },
  {
    name: "mahima gandhi",
    avatar: mahimaGandhiAvatar,
    rating: 5,
    concern: "HydraFacial",
    quote:
      "Kajal is an excellent dermat, she helped me understand about my skin and the procedure of hydra facial, and I could see great results after the hydra facial. I would definitely recommend other people to go for it.",
  },
  {
    name: "Sreethi Pillai",
    avatar: sreethiPillaiAvatar,
    rating: 5,
    concern: "Skin Care",
    quote:
      "The owner treats you herself and really cares about your skin like its her own. She's a true professional and someone you can fully trust with any skin issues. The clinic is wonderful too.",
  },
  {
    name: "Niharika Jain",
    avatar: niharikaJainAvatar,
    rating: 5,
    concern: "HydraFacial",
    quote:
      "Had my Hydra facial done here and the experience was really good. The doctor and staff were very professional, and my skin feels fresh and glowing. Very happy with the results. Highly recommended!",
  },
  {
    name: "Binu Joy",
    avatar: binuJoyAvatar,
    rating: 5,
    concern: "Carbon Laser Facial",
    quote:
      "If you want an immediate skin reset, you need a carbon laser facial. I got mine done by my favourite dermatologist, Dr. Kajal and my skin looks so much better. She's brilliant, trustworthy and genuinely caring.",
  },
  {
    name: "Saiqua Taghazzul",
    avatar: saiquaTaghazzulAvatar,
    rating: 5,
    concern: "Consultation",
    quote:
      "I recently consulted Dr Kajal for my skin concerns. She was very patient with all my queries and guided me through all my problems. She's highly professional…",
  },
  {
    name: "Shreedhar Dhule",
    avatar: shreedharDhuleAvatar,
    rating: 5,
    concern: "Hair Regrowth",
    quote:
      "I have great results after visiting Dr. Kajal Komalan madam for my hair regrowth.",
  },
];
