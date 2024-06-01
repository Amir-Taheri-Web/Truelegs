import { SERVICES } from "@/constants/constants";
import ServicesCard from "@/elements/ServicesCard";
import Image from "next/image";

const Services = () => {
  return (
    <ul className="flex flex-wrap gap-10">
      {SERVICES.map((item, index) => (
        <ServicesCard item={item} key={index} />
      ))}
    </ul>
  );
};

export default Services;
