import React from "react";
import {
    PiInstagramLogoLight,
    PiFacebookLogoLight,
    PiYoutubeLogoLight,
} from "react-icons/pi";
import { Link } from "react-router-dom";

export const Contacts: React.FC = () => {
    return (
        <footer className="py-6 px-8 md:flex md:justify-between md:gap-12 2xl:gap-20 md:px-11 xl:px-40 2xl:px-56 relative z-40">
            {/* DATA */}
            <div className="grid grid-cols-2 gap-12 md:flex md:justify-between md:gap-12 2xl:gap-20">
                <div className="flex flex-col gap-4">
                    <h1 className="font-recoleta text-2xl 2xl:text-3xl text-black font-medium">
                        Logo
                    </h1>
                    <ul className="flex flex-col gap-6 text-black text-lg font-normal">
                        <li>Appointments</li>
                        <li>Courses</li>
                        <li>FAQ</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="font-recoleta text-2xl 2xl:text-3xl text-black font-medium">
                        Contacts
                    </h1>
                    <ul className="flex flex-col gap-6 text-black text-lg font-normal">
                        <li>
                            <Link
                                to={"https://www.instagram.com"}
                                target="_blank"
                                preventScrollReset
                                className="flex items-center gap-3"
                            >
                                <PiInstagramLogoLight className="h-6 w-6" />
                                Instagram
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"https://www.facebook.com"}
                                target="_blank"
                                preventScrollReset
                                className="flex items-center gap-3"
                            >
                                <PiFacebookLogoLight className="h-6 w-6" />
                                Facebook
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"https://www.youtube.com"}
                                target="_blank"
                                preventScrollReset
                                className="flex items-center gap-3"
                            >
                                <PiYoutubeLogoLight className="h-6 w-6" />
                                Youtube
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4 col-span-2e">
                    <h1 className="font-recoleta text-2xl 2xl:text-3xl text-black font-medium">
                        Our Address
                    </h1>
                    <ul className="flex flex-col gap-6 text-black text-lg font-normal">
                        <li>St. Maria Cebotari</li>
                    </ul>
                </div>
            </div>

            {/* MAP */}
            <div className="flex-grow max-md:mt-12">
                <iframe
                    className="w-full h-40 md:h-72 2xl:h-96 rounded-xl border-none shadow-2xl"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=47.028557559058434,%2028.829722229307052+(Beauty%20Salon)&amp;t=h&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                    <a href="https://www.gps.ie/">gps systems</a>
                </iframe>
            </div>
        </footer>
    );
};
