// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import light from "@/public/icons/light.svg";
import dark from "@/public/icons/dark.svg";
import lightDark from "@/public/icons/lightDark.svg";
import Image from "next/image";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <div>
        <Image src={lightDark} alt="Light/Dark icon" width={35} height={35} />
      </div>
    );

  return (
    <div className="bg-white flex items-center justify-center p-2 rounded-lg shadow-lg">
      {theme === "light" && (
        <button onClick={() => setTheme("dark")}>
          <Image src={light} alt="Light logo" width={35} height={35} />
        </button>
      )}
      {theme === "dark" && (
        <button onClick={() => setTheme("light")}>
          <Image src={dark} alt="Dark logo" width={35} height={35} />
        </button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
