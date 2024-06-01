import Button from "@/elements/Button";
import arrow from "@/public/icons/arrow-right.svg";
import Image from "next/image";
import shoe from "@/public/images/shoe8.svg";

const SuperQuality = () => {
  return (
    <div className="flex justify-between gap-8">
      <div className="max-w-[35rem]">
        <h2 className="text-4xl font-bold leading-[4rem]">
          We provide you <span className="text-coral-red">Super Quality </span>{" "}
          Shoes
        </h2>

        <p className="text-xl mt-6 mb-12 text-slate-gray leading-7">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className="mt-6 mb-12 text-xl text-slate-gray leading-7">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>

        <Button label="Shop now" icon={arrow} />
      </div>

      <div>
        <Image src={shoe} alt="shoe image" width={570} height={522} />
      </div>
    </div>
  );
};

export default SuperQuality;
