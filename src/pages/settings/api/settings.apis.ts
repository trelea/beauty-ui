import axiosApi from "@/config/axios";
import { AxiosResponse } from "axios";

export interface getProfileRes {
    id: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    birthDate: string;
    verified: boolean;
    created_at: string;
    updated_at: string;
    message?: string[];
}

export interface updateProfileReq {
    firstName: string;
    lastName: string;
    phone: string;
    birthDate: string;
}

export interface changePasswordReq {
    password: string;
    new_password: string;
    confirm_password: string;
}

export const getProfileFn = async (): Promise<AxiosResponse<getProfileRes>> => {
    return await axiosApi.get<getProfileRes>("/settings/profile");
};

export const updateProfileFn = async (
    data: updateProfileReq
): Promise<AxiosResponse<getProfileRes>> => {
    return await axiosApi.patch<getProfileRes>("/settings/profile", data);
};

export const changePasswordFn = async (
    data: changePasswordReq
): Promise<AxiosResponse<{ UPDATED: boolean }>> => {
    return await axiosApi.patch("/settings/password", data);
};
