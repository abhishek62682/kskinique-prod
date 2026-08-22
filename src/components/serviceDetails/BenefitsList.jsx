// BenefitsList.jsx

export default function BenefitsList({ benefits = [] }) {
  return (
    <section className="w-full bg-surface">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="flex flex-col items-center gap-3 text-center mb-16 sm:mb-20">
          <div className="py-1.5 px-3 flex items-center gap-2.5 rounded-[30px] bg-primary-05 w-fit">
            <div className="size-1.5 rounded-full bg-primary-label" />
            <span className="text-[12px] leading-4 font-medium uppercase text-primary-label font-secondary tracking-wide">
              Benefits
            </span>
          </div>
          <h2 className="text-[38px] sm:text-[46px] md:text-[52px] font-primary text-primary-dark leading-none">
            Why Choose This Treatment
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-3xl bg-primary-05 flex flex-col items-center text-center px-6 pt-9 pb-8 gap-4 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.33px)]"
            >
              <span className="size-14 flex items-center justify-center rounded-full bg-surface text-primary-dark text-[22px]">
                <i className={benefit.icon} />
              </span>
              <h3 className="text-[19px] sm:text-[20px] font-primary text-primary-dark leading-tight">
                {benefit.title}
              </h3>
              <p className="text-[13px] sm:text-[14px] leading-[1.6] text-text-soft font-secondary">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
