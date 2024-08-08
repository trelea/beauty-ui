import axiosApi from "@/config/axios";
import { AxiosResponse } from "axios";

export interface registerReq {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    password: string;
    birthDate: string;
}

export interface registerRes {
    token: string;
    message?: string;
}

export interface validateOTPReq {
    otp: string;
}

export interface validateOTPRes {
    id: string;
    email: string;
    verified: boolean;
    created_at: string;
    updated_at: string;
}

export const registerFn = async (
    data: registerReq
): Promise<AxiosResponse<registerRes>> => {
    return await axiosApi.post<registerRes>("/auth/register", data);
};

export const validateOTPFn = async ({
    token,
    data,
}: {
    token: string;
    data: validateOTPReq;
}): Promise<AxiosResponse<validateOTPRes>> => {
    return await axiosApi.post<validateOTPRes>(`/auth/verify/${token}`, data);
};

export const validateTokenFn = async (
    token: string
): Promise<AxiosResponse<{ vlalid: boolean }>> => {
    return await axiosApi.get<{ vlalid: boolean }>(`/auth/validate/${token}`);
};
