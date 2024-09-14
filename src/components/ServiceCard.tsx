import { toISO8601DateString } from "@/lib/utils";
import { usei18nUtil } from "@/utils/usei18nUtil";
import React from "react";
import { PiArrowUpRightThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Skeleton } from "./ui/skeleton";

interface Props {
  src: string;
  service: "lashes" | "nails" | "brows";
  willHide?: boolean;
  willApair?: boolean;
}

export const ServiceCard: React.FC<Props> = ({
  src,
  service,
  willHide,
  willApair,
}) => {
  const { t, lang } = usei18nUtil();
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect(() => setLoaded(true), []);

  return (
    <>
      {loaded ? (
        <Link
          to={`/${lang}/appointments?${service}=true&_check_date=${toISO8601DateString(
            new Date()
          )}`}
          className={`relative ${willHide && "col-span-2 md:hidden"} ${
            willApair && "max-md:hidden"
          }`}
        >
          <img
            src={src}
            alt=""
            loading="lazy"
            className={willHide ? "w-full shadow-2xl rounded-xl" : undefined}
          />
          <h1
            className={
              willHide
                ? "absolute top-6 left-7 text-white font-sonder text-3xl"
                : "absolute top-4 left-5 text-white font-sonder text-3xl md:top-5 md:left-6 lg:top-6 lg:left-7 xl:top-7 xl:left-9 2xl:top-9 2xl:left-10 lg:text-4xl 2xl:text-5xl"
            }
          >
            {t(`home.services.${service}`)}
          </h1>
          <div
            className={
              willHide
                ? "aspect-square absolute bottom-3 right-3 h-full flex justify-end items-end"
                : "aspect-square absolute bottom-2 right-2 md:bottom-1 md:right-1 w-full flex justify-end items-end"
            }
          >
            <PiArrowUpRightThin
              className={`p-1 hover:text-primary text-white bg-foreground rounded-full shadow-2xl ${
                willHide ? "size-[14%]" : "size-1/6 sm:size-1/5"
              }`}
            />
          </div>
        </Link>
      ) : (
        <Skeleton className="rounded-xl bg-zinc-200 w-full shadow-lg h-40" />
      )}
    </>
  );
};
