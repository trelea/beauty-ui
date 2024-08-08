import axiosApi from "@/config/axios";
import { AxiosResponse } from "axios";

export interface authAdminReq {
    username: string;
    password: string;
}

export interface authAdminRes {
    ADMIN: boolean;
    created_at: string;
    id: string;
    updated_at: string;
    username: string;
}

export interface getMastersRes {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    description: string;
    thumbnail: string;
    birthDate: string;
    services: string[];
    created_at: string;
    updated_at: string;
}

export interface servicesReq {
    lashes?: boolean | null;
    brows?: boolean | null;
    nails?: boolean | null;
}

export interface createMasterRes {}

export const authAdminFn = async (
    data: authAdminReq
): Promise<AxiosResponse<authAdminRes>> => {
    return await axiosApi.post<authAdminRes>("/auth/admin", data);
};

export const getMastersCountFn = async (): Promise<
    AxiosResponse<{ masters: number }>
> => {
    return await axiosApi.get<{ masters: number }>("/masters/count");
};

export const getMastersFn = async ({
    page,
    search,
}: {
    page: string;
    search: string;
}): Promise<AxiosResponse<getMastersRes[]>> => {
    return await axiosApi.get<getMastersRes[]>("/masters", {
        params: { page, search },
    });
};

export const deleteMasterFn = async (
    id: string
): Promise<AxiosResponse<getMastersRes>> => {
    return await axiosApi.delete<getMastersRes>(`/masters/${id}`);
};

export const createMasterFn = async ({
    data,
    params,
}: {
    data: FormData;
    params: servicesReq;
}): Promise<AxiosResponse<getMastersRes>> => {
    return await axiosApi.post<getMastersRes>("/masters", data, {
        headers: { "Content-Type": "multipart/form-data" },
        params: { ...params },
    });
};

export const getMasterFn = async (
    id: string
): Promise<AxiosResponse<getMastersRes>> => {
    return await axiosApi.get<getMastersRes>(`/masters/${id}`);
};

export const updateMasterFn = async ({
    id,
    data,
    params,
}: {
    id: string;
    data: FormData;
    params: servicesReq;
}): Promise<AxiosResponse<getMastersRes>> => {
    return await axiosApi.patch<getMastersRes>(`/masters/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
        params: { ...params },
    });
};
