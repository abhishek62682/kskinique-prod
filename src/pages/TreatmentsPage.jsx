// TreatmentsPage.jsx
import { useState, useMemo } from "react";

import TreatmentsGrid from "../components/service/TreatmentsGrid";
import { SERVICES } from "../config/services";
import PageHero from "../components/common/PageHero";
import ProcessSection from "../components/service/ProcessSection";
import BenefitsCards from "../components/service/BenefitsCards";

export default function TreatmentsPage() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // filters SERVICES by active category pill and by treatment name search
  const categories = useMemo(() => {
    const q = query.trim().toLowerCase();
    const categoriesToShow =
      activeFilter === "all" ? SERVICES : SERVICES.filter((cat) => cat.category === activeFilter);

    return categoriesToShow.map((cat) => ({
      ...cat,
      services: q ? cat.services.filter((s) => s.title.toLowerCase().includes(q)) : cat.services,
    }));
  }, [query, activeFilter]);

  return (
    <main className="w-full">
      <PageHero
  badgeText="Our Services"
  heading="Treatments Designed Around You"
  description="Explore our comprehensive range of dermatological and aesthetic services, tailored to
          enhance your natural beauty and address your unique skin concerns."
/>

      {/* <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} /> */}
      <TreatmentsGrid categories={categories} />
<BenefitsCards />
      <ProcessSection />
    </main>
  );
}
