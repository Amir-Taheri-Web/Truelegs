import Image from "next/image";
import headerLogo from "@/public/images/header-logo.svg";
import { HEADER_LINKS } from "src/constants/constants";
import ThemeSwitcher from "./ThemeSwitch";

const Header = () => {
  return (
    <nav className="flex justify-between items-center">
      <div>
        <Image src={headerLogo} alt="Logo" width={129} height={29} />
      </div>

      <ul className="flex gap-4 max-lg:hidden">
        {HEADER_LINKS.map((item, index) => (
          <li key={index} className="px-6">
            <a href="#" className="text-lg text-slate-gray">{item}</a>
          </li>
        ))}
      </ul>

      <ThemeSwitcher />
    </nav>
  );
};

export default Header;
