// TrustMarquee.jsx

const TRUST_ITEMS = [
  "Qualified Dermatologist",
  "Personalized Treatment Plans",
  "USFDA Approved Technologies",
  "Strict Hygiene Protocols",
  "Latest Laser & Aesthetic Equipment",
];

const marqueeItems = [...TRUST_ITEMS, ...TRUST_ITEMS];

export default function TrustMarquee() {
  return (
    <div className="relative w-full bg-surface py-4 overflow-hidden">
      <div
        className="flex w-max animate-marquee"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        {[0, 1].map((dupe) => (
          <div key={dupe} className="flex items-center gap-6 sm:gap-8 px-3 sm:px-4 shrink-0">
            {marqueeItems.map((item, i) => (
              <div key={`${dupe}-${i}`} className="flex items-center gap-6 sm:gap-8">
                <span className="text-[11px] sm:text-[12px] font-secondary font-medium text-text-soft uppercase tracking-wide whitespace-nowrap">
                  {item}
                </span>
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-text-soft">
                  <path
                    d="M11.299 16.517L11.4268 13.0014L8.45455 14.8871L7.6875 13.5447L10.8196 11.9148L7.6875 10.2848L8.45455 8.94247L11.4268 10.8281L11.299 7.3125H12.8331L12.7053 10.8281L15.6776 8.94247L16.4446 10.2848L13.3125 11.9148L16.4446 13.5447L15.6776 14.8871L12.7053 13.0014L12.8331 16.517H11.299Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee-scroll 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}