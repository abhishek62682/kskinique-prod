// AboutTreatment.jsx
import { useState, useRef, useEffect } from "react";

function FactsGrid({ facts, nested = false }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {facts.map((fact) => (
        <div
          key={fact.label}
          className={`rounded-2xl px-5 py-4 flex flex-col gap-1 ${nested ? "bg-surface" : "bg-primary-05"}`}
        >
          <span className="text-[12px] uppercase tracking-wide text-primary-label font-secondary font-medium">
            {fact.label}
          </span>
          <span className="text-[15px] sm:text-[16px] font-primary text-primary-dark">
            {fact.value}
          </span>
        </div>
      ))}
    </div>
  );
}

function TreatmentOptionAccordion({ group, open, onToggle }) {
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) setHeight(contentRef.current.scrollHeight);
  }, [group]);

  return (
    <div className="rounded-2xl bg-primary-05 overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
      >
        <span className="text-[14px] sm:text-[15px] font-primary text-primary-dark">
          {group.name}
        </span>
        <span
          className="size-7 shrink-0 flex items-center justify-center rounded-full bg-surface text-primary-dark transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? `${height}px` : "0px" }}
      >
        <div ref={contentRef} className="px-5 pb-5">
          <FactsGrid facts={group.facts} nested />
        </div>
      </div>
    </div>
  );
}

export default function AboutTreatment({
  title,
  about,
  image,
  quickFacts = [],
  treatmentOptions = [],
  specs = [],
}) {
  const [openIndex, setOpenIndex] = useState(null);
  const isMultiOption = specs.length > 1;

  return (
    <section className="w-full bg-surface">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pb-[100px] md:pb-[130px] lg:pb-[200px]">
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center">
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

            {isMultiOption ? (
              <div className="flex flex-col gap-3 pt-2">
                <span className="text-[13px] font-secondary font-medium uppercase tracking-wide text-primary-label">
                  Treatments Offered
                </span>
                <div className="flex flex-col gap-3">
                  {specs.map((group, i) => (
                    <TreatmentOptionAccordion
                      key={group.name ?? i}
                      group={group}
                      open={openIndex === i}
                      onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <>
                {treatmentOptions.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {treatmentOptions.map((option) => (
                      <span
                        key={option}
                        className="text-[13px] font-secondary text-primary-dark bg-primary-05 rounded-full px-4 py-2"
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                )}

                {specs.length === 1 ? (
                  <FactsGrid facts={specs[0].facts} />
                ) : (
                  quickFacts.length > 0 && <FactsGrid facts={quickFacts} />
                )}
              </>
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
