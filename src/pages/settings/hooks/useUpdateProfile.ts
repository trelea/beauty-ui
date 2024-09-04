import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
	getProfileRes,
	updateProfileFn,
	updateProfileReq,
} from "../api/settings.apis";
import { toISO8601DateString } from "@/lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

const formSchema = z.object({
	firstName: z
		.union([z.string().min(2).max(50), z.literal("")])
		.transform((e) => (e === "" ? undefined : e))
		.optional(),
	lastName: z
		.union([z.string().min(2).max(50), z.literal("")])
		.transform((e) => (e === "" ? undefined : e))
		.optional(),
	phone: z
		.union([z.string().min(8).max(9), z.literal("")])
		.transform((e) => (e === "" ? undefined : e))
		.optional(),
	birthDate: z
		.union([z.date(), z.literal("")])
		.transform((e) => (e === "" ? undefined : e))
		.optional(),
});

export const useUpdateProfile = (
	data: Partial<getProfileRes> | undefined,
	setLogin: (data: any) => void
) => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: async (data: updateProfileReq) =>
			await updateProfileFn(data),
		onError: (err: AxiosError<getProfileRes>) => {
			if (
				err.response?.data?.message &&
				err.response?.data?.message[0] ===
				"phone must be a valid phone number"
			)
				form.setError("phone", {
					message: "phone must be a valid phone number",
				});
		},
		onSuccess: (res: AxiosResponse<getProfileRes>) => {
			setLogin(res.data);
			queryClient.invalidateQueries({ queryKey: ["profile"] });
		},
	});

	const form = useForm<updateProfileReq>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: data?.firstName,
			lastName: data?.lastName,
			phone: data?.phone,
			birthDate: data?.birthDate,
		},
	});

	const onSubmit = (
		values: z.infer<typeof formSchema> | updateProfileReq
	) => {
		if (values.birthDate)
			values.birthDate = toISO8601DateString(new Date(values.birthDate));
		if (
			Object.values(values).some((v) => {
				return v !== undefined;
			})
		) {
			if (
				(data?.firstName !== values.firstName &&
					values.firstName !== undefined) ||
				(data?.lastName !== values.lastName &&
					values.lastName !== undefined) ||
				(data?.phone !== values.phone && values.phone !== undefined) ||
				(data?.birthDate !== `${values.birthDate}T00:00:00.000Z` &&
					values.birthDate !== undefined)
			) {
				mutation.mutate(values as updateProfileReq);
			}
		}
		return;
	};

	return { form, onSubmit };
};
