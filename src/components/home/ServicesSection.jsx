import { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const services = [
  {
    img: "/skin.png",
    title: "Skin",
    desc: "Advanced skincare treatments tailored to restore radiance and improve your skin's health.",
    slug: "skin",
  },
  {
    img: "/hair.png",
    title: "Hair",
    desc: "Comprehensive hair restoration and care solutions for every hair type and concern.",
    slug: "hair",
  },
  {
    img: "/laser.png",
    title: "Laser",
    desc: "Precision laser therapies for hair removal, skin rejuvenation, and targeted treatment.",
    slug: "laser",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // card entrance animation on scroll
      const cards = gsap.utils.toArray(".service-card");
      gsap.set(cards, { y: 60, opacity: 0 });
      gsap.to(cards, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      className="bg-surface"
    >

      <div ref={sectionRef}
      className="w-full max-w-7xl overflow-hidden mx-auto px-4 sm:px-6 py-20 sm:py-28 flex flex-col gap-12 relative">

  {/*  Section Heading  */}
      <div className="section-header flex flex-col items-center gap-3 text-center">
        <div className="py-1.5 px-3 flex items-center gap-2.5 rounded-[30px] bg-primary-05">
          <div className="size-1.5 rounded-full bg-primary-label"></div>
          <span className="text-[12px] leading-4 font-medium uppercase text-primary-label font-secondary tracking-wide">
            services
          </span>
        </div>
        <h2 className="text-[38px] sm:text-[46px] md:text-[52px] font-primary text-primary-dark leading-none">
          Our treatments
        </h2>
        <p className="text-[14px] sm:text-[15px] text-text-soft max-w-[480px] leading-[1.6] font-secondary">
          From skin to hair and laser expert care <br /> tailored to every concern, all under one roof.
        </p>
      </div>

      {/* ===== Section Content ===== */}
      <div className="section-content  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {services.map(({ img, title, desc, slug }) => (
          <Link
            to={`/services/${slug}`}
            key={title}
            className="service-card group relative block rounded-[20px] bg-primary-dark h-[460px] sm:h-[500px] md:h-[500px]"
          >
            <div className="w-full h-full transition-transform duration-500 group-hover:-translate-y-12">
              <img
                className="w-full h-full object-cover p-2 rounded-[20px]"
                src={img}
                alt={title}
              />
            </div>

            <div className="absolute rounded-b-[20px] overflow-hidden inset-0 bg-gradient-to-t from-overlay/80 via-overlay/20 to-transparent" />

            <div className="absolute rounded-b-[20px] overflow-hidden w-full left-0 bottom-0">
              <div className="bg-white-10 backdrop-blur-md border border-white-10 flex flex-col gap-3 p-6">
                <h3 className="text-[22px] font-semibold text-text-light font-primary">
                  {title}
                </h3>
                <p className="text-[13px] leading-[20px] text-text-light/70 line-clamp-2 font-secondary">
                  {desc}
                </p>
                <span className="flex items-center gap-1.5 text-text-light/90 text-[13px] font-medium font-secondary group-hover:text-text-light group-hover:gap-2.5 transition-all duration-300 w-fit">
                  View Details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>


      </div>
    
    </section>
  );
}