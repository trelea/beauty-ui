import axiosApi from "@/config/axios";
import { AxiosResponse } from "axios";

export interface getMastersCardsDetailsRes {
    firstName: string;
    lastName: string;
    thumbnail: string;
    services: string[];
    description: string;
}

export const getMastersDetailsCardsFn = async (): Promise<
    AxiosResponse<getMastersCardsDetailsRes[]>
> => {
    return await axiosApi.get<getMastersCardsDetailsRes[]>("/masters/details");
};
