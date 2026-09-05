// TreatmentsHero.jsx

export default function TreatmentsHero({ query, onQueryChange }) {
  return (
    <section className="w-full bg-surface">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28 pb-14 flex flex-col items-center gap-6 text-center">

        <div className="py-1.5 px-3 flex items-center gap-2.5 rounded-[30px] bg-primary-05 w-fit">
          <div className="size-1.5 rounded-full bg-primary-label" />
          <span className="text-[12px] leading-4 font-medium uppercase text-primary-label font-secondary tracking-wide">
            Our Treatments
          </span>
        </div>

        <h1 className="text-[38px] sm:text-[46px] md:text-[52px] font-primary text-primary-dark leading-none">
          Bespoke solutions, <span className="text-primary-label">tailored</span> to you.
        </h1>

        <p className="text-[14px] sm:text-[15px] text-text-soft max-w-[560px] leading-[1.6] font-secondary">
          Explore our comprehensive range of dermatological and aesthetic services, tailored to
          enhance your natural beauty and address your unique skin, hair, and scalp concerns.
        </p>

        <div className="relative w-full max-w-[560px] mt-2">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-text-soft">
            <svg width="16" height="16" viewBox="0 0 512 512" fill="currentColor">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search treatments by name..."
            className="w-full pl-12 pr-5 py-3.5 rounded-full bg-primary-05 text-[14px] font-secondary text-primary-dark placeholder:text-text-soft outline-none focus:ring-2 focus:ring-primary-label/30 transition-shadow"
          />
        </div>
      </div>
    </section>
  );
}