// StatsSection.jsx

const STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "10k+", label: "Happy Patients" },
  { value: "50+", label: "Advanced Treatments" },
  { value: "20+", label: "Industry Awards" },
];

export default function StatsSection() {
  return (
    <section id="stats-achievements" className="py-[50px] md:py-[65px] lg:py-[100px] bg-surface-alt text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <h4 className="font-primary text-[42px] sm:text-5xl md:text-6xl font-normal text-primary-dark mb-4 tracking-tight">
                {stat.value}
              </h4>
              <p className="font-secondary text-text-soft font-medium tracking-widest uppercase text-[13px] sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}