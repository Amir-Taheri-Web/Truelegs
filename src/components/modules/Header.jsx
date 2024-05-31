import Image from "next/image";
import headerLogo from "@/public/images/header-logo.svg";
import { HEADER_LINKS } from "src/constants/constants";
import ThemeSwitcher from "./ThemeSwitch";

const Header = () => {
  return (
    <nav>
      <div>
        <Image src={headerLogo} alt="Logo" width={129} height={29} />
      </div>

      <ul>
        {HEADER_LINKS.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <ThemeSwitcher />
    </nav>
  );
};

export default Header;
