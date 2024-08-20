import { useMutation } from "@tanstack/react-query";
import { logoutFn } from "../api/login.apis";
import { AxiosError } from "axios";

export const useLogout = (fn: () => void) => {
    const logout = useMutation({
        mutationFn: async () => await logoutFn(),
        onError: (err: AxiosError) => console.log(err.response?.data),
        onSuccess: () => {
            fn();
            window.location.pathname = "/";
        },
    });

    return { logout };
};
