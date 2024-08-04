import { Contacts } from "@/components/Contacts";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { BaseLoyout } from "@/components/Loyout";
import { Masters } from "@/components/Masters";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import React from "react";
import beauty from "../../assets/Beauty.png";
import salon from "../../assets/Salon.png";

export const Index: React.FC = () => {
    return (
        <BaseLoyout>
            <Hero />
            <div className="relative">
                <Services />
                <Masters />
                <Reviews />
                <img
                    src={beauty}
                    alt=""
                    className="absolute z-0 opacity-50 top-5 -left-4 w-28 md:w-40 md:-top-20 xl:w-80 xl:top-64 2xl:w-72 2xl:top-0"
                />

                <img
                    src={salon}
                    alt=""
                    className="absolute z-0 opacity-50 w-28 md:w-40 xl:w-80 2xl:w-72 right-0 -bottom-96"
                />
            </div>
            <Faq />
            <Contacts />
        </BaseLoyout>
    );
};
