// OurStorySection.jsx
import Button from "../ui/Button";
import TrustMarquee from "./TrustMarquee";

export default function OurStorySection() {
  return (
    <section className="w-full bg-surface relative py-20 sm:py-28">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 relative">
        <div className="relative grid grid-cols-1 gap-8">
          <div className="relative flex items-center justify-center">

            <div className="absolute border-6 border-white left-0 top-0 sm:left-[6%] sm:top-[6%] size-[200px] rounded-[20px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <img
                src="https://thedermahouse.com/api/files/472"
                alt="Skinique clinic"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute border-6 border-white right-0 size-50 top-0 sm:right-[6%] sm:top-[6%] rounded-[20px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <img
                src="https://thedermahouse.com/api/files/472"
                alt="Skinique treatment"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute left-0 bottom-0 sm:left-[6%] sm:bottom-[6%] border-6 border-white rounded-[20px] size-50 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <img
                src="https://thedermahouse.com/api/files/468"
                alt="Skinique doctor"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute right-0 bottom-0 sm:right-[6%] sm:bottom-[6%] border-6 border-white size-50 rounded-[20px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <img
                src="https://thedermahouse.com/api/files/552"
                alt="Skinique consultation"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="size-200 flex items-center rounded-full bg-primary-05 overflow-hidden">
              <div className="flex flex-col items-center text-center overflow-hidden gap-5 w-full">
                <div className="py-1.5 px-3 flex items-center gap-2.5 rounded-[30px] bg-primary-05 w-fit">
                  <div className="size-1.5 rounded-full bg-primary-label" />
                  <span className="text-[12px] leading-4 font-medium uppercase text-primary-label font-secondary tracking-wide">
                    our story
                  </span>
                </div>

                <h2 className="text-[30px] sm:text-[38px] md:text-[42px] font-primary text-primary-dark leading-[1.15]">
                  Beautiful skin. Healthy skin.
                  <br />
                  Confident you.
                </h2>

                <p className="text-[14px] sm:text-[15px] max-w-xl leading-[21px] text-text-soft font-secondary">
                  At Skinique, we combine evidence-based dermatology with advanced aesthetic
                  treatments to help you achieve healthy, confident skin and hair. Every
                  treatment is customized to your skin type and concerns, ensuring safe,
                  effective, and natural-looking results.
                </p>

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