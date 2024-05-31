import Image from "next/image";
import headerLogo from "@/public/images/header-logo.svg";
import ThemeSwitcher from "./ThemeSwitch";
import { HEADER_LINKS } from "@/constants/constants";

const Header = () => {
  return (
    <nav className="flex justify-between items-center">
      <div>
        <Image src={headerLogo} alt="Logo" width={129} height={29} priority />
      </div>

      <ul className="flex gap-4 max-lg:hidden">
        {HEADER_LINKS.map((item, index) => (
          <li key={index} className="px-6">
            <a href="#" className="text-lg text-slate-gray">
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="w-10 h-10">
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Header;
