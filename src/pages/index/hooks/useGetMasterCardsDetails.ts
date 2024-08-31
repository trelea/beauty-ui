import { useQuery } from "@tanstack/react-query";
import { getMastersDetailsCardsFn } from "../api/index.apis";

export const useGetMasterCardsDetails = ({
    service,
}: {
    service: "Lashes" | "Brows" | "Nails" | null;
}) => {
    const { data, error, isError, isFetching, isLoading, refetch } = useQuery({
        queryKey: ["index", "masters"],
        queryFn: async () => await getMastersDetailsCardsFn({ service }),
    });
    return { data, error, isError, isFetching, isLoading, refetch };
};
