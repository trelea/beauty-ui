import { useQuery } from "@tanstack/react-query";
import {
	getAppointmentsByStatusFn,
	getAppointmentsByStatusRes,
} from "../api/admin.apis";

export const useGetAppointmentsByStatus = ({
	status,
}: {
	status: "pending" | "approved" | "denied";
}) => {
	const {
		data: lashes,
		error: e1,
		isError: ise1,
		isLoading: isl1,
		isFetching: isf1,
	} = useQuery({
		queryKey: ["lashes", status],
		queryFn: async () =>
			await getAppointmentsByStatusFn({ service: "lashes", status }),
		refetchInterval: 1000 * 60 * 10,
	});

	const {
		data: brows,
		error: e2,
		isError: ise2,
		isLoading: isl2,
		isFetching: isf2,
	} = useQuery({
		queryKey: ["brows", status],
		queryFn: async () =>
			await getAppointmentsByStatusFn({ service: "brows", status }),
		refetchInterval: 1000 * 60 * 10,
	});

	const {
		data: nails,
		error: e3,
		isError: ise3,
		isLoading: isl3,
		isFetching: isf3,
	} = useQuery({
		queryKey: ["nails", status],
		queryFn: async () =>
			await getAppointmentsByStatusFn({ service: "nails", status }),
		refetchInterval: 1000 * 60 * 10,
	});

	const error = e1 || e2 || e3 || ise1 || ise2 || ise3;
	const loading = isl1 || isl2 || isl3 || isf1 || isf2 || isf3;
	let appointments: (getAppointmentsByStatusRes & { service: string })[] = [];

	lashes?.data.map(
		(_: getAppointmentsByStatusRes) =>
			(appointments = [...appointments, { ..._, service: "lashes" }])
	);
	brows?.data.map(
		(_: getAppointmentsByStatusRes) =>
			(appointments = [...appointments, { ..._, service: "brows" }])
	);
	nails?.data.map(
		(_: getAppointmentsByStatusRes) =>
			(appointments = [...appointments, { ..._, service: "nails" }])
	);

	appointments
		.sort(
			(a: any, b: any) =>
				new Date(a.updated_at).getTime() -
				new Date(b.updated_at).getTime()
		)
		.reverse();

	return { appointments, error, loading };
};
