"use client";

import { Logo } from "@/assets/images";
import ThemeSwitch from "./ThemeSwitch";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="transition opacity-95 bg-slate-50 dark:bg-slate-700 pacity-95 pt-2 pb-2 -top-1 left-0 right-0  fixed z-10 shadow-lg shadow-black-500/50  xl:pl-20 xl:pr-20 md:pl-2 md:pr-2 pl-1 pr-2  ">
        <div className="container  mx-auto flex items-center   justify-between">
          <p className="leading-8 flex items-center gap-1 font-extrabold text-xl dark:text-white">
            <Image className="w-12 h-12" src={Logo} alt="logo" />
            Namoz vaqtlari
          </p>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Header;
