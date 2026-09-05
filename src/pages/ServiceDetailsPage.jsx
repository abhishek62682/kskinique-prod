import { useParams, Link } from "react-router-dom";

import PageHero from "../components/common/PageHero";
import AboutTreatment from "../components/serviceDetails/AboutTreatment";
import SuitabilitySection from "../components/serviceDetails/SuitabilitySection";
import BenefitsList from "../components/serviceDetails/BenefitsList";
import ProcedureSteps from "../components/serviceDetails/ProcedureSteps";
import { getServiceDetails } from "../config/services";
import SEO from "../components/seo/SEO";
import {
  SITE_URL,
  CLINIC_INFO,
  absoluteUrl,
  buildServiceTitle,
  buildServiceDescription,
  buildBreadcrumbSchema,
} from "../config/seo";

export default function ServiceDetailsPage() {
  const { category, slug } = useParams();
  const service = getServiceDetails(slug);

  if (!service) {
    return (
      <main className="w-full bg-surface">
        <SEO
          title="Treatment Not Found | Skinique Dermatology"
          description="The treatment you're looking for doesn't exist or may have been moved."
          canonical={`/services/${category}/${slug}`}
          robots="noindex, nofollow"
        />
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

  const canonicalPath = `/services/${service.category}/${service.slug}`;
  const breadcrumbs = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: service.categoryLabel, to: `/services/${service.category}` },
    { label: service.title },
  ];
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.about || service.desc,
    url: absoluteUrl(canonicalPath),
    provider: {
      "@type": "MedicalClinic",
      name: CLINIC_INFO.name,
      url: `${SITE_URL}/`,
    },
  };

  return (
    <main className="w-full">
      <SEO
        title={buildServiceTitle(service.title)}
        description={buildServiceDescription(service)}
        canonical={canonicalPath}
        image={service.img}
        type="article"
        schema={[buildBreadcrumbSchema(breadcrumbs, canonicalPath), serviceSchema]}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        badgeText={`${service.category.charAt(0).toUpperCase()}${service.category.slice(1)} Treatment`}
        heading={service.title}
        description={service.desc}
      />
      <AboutTreatment
        title={service.title}
        about={service.about}
        image={service.img}
        quickFacts={service.quickFacts}
        treatmentOptions={service.treatmentOptions}
        specs={service.specs}
      />
      <SuitabilitySection points={service.suitability} />
      <BenefitsList benefits={service.benefits} />
      <ProcedureSteps steps={service.procedure} />
    </main>
  );
}
