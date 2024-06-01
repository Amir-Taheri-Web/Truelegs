"use client";

import { HERO_SHOES, STATISTICS } from "@/constants/constants";
import Button from "@/elements/Button";
import Card from "@/elements/Card";
import arrow from "@/public/icons/arrow-right.svg";
import heroImage from "@/public/images/big-shoe1.png";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [heroBg, setHeroBg] = useState(heroImage);

  return (
    <div className="flex justify-between relative max-xl:flex-col">
      <div className="relative z-20 max-lg:-z-20 flex flex-col justify-center min-h-svh max-xl:static max-xl:min-h-fit max-xl:mt-40 max-sm:mt-32">
        <p className="text-2xl text-coral-red pb-8">Our summer collections</p>

        <h1 className="text-8xl font-bold leading-[100px] max-sm:text-4xl z-10 bg-white dark:bg-dark-bg max-xl:bg-transparent relative block max-xl:p-0 p-8 pl-0 rounded-tr-md rounded-br-md">
          <span className="bg-white dark:bg-transparent max-xl:bg-transparent relative block max-xl:p-0 p-8 pl-0 rounded-tr-md rounded-br-md">
            The New Arrival{" "}
          </span>
          <span className="text-coral-red">Truelegs </span>
          Shoes
        </h1>

        <p className="text-slate-gray dark:text-white text-lg leading-8 mt-4 mb-14 tracking-wider">
          <span className="block">Discover stylish Nike arrivals, quality</span>{" "}
          comfort, and innovation for your active life.
        </p>

        <div>
          <Button label="Shop now" icon={arrow} />
        </div>

        <ul className="mt-20 max-sm:mt-10 flex flex-wrap gap-12">
          {STATISTICS.map((item, index) => (
            <li key={index} className="flex flex-col gap-1">
              <span className="text-4xl font-semibold max-sm:text-3xl">{item.amount}</span>
              <span className="text-slate-gray text-base">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-hero min-h-svh flex flex-1 items-center justify-center absolute right-0 w-7/12 z-10 max-xl:rounded-xl max-xl:mt-16 max-xl:static max-xl:w-full max-xl:min-h-fit">
        <Image src={heroBg} alt="shoe image" width={610} height={502} />

        <div className="absolute z-50 -bottom-20 left-0 right-0 mx-auto w-fit flex gap-8">
          {HERO_SHOES.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setHeroBg(item.url)}
              className={`bg-card bg-cover bg-clip-padding p-4 rounded-xl border-2 cursor-pointer ${
                heroBg === item.url ? "border-coral-red" : "border-transparent"
              }`}
            >
              <Card {...item} width={140} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
