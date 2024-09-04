import React from "react";
import thumbPhone from "../assets/HeroPhone.jpg";
import thumbTablet from "../assets/HeroTablet.jpg";
import thumbLaptop from "../assets/HeroLaptop.jpg";
import thumb from "../assets/Hero.jpg";
import { usei18nUtil } from "@/utils/usei18nUtil";

export const Hero: React.FC = () => {
  const { t } = usei18nUtil();
  return (
    <div className="relative w-screen z-40">
      <div className="md:hidden">
        <img src={thumbPhone} alt="" className="w-screen" />
      </div>

      <div className="hidden md:block xl:hidden">
        <img src={thumbTablet} alt="" className="w-screen" />
      </div>

      <div className="hidden xl:block 2xl:hidden">
        <img src={thumbLaptop} alt="" className="w-screen" />
      </div>

      <div className="hidden 2xl:block">
        <img src={thumb} alt="" className="w-screen" />
      </div>

      <div className="absolute w-full px-8 pb-6 md:px-11 md:pb-9 xl:px-40 xl:pb-14 2xl:px-56 bottom-0 flex justify-between pt-64 bg-gradient-to-b from-transparent to-[#252525]">
        <div className="flex flex-col-reverse md:flex-col">
          <p className="font-celesse text-white text-lg md:text-xl xl:text-2xl 2xl:text-4xl md:w-80 xl:w-96 2xl:w-[560px]">
            {t("home.hero.desc")}
          </p>
          <h1 className="text-6xl md:text-[110px] xl:text-[160px] 2xl:text-[200px] font-sonder text-white">
            Beauty Salon
          </h1>
        </div>
      </div>
    </div>
  );
};
