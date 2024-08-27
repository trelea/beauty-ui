import { useMutation } from "@tanstack/react-query";
import React from "react";
import { authAdminFn, authAdminReq, authAdminRes } from "./api/admin.apis";
import { useUserStore } from "@/store/store";
import { AxiosResponse } from "axios";
import { usei18nUtil } from "@/utils/usei18nUtil";

export const Admin: React.FC = () => {
    const { setAdmin } = useUserStore((state) => state);
    const { t } = usei18nUtil();
    const mutation = useMutation({
        mutationFn: async (data: authAdminReq) => await authAdminFn(data),
        onError: () => window.location.reload(),
        onSuccess: (res: AxiosResponse<authAdminRes>) => {
            setAdmin(res.data);
            window.location.pathname = `/admin/dashboard`;
        },
    });

    React.useEffect(() => {
        const username: string = String(prompt(t("adminAuth.user")));
        const password: string = String(prompt(t("adminAuth.pwd")));
        mutation.mutate({ username, password } as authAdminReq);
    }, []);

    return <></>;
};
