import { SERVICES } from "@/constants/constants";
import Image from "next/image";

const Services = () => {
  return (
    <ul className="flex flex-wrap gap-10">
      {SERVICES.map((item, index) => (
        <li key={index} className="shadow-3xl rounded-2xl px-10 py-14 flex flex-col gap-4 flex-1">
          <div className="bg-coral-red p-2 w-[45px] h-[45px] rounded-full flex justify-center items-center">
            <Image src={item.icon} alt={item.title} width={25} height={25} />
          </div>

          <h3 className="text-3xl font-semibold">{item.title}</h3>

          <p className="text-slate-gray leading-6">{item.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default Services;
