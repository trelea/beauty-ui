import axiosApi from "@/config/axios";
import { useQuery } from "@tanstack/react-query";

export const useGetWorkingHours = () => {
	const { data, error, isError, isLoading, isFetching } = useQuery({
		queryKey: ["working", "hours"],
		queryFn: async () =>
			await axiosApi.get<{ start: number; end: number }>(
				"/hours/working"
			),
	});
	return { data, error, isError, isLoading, isFetching };
};
