// ServiceFaqSection.jsx
import { useState, useRef, useEffect } from "react";
import Button from "../ui/Button";

function FaqItem({ q, a, open, onToggle }) {
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) setHeight(contentRef.current.scrollHeight);
  }, [a]);

  return (
    <div
      className="py-5 cursor-pointer border-b border-border last:border-none"
      onClick={onToggle}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-[15px] sm:text-[16px] font-medium font-secondary text-primary-dark leading-snug">
          {q}
        </h3>
        <span
          className="size-8 shrink-0 flex items-center justify-center rounded-full bg-primary-05 text-primary-dark transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </div>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? `${height}px` : "0px", opacity: open ? 1 : 0 }}
      >
        <p ref={contentRef} className="text-[14px] sm:text-[15px] text-text-soft font-secondary leading-[1.75] pt-4">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function ServiceFaqSection({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full bg-surface-alt">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

          <div className="lg:w-100 shrink-0">
            <div className="lg:sticky lg:top-28 flex flex-col gap-5">

              <div className="py-1.5 px-3 flex items-center gap-2.5 rounded-[30px] bg-primary-05 w-fit">
                <div className="size-1.5 rounded-full bg-primary-label"></div>
                <span className="text-[12px] leading-4 font-medium uppercase text-primary-label font-secondary tracking-wide">
                  FAQ
                </span>
              </div>

              <h2 className="text-[32px] sm:text-[36px] lg:text-[38px] font-primary text-primary-dark leading-none">
                Frequently Asked Questions
              </h2>

              <p className="text-[14px] sm:text-[15px] text-text-soft font-secondary leading-[1.6]">
                Still have questions about this treatment? Reach out and we'll be happy to help.
              </p>

              <Button label="Ask Us Anything" bgColor="#986a3e" textColor="#fff" />

            </div>
          </div>

          <div className="flex-1 flex flex-col">
            {faqs.map(({ q, a }, i) => (
              <FaqItem
                key={q}
                q={q}
                a={a}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
