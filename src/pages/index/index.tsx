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
import {
    ScrollRestoration,
    useParams,
    useSearchParams,
} from "react-router-dom";
import { Courses } from "@/components/Courses";
import { usei18nUtil } from "@/utils/usei18nUtil";

export const Index: React.FC = () => {
    const [query] = useSearchParams();
    const faqRef = React.useRef<HTMLDivElement>(null);
    const contactsRef = React.useRef<HTMLElement>(null);

    const { lang } = useParams();
    const { setLangUrl } = usei18nUtil();
    React.useEffect(() => setLangUrl(lang as "en" | "ro" | "ru"), [lang]);

    React.useEffect(() => {
        if (query.get("_ref_into") === "faq")
            return faqRef.current?.scrollIntoView({
                block: "center",
                behavior: "smooth",
            });

        if (query.get("_ref_into") === "contacts")
            contactsRef.current?.scrollIntoView({
                block: "center",
                behavior: "smooth",
            });
    }, [query.get("_ref_into")]);

    return (
        <BaseLoyout>
            <Hero />
            <div className="relative">
                <Services />
                <Masters />
                <Reviews />
                <Courses />

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
            <Faq ref={faqRef} />
            <Contacts ref={contactsRef} />
            <ScrollRestoration />
        </BaseLoyout>
    );
};
