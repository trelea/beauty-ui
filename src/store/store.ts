import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
    user: any;
    setLogin: (data: any) => void;
    setLogout: () => void;
};

export const useUserStore = create<Store>()(
    persist<Store>(
        (set) => ({
            user: undefined,
            setLogin: (data: any) => set({ user: data }),
            setLogout: () => set({ user: undefined }),
        }),
        { name: "user-storage" }
    )
);
