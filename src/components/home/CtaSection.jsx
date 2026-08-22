// CtaSection.jsx
import Button from "../ui/Button";
import ctaClinicImg from "../../assets/home/cta-clinic.webp";

export default function CtaSection() {
  return (
    <section className="bg-surface" >

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="relative rounded-[30px] overflow-hidden h-105 sm:h-125 lg:h-145">

        <img
          src={ctaClinicImg}
          alt="Skinique Clinic"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-overlay/50 via-overlay/20 to-transparent" />

        <div className="absolute bottom-0 left-0 p-8 sm:p-10 lg:p-12 flex flex-col gap-6 max-w-145">

          <div className="flex flex-col gap-2.5">
            <h3 className="text-[36px] sm:text-[42px] lg:text-[48px] font-primary font-normal text-text-light leading-[1.15]">
              Ready to transform your skin?
            </h3>
            <p className="text-[14px] sm:text-[15px] max-w-100 font-secondary font-normal text-text-light/70 leading-[1.6]">
              Schedule a consultation to discuss which treatments are right for you.
            </p>
          </div>

          <Button label="Book a Consultation" bgColor="#F7ECDF" />

        </div>

      </div>
      </div>

      

    </section>
  );
}