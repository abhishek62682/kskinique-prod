// TreatmentsGrid.jsx
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

export default function TreatmentsGrid({ categories }) {
  const visibleCategories = categories.filter((cat) => cat.services?.length > 0);
  // only show the "explore" category link on the combined /services listing,
  // not on a single-category page where it would just link to itself
  const showCategoryLink = visibleCategories.length > 1;

  return (
    <section className="w-full bg-surface">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pb-[100px] md:pb-[130px] lg:pb-[200px] flex flex-col gap-20">

        {visibleCategories.length === 0 && (
          <p className="text-center text-text-soft font-secondary text-[15px] py-16">
            No treatments match your search.
          </p>
        )}

        {visibleCategories.map((cat) => (
          <div key={cat.category} id={`section-${cat.category}`} className="flex flex-col gap-12">
            <div className="flex items-center gap-6">
              <h2 className="font-primary text-[24px] sm:text-[28px] text-primary-dark whitespace-nowrap capitalize">
                {cat.label} Treatments
              </h2>
              {showCategoryLink && (
                <Link
                  to={`/services/${cat.category}`}
                  className="text-[13px] font-secondary text-primary-label hover:underline whitespace-nowrap"
                >
                  Explore {cat.label} Treatments
                </Link>
              )}
              {/* <div className="h-px bg-border flex-1 hidden sm:block" /> */}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {cat.services.map((service) => (
                <ServiceCard key={service.slug} service={service} category={cat.category} label={cat.label} />
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}