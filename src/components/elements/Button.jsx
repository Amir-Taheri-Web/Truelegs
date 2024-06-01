import Image from "next/image";

const Button = ({ label, icon, noBg }) => {
  return (
    <button
      type="button"
      className={`btn ${
        noBg
          ? "bg-transparent border border-slate-gray text-slate-gray"
          : null
      }`}
    >
      {label}{" "}
      {icon && <Image src={icon} alt="Arrow right" width={24} height={24} />}
    </button>
  );
};

export default Button;
