import { Contacts } from "@/components/Contacts";
import { BaseLoyout } from "@/components/Loyout";
import { useUserStore } from "@/store/store";
import React from "react";
import { ScrollRestoration, useSearchParams } from "react-router-dom";
import { UserCard } from "@/components/UserCard";
import { SettingsOpts } from "@/components/SettingsOpts";
import { EditProfile } from "@/components/EditProfile";
import { ChangePassword } from "@/components/ChangePassword";
import { UserAppointments } from "@/components/UserAppointments";

export const Settings: React.FC = () => {
    const { user, setLogin } = useUserStore((state) => state);
    const [params, setParams] = useSearchParams();
    const contactsRef = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
        if (params.get("_ref_into") === "contacts")
            return contactsRef.current?.scrollIntoView({ behavior: "smooth" });
        if (params.get("_ref_into") === "faq") window.location.pathname = "/";
    }, [params]);

    return (
        <BaseLoyout>
            <div className="px-8 md:px-11 xl:px-40 2xl:px-56 relative z-40 pt-36 md:pt-40 xl:pt-44 2xl:pt-48">
                <div className="flex flex-col gap-2 md:gap-4 xl:flex-row xl:gap-6 mb-6 md:mb-12 xl:mb-20 2xl:mb-40">
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
                        {params.get("_appointments") === "true" && (
                            <UserAppointments />
                        )}
                    </div>
                </div>
            </div>

            <Contacts ref={contactsRef} />
            <ScrollRestoration />
        </BaseLoyout>
    );
};
