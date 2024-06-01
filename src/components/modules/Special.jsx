import Image from "next/image";
import bg from "@/public/images/offer.svg";
import Button from "@/elements/Button";
import arrow from "@/public/icons/arrow-right.svg";

const Special = () => {
  return (
    <div className="flex flex-wrap-reverse gap-12 items-center">
      <div>
        <Image src={bg} alt="background image" width={700} height={600} />
      </div>

      <div className="max-w-[35rem]">
        <h2 className="text-4xl font-bold leading-[4rem]">
          <span className="text-coral-red">Special</span> Offer
        </h2>

        <p className="text-xl mt-6 mb-12 text-slate-gray leading-7">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>

        <p className="mt-6 mb-12 text-xl text-slate-gray leading-7">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="flex items-center gap-4">
          <Button label="View details" />
          <Button label="Learn more" noBg={true} />
        </div>
      </div>
    </div>
  );
};

export default Special;
