import React from "react";

export const Faq: React.FC = () => {
    return (
        <div className="space-y-6 xl:space-y-9 2xl:space-y-12 px-8 py-9 md:px-11 md:py-14 xl:px-40 xl:py-24 2xl:px-56 relative z-40">
            <h1 className="text-black font-celesse text-[50px] font-normal md:text-[60px] xl:text-[90px]">
                FAQ
            </h1>
            <ul className="flex flex-col gap-3 text-black text-base text-left md:text-lg xl:text-xl 2xl:text-2xl">
                <li className="bg-white rounded-md border border-[#C9C9C9] flex flex-col justify-center px-3 py-2 xl:px-4 xl:py-3 2xl:px-5 2xl:py-4 shadow-lg xl:rounded-lg 2xl:rounded-xl">
                    <p>What services does your salon offer?</p>
                </li>
                <li className="bg-white rounded-md border border-[#C9C9C9] flex flex-col justify-center px-3 py-2 xl:px-4 xl:py-3 2xl:px-5 2xl:py-4 shadow-lg gap-2 xl:gap-3 2xl:gap-4 xl:rounded-lg 2xl:rounded-xl">
                    <p>How can I make an appointment?</p>
                    <p>
                        You can make an appointment by phone, through our
                        website, or by visiting our salon in person.
                    </p>
                </li>
                <li className="bg-white rounded-md border border-[#C9C9C9] flex flex-col justify-center px-3 py-2 xl:px-4 xl:py-3 2xl:px-5 2xl:py-4 shadow-lg xl:rounded-lg 2xl:rounded-xl">
                    <p>
                        What safety measures do you take to ensure client
                        safety?
                    </p>
                </li>
                <li className="bg-white rounded-md border border-[#C9C9C9] flex flex-col justify-center px-3 py-2 xl:px-4 xl:py-3 2xl:px-5 2xl:py-4 shadow-lg xl:rounded-lg 2xl:rounded-xl">
                    <p>What brands of cosmetics do you use for hair care?</p>
                </li>
                <li className="bg-white rounded-md border border-[#C9C9C9] flex flex-col justify-center px-3 py-2 xl:px-4 xl:py-3 2xl:px-5 2xl:py-4 shadow-lg xl:rounded-lg 2xl:rounded-xl">
                    <p>Can I cancel or reschedule an appointment?</p>
                </li>
            </ul>
        </div>
    );
};
