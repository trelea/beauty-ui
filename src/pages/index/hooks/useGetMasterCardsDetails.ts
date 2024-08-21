import { useQuery } from "@tanstack/react-query";
import { getMastersDetailsCardsFn } from "../api/index.apis";

export const useGetMasterCardsDetails = () => {
    const { data, error, isError, isFetching, isLoading } = useQuery({
        queryKey: ["index", "masters"],
        queryFn: async () => await getMastersDetailsCardsFn(),
    });
    return { data, error, isError, isFetching, isLoading };
};
