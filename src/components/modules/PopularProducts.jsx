import { POPULAR_SHOES } from "@/constants/constants";
import Image from "next/image";
import star from "@/public/icons/star.svg";

const PopularProducts = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold max-sm:text-3xl">
        Our <span className="text-coral-red">Popular</span> Products
      </h2>

      <p className="max-w-[30rem] mt-6 mb-12 text-slate-gray leading-7">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>

      <ul className="grid grid-cols-4 gap-14 max-lg:grid-cols-3 max-sm:grid-cols-2">
        {POPULAR_SHOES.map((item) => (
          <li key={item.title}>
            <div className="bg-card bg-cover rounded-xl w-fit">
              <Image
                className="rounded-xl"
                src={item.image}
                alt={item.title}
                width={280}
                height="auto"
              />
            </div>

            <div className="mt-8 mb-4 flex gap-2">
              <Image src={star} alt="star icon" width={24} height={24} />
              <span className="text-xl text-slate-gray">({item.rating})</span>
            </div>

            <h3 className="text-2xl font-semibold max-sm:text-xl">{item.title}</h3>
            <span className="block mt-3 text-xl text-coral-red">${item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularProducts;
