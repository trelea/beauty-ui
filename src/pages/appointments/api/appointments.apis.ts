import axiosApi from "@/config/axios";
import { AxiosResponse } from "axios";

export interface getAvailableRes {
    id: string;
    firstName: string;
    lastName: string;
    thumbnail: string;
    registred: string[];
    available: string[];
}

export interface createAppointmentRes {
    status: string;
    time: string;
    date: string;
    phone: string;
    description: string;
    master: { firstName: string; lastName: string };
}

export interface getUserAppointmentsRes {
    id: string;
    userId: null | string;
    googleUserId: null | string;
    time: string;
    date: string;
    status: "PENDING" | "DENIED" | "APPROVED";
    phone: string;
    description: string;
    master: {
        id: string;
        firstName: string;
        lastName: string;
        description: string;
        thumbnail: string;
        services: string[];
    };
    user: null | any;
    googleUser: null | any;
    created_at: string;
}

export const getAvailableFn = async ({
    params,
    service,
}: {
    service: "lashes" | "brows" | "nails";
    params: { date: string };
}): Promise<AxiosResponse<getAvailableRes[]>> => {
    return await axiosApi.get<getAvailableRes[]>(
        `/appointments/${service}/available`,
        { params }
    );
};

export const createAppointmentFn = async ({
    body,
    service,
}: {
    body: {
        masterId: string;
        time: string;
        date: string;
        phone: string;
        description?: string;
    };
    service: "lashes" | "brows" | "nails";
}): Promise<AxiosResponse<createAppointmentRes>> => {
    return await axiosApi.post<createAppointmentRes>(
        `/appointments/${service}`,
        body
    );
};

export const getUserAppointmentsFn = async (
    service: "lashes" | "brows" | "nails"
): Promise<AxiosResponse<getUserAppointmentsRes[]>> => {
    return await axiosApi.get<getUserAppointmentsRes[]>(
        `/appointments/${service}`
    );
};
