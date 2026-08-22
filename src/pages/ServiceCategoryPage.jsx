import { useParams, Link } from "react-router-dom";

import PageHero from "../components/common/PageHero";
import TreatmentsGrid from "../components/service/TreatmentsGrid";
import BenefitsCards from "../components/service/BenefitsCards";
import ProcessSection from "../components/service/ProcessSection";
import { getCategory } from "../config/services";

export default function ServiceCategoryPage() {
  const { category } = useParams();
  const cat = getCategory(category);

  if (!cat) {
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
        heading={`${cat.label} Treatments`}
        description={cat.description}
      />
      <TreatmentsGrid categories={[cat]} />
      <BenefitsCards />
      <ProcessSection />
    </main>
  );
}
