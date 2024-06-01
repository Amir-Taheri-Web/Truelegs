import { SERVICES } from "@/constants/constants";
import ServicesCard from "@/elements/ServicesCard";
import Image from "next/image";

const Services = () => {
  return (
    <ul className="grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-10 justify-between">
      {SERVICES.map((item, index) => (
        <ServicesCard item={item} key={index} />
      ))}
    </ul>
  );
};

export default Services;
