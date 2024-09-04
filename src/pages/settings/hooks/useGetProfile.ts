import { useQuery } from "@tanstack/react-query";
import { getProfileFn } from "../api/settings.apis";

export const useGetProfile = () => {
	const { data, isError, isFetching, isLoading, error } = useQuery({
		queryKey: ["profile"],
		queryFn: async () => await getProfileFn(),
	});

	return { data, isError, isFetching, isLoading, error };
};
