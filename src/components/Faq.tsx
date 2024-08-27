import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";
import { usei18nUtil } from "@/utils/usei18nUtil";

export const Faq = React.forwardRef<HTMLDivElement>((_, ref) => {
    const { t } = usei18nUtil();
    return (
        <div className="space-y-6 xl:space-y-9 2xl:space-y-12 px-8 py-9 md:px-11 md:py-14 xl:px-40 xl:py-24 2xl:px-56 relative z-40">
            <h1 className="text-black font-celesse text-[50px] font-normal md:text-[60px] xl:text-[90px]">
                {t("home.faq.faq")}
            </h1>
            <Accordion
                type="single"
                collapsible
                ref={ref}
                className="flex flex-col gap-3 text-black text-base text-left md:text-lg xl:text-xl 2xl:text-2xl"
            >
                <AccordionItem
                    value="item-1"
                    className="bg-white rounded-md border border-[#C9C9C9] flex flex-col justify-center px-3 py-2 xl:px-4 xl:py-3 2xl:px-5 2xl:py-4 shadow-lg xl:rounded-lg 2xl:rounded-xl"
                >
                    <AccordionTrigger className="p-0 m-0 font-normal text-start">
                        {t("home.faq.item1.title")}
                    </AccordionTrigger>
                    <AccordionContent className="p-0 m-0 pt-3 font-normal text-zinc-600 sm:text-base lg:text-lg xl:text-xl">
                        {t("home.faq.item1.desc")}
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    value="item-2"
                    className="bg-white rounded-md border border-[#C9C9C9] flex flex-col justify-center px-3 py-2 xl:px-4 xl:py-3 2xl:px-5 2xl:py-4 shadow-lg xl:rounded-lg 2xl:rounded-xl"
                >
                    <AccordionTrigger className="p-0 m-0 font-normal text-start">
                        {t("home.faq.item2.title")}
                    </AccordionTrigger>
                    <AccordionContent className="p-0 m-0 pt-3 font-normal text-zinc-600 sm:text-base lg:text-lg xl:text-xl">
                        {t("home.faq.item2.desc")}
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    value="item-3"
                    className="bg-white rounded-md border border-[#C9C9C9] flex flex-col justify-center px-3 py-2 xl:px-4 xl:py-3 2xl:px-5 2xl:py-4 shadow-lg xl:rounded-lg 2xl:rounded-xl"
                >
                    <AccordionTrigger className="p-0 m-0 font-normal text-start">
                        {t("home.faq.item3.title")}
                    </AccordionTrigger>
                    <AccordionContent className="p-0 m-0 pt-3 font-normal text-zinc-600 sm:text-base lg:text-lg xl:text-xl">
                        {t("home.faq.item3.desc")}
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    value="item-4"
                    className="bg-white rounded-md border border-[#C9C9C9] flex flex-col justify-center px-3 py-2 xl:px-4 xl:py-3 2xl:px-5 2xl:py-4 shadow-lg xl:rounded-lg 2xl:rounded-xl"
                >
                    <AccordionTrigger className="p-0 m-0 font-normal text-start">
                        {t("home.faq.item4.title")}
                    </AccordionTrigger>
                    <AccordionContent className="p-0 m-0 pt-3 font-normal text-zinc-600 sm:text-base lg:text-lg xl:text-xl">
                        {t("home.faq.item4.desc")}
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    value="item-5"
                    className="bg-white rounded-md border border-[#C9C9C9] flex flex-col justify-center px-3 py-2 xl:px-4 xl:py-3 2xl:px-5 2xl:py-4 shadow-lg xl:rounded-lg 2xl:rounded-xl"
                >
                    <AccordionTrigger className="p-0 m-0 font-normal text-start">
                        {t("home.faq.item5.title")}
                    </AccordionTrigger>
                    <AccordionContent className="p-0 m-0 pt-3 font-normal text-zinc-600 sm:text-base lg:text-lg xl:text-xl">
                        {t("home.faq.item5.desc")}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
});
