import { useQuery } from "@tanstack/react-query";
import { getAvailableFn } from "../api/appointments.apis";

export const useGetAvailableBrows = (date: string) => {
	const { data, error, isError, isLoading, isFetching } = useQuery({
		queryKey: ["available", "brows", date],
		queryFn: async () =>
			getAvailableFn({ params: { date }, service: "brows" }),
		refetchInterval: 1000 * 60 * 10,
	});
	return { data, error, isError, isLoading, isFetching };
};

export const useGetAvailableLashes = (date: string) => {
	const { data, error, isError, isLoading, isFetching } = useQuery({
		queryKey: ["available", "lashes", date],
		queryFn: async () =>
			getAvailableFn({ params: { date }, service: "lashes" }),
		refetchInterval: 1000 * 60 * 10,
	});
	return { data, error, isError, isLoading, isFetching };
};

export const useGetAvailableNails = (date: string) => {
	const { data, error, isError, isLoading, isFetching } = useQuery({
		queryKey: ["available", "nails", date],
		queryFn: async () =>
			getAvailableFn({ params: { date }, service: "nails" }),
		refetchInterval: 1000 * 60 * 10,
	});
	return { data, error, isError, isLoading, isFetching };
};
