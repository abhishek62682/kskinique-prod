import { Stethoscope, Flower2, ShieldCheck, Sparkles, Zap, HeartHandshake } from "lucide-react";

function UspSection() {
  const leftItems = [
    {
      icon: Stethoscope,
      title: "Qualified Dermatologist",
      description:
        "MBBS, DDV certified — every treatment is physician-led and medically supervised.",
    },
    {
      icon: Flower2,
      title: "Personalized Treatment Plans",
      description:
        "Customized to your skin type, concern, and goals — never one-size-fits-all.",
    },
    {
      icon: ShieldCheck,
      title: "USFDA Approved Technologies",
      description:
        "Advanced lasers and devices cleared for safety and clinical efficacy.",
    },
  ];

  const rightItems = [
    {
      icon: Sparkles,
      title: "Strict Hygiene Protocols",
      description:
        "Sterile, single-use consumables and clinical-grade sanitation at every step.",
    },
    {
      icon: Zap,
      title: "Latest Laser & Aesthetic Equipment",
      description:
        "State-of-the-art technology for precise, comfortable, effective results.",
    },
    {
      icon: HeartHandshake,
      title: "Comfortable, Judgment-Free Care",
      description:
        "A calm, welcoming environment where every concern is heard before it's treated.",
    },
  ];

  return (
    <section className="w-full bg-surface relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pb-20 sm:pb-28">
        <div className="flex flex-col items-center text-center gap-4 mb-16 sm:mb-20">
          <h2 className="text-[38px] sm:text-[46px] md:text-[52px] font-primary text-primary-dark leading-none">
            Why Choose Skinique
          </h2>
          <p className="text-[14px] sm:text-[15px] leading-[1.75] text-text-soft font-secondary max-w-xl">
            From the technology we use to the way we treat you, every detail is designed around one goal — results you can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-4 flex flex-col gap-12 order-2 lg:order-1">
            {leftItems.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left"
              >
                <div className="size-14 shrink-0 rounded-2xl bg-primary-05 flex items-center justify-center">
                  <item.icon className="size-6 text-primary-dark" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-[17px] sm:text-[18px] font-primary text-primary-dark leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[13px] sm:text-[14px] leading-[1.7] text-text-soft font-secondary">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[999px] overflow-hidden">
              <img
                src="https://thedermahouse.com/api/files/472"
                alt="Skinique treatment care"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-12 order-3">
            {rightItems.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left"
              >
                <div className="size-14 shrink-0 rounded-2xl bg-primary-05 flex items-center justify-center">
                  <item.icon className="size-6 text-primary-dark" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-[17px] sm:text-[18px] font-primary text-primary-dark leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[13px] sm:text-[14px] leading-[1.7] text-text-soft font-secondary">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UspSection;