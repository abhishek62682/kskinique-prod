import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Stats from "../components/home/Stats";
import ServicesSection from "../components/home/ServicesSection";
import DoctorSection from "../components/home/DoctorSection";
import WhyUsSection from "../components/home/WhyUsSection";
import FaqSection from "../components/home/FaqSection";
import TestimonialSection from "../components/home/TestimonialSection";

const HomePage = () => {
  return (
    <>
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
