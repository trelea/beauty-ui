import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginFn, loginReq, loginRes } from "../api/login.apis";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useUserStore } from "@/store/store";

const formSchema = z.object({
	email: z.string().email(),
	password: z.string().min(10).max(20),
});

export const useLogin = () => {
	const { setLogin } = useUserStore((state) => state);

	const mutation = useMutation({
		mutationFn: async (data: loginReq) => await loginFn(data),
		onError: (err: AxiosError<loginRes>) => {
			if (err.response?.statusText === "Unauthorized")
				form.setError("password", { message: "Invalid credentials" });
		},
		onSuccess: (res) => {
			setLogin(res.data);
			window.location.search = "";
			window.location.pathname = "/";
		},
	});

	const form = useForm<loginReq>({
		resolver: zodResolver(formSchema),
		defaultValues: { email: "", password: "" },
	});

	const onSubmit = (values: z.infer<typeof formSchema> | loginReq) => {
		mutation.mutate(values as loginReq);
		form.reset();
	};

	return { form, onSubmit };
};
