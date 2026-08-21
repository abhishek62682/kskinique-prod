// ServiceCard.jsx
import { Link } from "react-router-dom";
import { slugify } from "../../utils/slugify";

export default function ServiceCard({ service, label }) {
  const { img, title, desc } = service;

  return (
    <Link to={`/services/${label}/${slugify(title)}`} className="group cursor-pointer flex flex-col">
      <div className="relative w-full h-[220px] rounded-[20px] overflow-hidden mb-5 flex justify-center items-end bg-primary-05">
        <div className="w-[78%] h-[92%] rounded-t-full absolute bottom-0 overflow-hidden shadow-sm bg-white">
          <img
            src={img}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <span className="absolute top-4 right-4 text-[11px] font-medium font-secondary text-primary-dark bg-white px-3 py-1 rounded-full capitalize z-10">
          {label}
        </span>
      </div>

      <h3 className="font-primary text-[20px] text-primary-dark leading-tight mb-2">{title}</h3>
      <p className="text-[13px] leading-[20px] text-text-soft font-secondary line-clamp-2">
        {desc}
      </p>
    </Link>
  );
}