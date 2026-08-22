// WhyUsSection.jsx
import afterImg from "../../assets/home/why-us-after.webp";
import beforeImg from "../../assets/home/why-us-before.webp";
import seamless1Img from "../../assets/home/why-us-seamless-1.webp";
import seamless2Img from "../../assets/home/why-us-seamless-2.webp";
import avatar1Img from "../../assets/home/why-us-avatar-1.webp";
import avatar2Img from "../../assets/home/why-us-avatar-2.webp";
import avatar3Img from "../../assets/home/why-us-avatar-3.webp";
import photoImg from "../../assets/home/why-us-photo.webp";
import freeBadgeIcon from "../../assets/icons/free-badge.svg";
import whyUsVideo from "../../assets/home/why-us-video.mp4";

export default function WhyUsSection() {
  return (
    <section className="w-full bg-surface">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-50 flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col items-center gap-3">
          <div className="py-1.5 px-3 flex items-center gap-2.5 rounded-[30px] bg-primary-05 w-fit">
            <div className="size-1.5 rounded-full bg-primary-label"></div>
            <span className="text-[12px] leading-4 font-medium uppercase text-primary-label font-secondary tracking-wide">
              Why patients choose us
            </span>
          </div>
          <h2 className="text-[38px] sm:text-[46px] md:text-[52px] font-primary text-primary-dark leading-none text-center">
            Where science meets <br className="hidden sm:block" /> beautiful skin
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Card A: Before/After — full height on lg, spans 2 rows */}
          <div className="relative rounded-[24px] overflow-hidden min-h-80 sm:row-span-2 sm:col-span-1">
            <img
              src={afterImg}
              alt="after"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)", borderRight: "2px solid white" }}
            >
              <img
                src={beforeImg}
                alt="before"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <span className="absolute top-4 left-4 text-[12px] font-medium font-secondary text-text-light border border-white/30 rounded-full px-3 py-1 z-10">Before</span>
            <span className="absolute top-4 right-4 text-[12px] font-medium font-secondary text-text-light border border-white/30 rounded-full px-3 py-1 z-10">After</span>
            <div className="absolute bottom-0 left-0 right-0 p-5 z-10 bg-gradient-to-t from-overlay/55 to-transparent">
              <h5 className="text-text-light text-[20px] font-primary font-normal mb-2">Real results, real patients</h5>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-text-light/80 text-[13px] font-secondary">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                  12 Weeks
                </span>
                <span className="flex items-center gap-1.5 text-text-light/80 text-[13px] font-secondary">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z"/></svg>
                  Acne treatment
                </span>
              </div>
            </div>
          </div>

          {/* Card B: Seamless experience */}
          <div className="relative rounded-[24px] overflow-hidden min-h-62.5 bg-primary-05">
            <div className="p-7 h-full">
              <h4 className="font-primary text-[28px] sm:text-[30px] leading-[36px] text-primary-dark font-normal">
                Seamless client <br /> experience
              </h4>
              <img
                src={seamless1Img}
                alt=""
                className="absolute w-[52%] -left-[2%] top-[44%] z-10"
              />
              <img
                src={seamless2Img}
                alt=""
                className="absolute w-[52%] -right-[2%] top-[60%]"
              />
            </div>
          </div>

          {/* Card C: Stats */}
          <div className="rounded-[24px] min-h-62.5 bg-primary-05">
            <div className="p-7 pb-10 flex flex-col h-full">
              <h4 className="font-primary text-[42px] sm:text-[46px] leading-[55px] text-primary-dark font-normal">10+</h4>
              <p className="text-[15px] leading-[21px] text-text-soft font-secondary my-4">Years of medical excellence</p>
              <div className="flex flex-col items-start gap-2.5">
                <span className="text-[13px] font-secondary leading-[18px] text-text-soft bg-white w-fit px-2.5 py-1 rounded-[20px]">2,000+ Procedures</span>
                <span className="text-[13px] font-secondary leading-[18px] text-text-soft bg-white w-fit px-2.5 py-1 rounded-[20px]">50+ Treatments</span>
              </div>
              <p className="font-primary text-[48px] sm:text-[52px] text-primary-10 leading-none mt-auto pt-4">Since 2016</p>
            </div>
          </div>

          {/* Card D: Tailored */}
          <div className="rounded-[24px] min-h-62.5 bg-primary-05">
            <div className="flex flex-col items-center justify-center gap-5 h-full text-center p-6">
              <div className="flex items-center justify-center gap-2.5">
                <img src={avatar1Img} alt="" className="size-15 rounded-full object-cover" />
                <img src={avatar2Img} alt="" className="size-15 rounded-full object-cover scale-[1.4]" />
                <img src={avatar3Img} alt="" className="size-15 rounded-full object-cover" />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-primary text-[28px] sm:text-[30px] leading-[36px] text-primary-dark font-normal">Tailored to your vision</h4>
                <p className="text-[14px] sm:text-[15px] leading-[21px] text-text-soft font-secondary">
                  Customized treatment plans <br /> for every skin type and concern
                </p>
              </div>
            </div>
          </div>

          {/* Card E: Photo — spans 2 rows on lg */}
          <div className="rounded-[24px] overflow-hidden min-h-62.5 sm:row-span-2">
            <img
              src={photoImg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card F: Free skin analysis */}
          <div className="rounded-[24px] min-h-62.5 bg-primary-05">
            <div className="flex flex-col items-center gap-5 text-center px-7 py-10">
              <div className="relative">
                <img
                  src={freeBadgeIcon}
                  alt=""
                  className="size-12.75"
                />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[11px] font-medium uppercase text-primary-dark font-secondary">
                  free
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-primary text-[28px] sm:text-[30px] leading-[36px] text-primary-dark font-normal">Skin analysis</h4>
                <p className="text-[14px] sm:text-[15px] leading-[21px] text-text-soft font-secondary">Expert consultation at no cost</p>
              </div>
              <button className="flex items-center gap-2 text-text-light bg-primary-dark text-[13px] font-medium font-secondary px-5 py-2.5 rounded-full hover:opacity-85 transition-opacity duration-300">
                Book now
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card G: Video */}
          <div className="rounded-[24px] overflow-hidden min-h-62.5">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src={whyUsVideo}
            />
          </div>

        </div>
      </div>
    </section>
  );
}