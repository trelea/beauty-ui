import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { changePasswordFn, changePasswordReq } from "../api/settings.apis";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

const formSchema = z.object({
	password: z
		.string()
		.refine(
			(v) =>
				/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,20}$/.test(
					v ?? ""
				),
			"Password must contain at least one upper-case, one lower-case, one number, one special char and minimum length of 10 chars"
		),
	new_password: z
		.string()
		.refine(
			(v) =>
				/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,20}$/.test(
					v ?? ""
				),
			"Password must contain at least one upper-case, one lower-case, one number, one special char and minimum length of 10 chars"
		),
	confirm_password: z.string().min(10).max(20),
	// .refine(
	//     (v) =>
	//         /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,20}$/.test(
	//             v ?? ""
	//         ),
	//     "Password must contain at least one upper-case, one lower-case, one number, one special char and minimum length of 10 chars"
	// ),
});

export const useChangePassword = () => {
	const mutation = useMutation({
		mutationFn: async (data: changePasswordReq) =>
			await changePasswordFn(data),
		onSuccess: () => form.reset(),
		onError: (err: AxiosError<{ message: string }>) => {
			if (err.response?.data.message === "UNAUTHORIZED")
				form.setError("password", { message: "Invalid credentials" });
		},
	});
	const form = useForm<changePasswordReq>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			password: "",
			new_password: "",
			confirm_password: "",
		},
	});

	const onSubmit = (
		values: z.infer<typeof formSchema> | changePasswordReq
	) => {
		if (values.new_password !== values.confirm_password)
			return form.setError("confirm_password", {
				message: "Confirm password should be the same as new password",
			});

		mutation.mutate(values as changePasswordReq);
	};

	return { form, onSubmit };
};
