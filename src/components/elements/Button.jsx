import Image from "next/image";

const Button = ({ label, icon }) => {
  return (
    <button type="button" className="btn">
      {label}{" "}
      {icon && <Image src={icon} alt="Arrow right" width={24} height={24} />}
    </button>
  );
};

export default Button;
