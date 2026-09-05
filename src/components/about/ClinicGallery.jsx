// ClinicGallery.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import img0132 from "../../assets/clinic/IMG_0132.webp";
import img0138 from "../../assets/clinic/IMG_0138.webp";
import img0139 from "../../assets/clinic/IMG_0139.webp";
import img0140 from "../../assets/clinic/IMG_0140.webp";
import img0141 from "../../assets/clinic/IMG_0141.webp";
import img0151 from "../../assets/clinic/IMG_0151.webp";
import img0152 from "../../assets/clinic/IMG_0152.webp";
import img0153 from "../../assets/clinic/IMG_0153.webp";
import img0154 from "../../assets/clinic/IMG_0154.webp";
import img0155 from "../../assets/clinic/IMG_0155.webp";
import img0156 from "../../assets/clinic/IMG_0156.webp";
import img0159 from "../../assets/clinic/IMG_0159.webp";
import img0160 from "../../assets/clinic/IMG_0160.webp";
import img0161 from "../../assets/clinic/IMG_0161.webp";
import img0175 from "../../assets/clinic/IMG_0175.webp";
import img0176 from "../../assets/clinic/IMG_0176.webp";
import img0195 from "../../assets/clinic/IMG_0195.webp";
import img0198 from "../../assets/clinic/IMG_0198.webp";
import img0199 from "../../assets/clinic/IMG_0199.webp";

const CLINIC_IMAGES = [
  img0199, img0138, img0132, img0139, img0140, img0141, img0151, img0152,
  img0153, img0154, img0155, img0156, img0159, img0160, img0161, img0175,
  img0176, img0195, img0198,
];

export default function ClinicGallery() {
  return (
    <section className="w-full bg-surface-alt py-[100px] md:py-[130px] lg:py-[200px] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-3 text-center mb-10">
        <div className="py-1.5 px-3 flex items-center gap-2.5 rounded-[30px] bg-primary-05 w-fit">
          <div className="size-1.5 rounded-full bg-primary-label" />
          <span className="text-[12px] leading-4 font-medium uppercase text-primary-label font-secondary tracking-wide">
            Inside Skinique
          </span>
        </div>
        <h2 className="text-[30px] sm:text-[38px] md:text-[42px] font-primary text-primary-dark leading-[1.15]">
          A look inside our clinic
        </h2>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 ">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          loop
          speed={700}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          slidesPerView="auto"
          className="clinic-swiper !pb-14"
        >
          {CLINIC_IMAGES.map((src, i) => (
            <SwiperSlide key={i} className="!w-auto">
              <div className="h-[400px] sm:h-[500px] md:h-[400px] w-auto rounded-[12px] overflow-hidden">
                <img
                  src={src}
                  alt="Skinique clinic interior"
                  className="h-full w-auto object-cover"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .clinic-swiper .swiper-pagination-bullet {
          background: var(--color-primary-dark, #986a3e);
          opacity: 0.3;
          width: 8px;
          height: 8px;
        }
        .clinic-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 20px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
