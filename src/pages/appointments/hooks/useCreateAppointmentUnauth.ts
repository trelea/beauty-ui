import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";
import {
	createAppointmentFn,
	createAppointmentReq,
	createAppointmentRes,
} from "../api/appointments.apis";
import { toISO8601DateString } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { AxiosResponse } from "axios";

const formSchema = z.object({
	time: z.string().min(1, { message: "Please select time." }),
	phone: z
		.string()
		.refine(isValidPhoneNumber, { message: "Invalid phone number." }),
	description: z.string().optional(),
	firstName: z.string().min(2).max(50),
	lastName: z.string().min(2).max(50),
	email: z.string().email(),
	birthDate: z.date(),
});

export const useCreateAppointmentUnauth = ({
	service,
}: {
	service: "lashes" | "brows" | "nails";
}) => {
	const { toast } = useToast();
	const mutation = useMutation({
		mutationFn: async (body: createAppointmentReq) =>
			createAppointmentFn({ body, service }),
		onError: (err) => console.log(err),
		onSuccess: (res: AxiosResponse<createAppointmentRes>) => {
			form.reset();
			toast({
				variant: "default",
				title: "Successfully Scheduled",
				description: `${new Date(res.data.date).toLocaleDateString(
					"en-US",
					{
						weekday: "long",
						year: "numeric",
						month: "long",
						day: "numeric",
					}
				)} ${new Date(res.data.time).toLocaleTimeString("en-US")}`,
			});
			setTimeout(() => (window.location.pathname = "/"), 2000);
		},
	});
	const form = useForm<z.infer<typeof formSchema> | createAppointmentReq>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			time: "",
			phone: "",
			description: "",
			firstName: "",
			lastName: "",
			email: "",
			birthDate: "",
		},
	});

	const onSubmit = async (
		values: createAppointmentReq,
		{ masterId, date }: { masterId: string; date: string }
	) => {
		values.birthDate = toISO8601DateString(
			new Date(values.birthDate as string)
		);
		await mutation.mutate({ ...values, masterId, date });
	};

	return { form, onSubmit };
};
