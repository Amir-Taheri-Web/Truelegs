import Image from "next/image";

const ServicesCard = ({ item }) => {
  return (
    <li className="shadow-3xl dark:shadow-none dark:bg-pale-blue rounded-2xl px-10 py-14 flex flex-col gap-4">
      <div className="bg-coral-red p-2 w-[45px] h-[45px] rounded-full flex justify-center items-center">
        <Image src={item.icon} alt={item.title} width={25} height={25} />
      </div>

      <h3 className="text-3xl dark:text-black font-semibold">{item.title}</h3>

      <p className="text-slate-gray leading-6">{item.description}</p>
    </li>
  );
};

export default ServicesCard;
