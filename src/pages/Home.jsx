import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Stats from "../components/home/Stats";
import ServicesSection from "../components/home/ServicesSection";
import DoctorSection from "../components/home/DoctorSection";
import WhyUsSection from "../components/home/WhyUsSection";
import FaqSection from "../components/home/FaqSection";
import TestimonialSection from "../components/home/TestimonialSection";
import SEO from "../components/seo/SEO";
import { SITE_NAME, SITE_URL, CLINIC_INFO, absoluteUrl } from "../config/seo";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: `${SITE_URL}/`,
};

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: CLINIC_INFO.name,
  url: `${SITE_URL}/`,
  logo: absoluteUrl("/logo.png"),
  image: absoluteUrl("/logo.png"),
  telephone: CLINIC_INFO.telephone,
  email: CLINIC_INFO.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: CLINIC_INFO.streetAddress,
    addressLocality: CLINIC_INFO.addressLocality,
    addressRegion: CLINIC_INFO.addressRegion,
    postalCode: CLINIC_INFO.postalCode,
    addressCountry: CLINIC_INFO.addressCountry,
  },
  openingHours: CLINIC_INFO.openingHours,
  sameAs: CLINIC_INFO.sameAs,
};

const HomePage = () => {
  return (
    <>
      <SEO
        title="Skinique Dermatology & Aesthetics | Dermatologist in Navi Mumbai"
        description="Expert dermatology, skin, hair and laser treatments at Skinique Dermatology & Aesthetics. Consult Dr. Kajal Komalan in Navi Mumbai."
        canonical="/"
        schema={[websiteSchema, clinicSchema]}
      />
      <Hero />

      <div className="main-content bg-surface-light  relative z-10  w-full  ">
        <Stats />
        <About />

        <ServicesSection />

        <DoctorSection />

        <WhyUsSection />

        <TestimonialSection />

        <FaqSection />
      </div>
    </>
  );
};

export default HomePage;
