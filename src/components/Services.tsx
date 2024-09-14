import React from "react";
import service1 from "../assets/Service1.png";
import service2 from "../assets/Service2.png";
import service3 from "../assets/Service3.png";
import nails from "../assets/NailsCols2.png";
import { usei18nUtil } from "@/utils/usei18nUtil";
import { ServiceCard } from "./ServiceCard";

export const Services: React.FC = () => {
  const { t } = usei18nUtil();

  return (
    <div className="px-8 mt-10 md:mt-12 xl:mt-14 2xl:mt-24 space-y-6 md:space-y-7 lg:space-y-8 xl:space-y-9 2xl:space-y-12 md:px-11 xl:px-40 2xl:px-56 relative z-40">
      <h1 className=" text-black font-celesse text-[50px] font-normal md:text-[60px] xl:text-[90px]">
        {t("home.services.services")}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3">
        <ServiceCard src={service1} service="lashes" />
        <ServiceCard src={service3} service="brows" />
        <ServiceCard src={nails} service="nails" willHide />
        <ServiceCard src={service2} service="nails" willApair />
      </div>
    </div>
  );
};
