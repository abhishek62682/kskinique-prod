// ContactHero.jsx

export default function ContactHero() {
  return (
    <section className="w-full bg-surface">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28 pb-14 flex flex-col items-center gap-6 text-center">

        <div className="py-1.5 px-3 flex items-center gap-2.5 rounded-[30px] bg-primary-05 w-fit">
          <div className="size-1.5 rounded-full bg-primary-label" />
          <span className="text-[12px] leading-4 font-medium uppercase text-primary-label font-secondary tracking-wide">
            Get In Touch
          </span>
        </div>

        <h1 className="text-[38px] sm:text-[46px] md:text-[52px] font-primary text-primary-dark leading-none">
          Let's talk about your <span className="text-primary-label">skin & hair</span> goals.
        </h1>

        <p className="text-[14px] sm:text-[15px] text-text-soft max-w-[560px] leading-[1.6] font-secondary">
          Have a question or ready to book a consultation? Reach out and our team
          will get back to you shortly.
        </p>

      </div>
    </section>
  );
}