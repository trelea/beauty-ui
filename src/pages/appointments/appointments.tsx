import { BrowsAppointments } from "@/components/BrowsAppointments";
import { Contacts } from "@/components/Contacts";
import { LashesAppointments } from "@/components/LashesAppointments";
import { BaseLoyout } from "@/components/Loyout";
import { MastersCarousel } from "@/components/MastersCarousel";
import { NailsAppointments } from "@/components/NailsAppointments";
import { toISO8601DateString } from "@/lib/utils";
import { useUserStore } from "@/store/store";
import { usei18nUtil } from "@/utils/usei18nUtil";
import React from "react";
import {
  ScrollRestoration,
  useParams,
  useSearchParams,
} from "react-router-dom";

export const Appointments: React.FC = () => {
  const auth = useUserStore((state) => state.user);
  const [params, setParams] = useSearchParams();
  const contactsRef = React.useRef<HTMLElement>(null);

  const { lang } = useParams();
  const { setLangUrl, t } = usei18nUtil();
  React.useEffect(() => setLangUrl(lang as "en" | "ro" | "ru"), [lang]);

  React.useEffect(() => {
    if (params.get("_ref_into") === "contacts")
      return contactsRef.current?.scrollIntoView({ behavior: "smooth" });
    if (params.get("_ref_into") === "faq") window.location.pathname = "/";
  }, [params]);

  return (
    <BaseLoyout>
      <div className="px-8 md:px-11 xl:px-40 2xl:px-56 relative z-40 pt-32 2xl:pt-40 pb-10">
        <ul className="font-recoleta font-normal text-2xl flex justify-between md:justify-start md:gap-14">
          <li
            className={`${
              params.get("lashes") === "true" &&
              "underline decoration-black decoration-2"
            } cursor-pointer`}
            onClick={() =>
              setParams({
                lashes: "true",
                _check_date: toISO8601DateString(new Date()),
              })
            }
          >
            {t("appointments.services.lashes")}
          </li>
          <li
            className={`${
              params.get("nails") === "true" &&
              "underline decoration-black decoration-2"
            } cursor-pointer`}
            onClick={() =>
              setParams({
                nails: "true",
                _check_date: toISO8601DateString(new Date()),
              })
            }
          >
            {t("appointments.services.nails")}
          </li>
          <li
            className={`${
              params.get("brows") === "true" &&
              "underline decoration-black decoration-2"
            } cursor-pointer`}
            onClick={() =>
              setParams({
                brows: "true",
                _check_date: toISO8601DateString(new Date()),
              })
            }
          >
            {t("appointments.services.brows")}
          </li>
        </ul>

        <div className="w-full">
          {params.get("lashes") === "true" && (
            <MastersCarousel service={"Lashes"} />
          )}
          {params.get("nails") === "true" && (
            <MastersCarousel service={"Nails"} />
          )}
          {params.get("brows") === "true" && (
            <MastersCarousel service={"Brows"} />
          )}
        </div>

        <div className="w-full">
          {params.get("lashes") === "true" &&
            params.get("_check_date") !== undefined && (
              <LashesAppointments
                _date={params.get("_check_date") as string}
                setParams={setParams}
                auth={auth ? true : false}
              />
            )}
          {params.get("nails") === "true" &&
            params.get("_check_date") !== undefined && (
              <NailsAppointments
                _date={params.get("_check_date") as string}
                setParams={setParams}
                auth={auth ? true : false}
              />
            )}
          {params.get("brows") === "true" &&
            params.get("_check_date") !== undefined && (
              <BrowsAppointments
                _date={params.get("_check_date") as string}
                setParams={setParams}
                auth={auth ? true : false}
              />
            )}
        </div>
      </div>

      <Contacts ref={contactsRef} />
      <ScrollRestoration />
    </BaseLoyout>
  );
};
