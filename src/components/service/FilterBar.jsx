// FilterBar.jsx
import { SERVICES } from "../../config/services";

const categories = SERVICES.map((cat) => cat.category);

export default function FilterBar({ activeFilter, onFilterChange, query, onQueryChange }) {
  return (
    <section className="w-full bg-surface sticky top-0 z-30 border-b border-border">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6  pb-10 pt-8 sm:pt-12 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">

        {/* categories - left side, scrollable */}
        <div className="flex gap-2.5 overflow-x-auto w-full sm:w-auto">
          <button
            onClick={() => onFilterChange("all")}
            className={`whitespace-nowrap text-[13px] font-medium font-secondary px-4 py-2 rounded-full transition-colors duration-300 ${
              activeFilter === "all"
                ? "bg-primary-dark text-text-light"
                : "bg-primary-05 text-primary-dark hover:bg-primary-10"
            }`}
          >
            All
          </button>

          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => onFilterChange(cat)}
                className={`whitespace-nowrap text-[13px] font-medium font-secondary px-4 py-2 rounded-full transition-colors duration-300 capitalize ${
                  isActive
                    ? "bg-primary-dark text-text-light"
                    : "bg-primary-05 text-primary-dark hover:bg-primary-10"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* search - right side */}
        <div className="relative w-full sm:w-[280px] sm:ml-auto shrink-0">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-soft">
            <svg width="14" height="14" viewBox="0 0 512 512" fill="currentColor">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search treatments..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-primary-05 text-[13px] font-secondary text-primary-dark placeholder:text-text-soft outline-none focus:ring-2 focus:ring-primary-label/30 transition-shadow"
          />
        </div>

      </div>
    </section>
  );
}