// DoctorSection.jsx

export default function DoctorSection() {
  return (
    <section className="w-full bg-linear-to-br from-primary-dark via-primary-dark to-primary-dark/90 relative overflow-hidden pt-[50px] md:pt-[65px] lg:pt-[100px]">
      <div className="w-full max-w-7xl mx-auto pl-4 sm:pl-6">
        <div className="flex flex-wrap-reverse lg:flex-nowrap relative items-center gap-6 sm:gap-8 lg:gap-12">
          <div className="w-full lg:w-1/3 flex items-end justify-center lg:justify-start pt-2 lg:pt-0">
            <img
              src="/doctor.png"
              alt="Dr. Kajal Komalan"
              className="h-80 sm:h-100 lg:h-125 w-auto max-w-full object-contain object-bottom"
            />
          </div>
          <div className="w-full lg:w-2/3 flex flex-col justify-center gap-4 sm:gap-6">
            <h2 className="text-[24px] sm:text-[32px] lg:text-[38px] font-primary text-text-light leading-[1.2] text-left">
              Meet the Dermatologist
              <br />
              Dr. Kajal Komalan
            </h2>
            <div className="flex flex-col gap-4 text-left">
              <p className="text-[13px] sm:text-[14px] leading-[1.75] text-text-light/85 font-secondary">
                Dr. Kajal Komalan (MBBS, DDV) believes in combining scientific dermatology with
                aesthetic artistry to create natural, long-lasting results.
              </p>
              <p className="text-[13px] sm:text-[14px] leading-[1.75] text-text-light/85 font-secondary">
                Every consultation focuses on understanding the patient's concerns and designing
                a personalized treatment plan. She leads Skinique across Navi Mumbai, equipped
                with advanced diagnostic and laser technology for personalized skin and
                aesthetic care.
              </p>
              <p className="text-[13px] sm:text-[14px] leading-[1.75] text-text-light/85 font-secondary">
                From acne and pigmentation to hair restoration and laser treatments, she brings
                the same evidence-based approach to every concern. Patients often describe her
                consultations as thorough yet unhurried, with every question answered and every
                option explained clearly before any treatment begins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
