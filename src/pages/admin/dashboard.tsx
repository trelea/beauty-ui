import React from "react";
import { useSearchParams } from "react-router-dom";

export const Dashboard: React.FC = () => {
    const [_, sP] = useSearchParams();
    React.useEffect(() => {
        sP({ pending: "true" });
        window.location.pathname = "/admin/dashboard/appointments";
    }, []);
    return <></>;
};
