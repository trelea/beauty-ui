import { useForm } from "react-hook-form";
import { z } from "zod";
import { registerFn, registerReq, registerRes } from "../api/register.apis";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toISO8601DateString } from "@/lib/utils";
import { AxiosError, AxiosResponse } from "axios";

const formSchema = z.object({
	firstName: z.string().min(2).max(50),
	lastName: z.string().min(2).max(50),
	phone: z.string().min(4).max(12),
	email: z.string().email(),
	password: z
		.string()
		.refine(
			(v) =>
				/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,20}$/.test(
					v ?? ""
				),
			"Password must contain at least one upper-case, one lower-case, one number, one special char minimum length of 10 chars"
		),
	birthDate: z.date(),
});

export const useRegister = () => {
	const mutation = useMutation({
		mutationFn: async (data: registerReq) => await registerFn(data),
		onError: (err: AxiosError<registerRes>) => {
			if (err.response?.data.message === "Resources Already Used")
				return form.setError("email", {
					message: "Email already used",
				});
		},
		onSuccess: (res: AxiosResponse<registerRes>) =>
			(window.location.search = `token=${res.data.token}`),
	});

	const form = useForm<registerReq>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			phone: "",
			email: "",
			password: "",
			birthDate: "",
		},
	});

	const onSubmit = (values: z.infer<typeof formSchema> | registerReq) => {
		values.birthDate = toISO8601DateString(new Date(values.birthDate));
		mutation.mutate(values as registerReq);
	};

	return { form, onSubmit };
};
