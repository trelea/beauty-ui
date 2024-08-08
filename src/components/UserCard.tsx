import React from "react";
import { Card, CardHeader } from "./ui/card";
import { RxAvatar, RxCalendar } from "react-icons/rx";

interface Props {
    user?: any;
}

export const UserCard: React.FC<Props> = ({ user }) => {
    return (
        <Card className="shadow-lg rounded-xl">
            <CardHeader className="p-3 m-0 px-4 md:p-4 md:px-6">
                {user?.provider ? (
                    <div className="flex items-center gap-4 md:gap-6">
                        <img
                            src={user?._json?.picture}
                            alt=""
                            className="w-12 h-12 md:w-16 md:h-16 xl:h-20 xl:w-20 2xl:w-24 2xl:h-24 aspect-square p-0 m-0 rounded-full"
                        />
                        <div className="flex flex-col gap-2">
                            <h1 className="font-recoleta text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-normal">
                                {user?.displayName}
                            </h1>
                            <div className="flex items-center gap-2">
                                <RxCalendar className="h-4 w-4 m-0 p-0 text-black md:h-6 md:w-6" />
                                <p className="font-light text-sm md:text-base">
                                    Joined On:{" "}
                                    {new Date(user?.created_at)
                                        .toUTCString()
                                        .split(" ")
                                        .splice(0, 4)
                                        .join(" ")}
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center gap-4 md:gap-6">
                        <RxAvatar className="w-12 h-12 md:w-16 md:h-16 xl:h-20 xl:w-20 2xl:w-24 2xl:h-24 aspect-square p-0 m-0" />
                        <div className="flex flex-col gap-2">
                            <h1 className="font-recoleta text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-normal">
                                {user?.firstName} {user?.lastName}
                            </h1>
                            <div className="flex items-center gap-2">
                                <RxCalendar className="h-4 w-4 m-0 p-0 text-black md:h-6 md:w-6" />
                                <p className="font-light text-sm md:text-base">
                                    Joined On:{" "}
                                    {new Date(user?.created_at)
                                        .toUTCString()
                                        .split(" ")
                                        .splice(0, 4)
                                        .join(" ")}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </CardHeader>
        </Card>
    );
};
