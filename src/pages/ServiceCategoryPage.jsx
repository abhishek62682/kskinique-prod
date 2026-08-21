import { useParams, Link } from "react-router-dom";

import PageHero from "../components/common/PageHero";
import TreatmentsGrid from "../components/service/TreatmentsGrid";
import BenefitsCards from "../components/service/BenefitsCards";
import ProcessSection from "../components/service/ProcessSection";
import CtaSection from "../components/home/CtaSection";
import { SERVICES_CONFIG } from "../config/servicesConfig";

const CATEGORY_LABELS = {
  skin: "Skin",
  hair: "Hair",
  laser: "Laser",
  cosmetic: "Cosmetic",
};

const CATEGORY_DESCRIPTIONS = {
  skin: "Dermatologist-led treatments for acne, pigmentation, texture, and every skin concern in between.",
  hair: "Restorative treatments to manage hair loss, scalp health, and long-term hair growth.",
  laser: "Advanced laser technology for hair reduction, scar reduction, tattoo removal, and more.",
  cosmetic: "Aesthetic treatments to smooth, lift, and refresh — with natural-looking results.",
};

export default function ServiceCategoryPage() {
  const { category } = useParams();
  const services = SERVICES_CONFIG[category];

  if (!services) {
    return (
      <main className="w-full bg-surface">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-28 flex flex-col items-center gap-6 text-center">
          <h1 className="text-[32px] font-primary text-primary-dark">Category not found</h1>
          <p className="text-[14px] sm:text-[15px] text-text-soft font-secondary">
            This treatment category doesn't exist or may have been moved.
          </p>
          <Link to="/services" className="text-[14px] font-secondary text-primary-label underline underline-offset-4">
            Back to all services
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full">
      <PageHero
        badgeText="Our Services"
        heading={`${CATEGORY_LABELS[category] ?? category} Treatments`}
        description={CATEGORY_DESCRIPTIONS[category]}
      />
      <TreatmentsGrid groupedServices={{ [category]: services }} />
      <BenefitsCards />
      <ProcessSection />
      <CtaSection />
    </main>
  );
}
