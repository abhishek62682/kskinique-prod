// TreatmentsPage.jsx
import { useState, useMemo } from "react";

import TreatmentsGrid from "../components/service/TreatmentsGrid";
import { getAllCategories, getCategory } from "../config/services";
import PageHero from "../components/common/PageHero";
import ProcessSection from "../components/service/ProcessSection";
import BenefitsCards from "../components/service/BenefitsCards";
import SEO from "../components/seo/SEO";
import { buildBreadcrumbSchema } from "../config/seo";

const breadcrumbs = [{ label: "Home", to: "/" }, { label: "Services" }];

export default function TreatmentsPage() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // filters categories by active category pill and by treatment name search
  const categories = useMemo(() => {
    const q = query.trim().toLowerCase();
    const categoriesToShow =
      activeFilter === "all" ? getAllCategories() : [getCategory(activeFilter)].filter(Boolean);

    return categoriesToShow.map((cat) => ({
      ...cat,
      services: q ? cat.services.filter((s) => s.title.toLowerCase().includes(q)) : cat.services,
    }));
  }, [query, activeFilter]);

  return (
    <main className="w-full">
      <SEO
        title="Skin, Hair & Laser Treatments | Skinique Dermatology"
        description="Explore personalised skin, hair and laser treatments available at Skinique Dermatology & Aesthetics."
        canonical="/services"
        schema={buildBreadcrumbSchema(breadcrumbs, "/services")}
      />
      <PageHero
  breadcrumbs={breadcrumbs}
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
