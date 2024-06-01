import { FOOTER_LINKS, SOCIAL_ICONS } from "@/constants/constants";
import logo from "@/public/images/footer-logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between gap-44">
        <div className="flex flex-col gap-6">
          <Image src={logo} alt="footer logo" width={160} height="auto" />
          <p className="text-white-400 max-w-[22rem] leading-8 tracking-wider">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards.
          </p>

          <ul className="flex gap-5 w-fit">
            {SOCIAL_ICONS.map((item, index) => (
              <li key={index} className="w-fit bg-white rounded-full">
                <a href="#" className="p-3 block">
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    width={25}
                    height={25}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between gap-8 flex-1">
          {FOOTER_LINKS.map((item, index) => (
            <ul key={index} className="flex flex-col gap-4">
              <h3 className="text-white-400 text-2xl mb-4 font-semibold">
                {item.title}
              </h3>
              {item.links.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="mt-24 flex justify-between flex-wrap gap-8">
        <p className="text-white-400">© Copyright. All rights reserved</p>
        <p className="text-white-400">
          <a href="#">Terms & Conditions</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
