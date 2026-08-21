import { useParams, Link } from "react-router-dom";

import PageHero from "../components/common/PageHero";
import AboutTreatment from "../components/serviceDetails/AboutTreatment";
import SuitabilitySection from "../components/serviceDetails/SuitabilitySection";
import BenefitsList from "../components/serviceDetails/BenefitsList";
import ProcedureSteps from "../components/serviceDetails/ProcedureSteps";
import ServiceFaqSection from "../components/serviceDetails/ServiceFaqSection";
import CtaSection from "../components/home/CtaSection";
import { getServiceDetails } from "../config/serviceDetailsConfig";

export default function ServiceDetailsPage() {
  const { category, slug } = useParams();
  const service = getServiceDetails(slug);

  if (!service) {
    return (
      <main className="w-full bg-surface">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-28 flex flex-col items-center gap-6 text-center">
          <h1 className="text-[32px] font-primary text-primary-dark">Service not found</h1>
          <p className="text-[14px] sm:text-[15px] text-text-soft font-secondary">
            The treatment you're looking for doesn't exist or may have been moved.
          </p>
          <Link to={`/services/${category}`} className="text-[14px] font-secondary text-primary-label underline underline-offset-4">
            Back to all services
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full">
      <PageHero
        badgeText={`${service.category.charAt(0).toUpperCase()}${service.category.slice(1)} Treatment`}
        heading={service.title}
        description={service.desc}
      />
      <AboutTreatment
        title={service.title}
        about={service.about}
        image={service.img}
        quickFacts={service.quickFacts}
      />
      <SuitabilitySection points={service.suitability} />
      <BenefitsList benefits={service.benefits} />
      <ProcedureSteps steps={service.procedure} />
      <ServiceFaqSection faqs={service.faqs} />
      <CtaSection />
    </main>
  );
}
