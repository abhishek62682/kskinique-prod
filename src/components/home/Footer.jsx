import Button from '../ui/Button'

const Footer = () => {
  return (
    <footer className="footer bg-primary-dark">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 px-4 sm:px-6 pt-30 pb-10">

        <div className="flex flex-col items-center text-center gap-8">
          <h2 className="font-primary text-surface text-[28px] sm:text-[36px] md:text-[42px] font-normal leading-[1.2]">
            Clearer Skin Starts <br /> With One Visit
          </h2>
          <Button label="Book a Consultation" bgColor="#f7ecdf" textColor="#09292b" />
        </div>

        <hr className="border-surface/10 w-full" />

        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">

          {/* Brand block */}
          <div className="flex flex-col gap-5 lg:w-1/3">
            <a href="/" className="flex items-center gap-2 w-fit">
             <img className='w-30' src="/logo.png" alt="Dr. Kajal Komalan" />
            </a>

            <p className="font-secondary text-surface/60 text-[15px] leading-relaxed ">
               Skinique by Dr. Kajal Komalan is a dermatology and aesthetic medicine clinic in Navi Mumbai, offering skin, hair, and laser treatments. Every treatment is personalized and delivered by a qualified dermatologist using USFDA-approved technology.
            </p>

            <div className="flex items-center gap-5 flex-wrap pt-1">
              <div className="flex items-center gap-1.5">
                <i className="ri-shield-check-line text-surface/70 text-base"></i>
                <span className="font-secondary text-surface/70 text-[13px]">FDA Approved</span>
              </div>
              <div className="flex items-center gap-1.5">
                <i className="ri-award-line text-surface/70 text-base"></i>
                <span className="font-secondary text-surface/70 text-[13px]">Board Certified</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 lg:gap-20">

            <div className="flex flex-col gap-5">
              <p className="font-secondary text-[13px] leading-4.75 font-medium text-surface/50 uppercase tracking-wide">
                Pages
              </p>
              <ul className="flex flex-col gap-3.75 text-[15px] leading-[20px]">
                <li><a href="/" className="font-secondary text-surface/80 hover:text-surface transition-colors duration-200">Home</a></li>
                <li><a href="/about" className="font-secondary text-surface/80 hover:text-surface transition-colors duration-200">About</a></li>
                <li><a href="/services" className="font-secondary text-surface/80 hover:text-surface transition-colors duration-200">Services</a></li>
                <li><a href="/results" className="font-secondary text-surface/80 hover:text-surface transition-colors duration-200">Results</a></li>
                <li><a href="/contact" className="font-secondary text-surface/80 hover:text-surface transition-colors duration-200">Contact</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <p className="font-secondary text-[13px] leading-[19px] font-medium text-surface/50 uppercase tracking-wide">
                Services
              </p>
              <ul className="flex flex-col gap-[15px] text-[15px] leading-[20px]">
                <li><a href="/services/skin" className="font-secondary text-surface/80 hover:text-surface transition-colors duration-200">Skin</a></li>
                <li><a href="/services/hair" className="font-secondary text-surface/80 hover:text-surface transition-colors duration-200">Hair</a></li>
                <li><a href="/services/laser" className="font-secondary text-surface/80 hover:text-surface transition-colors duration-200">Laser</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <p className="font-secondary text-[13px] leading-[19px] font-medium text-surface/50 uppercase tracking-wide">
                Get In Touch
              </p>
              <ul className="flex flex-col gap-[15px] text-[15px] leading-[20px]">
                <li>
                  <a
                    href="https://maps.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 font-secondary text-surface/80 hover:text-surface transition-colors duration-200 max-w-[240px]"
                  >
                    <i className="ri-map-pin-line text-base mt-0.5 shrink-0"></i>
                    Tower, A-216, B Wing, 217, 218, opposite Nimantran Hotel, Sector 15, CBD Belapur, Navi Mumbai, Maharashtra 400614
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+917021210819"
                    className="flex items-center gap-2 font-secondary text-surface/80 hover:text-surface transition-colors duration-200"
                  >
                    <i className="ri-phone-line text-base shrink-0"></i>
                    +91 70212 10819
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@kskinique.com"
                    className="flex items-center gap-2 font-secondary text-surface/80 hover:text-surface transition-colors duration-200"
                  >
                    <i className="ri-mail-line text-base shrink-0"></i>
                    support@kskinique.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="flex flex-col gap-3">
          <p className="font-secondary text-[13px] text-surface/40">
           © 2026 KSkinique. All rights reserved. {" "}
              <span className="text-surface/70 font-medium">Created by Raino Studios.</span>
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer