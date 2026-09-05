// DoctorSection.jsx
import doctorImg from "../../assets/misc/doctor.png";

export default function DoctorSection() {
  return (
    <section className="w-full bg-linear-to-br from-primary-dark via-primary-dark to-primary-dark/90 relative overflow-hidden pt-[50px] md:pt-[65px] lg:pt-[100px]">
      <div className="w-full max-w-7xl mx-auto pl-4 sm:pl-6">
        <div className="flex flex-wrap-reverse lg:flex-nowrap relative items-center gap-6 sm:gap-8 lg:gap-12">
          <div className="w-full lg:w-1/3 flex items-end justify-center lg:justify-start pt-2 lg:pt-0">
            <img
              src={doctorImg}
              alt="Dr. Kajal Komalan"
              className="h-80 sm:h-100 lg:h-125 w-auto max-w-full object-contain object-bottom"
            />
          </div>
          <div className="w-full lg:w-2/3 flex flex-col justify-center gap-4 sm:gap-6">
            <h2 className="text-[24px] sm:text-[32px] lg:text-[38px] font-primary text-text-light leading-[1.2] text-left">
              Meet the Dermatologist
              <br />
              Dr. Kajal Komalan
            </h2>
            <p className="text-[13px] sm:text-[14px] text-text-light/70 font-secondary text-left">
              MBBS, Diploma in Dermatology and Venereology (DDV)
            </p>
            <div className="flex flex-col gap-4 text-left">
              <p className="text-[13px] sm:text-[14px] leading-[1.75] text-text-light/85 font-secondary">
                Dr. Kajal Komalan founded Skinique on a simple belief: real care starts with
                really listening. She brings 6 years of experience as a general physician and 3
                years of focused experience in dermatology and aesthetic medicine, and takes the
                time to understand each patient's concerns before building their treatment plan,
                not the other way around.
              </p>
              <p className="text-[13px] sm:text-[14px] leading-[1.75] text-text-light/85 font-secondary">
                Her approach goes beyond the treatment room. Alongside in-clinic procedures,
                patients receive dietary recommendations and daily skin and hair care routines
                tailored to their individual needs, so results are supported long after they
                leave the clinic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
