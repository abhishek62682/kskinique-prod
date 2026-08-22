// SuitabilitySection.jsx

export default function SuitabilitySection({ points = [] }) {
  return (
    <section className="w-full bg-surface-alt">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="flex flex-col items-center gap-3 text-center mb-12 sm:mb-16">
          <div className="py-1.5 px-3 flex items-center gap-2.5 rounded-[30px] bg-primary-05 w-fit">
            <div className="size-1.5 rounded-full bg-primary-label" />
            <span className="text-[12px] leading-4 font-medium uppercase text-primary-label font-secondary tracking-wide">
              Suitability
            </span>
          </div>
          <h2 className="text-[38px] sm:text-[46px] md:text-[52px] font-primary text-primary-dark leading-none">
            Who Is It Suitable For?
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto">
          {points.map((point) => (
            <div
              key={point}
              className="flex items-start gap-4 rounded-[20px] bg-surface px-6 py-5 w-full sm:w-[calc(50%-10px)]"
            >
              <span className="size-7 shrink-0 flex items-center justify-center rounded-full bg-primary-05 text-primary-dark mt-0.5">
                <i className="ri-check-line text-[15px]" />
              </span>
              <p className="text-[14px] sm:text-[15px] text-text-soft leading-[1.6] font-secondary">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
