import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";

export const Faq = React.forwardRef<HTMLDivElement>((_, ref) => {
    return (
        // <div
        //     ref={ref}
        //     className="space-y-6 xl:space-y-9 2xl:space-y-12 px-8 py-9 md:px-11 md:py-14 xl:px-40 xl:py-24 2xl:px-56 relative z-40"
        // >
        //     <h1 className="text-black font-celesse text-[50px] font-normal md:text-[60px] xl:text-[90px]">
        //         FAQ
        //     </h1>
        //     <ul className="flex flex-col gap-3 text-black text-base text-left md:text-lg xl:text-xl 2xl:text-2xl">
        //         <li className="bg-white rounded-md border border-[#C9C9C9] flex flex-col justify-center px-3 py-2 xl:px-4 xl:py-3 2xl:px-5 2xl:py-4 shadow-lg xl:rounded-lg 2xl:rounded-xl">
        //             <p>What services does your salon offer?</p>
        //         </li>
        //         <li className="bg-white rounded-md border border-[#C9C9C9] flex flex-col justify-center px-3 py-2 xl:px-4 xl:py-3 2xl:px-5 2xl:py-4 shadow-lg gap-2 xl:gap-3 2xl:gap-4 xl:rounded-lg 2xl:rounded-xl">
        //             <p>How can I make an appointment?</p>
        //             <p>
        //                 You can make an appointment by phone, through our
        //                 website, or by visiting our salon in person.
        //             </p>
        //         </li>
        //         <li className="bg-white rounded-md border border-[#C9C9C9] flex flex-col justify-center px-3 py-2 xl:px-4 xl:py-3 2xl:px-5 2xl:py-4 shadow-lg xl:rounded-lg 2xl:rounded-xl">
        //             <p>
        //                 What safety measures do you take to ensure client
        //                 safety?
        //             </p>
        //         </li>
        //         <li className="bg-white rounded-md border border-[#C9C9C9] flex flex-col justify-center px-3 py-2 xl:px-4 xl:py-3 2xl:px-5 2xl:py-4 shadow-lg xl:rounded-lg 2xl:rounded-xl">
        //             <p>What brands of cosmetics do you use for hair care?</p>
        //         </li>
        //         <li className="bg-white rounded-md border border-[#C9C9C9] flex flex-col justify-center px-3 py-2 xl:px-4 xl:py-3 2xl:px-5 2xl:py-4 shadow-lg xl:rounded-lg 2xl:rounded-xl">
        //             <p>Can I cancel or reschedule an appointment?</p>
        //         </li>
        //     </ul>
        // </div>
        <div className="space-y-6 xl:space-y-9 2xl:space-y-12 px-8 py-9 md:px-11 md:py-14 xl:px-40 xl:py-24 2xl:px-56 relative z-40">
            <h1 className="text-black font-celesse text-[50px] font-normal md:text-[60px] xl:text-[90px]">
                FAQ
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
                        What services does your salon offer?
                    </AccordionTrigger>
                    <AccordionContent className="p-0 m-0 pt-3 font-normal text-zinc-600 sm:text-base lg:text-lg xl:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tenetur repellat explicabo non? Ab repellendus minima
                        odit provident vitae, maxime ut molestiae quasi placeat
                        praesentium minus quaerat quisquam ea aspernatur vero.
                        Atque doloribus, exercitationem amet sunt reiciendis
                        porro. Modi ut ullam explicabo deleniti aspernatur neque
                        reiciendis dolor autem. Modi, minus vitae!
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    value="item-2"
                    className="bg-white rounded-md border border-[#C9C9C9] flex flex-col justify-center px-3 py-2 xl:px-4 xl:py-3 2xl:px-5 2xl:py-4 shadow-lg xl:rounded-lg 2xl:rounded-xl"
                >
                    <AccordionTrigger className="p-0 m-0 font-normal text-start">
                        How can I make an appointment?
                    </AccordionTrigger>
                    <AccordionContent className="p-0 m-0 pt-3 font-normal text-zinc-600 sm:text-base lg:text-lg xl:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tenetur repellat explicabo non? Ab repellendus minima
                        odit provident vitae, maxime ut molestiae quasi placeat
                        praesentium minus quaerat quisquam ea aspernatur vero.
                        Atque doloribus, exercitationem amet sunt reiciendis
                        porro. Modi ut ullam explicabo deleniti aspernatur neque
                        reiciendis dolor autem. Modi, minus vitae!
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    value="item-3"
                    className="bg-white rounded-md border border-[#C9C9C9] flex flex-col justify-center px-3 py-2 xl:px-4 xl:py-3 2xl:px-5 2xl:py-4 shadow-lg xl:rounded-lg 2xl:rounded-xl"
                >
                    <AccordionTrigger className="p-0 m-0 font-normal text-start">
                        What safety measures do you take to ensure client
                        safety?
                    </AccordionTrigger>
                    <AccordionContent className="p-0 m-0 pt-3 font-normal text-zinc-600 sm:text-base lg:text-lg xl:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tenetur repellat explicabo non? Ab repellendus minima
                        odit provident vitae, maxime ut molestiae quasi placeat
                        praesentium minus quaerat quisquam ea aspernatur vero.
                        Atque doloribus, exercitationem amet sunt reiciendis
                        porro. Modi ut ullam explicabo deleniti aspernatur neque
                        reiciendis dolor autem. Modi, minus vitae!
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    value="item-4"
                    className="bg-white rounded-md border border-[#C9C9C9] flex flex-col justify-center px-3 py-2 xl:px-4 xl:py-3 2xl:px-5 2xl:py-4 shadow-lg xl:rounded-lg 2xl:rounded-xl"
                >
                    <AccordionTrigger className="p-0 m-0 font-normal text-start">
                        What brands of cosmetics do you use for hair care?
                    </AccordionTrigger>
                    <AccordionContent className="p-0 m-0 pt-3 font-normal text-zinc-600 sm:text-base lg:text-lg xl:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tenetur repellat explicabo non? Ab repellendus minima
                        odit provident vitae, maxime ut molestiae quasi placeat
                        praesentium minus quaerat quisquam ea aspernatur vero.
                        Atque doloribus, exercitationem amet sunt reiciendis
                        porro. Modi ut ullam explicabo deleniti aspernatur neque
                        reiciendis dolor autem. Modi, minus vitae!
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    value="item-5"
                    className="bg-white rounded-md border border-[#C9C9C9] flex flex-col justify-center px-3 py-2 xl:px-4 xl:py-3 2xl:px-5 2xl:py-4 shadow-lg xl:rounded-lg 2xl:rounded-xl"
                >
                    <AccordionTrigger className="p-0 m-0 font-normal text-start">
                        Can I cancel or reschedule an appointment?
                    </AccordionTrigger>
                    <AccordionContent className="p-0 m-0 pt-3 font-normal text-zinc-600 sm:text-base lg:text-lg xl:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tenetur repellat explicabo non? Ab repellendus minima
                        odit provident vitae, maxime ut molestiae quasi placeat
                        praesentium minus quaerat quisquam ea aspernatur vero.
                        Atque doloribus, exercitationem amet sunt reiciendis
                        porro. Modi ut ullam explicabo deleniti aspernatur neque
                        reiciendis dolor autem. Modi, minus vitae!
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
});
