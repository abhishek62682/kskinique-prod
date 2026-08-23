// PageHero.jsx
import { Link } from "react-router-dom";

export default function PageHero({
  badgeText = "About Us",
  heading,
  description,
  descriptionMaxWidth = "max-w-140",
  breadcrumbs,
}) {
  return (
    <section className="w-full bg-surface">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28 pb-20 sm:pb-24 flex flex-col items-center gap-6 text-center">

        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap justify-center gap-1.5 text-[12px] font-secondary text-text-soft -mb-2">
            {breadcrumbs.map((item, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-text-soft/40">/</span>}
                {item.to ? (
                  <Link to={item.to} className="hover:text-primary-label transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-primary-label font-medium">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="py-1.5 px-3 flex items-center gap-2.5 rounded-[30px] bg-primary-05 w-fit">
          <div className="size-1.5 rounded-full bg-primary-label" />
          <span className="text-[12px] leading-4 font-medium uppercase text-primary-label font-secondary tracking-wide">
            {badgeText}
          </span>
        </div>

        <h1 className="text-[38px] sm:text-[46px] md:text-[52px] font-primary text-primary-dark leading-none">
          {heading}
        </h1>

        {description && (
          <p className={`text-[14px] sm:text-[15px] text-text-soft ${descriptionMaxWidth} leading-[1.6] font-secondary`}>
            {description}
          </p>
        )}

      </div>
    </section>
  );
}