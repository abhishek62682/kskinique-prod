import { useState } from "react";
import Button from "../ui/Button";

const contactItems = [
  {
    icon: "ri-map-pin-2-line",
    title: "Clinic Address",
    content:
      "Tower, A Wing, 216, 220, B Wing, 217, 218, opposite Nimantran Hotel, Sector 15, CBD Belapur, Navi Mumbai, Maharashtra 400614",
    href: "https://www.google.com/maps?cid=17611080526173218198",
  },
  {
    icon: "ri-phone-line",
    title: "Phone",
    content: "+91 70212 10819",
    href: "tel:+917021210819",
  },
  {
    icon: "ri-mail-line",
    title: "Email Address",
    content: "support@kskinique.com",
    href: "mailto:support@kskinique.com",
  },
  {
    icon: "ri-time-line",
    title: "Business Hours",
    content: "Mon-Sun, 11:00 AM – 7:00 PM",
  },
];

const socialLinks = [
  { icon: "ri-instagram-line", href: "https://www.instagram.com/skinique_bydr.kajal/reels/?hl=en" },
  {
    icon: "ri-whatsapp-line",
    href: `https://wa.me/917021210819?text=${encodeURIComponent("Hi, I'd like to book a consultation")}`,
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    service: "",
    email: "",
    message: "",
  });
  const [mapActive, setMapActive] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const lines = [
      "New enquiry from the website:",
      `Name: ${form.name}`,
      `Contact Number: ${form.contact}`,
      form.email && `Email: ${form.email}`,
      form.service && `Service: ${form.service}`,
      form.message && `Message: ${form.message}`,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/917021210819?text=${text}`, "_blank", "noopener,noreferrer");

    setForm({ name: "", contact: "", service: "", email: "", message: "" });
  };

  return (
    <section className="w-full bg-surface">
      <div className="w-full max-w-7xl  mx-auto px-4 sm:px-6 pb-[100px] md:pb-[130px] lg:pb-[200px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[32px] overflow-hidden">

          {/* left info panel */}
          <div className="lg:col-span-5 bg-primary-dark px-8 sm:px-10 py-12 sm:py-14 flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <div className="py-1.5 px-3 flex items-center gap-2.5 rounded-[30px] bg-text-light/10 w-fit">
                  <div className="size-1.5 rounded-full bg-text-light"></div>
                  <span className="text-[12px] leading-4 font-medium uppercase text-text-light font-secondary tracking-wide">
                    get in touch
                  </span>
                </div>
                <h2 className="text-[32px] sm:text-[38px] font-primary text-text-light leading-none">
                  Contact us
                </h2>
              </div>

              <div className="flex flex-col gap-8">
                {contactItems.map((item, i) => (
                  <div key={item.title} className="relative flex gap-5">
                    {i < contactItems.length - 1 && (
                      <span className="absolute left-[21px] top-[48px] h-[calc(100%+32px-48px)] w-px border-l border-dashed border-text-light/25" />
                    )}
                    <div className="relative z-10 size-[44px] rounded-full border border-text-light/20 bg-text-light/10 flex items-center justify-center shrink-0">
                      <i className={`${item.icon} text-[20px] text-text-light`}></i>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-[16px] font-medium text-text-light font-secondary">
                        {item.title}
                      </h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="max-w-sm text-[14px] leading-[1.7] text-text-light/70 font-secondary hover:text-text-light hover:underline transition-colors duration-200 w-fit"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="max-w-sm text-[14px] leading-[1.7] text-text-light/70 font-secondary">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-[40px] rounded-full border border-text-light/20 bg-text-light/10 flex items-center justify-center hover:bg-text-light/20 transition"
                >
                  <i className={`${social.icon} text-[18px] text-text-light`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* right form panel */}
          <div className="lg:col-span-7 bg-primary-05 px-8 sm:px-10 py-12 sm:py-14 flex flex-col gap-6">
            <h2 className="text-[28px] sm:text-[32px] font-primary text-primary-dark leading-none">
              Get in touch
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-[14px] bg-primary-05 border border-primary-dark/10 px-4 py-3.5 text-[14px] font-secondary text-primary-dark placeholder:text-primary-dark/50 outline-none focus:border-primary-dark/30 transition"
                />
                <input
                  type="tel"
                  name="contact"
                  placeholder="Contact Number"
                  required
                  value={form.contact}
                  onChange={handleChange}
                  className="w-full rounded-[14px] bg-primary-05 border border-primary-dark/10 px-4 py-3.5 text-[14px] font-secondary text-primary-dark placeholder:text-primary-dark/50 outline-none focus:border-primary-dark/30 transition"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address (optional)"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-[14px] bg-primary-05 border border-primary-dark/10 px-4 py-3.5 text-[14px] font-secondary text-primary-dark placeholder:text-primary-dark/50 outline-none focus:border-primary-dark/30 transition"
                />
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full rounded-[14px] bg-primary-05 border border-primary-dark/10 px-4 py-3.5 text-[14px] font-secondary text-primary-dark outline-none focus:border-primary-dark/30 transition"
                >
                  <option value="">Service (optional)</option>
                  <option value="skin">Skin</option>
                  <option value="hair">Hair</option>
                  <option value="laser">Laser</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Message.. (optional)"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full flex-1 min-h-32 resize-none rounded-[14px] bg-primary-05 border border-primary-dark/10 px-4 py-3.5 text-[14px] font-secondary text-primary-dark placeholder:text-primary-dark/50 outline-none focus:border-primary-dark/30 transition"
              />

              <label className="flex w-fit items-center gap-3 rounded-[14px] border border-primary-dark/10 bg-primary-05 px-4 py-3.5 text-[14px] font-secondary text-primary-dark">
                <input type="checkbox" className="h-4 w-4 accent-primary-dark" />
                I'm not a robot
              </label>

              <div className="pt-2">
                <Button
                  type="submit"
                  label="Send Your Message"
                  bgColor="#986a3e"
                  textColor="#fff"
                />
              </div>
            </form>
          </div>

        </div>

        {/* full-width google map, scroll-safe (click to activate) */}
        <div
          className="relative mt-8 rounded-[32px] overflow-hidden border border-primary-dark/10"
          onMouseLeave={() => setMapActive(false)}
        >
          <iframe
            src="https://www.google.com/maps?cid=17611080526173218198&output=embed"
            className="w-full h-[420px] sm:h-[480px]"
            style={{ border: 0, pointerEvents: mapActive ? "auto" : "none" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Skinique - Dr. Kajal Komalan location"
          ></iframe>

          {!mapActive && (
            <div
              onClick={() => setMapActive(true)}
              className="absolute inset-0 flex items-center justify-center bg-primary-dark/5 hover:bg-primary-dark/10 transition cursor-pointer"
            >
              <span className="rounded-full bg-primary-dark/90 text-text-light text-[13px] font-secondary px-4 py-2">
                Click to interact with map
              </span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}