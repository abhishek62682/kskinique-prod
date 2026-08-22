import { useState, useEffect, useRef } from "react";
import Button from "./ui/Button";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while the sheet is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const [servicesOpenMobile, setServicesOpenMobile] = useState(false);

  const SERVICE_CATEGORIES = [
    { slug: "skin", label: "Skin" },
    { slug: "hair", label: "Hair" },
    { slug: "laser", label: "Laser" },
  ];

  return (
    <>
      <nav
        id="nav"
        className={`relative w-full z-300 transition-all duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between rounded-full px-6 py-4 bg-surface/70 backdrop-blur-lg">

          {/* LEFT */}
          <div className="flex items-center flex-1">
            <div className="flex md:hidden items-center gap-2 font-primary text-[20px] text-primary-dark">
              <img
                src="/logo.png"
                alt="Skinique"
                className="w-20"
              />
              {/* <span>Skinique</span> */}
            </div>

            <div className="hidden md:flex items-center gap-6 font-secondary">
              <Link to="/" className="text-sm text-text transition-all duration-300 hover:opacity-60">
                Home
              </Link>
              <Link to="/about" className="text-sm text-text transition-all duration-300 hover:opacity-60">
                About
              </Link>

              <div className="group relative">
                <Link
                  to="/services"
                  className="flex items-center gap-1 py-2 text-sm text-text transition-all duration-300 hover:opacity-60"
                >
                  Services
                  <i className="ri-arrow-down-s-line text-[14px] transition-transform duration-300 group-hover:rotate-180" />
                </Link>

                <div className="absolute left-1/2 top-full w-44 -translate-x-1/2 pt-3 opacity-0 invisible translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50">
                  <div className="flex flex-col border border-border bg-surface p-2 shadow-xl">
                    {SERVICE_CATEGORIES.map((cat) => (
                      <Link
                        key={cat.slug}
                        to={`/services/${cat.slug}`}
                        className="border-b border-border px-4 py-2.5 text-sm text-text-secondary transition-colors duration-200 last:border-none hover:bg-primary-05 hover:text-primary-dark"
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/contact" className="text-sm text-text transition-all duration-300 hover:opacity-60">
                Contact
              </Link>
            </div>
          </div>

          {/* CENTER LOGO */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-2 font-primary text-[22px] text-text whitespace-nowrap pointer-events-none">
            <img
              src="/logo.png"
              alt="Skinique"
              className="w-25"
            />
            {/* <span>Skinique</span> */}
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-end gap-3 flex-1">
            <div className="hidden md:block">
              <Button label="Book Appointment" bgColor="#F7ECDF" textColor="#261813" />
            </div>

            {/* mobile: only the hamburger, no crowded button */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="flex md:hidden items-center justify-center size-12 rounded-full bg-primary-05 text-primary-dark text-[24px] shrink-0"
            >
              <i className="ri-menu-3-line"></i>
            </button>
          </div>

        </div>
      </nav>

      {/* MOBILE SLIDE SHEET */}
      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        className={`md:hidden fixed inset-0 z-[400] bg-overlay/50 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sheet panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        className={`md:hidden fixed top-0 right-0 h-full w-[82%] max-w-[340px] z-[500] bg-surface shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sheet header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border">
          <img src="/logo.png" alt="Skinique" className="w-20" />
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="flex items-center justify-center size-11 rounded-full bg-primary-05 text-primary-dark text-2xl shrink-0"
          >
            <i className="ri-close-line"></i>
          </button>
        </div>

        {/* Sheet links */}
        <div className="flex flex-col font-secondary px-6 py-6 gap-1 overflow-y-auto">
          {[["/", "Home"], ["/about", "About"]].map(([href, label], i) => (
            <Link
              to={href}
              key={href}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
              className={`text-base text-text py-3 border-b border-border/60 last:border-none transition-all duration-300 hover:opacity-60 ${
                menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              }`}
            >
              {label}
            </Link>
          ))}

          <div
            style={{ transitionDelay: menuOpen ? "80ms" : "0ms" }}
            className={`border-b border-border/60 transition-all duration-300 ${
              menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
          >
            <div className="flex w-full items-center justify-between py-3 text-base text-text">
              <Link to="/services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
              <button
                type="button"
                onClick={() => setServicesOpenMobile((open) => !open)}
                aria-expanded={servicesOpenMobile}
                aria-label="Toggle services categories"
                className="flex items-center justify-center size-8 -mr-1"
              >
                <i className={`ri-arrow-down-s-line text-lg transition-transform duration-300 ${servicesOpenMobile ? "rotate-180" : ""}`} />
              </button>
            </div>

            <div className={`flex flex-col overflow-hidden transition-all duration-300 ${servicesOpenMobile ? "max-h-60 pb-3" : "max-h-0"}`}>
              {SERVICE_CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/services/${cat.slug}`}
                  onClick={() => setMenuOpen(false)}
                  className="py-2.5 pl-2 text-sm text-text-secondary hover:opacity-60"
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            style={{ transitionDelay: menuOpen ? "120ms" : "0ms" }}
            className={`text-base text-text py-3 border-b border-border/60 last:border-none transition-all duration-300 hover:opacity-60 ${
              menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Sheet footer */}
        <div className="mt-auto px-6 pb-8 pt-4 border-t border-border">
          <Button label="Book Appointment" bgColor="#261813" textColor="#F7ECDF" />
        </div>
      </div>
    </>
  );
}