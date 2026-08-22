export default function FloatingActionButtons() {
  const phone = "+917021210819";
  const whatsapp = "917021210819";
  const whatsappMessage = "Hi, I'd like to book a consultation";
  const qrImage = "/qrcode.png"; // 👈 apna QR image ka path yaha daal de

  return (
    <div className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-50 flex flex-col gap-3">

      {/* whatsapp */}
      <a
        href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative size-13 sm:size-14 rounded-full bg-primary-dark flex items-center justify-center shadow-[0_4px_20px_rgba(38,24,19,0.35)] hover:bg-primary-dark/90 transition-colors"
      >
        <i className="ri-whatsapp-line text-[24px] sm:text-[26px] text-text-light"></i>
        <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-[10px] bg-primary-dark ring-1 ring-white/20 px-3 py-1.5 text-[13px] font-secondary text-text-light opacity-0 translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
          Chat on WhatsApp
        </span>
      </a>

      {/* call */}
      <a
        href={`tel:${phone}`}
        aria-label="Call us"
        className="group relative size-13 sm:size-14 rounded-full bg-surface-alt flex items-center justify-center shadow-[0_4px_20px_rgba(38,24,19,0.35)] hover:bg-surface-alt/90 transition-colors"
      >
        <i className="ri-phone-fill text-[22px] sm:text-[24px] text-primary-dark"></i>
        <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-[10px] bg-primary-dark ring-1 ring-white/20 px-3 py-1.5 text-[13px] font-secondary text-text-light opacity-0 translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
          Call us
        </span>
      </a>

      {/* qr code - hover to preview & scan */}
      <div
        className="group relative size-13 sm:size-14 rounded-full bg-primary-dark flex items-center justify-center shadow-[0_4px_20px_rgba(38,24,19,0.35)] hover:bg-primary-dark/90 transition-colors cursor-pointer"
        aria-label="Scan QR code"
      >
        <i className="ri-qr-code-line text-[22px] sm:text-[24px] text-text-light"></i>

        {/* preview popup */}
        <div className="pointer-events-none absolute right-full mr-3 bottom-0 opacity-0 translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
          <div className="w-[130px] rounded-[16px] bg-surface p-2 shadow-[0_8px_24px_rgba(38,24,19,0.2)] ring-1 ring-primary-dark/10">
            <img
              src={qrImage}
              alt="Scan to chat with us"
              className="w-full aspect-square rounded-[8px] object-contain"
            />
            <p className="mt-1 text-center text-[11px] font-secondary text-primary-dark leading-tight">
              Scan to connect
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}