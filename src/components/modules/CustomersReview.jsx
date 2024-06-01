import { CUSTOMERS } from "@/constants/constants";
import Image from "next/image";
import star from "@/public/icons/star.svg";

const CustomersReview = () => {
  return (
    <div>
      <div className="text-center mb-20">
        {" "}
        <h2 className="text-4xl font-bold">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h2>
        <p className="max-w-[30rem] text-lg mt-4 mx-auto mb-12 text-slate-gray leading-7">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>

      <div className="flex justify-center gap-56">
        {CUSTOMERS.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 items-center text-center"
          >
            <Image
              src={item.avatar}
              alt={`${item.name} avatar`}
              width={120}
              height={120}
              className="rounded-full object-cover"
            />

            <p className="max-w-[25rem] text-lg text-slate-gray leading-7">
              {item.description}
            </p>

            <div className="flex gap-2 items-center">
              <Image src={star} alt="star icon" width={24} height={24} />
              <span className="text-xl text-slate-gray">({item.rating})</span>
            </div>

            <h3 className="text-2xl font-bold">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomersReview;
