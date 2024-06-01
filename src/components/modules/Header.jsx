import Image from "next/image";
import headerLogo from "@/public/images/header-logo.png";
import ThemeSwitcher from "./ThemeSwitch";
import { HEADER_LINKS } from "@/constants/constants";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  return (
    <nav className="flex justify-between items-center">
      <div>
        <Image src={headerLogo} alt="Logo" width={70} height="auto" priority />
      </div>

      <ul className="flex gap-4 max-lg:hidden">
        {HEADER_LINKS.map((item, index) => (
          <li key={index} className="px-6">
            <a href="#" className="text-lg text-slate-gray dark:text-coral-red">
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="w-10 h-10 max-lg:ml-auto max-lg:mr-8">
        <ThemeSwitcher />
      </div>

      <div className="lg:hidden relative z-[100]">
        <BurgerMenu />
      </div>
    </nav>
  );
};

export default Header;
