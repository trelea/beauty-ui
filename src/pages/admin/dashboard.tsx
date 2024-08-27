import { usei18nUtil } from "@/utils/usei18nUtil";
import React from "react";
import { useSearchParams } from "react-router-dom";

export const Dashboard: React.FC = () => {
    const [_, sP] = useSearchParams();
    const { lang } = usei18nUtil();
    React.useEffect(() => {
        sP({ pending: "true" });
        window.location.pathname = `/${lang}/admin/dashboard/appointments`;
    }, []);
    return <></>;
};
