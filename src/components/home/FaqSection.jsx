// FaqSection.jsx
import { useState, useRef, useEffect } from "react";
import Button from "../ui/Button";

const FAQ_CONFIG = [
  {
    q: "How do I know which skin treatment is right for me?",
    a: "During your first consultation, Dr. Kajal will assess your skin type, concerns, and goals. We use advanced skin analysis tools to create a personalised treatment plan — no guesswork, no generic protocols.",
  },
  {
    q: "Are the treatments painful?",
    a: "Most procedures involve minimal discomfort. Topical anaesthetics are used where needed, and our team follows comfort-first protocols throughout every session to keep you at ease.",
  },
  {
    q: "How many sessions will I need?",
    a: "It depends on the treatment and your skin's response. Some concerns like mild pigmentation may resolve in 2–3 sessions, while others like acne scarring or hair restoration may require 6–8. We'll give you a realistic timeline upfront.",
  },
  {
    q: "What happens at the first consultation?",
    a: "Your first visit includes a thorough skin assessment, a detailed discussion of your concerns, and an honest walkthrough of your options — with no pressure to commit. We'll outline the plan, expected results, and costs before anything is scheduled.",
  },
  {
    q: "Is laser treatment safe for Indian skin tones?",
    a: "Yes. We use clinically proven laser technologies specifically calibrated for darker skin tones. Dr. Kajal has extensive experience treating a wide range of skin types safely and effectively.",
  },
  {
    q: "How long do results last?",
    a: "Results vary by treatment. Laser hair removal offers long-term reduction after completing sessions. Skin rejuvenation results can last 12–18 months with proper skincare. We'll guide you on maintenance during your consultation.",
  },
  {
    q: "Do you offer EMI or flexible payment options?",
    a: "Yes, we offer flexible payment plans for longer treatment courses. Speak to our front desk team after your consultation and we'll find an arrangement that works for you.",
  },
];

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

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full bg-surface-alt">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-20">

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
                Common Questions
              </h2>

              <p className="text-[14px] sm:text-[15px] text-text-soft font-secondary leading-[1.6]">
                Everything you need to know before your first visit. Can't find an answer? Just reach out.
              </p>

              <Button label="Ask Us Anything" bgColor="#986a3e" textColor="#fff"  />

            </div>
          </div>

          <div className="flex-1 flex flex-col">
            {FAQ_CONFIG.map(({ q, a }, i) => (
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