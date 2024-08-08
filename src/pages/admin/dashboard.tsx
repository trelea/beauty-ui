import React from "react";

export const Dashboard: React.FC = () => {
    React.useEffect(() => {
        window.location.pathname = "/admin/dashboard/appointments";
    }, []);
    return <div>Trelea</div>;
};
