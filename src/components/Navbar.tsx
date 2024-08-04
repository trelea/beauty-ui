import { useUserStore } from "@/store/store";
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { CiUser, CiSettings, CiLogout } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useLogout } from "@/pages/login/hooks/useLogout";

export const Navbar: React.FC = () => {
    const { user, setLogout } = useUserStore((state) => state);
    const { logout } = useLogout(setLogout);

    return (
        <div className="fixed z-50 top-10 px-6 md:px-11 xl:px-40 2xl:px-56 w-full">
            <nav className="w-full bg-white rounded-full px-6 py-3 flex justify-between items-center shadow-2xl">
                <h1 className="font-medium text-xl lg:text-2xl">Logo</h1>

                <ul className="hidden lg:flex gap-6 text-lg font-normal text-black items-center">
                    <li className="hover:underline decoration-black decoration-2 hover:cursor-pointer">
                        Appointments
                    </li>
                    <li className="hover:underline decoration-black decoration-2 hover:cursor-pointer">
                        Courses
                    </li>
                    <li className="hover:underline decoration-black decoration-2 hover:cursor-pointer">
                        FAQ
                    </li>
                    <li className="hover:underline decoration-black decoration-2 hover:cursor-pointer">
                        Privacy Policy
                    </li>
                    <li className="hover:underline decoration-black decoration-2 hover:cursor-pointer">
                        Contacts
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
                                Appointments
                            </DropdownMenuItem>
                            <DropdownMenuItem className="focus:bg-transparent hover:underline decoration-black decoration-2 hover:cursor-pointer text-center text-lg font-normal">
                                Courses
                            </DropdownMenuItem>
                            <DropdownMenuItem className="focus:bg-transparent hover:underline decoration-black decoration-2 hover:cursor-pointer text-center text-lg font-normal">
                                FAQ
                            </DropdownMenuItem>
                            <DropdownMenuItem className="focus:bg-transparent hover:underline decoration-black decoration-2 hover:cursor-pointer text-center text-lg font-normal">
                                Privacy Policy
                            </DropdownMenuItem>
                            <DropdownMenuItem className="focus:bg-transparent hover:underline decoration-black decoration-2 hover:cursor-pointer text-center text-lg font-normal">
                                Contacts
                            </DropdownMenuItem>
                            {user ? (
                                <>
                                    <DropdownMenuItem className="focus:bg-transparent flex gap-4">
                                        <CiUser className="h-8 w-8 aspect-square p-1 rounded-full hover:bg-secondary" />
                                        <CiSettings className="h-8 w-8 aspect-square p-1 rounded-full hover:bg-secondary" />
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="w-full focus:bg-transparent flex gap-4">
                                        <Button
                                            className="rounded-xl bg-secondary w-full"
                                            onClick={() => logout.mutate()}
                                        >
                                            LogOut
                                        </Button>
                                    </DropdownMenuItem>
                                </>
                            ) : (
                                <>
                                    <DropdownMenuItem className="w-full focus:bg-transparent flex gap-4">
                                        <Link
                                            className="w-full"
                                            to={"/login"}
                                            preventScrollReset
                                        >
                                            <Button className="rounded-xl bg-secondary w-full">
                                                LogIn
                                            </Button>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="w-full focus:bg-transparent flex gap-4">
                                        <Link
                                            className="w-full"
                                            to={"/register"}
                                            preventScrollReset
                                        >
                                            <Button className="rounded-xl bg-secondary w-full">
                                                SignUp
                                            </Button>
                                        </Link>
                                    </DropdownMenuItem>
                                </>
                            )}
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>

                {user ? (
                    <div className="hidden lg:flex gap-4">
                        <CiUser className="h-8 w-8 aspect-square p-1 rounded-full hover:bg-secondary" />
                        <CiSettings className="h-8 w-8 aspect-square p-1 rounded-full hover:bg-secondary" />
                        <CiLogout
                            onClick={() => logout.mutate()}
                            className="h-8 w-8 aspect-square p-1 rounded-full hover:bg-secondary"
                        />
                    </div>
                ) : (
                    <div className="hidden lg:flex gap-4">
                        <Link to={"/login"} preventScrollReset>
                            <Button className="rounded-3xl bg-secondary">
                                LogIn
                            </Button>
                        </Link>
                        <Link to={"/register"} preventScrollReset>
                            <Button className="rounded-3xl bg-secondary">
                                SignUp
                            </Button>
                        </Link>
                    </div>
                )}
            </nav>
        </div>
    );
};
