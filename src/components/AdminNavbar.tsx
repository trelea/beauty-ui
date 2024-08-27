import { HiOutlineCalendarDays } from "react-icons/hi2";
import { MdPersonSearch, MdLogout } from "react-icons/md";
import { Button } from "./ui/button";
import { useLogout } from "@/pages/login/hooks/useLogout";
import { useUserStore } from "@/store/store";
import React from "react";
import { Link } from "react-router-dom";
import { usei18nUtil } from "@/utils/usei18nUtil";

export const AdminNavbar: React.FC = () => {
    const _ = useUserStore((state) => state.setLogout);
    const { t, lang } = usei18nUtil();
    const { logout } = useLogout(_);
    const [path] = React.useState<string>(
        window.location.pathname.split("/")[3]
    );

    return (
        <div className="fixed z-50 top-10 px-6 md:px-11 xl:px-40 2xl:px-56 w-full">
            <nav className="w-full bg-white rounded-full px-6 py-3 flex justify-center items-center shadow-xl">
                <ul className="grid grid-cols-3 gap-6 text-lg font-normal text-black justify-center items-center">
                    <li>
                        <Link
                            to={`/${lang}/admin/dashboard/appointments?pending=true`}
                            className={`flex gap-2 justify-center items-center px-6 p-1 rounded-xl text-lg font-normal transition-colors ${
                                path === "appointments"
                                    ? "bg-zinc-200 shadow-md"
                                    : "hover:bg-zinc-200 hover:shadow-md"
                            }`}
                        >
                            <HiOutlineCalendarDays />
                            {t("adminNav.appointments")}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`/${lang}/admin/dashboard/masters?page=1`}
                            className={`flex gap-2 justify-center items-center px-6 p-1 rounded-xl text-lg font-normal transition-colors ${
                                path === "masters"
                                    ? "bg-zinc-200 shadow-lg"
                                    : "hover:bg-zinc-200 hover:shadow-md"
                            }`}
                        >
                            <MdPersonSearch />
                            {t("adminNav.masters")}
                        </Link>
                    </li>
                    <Button
                        className="bg-transparent flex gap-2 justify-center items-center transition-colors hover:bg-zinc-200 hover:shadow-md rounded-xl text-lg font-normal p-1 px-6 h-fit"
                        onClick={() => logout.mutate()}
                    >
                        <MdLogout />
                        {t("adminNav.logout")}
                    </Button>
                </ul>
            </nav>
        </div>
    );
};
