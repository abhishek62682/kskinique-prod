// AboutTreatment.jsx

export default function AboutTreatment({ title, about, image, quickFacts = [] }) {
  return (
    <section className="w-full bg-surface">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="py-1.5 px-3 flex items-center gap-2.5 rounded-[30px] bg-primary-05 w-fit">
              <div className="size-1.5 rounded-full bg-primary-label" />
              <span className="text-[12px] leading-4 font-medium uppercase text-primary-label font-secondary tracking-wide">
                About the Treatment
              </span>
            </div>

            <h2 className="text-[32px] sm:text-[38px] font-primary text-primary-dark leading-tight">
              What is {title}?
            </h2>

            <p className="text-[14px] sm:text-[15px] text-text-soft leading-[1.7] font-secondary">
              {about}
            </p>

            {quickFacts.length > 0 && (
              <div className="grid grid-cols-2 gap-4 pt-2">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="rounded-2xl bg-primary-05 px-5 py-4 flex flex-col gap-1">
                    <span className="text-[12px] uppercase tracking-wide text-primary-label font-secondary font-medium">
                      {fact.label}
                    </span>
                    <span className="text-[15px] sm:text-[16px] font-primary text-primary-dark">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="w-full lg:w-1/2">
            <div className="w-full h-[320px] sm:h-[400px] lg:h-[460px] rounded-[30px] overflow-hidden bg-primary-05">
              <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
