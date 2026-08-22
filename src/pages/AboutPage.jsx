// AboutPage.jsx

import UspSection from "../components/home/UspSection";

import OurStorySection from "../components/about/OurStorySection";
import DoctorSection from "../components/about/Doctorsection";
import StatsSection from "../components/about/StatsSection";

import PageHero from "../components/common/PageHero";

export default function AboutPage() {
  return (
    <div className="page-content bg-surface-light relative z-[10]">

     <PageHero
  badgeText="About Us"
  heading={
    <>
      Where science meets <span className="text-primary-label">genuine</span> care.
    </>
  }
  description="Skinique was built on a simple belief  great skincare shouldn't feel clinical. Meet the philosophy and expertise behind every treatment we offer."
/>

      <OurStorySection />
      <UspSection />
      <DoctorSection />
      <StatsSection />

    </div>
  );
}