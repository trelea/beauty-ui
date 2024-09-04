import { useQuery } from "@tanstack/react-query";
import { validateTokenFn } from "../api/register.apis";

export const useValidateToken = (token: string) => {
	const { data, isLoading, isFetching, isError } = useQuery({
		queryKey: ["validateToken", token],
		queryFn: async () => await validateTokenFn(token),
		refetchInterval: 1000 * 60 * 5,
	});

	return { data, isLoading, isFetching, isError };
};
