import axiosApi from "@/config/axios";
import { useUserStore } from "@/store/store";
import { useQuery } from "@tanstack/react-query";

export const useSigninGoogle = () => {
    const { setLogin } = useUserStore((state) => state);
    const { refetch } = useQuery({
        queryKey: ["google"],
        queryFn: async () => await axiosApi.get("/auth/google/session"),
        enabled: false,
    });

    const signinWithGoogle = () => {
        const w = window.open(
            `${import.meta.env.VITE_API_URL}/auth/google`,
            "_blank",
            "width=500,height=500"
        );
        let time: NodeJS.Timeout | null = null;
        if (w) {
            time = setInterval(async () => {
                if (w.closed) {
                    const { data } = await refetch();
                    if (data) setLogin(data.data);
                    if (time) clearInterval(time);
                    window.location.pathname = "/";
                }
            }, 1000);
        }
    };

    return { signinWithGoogle };
};
