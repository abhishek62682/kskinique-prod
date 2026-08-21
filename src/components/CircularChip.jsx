import { Link } from "react-router-dom";

const CircularChip = ({
  rotate = 0,
  label = "Scar Reduction",
  image = "https://framerusercontent.com/images/gzen5eX2cjNUuGHxoxYDiHqSP9I.jpg?width=100&height=100",
  to,
}) => {
  return (
    <div
  className="absolute h-full row"
  style={{
    transform: `rotate(${rotate}deg)`,
  }}
>
  <Link
    to={to ?? "/services"}
    className="flex items-center rotate-90 min-w-50 w-max shrink-0
               gap-2.5 py-1.5 pl-1.5 pr-2.5
               border border-white/30 backdrop-blur-[5px]
               bg-[rgba(152,106,62,0.1)] rounded-full transition-colors duration-300 hover:bg-[rgba(152,106,62,0.25)]"
  >
    <img
      className="size-9 rounded-full object-cover"
      src={image}
      alt={label}
    />

    <p className="font-secondary text-white text-[14px] shrink-0 whitespace-nowrap">
      {label}
    </p>
  </Link>
</div>
  );
};

export default CircularChip;