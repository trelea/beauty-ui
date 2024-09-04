import { useQuery } from "@tanstack/react-query";
import {
	getUserAppointmentsFn,
	getUserAppointmentsRes,
} from "../api/appointments.apis";

export const useGetAppointments = () => {
	const {
		data: lashes,
		error: e1,
		isError: ise1,
		isLoading: isl1,
		isFetching: isf1,
	} = useQuery({
		queryKey: ["appointments", "lashes"],
		queryFn: async () => await getUserAppointmentsFn("lashes"),
		refetchInterval: 1000 * 60 * 10,
	});

	const {
		data: brows,
		error: e2,
		isError: ise2,
		isLoading: isl2,
		isFetching: isf2,
	} = useQuery({
		queryKey: ["appointments", "brows"],
		queryFn: async () => await getUserAppointmentsFn("brows"),
		refetchInterval: 1000 * 60 * 10,
	});

	const {
		data: nails,
		error: e3,
		isError: ise3,
		isLoading: isl3,
		isFetching: isf3,
	} = useQuery({
		queryKey: ["appointments", "nails"],
		queryFn: async () => await getUserAppointmentsFn("nails"),
		refetchInterval: 1000 * 60 * 10,
	});

	let appointments: (getUserAppointmentsRes & { service: string })[] = [];
	lashes?.data.map(
		(l) => (appointments = [...appointments, { service: "lashes", ...l }])
	);
	brows?.data.map(
		(l) => (appointments = [...appointments, { service: "brows", ...l }])
	);
	nails?.data.map(
		(l) => (appointments = [...appointments, { service: "nails", ...l }])
	);

	appointments
		.sort(
			(a, b) =>
				new Date(a.created_at).getTime() -
				new Date(b.created_at).getTime()
		)
		.reverse();

	const error = e1 || e2 || e3 || ise1 || ise2 || ise3;
	const loading = isl1 || isl2 || isl3 || isf1 || isf2 || isf3;

	return { appointments, error, loading };
};
