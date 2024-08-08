import { Contacts } from "@/components/Contacts";
import { BaseLoyout } from "@/components/Loyout";
import { useUserStore } from "@/store/store";
import React from "react";
import { ScrollRestoration, useSearchParams } from "react-router-dom";
import { UserCard } from "@/components/UserCard";
import { SettingsOpts } from "@/components/SettingsOpts";
import { EditProfile } from "@/components/EditProfile";
import { ChangePassword } from "@/components/ChangePassword";

// space-y-6 md:space-y-7 lg:space-y-8 xl:space-y-9 2xl:space-y-12

export const Settings: React.FC = () => {
    const { user, setLogin } = useUserStore((state) => state);
    const [params, setParams] = useSearchParams();

    return (
        <BaseLoyout>
            <div className="px-8 md:px-11 xl:px-40 2xl:px-56 relative z-40 pt-36 md:pt-40 xl:pt-44 2xl:pt-48">
                {/* <h1 className=" text-black font-celesse text-[50px] font-normal md:text-[60px] xl:text-[90px]">
                    Settings
                </h1> */}
                <div className="flex flex-col gap-2 md:gap-4 xl:flex-row xl:gap-6 mb-9 md:mb-16 xl:mb-24 2xl:mb-44">
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
                </div>
            </div>
            <Contacts />
            <ScrollRestoration />
        </BaseLoyout>
    );
};
