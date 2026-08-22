import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import orbit1 from "../../assets/home/about-orbit-1.webp";
import orbit2 from "../../assets/home/about-orbit-2.webp";
import orbit3 from "../../assets/home/about-orbit-3.webp";
import orbit4 from "../../assets/home/about-orbit-4.webp";
import orbit5 from "../../assets/home/about-orbit-5.webp";
import orbit6 from "../../assets/home/about-orbit-6.webp";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const orbitRef = useRef(null);
  const orbitContainerRef = useRef(null);
  const imgRefs = useRef([]);
  const textRef = useRef(null);

  const images = [orbit1, orbit2, orbit3, orbit4, orbit5, orbit6];

  const total = images.length;

  // radius as a % of container size, not a fixed px value
  // container is a square (w-70 h-70 ... lg:w-175 lg:h-175), so 50% of width = edge of box
  // pull in slightly (38%) so images (which have their own width) stay inside
  const [radius, setRadius] = useState(0);

  useEffect(() => {
    const container = orbitContainerRef.current;
    if (!container) return;

    const updateRadius = () => {
      const size = container.offsetWidth; // square container, width = height
      setRadius(size * 0.38 + 20);
    };

    updateRadius();

    const resizeObserver = new ResizeObserver(updateRadius);
    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, []);

  // the paragraph text, broken into words for the fill effect
  const paragraph =
    "Great skin shouldn't mean endless appointments and one-size-fits-all treatments. So we brought expert dermatology and aesthetic medicine together under one roof, so you get the personalised care your skin truly deserves.";
  const words = paragraph.split(" ");

  // orbit + image rotation — only set up once the orbit elements actually exist (radius > 0)
  useEffect(() => {
    if (!radius || !orbitRef.current) return;

    const orbitTween = gsap.to(orbitRef.current, {
      rotate: 360,
      duration: 30,
      repeat: -1,
      ease: "none",
    });

    const imgTweens = imgRefs.current
      .filter(Boolean)
      .map((el) =>
        gsap.to(el, {
          rotate: -360,
          duration: 30,
          repeat: -1,
          ease: "none",
        })
      );

    return () => {
      orbitTween.kill();
      imgTweens.forEach((t) => t.kill());
    };
  }, [radius]);

  // scroll-triggered fill text effect — independent of orbit, runs once on mount
  useEffect(() => {
    const wordEls = textRef.current.querySelectorAll(".fill-word");

    const fillTween = gsap.to(wordEls, {
      color: "#633B2C",
      opacity: 1,
      stagger: 0.05,
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "bottom 40%",
        scrub: 1,
      },
    });

    return () => {
      fillTween.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="w-full overflow-x-hidden px-2.5 sm:px-12.5 bg-surface">
      <section className="max-w-full bg-surface-alt space-y-40 rounded-2xl py-30 md:py-50">

        {/* ===== Section Header ===== */}
        <div className="section-header">
          <h4
            ref={textRef}
            className="text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px]
                       mx-auto max-w-250 text-center leading-[1.4] px-6 md:px-0"
          >
            {words.map((word, i) => (
              <span
                key={i}
                className="fill-word"
                style={{
                  color: "#986A3E1A", // --color-primary-10
                  opacity: 0.4,
                  display: "inline-block",
                  marginRight: "0.28em",
                }}
              >
                {word}
              </span>
            ))}
          </h4>
        </div>

        {/* ===== Section Content ===== */}
        <div className="section-content w-full    flex items-center justify-center">
          <div
            ref={orbitContainerRef}
            className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[540px] md:h-[540px] lg:w-[700px] lg:h-[700px]"
          >

            {/* center text - fixed, doesn't rotate */}
            <div className="absolute inset-0 flex items-center justify-center z-0 text-center px-6">
              <h2 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[42px]
               leading-[1.3] text-primary-dark">
               Meet Skinique.<br />
               Where skin comes first.
              </h2>
            </div>

            {/* rotating orbit container */}
            {radius > 0 && (
              <div ref={orbitRef} className="absolute inset-0">
                {images.map((src, i) => {
                  const angle = (360 / total) * i - 90;
                  const rad = (angle * Math.PI) / 180;
                  const x = Math.cos(rad) * radius;
                  const y = Math.sin(rad) * radius;

                  return (
                    <div
                      key={i}
                      className="absolute left-1/2 top-1/2"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      <div ref={(el) => (imgRefs.current[i] = el)}>
                        <img
                          src={src}
                          className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40
                                     rounded-2xl object-cover shadow-2xl border border-border"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;