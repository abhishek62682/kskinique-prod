// OurStorySection.jsx
import Button from "../ui/Button";
import TrustMarquee from "./TrustMarquee";
import storyDoctorImg from "../../assets/clinic/IMG_0175.webp";
import storyConsultationImg from "../../assets/clinic/IMG_0138.webp";
import storyThirdImg from "../../assets/clinic/IMG_0195.webp";
import storyFourthImg from "../../assets/clinic/IMG_0176.webp";

export default function OurStorySection() {
  return (
    <section className="w-full bg-surface relative pb-[100px] md:pb-[130px] lg:pb-[200px]">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="relative grid grid-cols-1 gap-8">
          <div className="relative flex items-center justify-center">

            <div className="hidden sm:block absolute border-6 border-white left-3 top-0 sm:left-[6%] sm:top-[6%] size-[200px] rounded-[20px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <img
                src={storyDoctorImg}
                alt="Skinique clinic"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="hidden sm:block absolute border-6 border-white right-3 size-50 top-0 sm:mt-0 sm:right-[6%] sm:top-[6%] rounded-[20px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <img
                src={storyConsultationImg}
                alt="Skinique treatment"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="hidden sm:block absolute left-3 bottom-0 sm:left-[6%] sm:bottom-[6%] border-6 border-white rounded-[20px] size-50 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <img
                src={storyThirdImg}
                alt="Skinique doctor"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="hidden sm:block absolute right-3 bottom-0 sm:right-[6%] sm:bottom-[6%] border-6 border-white size-50 rounded-[20px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <img
                src={storyFourthImg}
                alt="Skinique consultation"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="size-215 sm:size-235 lg:size-260 flex items-center rounded-[40px] sm:rounded-full bg-primary-05 overflow-hidden">
              <div className="flex flex-col items-center text-center overflow-hidden gap-5 sm:gap-6 w-full">
                <div className="flex flex-col items-center gap-5 sm:gap-6 px-8 sm:px-12">
                  <div className="py-1.5 px-3 flex items-center gap-2.5 rounded-[30px] bg-primary-05 w-fit">
                    <div className="size-1.5 rounded-full bg-primary-label" />
                    <span className="text-[12px] leading-4 font-medium uppercase text-primary-label font-secondary tracking-wide">
                      our story
                    </span>
                  </div>

                  <h2 className="text-[30px] sm:text-[38px] md:text-[42px] font-primary text-primary-dark leading-[1.15]">
                    Healthy skin. Stronger hair.
                    <br />
                    Confident you.
                  </h2>

                  <p className="text-[14px] sm:text-[15px] max-w-2xl leading-[22px] sm:leading-[23px] text-text-soft font-secondary">
                    Skinique is a dermatology and aesthetic medicine clinic founded by Dr. Kajal
                    Komalan. We believe good skin and hair care isn't about doing the most, it's
                    about doing what's right for you, so every patient gets a plan built around
                    their specific skin, concerns, and goals, not a standard package applied to
                    everyone. That's why we keep every protocol only as extensive as it needs to
                    be, favoring the simplest effective approach over piling on treatments for
                    their own sake.
                  </p>
                </div>

                <TrustMarquee />

                <div className="flex items-center gap-3">
                  <Button label="Book a consultation" bgColor="#986a3e" textColor="#fff" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
