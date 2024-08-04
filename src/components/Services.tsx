import React from "react";
import service1 from "../assets/Service1.png";
import service2 from "../assets/Service2.png";
import service3 from "../assets/Service3.png";
import nails from "../assets/NailsCols2.png";

import { PiArrowUpRightThin } from "react-icons/pi";

export const Services: React.FC = () => {
    return (
        <div className="px-8 mt-10 md:mt-12 xl:mt-14 2xl:mt-24 space-y-6 md:space-y-7 lg:space-y-8 xl:space-y-9 2xl:space-y-12 md:px-11 xl:px-40 2xl:px-56 relative z-40">
            <h1 className=" text-black font-celesse text-[50px] font-normal md:text-[60px] xl:text-[90px]">
                Services
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3">
                <div className="relative">
                    <img src={service1} alt="" />
                    <h1 className="absolute top-4 left-5 text-white font-sonder text-3xl md:top-5 md:left-6 lg:top-6 lg:left-7 xl:top-7 xl:left-9 2xl:top-9 2xl:left-10 lg:text-4xl 2xl:text-5xl">
                        Lashes
                    </h1>
                    <div className="aspect-square absolute bottom-2 right-2 md:bottom-1 md:right-1 w-full flex justify-end items-end">
                        <PiArrowUpRightThin className="p-1 hover:text-primary text-white bg-foreground rounded-full size-1/6 sm:size-1/5 shadow-2xl" />
                    </div>
                </div>

                <div className="relative">
                    <img src={service3} alt="" />
                    <h1 className="absolute top-4 left-5 text-white font-sonder text-3xl md:top-5 md:left-6 lg:top-6 lg:left-7 xl:top-7 xl:left-9 2xl:top-9 2xl:left-10 lg:text-4xl 2xl:text-5xl">
                        Brows
                    </h1>
                    <div className="aspect-square absolute bottom-2 right-2 md:bottom-1 md:right-1 w-full flex justify-end items-end">
                        <PiArrowUpRightThin className="p-1 hover:text-primary text-white bg-foreground rounded-full size-1/6 sm:size-1/5 shadow-2xl" />
                    </div>
                </div>

                <div className="relative col-span-2 md:hidden">
                    <img
                        src={nails}
                        alt=""
                        className="w-full shadow-2xl rounded-xl"
                    />
                    <h1 className="absolute top-6 left-7 text-white font-sonder text-3xl">
                        Nails
                    </h1>
                    <div className="aspect-square absolute bottom-3 right-3 h-full flex justify-end items-end">
                        <PiArrowUpRightThin className="p-1 hover:text-primary text-white bg-foreground rounded-full size-[14%] shadow-2xl" />
                    </div>
                </div>

                <div className="relative max-md:hidden">
                    <img src={service2} alt="" />
                    <h1 className="absolute top-4 left-5 text-white font-sonder text-3xl md:top-5 md:left-6 lg:top-6 lg:left-7 xl:top-7 xl:left-9 2xl:top-9 2xl:left-10 lg:text-4xl 2xl:text-5xl">
                        Nails
                    </h1>
                    <div className="aspect-square absolute bottom-2 right-2 md:bottom-1 md:right-1 w-full flex justify-end items-end">
                        <PiArrowUpRightThin className="p-1 hover:text-primary text-white bg-foreground rounded-full size-1/6 sm:size-1/5 shadow-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};
