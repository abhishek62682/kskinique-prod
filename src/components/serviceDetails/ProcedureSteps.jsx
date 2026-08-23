// ProcedureSteps.jsx

export default function ProcedureSteps({
  badgeText = "Procedure",
  heading = "What to Expect",
  steps = [],
}) {
  return (
    <section className="bg-surface-alt">
      <div className="bg-surface-alt rounded-[30px] px-5 py-[100px] md:py-[130px] lg:py-[200px]">
        <div className="w-full max-w-7xl mx-auto">

          <div className="flex flex-col items-center gap-3 text-center mb-16 sm:mb-20">
            <div className="py-1.5 px-3 flex items-center gap-2.5 rounded-[30px] bg-primary-05 w-fit">
              <div className="size-1.5 rounded-full bg-primary-label"></div>
              <span className="text-[12px] leading-4 font-medium uppercase text-primary-label font-secondary tracking-wide">
                {badgeText}
              </span>
            </div>
            <h2 className="text-[38px] sm:text-[46px] md:text-[52px] font-primary text-primary-dark leading-none">
              {heading}
            </h2>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-20 sm:gap-y-24 lg:gap-y-0 list-none p-0 m-0">
            {steps.map((step) => (
              <li key={step.number} className="flex flex-col items-center relative">
                <div className="size-[110px] flex justify-center absolute -translate-y-1/2">
                  <div className="size-20 bg-surface-alt flex items-center justify-center rounded-full">
                    <span className="text-[26px] font-primary text-primary-dark leading-none">
                      {step.number}
                    </span>
                  </div>
                </div>

                <div className="w-full h-full flex flex-col items-center gap-2.5 text-center bg-surface rounded-[24px] pt-16 px-6 pb-9">
                  <h3 className="text-[20px] sm:text-[22px] font-primary text-primary-dark leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] leading-[1.7] text-text-soft font-secondary">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

        </div>
      </div>
    </section>
  );
}
