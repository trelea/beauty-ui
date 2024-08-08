import { useQuery } from "@tanstack/react-query";
import { getMasterFn } from "../api/admin.apis";

export const useGetMaster = ({ id }: { id: string }) => {
    const { data, error, isError, isLoading, isFetching, isSuccess } = useQuery(
        {
            queryKey: ["masters", id],
            queryFn: async () => await getMasterFn(id),
        }
    );
    return { data, error, isError, isLoading, isFetching, isSuccess };
};
