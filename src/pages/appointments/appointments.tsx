import { BrowsAppointments } from "@/components/BrowsAppointments";
import { Contacts } from "@/components/Contacts";
import { LashesAppointments } from "@/components/LashesAppointments";
import { BaseLoyout } from "@/components/Loyout";
import { NailsAppointments } from "@/components/NailsAppointments";
import { toISO8601DateString } from "@/lib/utils";
import { useUserStore } from "@/store/store";
import React from "react";
import { ScrollRestoration, useSearchParams } from "react-router-dom";

export const Appointments: React.FC = () => {
    const auth = useUserStore((state) => state.user);
    const [params, setParams] = useSearchParams();
    const contactsRef = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
        if (params.get("_ref_into") === "contacts")
            return contactsRef.current?.scrollIntoView({ behavior: "smooth" });
        if (params.get("_ref_into") === "faq") window.location.pathname = "/";
    }, [params]);

    return (
        <BaseLoyout>
            <div className="px-8 md:px-11 xl:px-40 2xl:px-56 relative z-40 pt-32 2xl:pt-40 pb-10">
                {/* <div className="flex flex-col gap-2 md:gap-4 xl:flex-row xl:gap-6 mb-9 md:mb-16 xl:mb-24 2xl:mb-44">
                    <div className="flex flex-col gap-2 md:gap-4 xl:gap-6">
                        <UserCard user={user} />
                        <SettingsOpts
                            params={params}
                            setParams={setParams}
                            user={user}
                        />
                    </div>
                    <div className="xl:flex xl:flex-grow">
                        {params.get("_edit_profile") === "true" && (
                            <EditProfile setLogin={setLogin} />
                        )}
                        {params.get("_change_password") === "true" && (
                            <ChangePassword />
                        )}
                    </div>
                </div> */}
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
                        Lashes
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
                        Nails
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
                        Brows
                    </li>
                </ul>

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
