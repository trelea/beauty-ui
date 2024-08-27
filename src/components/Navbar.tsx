import { useUserStore } from "@/store/store";
import React from "react";
import { Button } from "./ui/button";
import { Link, useSearchParams } from "react-router-dom";
import { CiUser, CiLogout } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useLogout } from "@/pages/login/hooks/useLogout";
import { toISO8601DateString } from "@/lib/utils";
import { SelectLang } from "./SelectLang";
import { usei18nUtil } from "@/utils/usei18nUtil";

export const Navbar: React.FC = () => {
    const [_, setQuery] = useSearchParams();
    const { user, setLogout } = useUserStore((state) => state);
    const { logout } = useLogout(setLogout);
    const { lang, t } = usei18nUtil();

    return (
        <div className="fixed z-50 top-10 px-6 md:px-11 xl:px-40 2xl:px-56 w-full">
            <nav className="w-full bg-white rounded-full px-6 py-3 flex justify-between items-center shadow-xl">
                <Link to={`/${lang}`}>
                    <h1 className="font-medium text-xl lg:text-2xl">
                        {t("navbar.logo")}
                    </h1>
                </Link>

                <div className="flex items-center gap-6">
                    <ul className="hidden lg:flex gap-6 text-lg font-normal text-black items-center">
                        <li className="hover:underline decoration-black decoration-2 hover:cursor-pointer">
                            <Link to={`/${lang}`} className="w-full">
                                {t("navbar.home")}
                            </Link>
                        </li>
                        <li className="hover:underline decoration-black decoration-2 hover:cursor-pointer">
                            <Link
                                to={`/${lang}/appointments?lashes=true&_check_date=${toISO8601DateString(
                                    new Date()
                                )}`}
                                className="w-full"
                            >
                                {t("navbar.appointments")}
                            </Link>
                        </li>
                        {/* <li className="hover:underline decoration-black decoration-2 hover:cursor-pointer">
                            Courses
                        </li> */}
                        <li
                            onClick={() => setQuery({ _ref_into: "faq" })}
                            className="hover:underline decoration-black decoration-2 hover:cursor-pointer"
                        >
                            {t("navbar.faq")}
                        </li>
                        {/* <li className="hover:underline decoration-black decoration-2 hover:cursor-pointer">
                            Privacy Policy
                        </li> */}
                        <li
                            onClick={() => setQuery({ _ref_into: "contacts" })}
                            className="hover:underline decoration-black decoration-2 hover:cursor-pointer"
                        >
                            {t("navbar.contacts")}
                        </li>
                    </ul>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild className="lg:hidden">
                            <Button className="p-0 m-0 bg-transparent border-none rounded-none hover:bg-transparent focus:border-none focus:ring-0 focus-visible:border-none focus-visible:ring-0 focus:outline-none focus-visible:outline-none focus:ring-offset-0 focus-visible:ring-offset-0">
                                <RxHamburgerMenu className="h-8 w-8 aspect-square p-1 rounded-full hover:bg-secondary" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="mt-4 mr-6 bg-white rounded-2xl border-none shadow-2xl px-4 py-4">
                            <DropdownMenuGroup className="flex flex-col gap-2 items-center">
                                <DropdownMenuItem className="focus:bg-transparent hover:underline decoration-black decoration-2 hover:cursor-pointer text-center text-lg font-normal">
                                    <Link to={`/${lang}/home`}>
                                        {t("navbar.home")}
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="focus:bg-transparent hover:underline decoration-black decoration-2 hover:cursor-pointer text-center text-lg font-normal">
                                    <Link
                                        to={`/${lang}/appointments?lashes=true&_check_date=${toISO8601DateString(
                                            new Date()
                                        )}`}
                                    >
                                        {t("navbar.appointments")}
                                    </Link>
                                </DropdownMenuItem>
                                {/* <DropdownMenuItem className="focus:bg-transparent hover:underline decoration-black decoration-2 hover:cursor-pointer text-center text-lg font-normal">
                                Courses
                            </DropdownMenuItem> */}
                                <DropdownMenuItem
                                    onClick={() =>
                                        setQuery({ _ref_into: "faq" })
                                    }
                                    className="focus:bg-transparent hover:underline decoration-black decoration-2 hover:cursor-pointer text-center text-lg font-normal"
                                >
                                    {t("navbar.faq")}
                                </DropdownMenuItem>
                                {/* <DropdownMenuItem className="focus:bg-transparent hover:underline decoration-black decoration-2 hover:cursor-pointer text-center text-lg font-normal">
                                Privacy Policy
                            </DropdownMenuItem> */}
                                <DropdownMenuItem
                                    onClick={() =>
                                        setQuery({ _ref_into: "contacts" })
                                    }
                                    className="focus:bg-transparent hover:underline decoration-black decoration-2 hover:cursor-pointer text-center text-lg font-normal"
                                >
                                    {t("navbar.contacts")}
                                </DropdownMenuItem>

                                <DropdownMenuItem className="focus:bg-transparent">
                                    <SelectLang />
                                </DropdownMenuItem>

                                {user ? (
                                    <>
                                        <DropdownMenuItem className="focus:bg-transparent flex gap-4">
                                            <Link
                                                to={
                                                    user?.provider === "google"
                                                        ? `/${lang}/settings?_appointments=true`
                                                        : `/${lang}/settings?_edit_profile=true`
                                                }
                                            >
                                                <CiUser className="h-8 w-8 aspect-square p-1 rounded-full hover:bg-secondary" />
                                            </Link>
                                            <CiLogout
                                                onClick={() => logout.mutate()}
                                                className="h-8 w-8 aspect-square p-1 rounded-full hover:bg-secondary"
                                            />
                                        </DropdownMenuItem>
                                    </>
                                ) : (
                                    <>
                                        <DropdownMenuItem className="w-full focus:bg-transparent flex gap-4">
                                            <Link
                                                className="w-full"
                                                to={`/${lang}/login`}
                                            >
                                                <Button className="rounded-xl bg-secondary w-full">
                                                    {t("navbar.login")}
                                                </Button>
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="w-full focus:bg-transparent flex gap-4">
                                            <Link
                                                className="w-full"
                                                to={`/${lang}/register`}
                                            >
                                                <Button className="rounded-xl bg-secondary w-full">
                                                    {t("navbar.signup")}
                                                </Button>
                                            </Link>
                                        </DropdownMenuItem>
                                    </>
                                )}
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {user ? (
                        <div className="hidden lg:flex gap-4 items-center">
                            <SelectLang />
                            <Link
                                to={
                                    user?.provider === "google"
                                        ? `/${lang}/settings?_appointments=true`
                                        : `/${lang}/settings?_edit_profile=true`
                                }
                            >
                                <CiUser className="h-8 w-8 aspect-square p-1 rounded-full hover:bg-secondary" />
                            </Link>

                            <CiLogout
                                onClick={() => logout.mutate()}
                                className="h-8 w-8 aspect-square p-1 rounded-full hover:bg-secondary"
                            />
                        </div>
                    ) : (
                        <div className="hidden lg:flex gap-4 items-center">
                            <SelectLang />
                            <Link to={`/${lang}/login`}>
                                <Button className="rounded-3xl bg-secondary">
                                    {t("navbar.login")}
                                </Button>
                            </Link>
                            <Link to={`/${lang}/register`}>
                                <Button className="rounded-3xl bg-secondary">
                                    {t("navbar.signup")}
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};
