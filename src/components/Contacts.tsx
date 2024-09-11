import React from "react";
import { useGetWorkingHours } from "@/pages/index/hooks/useGetWorkignHours";
import { usei18nUtil } from "@/utils/usei18nUtil";
import { PiInstagramLogoLight, PiFacebookLogoLight } from "react-icons/pi";
import { MdOutlinePhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";

export const Contacts = React.forwardRef<HTMLElement>((_, ref) => {
  const { data } = useGetWorkingHours();
  const { t } = usei18nUtil();
  return (
    <>
      {data?.data !== undefined && (
        <footer
          ref={ref}
          className="py-6 px-8 md:flex md:justify-between md:gap-12 2xl:gap-20 md:px-11 xl:px-40 2xl:px-56 relative z-40"
        >
          {/* DATA */}
          <div className="grid grid-cols-2 gap-12 md:flex md:justify-between md:gap-12 2xl:gap-20">
            <div className="flex flex-col gap-4">
              <h1 className="font-recoleta text-2xl 2xl:text-3xl text-black font-medium">
                {t("home.contacts.logo")}
              </h1>
              <ul className="flex flex-col gap-6 text-black text-lg font-normal">
                <li>{t("home.contacts.appointments")}</li>
                <li>{t("home.contacts.courses")}</li>
                <li>{t("home.contacts.faq")}</li>
                <li>{t("home.contacts.policy")}</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="font-recoleta text-2xl 2xl:text-3xl text-black font-medium">
                {t("home.contacts.contacts")}
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
                <li className="flex items-center gap-3 cursor-pointer">
                  <TfiEmail className="h-5 w-5" />
                  mailtobeauty@gmail.com
                </li>
                <li className="flex items-center gap-3 cursor-pointer">
                  <MdOutlinePhone className="h-5 w-5" />
                  (+373) 12 345 678
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 col-span-2">
              <h1 className="font-recoleta text-2xl 2xl:text-3xl text-black font-medium">
                {t("home.contacts.addr")}
              </h1>
              <ul className="flex flex-col gap-6 text-black text-lg font-normal">
                <li>Str. Ismail 56</li>
                <li>
                  {String(data?.data.start).length === 1
                    ? `0${data?.data.start}:00`
                    : `${data?.data.start}:00`}{" "}
                  -{" "}
                  {String(data?.data.end).length === 1
                    ? `0${data?.data.end}:00`
                    : `${data?.data.end}:00`}
                </li>
              </ul>
            </div>
          </div>

          {/* MAP */}
          <div className="flex-grow max-md:mt-12">
            <iframe
              className="w-full h-40 md:h-72 2xl:h-96 rounded-xl border-none shadow-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.8270816081995!2d28.8442381!3d47.0148082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c2346e82883%3A0x67626b23d4527b3d!2sStrada%20Ismail%2056%2C%20Chi%C8%99in%C4%83u!5e1!3m2!1sro!2s!4v1726089945314!5m2!1sro!2s"
            >
              <a href="https://www.gps.ie/">gps systems</a>
            </iframe>
          </div>
        </footer>
      )}
    </>
  );
});
