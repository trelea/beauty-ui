import React from "react";
import { Card, CardContent } from "./ui/card";
import { SetURLSearchParams } from "react-router-dom";
import { GrUserSettings } from "react-icons/gr";
import { RiLockPasswordLine, RiCalendarScheduleLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { Button } from "./ui/button";
import { useUserStore } from "@/store/store";
import { useLogout } from "@/pages/login/hooks/useLogout";
// import { FaGoogle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

interface Props {
  params: URLSearchParams;
  setParams: SetURLSearchParams;
  user: any;
}

export const SettingsOpts: React.FC<Props> = ({ params, setParams, user }) => {
  const { setLogout } = useUserStore((state) => state);
  const { logout } = useLogout(setLogout);
  const { t } = useTranslation();
  return (
    <Card className="shadow-lg rounded-xl h-full">
      <CardContent className="p-2 md:p-3 xl:p-4 m-0">
        <ul className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3 xl:flex xl:flex-col xl:gap-4">
          {/* {user?.provider === "google" && (
                        <Link to={"https://myaccount.google.com/"}>
                            <li
                                className={`flex justify-center xl:justify-start items-center font-medium text-sm rounded-lg gap-2 p-2 md:text-base lg:text-lg xl:text-xl 2xl:text-xl xl:p-4 xl:gap-4 ${
                                    params.get("_edit_profile") === "true"
                                        ? "bg-primary shadow-md"
                                        : "hover:bg-zinc-300 hover:shadow-md"
                                }`}
                            >
                                <FaGoogle className="aspect-square" />
                                <h1>{t("settings.googleAcc")}</h1>
                            </li>
                        </Link>
                    )} */}

          {!user?.provider && (
            <li
              onClick={() => setParams({ _edit_profile: "true" })}
              className={`flex justify-center xl:justify-start items-center font-medium text-sm rounded-lg gap-2 p-2 md:text-base lg:text-lg xl:text-xl 2xl:text-xl xl:p-4 xl:gap-4 ${
                params.get("_edit_profile") === "true"
                  ? "bg-primary shadow-md"
                  : "hover:bg-zinc-300 hover:shadow-md"
              }`}
            >
              <GrUserSettings className="aspect-square" />
              <h1>{t("settings.edit")}</h1>
            </li>
          )}

          {!user?.provider && (
            <li
              onClick={() => setParams({ _change_password: "true" })}
              className={`flex justify-center xl:justify-start items-center font-medium text-sm rounded-lg gap-2 p-2 md:text-base lg:text-lg xl:text-xl 2xl:text-xl xl:p-4 xl:gap-4 ${
                params.get("_change_password") === "true"
                  ? "bg-primary shadow-md"
                  : "hover:bg-zinc-300 hover:shadow-md"
              }`}
            >
              <RiLockPasswordLine className="aspect-square" />
              <h1>{t("settings.changePwd")}</h1>
            </li>
          )}

          {/* <li
                        onClick={() => setParams({ _enrolled_courses: "true" })}
                        className={`flex justify-center xl:justify-start items-center font-medium text-sm rounded-lg gap-2 p-2 md:text-base lg:text-lg xl:text-xl 2xl:text-xl xl:p-4 xl:gap-4 ${
                            params.get("_enrolled_courses") === "true"
                                ? "bg-primary shadow-md"
                                : "hover:bg-zinc-300 hover:shadow-md"
                        }`}
                    >
                        <LiaChalkboardTeacherSolid className="aspect-square" />
                        <h1>Enrolled courses</h1>
                    </li> */}
          <li
            onClick={() => setParams({ _appointments: "true" })}
            className={`flex justify-center xl:justify-start items-center font-medium text-sm rounded-lg gap-2 p-2 md:text-base lg:text-lg xl:text-xl 2xl:text-xl xl:p-4 xl:gap-4 ${
              params.get("_appointments") === "true"
                ? "bg-primary shadow-md"
                : "hover:bg-zinc-300 hover:shadow-md"
            }`}
          >
            <RiCalendarScheduleLine className="aspect-square" />
            <h1>{t("settings.appointments")}</h1>
          </li>

          <Button
            onClick={() => logout.mutate()}
            className="bg-transparent hover:bg-zinc-300 flex justify-center col-span-2 md:col-span-4 gap-4 p-2 items-center font-medium text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl rounded-lg py-0 m-0 hover:shadow-md xl:py-7 xl:justify-start xl:px-4"
          >
            <MdLogout className="aspect-square" />
            {t("settings.logout")}
          </Button>
        </ul>
      </CardContent>
    </Card>
  );
};
