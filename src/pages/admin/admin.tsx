import { useMutation } from "@tanstack/react-query";
import React from "react";
import { authAdminFn, authAdminReq, authAdminRes } from "./api/admin.apis";
import { useUserStore } from "@/store/store";
import { AxiosResponse } from "axios";

export const Admin: React.FC = () => {
    const { setAdmin } = useUserStore((state) => state);
    const mutation = useMutation({
        mutationFn: async (data: authAdminReq) => await authAdminFn(data),
        onError: () => window.location.reload(),
        onSuccess: (res: AxiosResponse<authAdminRes>) => {
            setAdmin(res.data);
            window.location.pathname = "/admin/dashboard";
        },
    });

    React.useEffect(() => {
        const username: string = String(prompt("User"));
        const password: string = String(prompt("Password"));
        mutation.mutate({ username, password } as authAdminReq);
    }, []);

    return <></>;
};
