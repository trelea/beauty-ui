import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";
import { createAppointmentFn } from "../api/appointments.apis";

const formSchema = z.object({
	time: z.string().min(1, { message: "Please select time." }),
	phone: z
		.string()
		.refine(isValidPhoneNumber, { message: "Invalid phone number." }),
	description: z.string().optional(),
});

export const useCreateAppointment = ({
	service,
}: // date,
	{
		service: "lashes" | "brows" | "nails";
		// date: string;
	}) => {
	// const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: async (body: {
			masterId: string;
			time: string;
			date: string;
			phone: string;
			description?: string;
		}) => createAppointmentFn({ body, service }),
		onError: (err) => console.log(err),
		onSuccess: () => {
			form.reset();
			window.location.href = "/settings?_appointments=true";
			// queryClient.invalidateQueries({
			//     queryKey: ["available", service, date],
			// });
		},
	});
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			time: "",
			phone: "",
			description: "",
		},
	});

	const onSubmit = async (
		values: z.infer<typeof formSchema>,
		{ masterId, date }: { masterId: string; date: string }
	) => {
		await mutation.mutate({ ...values, masterId, date });
	};

	return { form, onSubmit };
};
