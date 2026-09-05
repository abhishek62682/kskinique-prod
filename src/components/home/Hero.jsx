import { Link } from "react-router-dom";
import { SERVICES } from "../../config/services";
import CircularChip from "../CircularChip";
import bannerImg from "../../assets/clinic/IMG_0153.webp";
import decorLeft from "../../assets/hero/decor-left.svg";
import decorRight from "../../assets/hero/decor-right.svg";
import exploreIcon from "../../assets/hero/explore-icon.svg";

const heroChips = Object.entries(SERVICES).flatMap(([category, services]) =>
  services.slice(0, 4).map((service) => ({
    id: service.slug,
    label: service.title,
    image: service.img,
    to: `/services/${category}/${service.slug}`,
  }))
);

const Hero = () => {
  return (
    <div className="w-full px-2.5 sm:px-12.5">
      <header id="hero" className="w-full  mx-auto rounded-[30px] relative z-10 bg-surface-light! overflow-hidden">

        <img className="absolute inset-0 w-full h-full object-cover" src={bannerImg} alt="" />

        <div className="absolute inset-0 bg-linear-to-b from-stone-900/80 to-transparent" />

        <div className="relative z-20 flex flex-col items-center ">

          <div className="pt-20 md:pt-30 pb-120   text-center px-5">
            <div className="max-w-3xl mx-auto space-y-5">
              <h1 className="text-stone-50 font-primary font-normal leading-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Healthy, confident <br />
                skin starts here
              </h1>
              <p className="text-amber-50 font-secondary leading-relaxed text-sm sm:text-base md:text-lg">
                Where healthy skin meets natural beauty.
                <br />
                Evidence-based dermatology, tailored to you.
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full flex items-end justify-center z-20">
            <img
              className="w-16 sm:w-20 md:w-24 h-auto object-contain translate-y-1 translate-x-4 sm:translate-x-6"
              src={decorLeft}
              alt=""
            />

            <div className="relative size-48 sm:size-56 md:size-60 rounded-full bg-[#fdf7ef] translate-y-3/5 shrink-0">
              <Link
                to="/services"
                className="absolute top-5 md:top-8 left-1/2 -translate-x-1/2 w-full flex flex-col items-center gap-2 md:gap-2.5 text-xs md:text-sm leading-5 text-amber-900 no-underline group"
              >
                <img
                  className="transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:rotate-120"
                  src={exploreIcon}
                  alt=""
                />
                <span>Explore our treatments</span>
              </Link>
            </div>

            <img
              className="w-16 sm:w-20 md:w-24 h-auto object-contain -translate-x-4 sm:-translate-x-6 translate-y-1"
              src={decorRight}
              alt=""
            />
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-45%] z-30">
            <div className="relative flex justify-center items-center rounded-full animate-spin [animation-duration:20s] [animation-timing-function:linear] w-[550px] h-[550px] md:max-w-160 md:h-160">
              {heroChips.map((item, index) => {
                const rotate = (360 / heroChips.length) * index;
                return (
                  <CircularChip
                    key={item.id}
                    rotate={rotate}
                    label={item.label}
                    image={item.image}
                    to={item.to}
                  />
                );
              })}
            </div>
          </div>

        </div>
      </header>
    </div>
  );
};

export default Hero;