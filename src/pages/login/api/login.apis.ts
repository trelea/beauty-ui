import axiosApi from "@/config/axios";
import { AxiosResponse } from "axios";

export interface loginReq {
    email: string;
    password: string;
}

export interface loginRes {
    id: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    birthDate: string;
    verified: true;
    created_at: string;
    updated_at: string;
}

export const loginFn = async (
    data: loginReq
): Promise<AxiosResponse<loginRes>> => {
    return await axiosApi.post<loginRes>("/auth/login", data);
};

export const logoutFn = async (): Promise<
    AxiosResponse<{ message: string }>
> => {
    return await axiosApi.post<{ message: string }>("/auth/logout");
};
