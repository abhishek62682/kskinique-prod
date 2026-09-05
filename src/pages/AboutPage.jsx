// AboutPage.jsx

import UspSection from "../components/home/UspSection";

import OurStorySection from "../components/about/OurStorySection";
import ClinicGallery from "../components/about/ClinicGallery";
import DoctorSection from "../components/about/Doctorsection";
import StatsSection from "../components/about/StatsSection";

import PageHero from "../components/common/PageHero";
import SEO from "../components/seo/SEO";
import { buildBreadcrumbSchema } from "../config/seo";

const breadcrumbs = [{ label: "Home", to: "/" }, { label: "About" }];

export default function AboutPage() {
  return (
    <div className="page-content bg-surface-light relative z-[10]">

     <SEO
        title="About Dr. Kajal Komalan | Skinique Dermatology"
        description="Learn about Dr. Kajal Komalan, her approach to dermatology, aesthetic medicine and personalised skin and hair care at Skinique Dermatology."
        canonical="/about"
        schema={buildBreadcrumbSchema(breadcrumbs, "/about")}
      />

     <PageHero
  breadcrumbs={breadcrumbs}
  badgeText="About Us"
  heading={
    <>
      Where science meets <span className="text-primary-label">genuine</span> care.
    </>
  }
  description="Skinique was built on a simple belief  great skincare shouldn't feel clinical. Meet the philosophy and expertise behind every treatment we offer."
/>

      <OurStorySection />
      <DoctorSection />
      <StatsSection />
      <UspSection />
      
      
       <ClinicGallery />

    </div>
  );
}