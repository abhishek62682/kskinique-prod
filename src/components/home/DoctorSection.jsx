// DoctorSection.jsx
import Button from "../ui/Button";
import doctorPortrait from "../../assets/home/doctor-portrait.webp";
import credentialIcon1 from "../../assets/icons/credential-1.svg";
import credentialIcon2 from "../../assets/icons/credential-2.svg";
import credentialIcon3 from "../../assets/icons/credential-3.svg";
import credentialBadge from "../../assets/icons/credential-badge.svg";

export default function DoctorSection() {
  const credentials = [
    {
      label: "MBBS, DDV Qualified",
      icon: credentialIcon1,
    },
    {
      label: "3 Yrs Dermatology & Aesthetic Medicine",
      icon: credentialIcon2,
    },
    {
      label: "Personalized Treatment Plans",
      icon: credentialIcon3,
    },
  ];

  return (
    <section className="bg-surface w-full px-2.5 sm:px-12.5 pb-[100px] md:pb-[130px] lg:pb-[200px]">

<div className="bg-surface-alt rounded-[30px] px-5  py-20 sm:py-37.5">


    <div className="w-full max-w-7xl   mx-auto ">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          <div className="lg:col-span-5">
            <div className="relative rounded-[32px] overflow-hidden">
              <img
                src={doctorPortrait}
                className="w-full h-120 sm:h-135 lg:h-150 object-cover object-top"
                alt="Dr. Kajal Komalan"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-overlay/80 via-overlay/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 px-5 py-5">
                <div className="bg-white-10 backdrop-blur-md border border-white-10 flex items-center justify-between p-6 rounded-[20px]">
                  <div className="space-y-0.5">
                    <p className="text-text-light text-[24px] sm:text-[28px] font-primary font-normal leading-[34px]">
                      Dr. Kajal Komalan
                    </p>
                    <p className="text-text-light/70 text-[13px] font-secondary">
                      Dermatologist & Aesthetic Specialist
                    </p>
                  </div>
                  <img
                    src={credentialBadge}
                    className="size-7 opacity-80 shrink-0"
                    alt="icon"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6 lg:justify-between lg:h-150">

            <div className="flex flex-col gap-6">

              <div className="flex flex-col gap-3">
                <div className="py-1.5 px-3 flex items-center gap-2.5 rounded-[30px] bg-primary-05 w-fit">
                  <div className="size-1.5 rounded-full bg-primary-label"></div>
                  <span className="text-[12px] leading-4 font-medium uppercase text-primary-label font-secondary tracking-wide">
                    meet the doctor
                  </span>
                </div>
                <h2 className="text-[38px] sm:text-[46px] md:text-[52px] lg:text-[60px] font-primary text-primary-dark leading-none">
                  Dr. Kajal Komalan
                </h2>
                {/* <p className="text-[15px] font-medium text-text-soft font-secondary">
                  Dermatologist & Aesthetic Specialist
                </p> */}
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-[14px] sm:text-[15px] leading-[1.75] text-text-soft font-secondary">
                  Dr. Kajal Komalan founded Skinique on a simple belief: real care starts with really listening. She takes the time to understand each patient's concerns before building their treatment plan, not the other way around.
                </p>
                <p className="text-[14px] sm:text-[15px] leading-[1.75] text-text-soft font-secondary">
                  Alongside in-clinic procedures, patients receive dietary recommendations and daily skin and hair care routines tailored to their needs, because beautiful skin starts with healthy skin, and healthy skin starts with a confident you.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {credentials.map(({ label, icon }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="size-11 rounded-full border border-primary/20 bg-primary-05 flex items-center justify-center shrink-0">
                      <img src={icon} className="size-5.5" alt={label} />
                    </div>
                    <span className="text-[15px] font-medium text-primary-dark font-secondary">{label}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Button pinned to bottom */}
            <div>
              <Button label="Book a Consultation" textColor="#fff" bgColor="#986A3E" />
            </div>

          </div>

        </div>
      </div>
</div>
      
    
    </section>
  );
}