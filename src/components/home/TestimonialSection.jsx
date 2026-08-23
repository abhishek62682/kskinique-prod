import  { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import { TESTIMONIALS } from '../../config/testimonials'
import starsOutlineIcon from '../../assets/icons/stars-outline.svg'
import starsWhiteIcon from '../../assets/icons/stars-white.svg'
import testimonialPortrait from '../../assets/home/testimonial-portrait.webp'

const TestimonialSection = () => {
 
  const [prevEl, setPrevEl] = useState(null)
  const [nextEl, setNextEl] = useState(null)

  return (
    <section
      id="testimonials"
      className="relative bg-surface pb-[100px] md:pb-[130px] lg:pb-[200px] px-4 sm:px-6 lg:px-8  z-10 overflow-hidden"
      data-scroll-section=""
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="flex flex-col justify-between gap-8 lg:gap-12 w-full lg:w-2/3 min-w-0 overflow-hidden">
          <div className="flex items-start sm:items-end justify-between gap-4 flex-wrap">
            <div>
              <h2
                id="testiominal-heading"
                className="text-[38px] sm:text-[46px] md:text-[52px] font-primary text-primary-dark leading-none"
                aria-label="What Our Patients Say"
              >
                What Our <br /> Patients Say
              </h2>
              <p className="text-[14px] sm:text-[15px] text-text-soft font-secondary mt-3">
                Trusted by plenty of happy patients across Navi Mumbai.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div
                ref={setPrevEl}
                className="carousel-left w-10 h-10 bg-white text-primary-dark rounded-full flex items-center justify-center cursor-pointer   transition-colors duration-300"
                role="button"
                aria-label="Previous slide"
                tabIndex={0}
              >
                <i className="ri-arrow-left-line text-base font-semibold"></i>
              </div>
              <div
                ref={setNextEl}
                className="carousel-right w-10 h-10 bg-white text-primary-dark rounded-full flex items-center justify-center cursor-pointer  transition-colors duration-300"
                role="button"
                aria-label="Next slide"
                tabIndex={0}
              >
                <i className="ri-arrow-right-line text-base font-semibold"></i>
              </div>
            </div>
          </div>

          <Swiper
            modules={[Navigation, FreeMode]}
            freeMode
            observer
            observeParents
            resizeObserver
            updateOnWindowResize
            navigation={{ prevEl, nextEl }}
            onBeforeInit={(swiper) => {
              if (typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = prevEl
                swiper.params.navigation.nextEl = nextEl
              }
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 15 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 2, spaceBetween: 30 },
            }}
            className="mySwiper testimonial-swiper !overflow-hidden !items-stretch"
          >
            {TESTIMONIALS.map((t, i) => (
              <SwiperSlide
                key={t.name}
                className="!h-auto"
                role="group"
                aria-label={`${i + 1} / ${TESTIMONIALS.length}`}
              >
                <div className="bg-white rounded-3xl p-7 flex flex-col justify-between gap-6 h-full min-h-56">
                  <div className="flex flex-col gap-3">
                    <img
                      src={starsOutlineIcon}
                      alt="stars"
                      className="w-14"
                    />
                    <p className="text-[#7a685d] text-base leading-relaxed">
                      {t.quote}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-auto">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover shrink-0"
                    />
                    <div>
                      <h5 className="text-[#7a685d] text-sm font-semibold">
                        {t.name}
                      </h5>
                      <p className="text-[#7a685d] text-xs font-normal">
                        {t.concern}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full lg:w-1/3 h-[500px] rounded-[28px] overflow-hidden relative ">
          <img
            src={testimonialPortrait}
            alt="Dermatologist with patient"
            className="w-full h-full object-cover "
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <div className="rounded-2xl p-5 sm:p-6 flex flex-col items-center gap-2 bg-gradient-to-b from-white/0 to-[#986a3e]/50 backdrop-blur-3xl">
              <h4 className="text-white text-5xl leading-tight font-normal font-primary">
                5.0
              </h4>
              <img
                src={starsWhiteIcon}
                alt="5 stars"
                className="w-16"
              />
              <p className="text-white text-xs font-medium tracking-wide">
                patient rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection