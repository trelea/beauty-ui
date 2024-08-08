import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
    user: any;
    admin: any;
    setLogin: (data: any) => void;
    setAdmin: (data: any) => void;
    setLogout: () => void;
};

export const useUserStore = create<Store>()(
    persist<Store>(
        (set) => ({
            user: undefined,
            admin: undefined,
            setLogin: (data: any) => set({ user: data, admin: undefined }),
            setAdmin: (data: any) => set({ admin: data, user: undefined }),
            setLogout: () => set({ user: undefined, admin: undefined }),
        }),
        { name: "user-storage" }
    )
);
