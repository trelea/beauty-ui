import React from "react";
import service1 from "../assets/Service1.png";
import service2 from "../assets/Service2.png";
import service3 from "../assets/Service3.png";
import nails from "../assets/NailsCols2.png";

import { PiArrowUpRightThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import { toISO8601DateString } from "@/lib/utils";
import { usei18nUtil } from "@/utils/usei18nUtil";

export const Services: React.FC = () => {
    const { t, lang } = usei18nUtil();
    return (
        <div className="px-8 mt-10 md:mt-12 xl:mt-14 2xl:mt-24 space-y-6 md:space-y-7 lg:space-y-8 xl:space-y-9 2xl:space-y-12 md:px-11 xl:px-40 2xl:px-56 relative z-40">
            <h1 className=" text-black font-celesse text-[50px] font-normal md:text-[60px] xl:text-[90px]">
                {t("home.services.services")}
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3">
                <Link
                    to={`/${lang}/appointments?lashes=true&_check_date=${toISO8601DateString(
                        new Date()
                    )}`}
                    className="relative"
                >
                    <img src={service1} alt="" />
                    <h1 className="absolute top-4 left-5 text-white font-sonder text-3xl md:top-5 md:left-6 lg:top-6 lg:left-7 xl:top-7 xl:left-9 2xl:top-9 2xl:left-10 lg:text-4xl 2xl:text-5xl">
                        {t("home.services.lashes")}
                    </h1>
                    <div className="aspect-square absolute bottom-2 right-2 md:bottom-1 md:right-1 w-full flex justify-end items-end">
                        <PiArrowUpRightThin className="p-1 hover:text-primary text-white bg-foreground rounded-full size-1/6 sm:size-1/5 shadow-2xl" />
                    </div>
                </Link>

                <Link
                    className="relative"
                    to={`/${lang}/appointments?brows=true&_check_date=${toISO8601DateString(
                        new Date()
                    )}`}
                >
                    <img src={service3} alt="" />
                    <h1 className="absolute top-4 left-5 text-white font-sonder text-3xl md:top-5 md:left-6 lg:top-6 lg:left-7 xl:top-7 xl:left-9 2xl:top-9 2xl:left-10 lg:text-4xl 2xl:text-5xl">
                        {t("home.services.brows")}
                    </h1>
                    <div className="aspect-square absolute bottom-2 right-2 md:bottom-1 md:right-1 w-full flex justify-end items-end">
                        <PiArrowUpRightThin className="p-1 hover:text-primary text-white bg-foreground rounded-full size-1/6 sm:size-1/5 shadow-2xl" />
                    </div>
                </Link>

                <Link
                    className="relative col-span-2 md:hidden"
                    to={`/${lang}/appointments?nails=true&_check_date=${toISO8601DateString(
                        new Date()
                    )}`}
                >
                    <img
                        src={nails}
                        alt=""
                        className="w-full shadow-2xl rounded-xl"
                    />
                    <h1 className="absolute top-6 left-7 text-white font-sonder text-3xl">
                        {t("home.services.nails")}
                    </h1>
                    <div className="aspect-square absolute bottom-3 right-3 h-full flex justify-end items-end">
                        <PiArrowUpRightThin className="p-1 hover:text-primary text-white bg-foreground rounded-full size-[14%] shadow-2xl" />
                    </div>
                </Link>

                <Link
                    className="relative max-md:hidden"
                    to={`/${lang}/appointments?nails=true&_check_date=${toISO8601DateString(
                        new Date()
                    )}`}
                >
                    <img src={service2} alt="" />
                    <h1 className="absolute top-4 left-5 text-white font-sonder text-3xl md:top-5 md:left-6 lg:top-6 lg:left-7 xl:top-7 xl:left-9 2xl:top-9 2xl:left-10 lg:text-4xl 2xl:text-5xl">
                        {t("home.services.nails")}
                    </h1>
                    <div className="aspect-square absolute bottom-2 right-2 md:bottom-1 md:right-1 w-full flex justify-end items-end">
                        <PiArrowUpRightThin className="p-1 hover:text-primary text-white bg-foreground rounded-full size-1/6 sm:size-1/5 shadow-2xl" />
                    </div>
                </Link>
            </div>
        </div>
    );
};
