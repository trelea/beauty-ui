import React from "react";
import course from "../assets/Course.png";
import { usei18nUtil } from "@/utils/usei18nUtil";

export const Courses: React.FC = () => {
  const { t } = usei18nUtil();
  return (
    <div className="px-8 mt-10 md:mt-12 xl:mt-14 2xl:mt-24 space-y-6 md:space-y-7 lg:space-y-8 xl:space-y-9 2xl:space-y-12 md:px-11 xl:px-40 2xl:px-56 relative z-40">
      <h1 className=" text-black font-celesse text-[50px] font-normal md:text-[60px] xl:text-[90px]">
        {t("home.courses.courses")}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="relative">
          <img src={course} alt="" />
          <h1 className="absolute top-4 left-5 text-white font-sonder text-3xl md:top-5 md:left-6 lg:top-6 lg:left-7 xl:top-7 xl:left-9 2xl:top-9 2xl:left-10 lg:text-4xl 2xl:text-5xl">
            {t("home.courses.lashes.lashes")}
          </h1>
          {/* <div className="aspect-square absolute bottom-2 right-2 md:bottom-1 md:right-1 w-full flex justify-end items-end">
                        <PiArrowUpRightThin className="p-1 hover:text-primary text-white bg-foreground rounded-full size-1/6 sm:size-1/5 shadow-2xl" />
                    </div> */}
          <p className="absolute bottom-2 md:bottom-3 lg:bottom-4 md:mx-3 lg:mx-4 mx-2 font-normal bg-white text-black rounded-lg shadow-2xl bg-opacity-25 p-2 hover:bg-opacity-75 text-sm lg:text-base xl:text-lg 2xl:text-xl max-sm:hidden">
            {t("home.courses.lashes.desc")}
          </p>
        </div>

        <div className="relative">
          <img src={course} alt="" />
          <h1 className="absolute top-4 left-5 text-white font-sonder text-3xl md:top-5 md:left-6 lg:top-6 lg:left-7 xl:top-7 xl:left-9 2xl:top-9 2xl:left-10 lg:text-4xl 2xl:text-5xl">
            {t("home.courses.brows.brows")}
          </h1>
          {/* <div className="aspect-square absolute bottom-2 right-2 md:bottom-1 md:right-1 w-full flex justify-end items-end">
                        <PiArrowUpRightThin className="p-1 hover:text-primary text-white bg-foreground rounded-full size-1/6 sm:size-1/5 shadow-2xl" />
                    </div> */}
          <p className="absolute bottom-2 md:bottom-3 lg:bottom-4 md:mx-3 lg:mx-4 mx-2 font-normal bg-white text-black rounded-lg shadow-2xl bg-opacity-25 p-2 hover:bg-opacity-75 text-sm lg:text-base xl:text-lg 2xl:text-xl max-sm:hidden">
            {t("home.courses.brows.desc")}
          </p>
        </div>

        <div className="relative col-span-2 md:hidden">
          <img src={course} alt="" className="w-full shadow-2xl rounded-xl" />
          <h1 className="absolute top-6 left-7 text-white font-sonder text-3xl">
            {t("home.courses.nails.nails")}
          </h1>
          {/* <div className="aspect-square absolute bottom-3 right-3 h-full flex justify-end items-end">
                        <PiArrowUpRightThin className="p-1 hover:text-primary text-white bg-foreground rounded-full size-[14%] shadow-2xl" />
                    </div> */}
          <p className="absolute bottom-2 md:bottom-3 lg:bottom-4 md:mx-3 lg:mx-4 mx-2 font-normal bg-white text-black rounded-lg shadow-2xl bg-opacity-25 p-2 hover:bg-opacity-75 text-sm lg:text-base xl:text-lg 2xl:text-xl">
            {t("home.courses.nails.desc")}
          </p>
        </div>

        <div className="relative max-md:hidden">
          <img src={course} alt="" />
          <h1 className="absolute top-4 left-5 text-white font-sonder text-3xl md:top-5 md:left-6 lg:top-6 lg:left-7 xl:top-7 xl:left-9 2xl:top-9 2xl:left-10 lg:text-4xl 2xl:text-5xl">
            {t("home.courses.nails.nails")}
          </h1>
          {/* <div className="aspect-square absolute bottom-2 right-2 md:bottom-1 md:right-1 w-full flex justify-end items-end">
                        <PiArrowUpRightThin className="p-1 hover:text-primary text-white bg-foreground rounded-full size-1/6 sm:size-1/5 shadow-2xl" />
                    </div> */}
          <p className="absolute bottom-2 md:bottom-3 lg:bottom-4 md:mx-3 lg:mx-4 mx-2 font-normal bg-white text-black rounded-lg shadow-2xl bg-opacity-25 p-2 hover:bg-opacity-75 text-sm lg:text-base xl:text-lg 2xl:text-xl max-sm:hidden">
            {t("home.courses.nails.desc")}
          </p>
        </div>
      </div>
    </div>
  );
};
