import { useQuery } from "@tanstack/react-query";
import { getMastersCountFn, getMastersFn } from "../api/admin.apis";
import React from "react";
import { useSearchParams } from "react-router-dom";

export const useGetMasters = () => {
    const [search, setSearch] = React.useState<string>("");
    const [page, setPage] = useSearchParams({ page: "1" });

    const { data: count } = useQuery({
        queryKey: ["masters", "count"],
        queryFn: async () => await getMastersCountFn(),
    });

    const { data, error, isError, isLoading, isFetching } = useQuery({
        queryKey: ["masters", String(page.get("page")), search],
        queryFn: async () =>
            await getMastersFn({ page: String(page.get("page")), search }),
    });
    if (data?.data.length === 0 && Number(page.get("page")) !== 1)
        setPage((page: URLSearchParams) => {
            return {
                page: String(Number(page.get("page")) - 1),
            };
        });
    const totalPages: number = Math.ceil(Number(count?.data.masters) / 10);

    return {
        data,
        error,
        isError,
        isLoading,
        isFetching,
        totalPages,
        search,
        setSearch,
        page,
        setPage,
    };
};
