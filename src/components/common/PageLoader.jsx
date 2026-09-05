// PageLoader.jsx
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const MIN_DISPLAY_MS = 600;
    const start = Date.now();

    const finish = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(MIN_DISPLAY_MS - elapsed, 0);
      setTimeout(() => {
        setFadingOut(true);
        setTimeout(() => setVisible(false), 400);
      }, remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
      return () => window.removeEventListener("load", finish);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-surface transition-opacity duration-[400ms] ease-out ${
        fadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <img
        src="/logo.png"
        alt="Skinique"
        className="w-32 sm:w-44 animate-pulse"
      />
    </div>
  );
}
