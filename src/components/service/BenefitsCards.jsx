// BenefitsCards.jsx

export default function BenefitsCards() {
  return (
    <section className="w-full bg-surface">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
         {/* Header */}
          <div className="flex flex-col items-center gap-3 text-center mb-16 sm:mb-20">
            <div className="py-1.5 px-3 flex items-center gap-2.5 rounded-[30px] bg-primary-05 w-fit">
              <div className="size-1.5 rounded-full bg-primary-label"></div>
              <span className="text-[12px] leading-4 font-medium uppercase text-primary-label font-secondary tracking-wide">
                Benefits
              </span>
            </div>
            <h2 className="text-[38px] sm:text-[46px] md:text-[52px] font-primary text-primary-dark leading-none">
              Expert care, <br /> proven results
            </h2>
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

          {/* Card 1: Qualified Dermatologist */}
          <div className="rounded-3xl bg-primary-05 flex flex-col items-center text-center px-7 pt-9 pb-8 gap-6">
            <h3 className="text-[24px] sm:text-[26px] font-primary text-primary-dark leading-tight">
              Qualified Dermatologist
            </h3>

            {/* decorative avatar badge */}
            <div className="relative flex items-center justify-center py-2">

              <img
                src="https://framerusercontent.com/images/a5Kgi5WpwsydAChd328uIr4gB6I.svg?width=162&height=70"
                alt="Dermatologist"
                className=""
              />


              <img className="size-10 absolute rounded-full" src="https://framerusercontent.com/images/1EZhAxM1tjwLB5GmrjQlLPUMYjE.jpg?width=150&height=150" alt="" />
            </div>

            <p className="text-[14px] sm:text-[15px] leading-[1.7] text-text-soft font-secondary">
              MBBS, DDV certified — every <br /> treatment is physician-led
            </p>
          </div>

          {/* Card 2: USFDA Approved Technology */}
          <div className="relative rounded-[24px] bg-primary-05 overflow-hidden px-7 pt-9 pb-8 flex flex-col gap-3">
            <h3 className="text-[24px] sm:text-[26px] font-primary text-primary-dark leading-tight">
              USFDA Approved Technology
            </h3>
            <p className="text-[14px] sm:text-[15px] leading-[1.7] text-text-soft font-secondary ">
              Advanced lasers and aesthetic equipment cleared for safety and clinical efficacy.
            </p>

            <img className="absolute bottom-0" src="https://framerusercontent.com/images/HcwBqWjnj50hNIVdoZYRVO3inRk.svg?width=479&height=110" alt="" />

          </div>

          {/* Card 3: Strict Hygiene Protocols */}
          <div className="rounded-[24px] bg-primary-05 flex flex-col items-center justify-center text-center px-7 pt-9 pb-8 gap-4">
            <span className="size-14 flex items-center justify-center rounded-full bg-surface text-primary-dark text-[22px]">
              <i className="ri-shield-check-line" />
            </span>
            <h3 className="text-[24px] sm:text-[26px] font-primary text-primary-dark leading-tight">
              Strict Hygiene Protocols
            </h3>
            <p className="text-[14px] sm:text-[15px] text-text-soft font-secondary">
              Sterile, single-use consumables and clinical-grade sanitation at every step.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}