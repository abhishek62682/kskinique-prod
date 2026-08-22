import { Link } from "react-router-dom";

const Button = ({
  bgColor = "#f7ecdf",
  textColor,
  label = "Book Appointment",
  to,
  href,
  type,
  onClick,
}) => {
  const style = { backgroundColor: bgColor, color: textColor };
  const className =
    "group relative w-fit overflow-hidden rounded-[30px] flex items-center gap-2.5 font-secondary py-3 pl-2.5 pr-5";

  const content = (
    <>
      <div className="absolute left-2.5 top-1/2 -translate-y-1/2 size-6 bg-white rounded-full scale-100 group-hover:scale-[20] transition-transform duration-500 ease-in-out origin-center" />

      <div className="relative z-10 size-6 flex justify-center items-center rounded-full">
        <img
          src="https://framerusercontent.com/images/O1tnocyvBNm6Zym1OQLf7n6GMk.svg?width=13&height=13"
          alt=""
        />
      </div>

      <span className="relative z-10 text-[14px] font-medium transition-colors duration-200 group-hover:!text-black">
        {label}
      </span>
    </>
  );

  if (type === "submit" || type === "button") {
    return (
      <button type={type} onClick={onClick} style={style} className={className}>
        {content}
      </button>
    );
  }

  if (href) {
    const isExternal = /^(https?:|tel:|mailto:)/.test(href);
    return (
      <a
        href={href}
        target={isExternal && href.startsWith("http") ? "_blank" : undefined}
        rel={isExternal && href.startsWith("http") ? "noopener noreferrer" : undefined}
        onClick={onClick}
        style={style}
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={to ?? "/contact"} onClick={onClick} style={style} className={className}>
      {content}
    </Link>
  );
};

export default Button;
