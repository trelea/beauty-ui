import { toISO8601DateString } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createMasterFn, servicesReq } from "../api/admin.apis";
import { useToast } from "@/components/ui/use-toast";
import { AxiosError } from "axios";
import { useTranslation } from "react-i18next";

export const Services = ["Lashes", "Brows", "Nails"];

const formSchema = z.object({
	firstName: z.string().min(2).max(50),
	lastName: z.string().min(2).max(50),
	contact: z.string().min(4).max(12),
	email: z.string().email(),
	birthDate: z.date(),
	description: z.string().optional(),
	services: z.enum(["Nails", "Brows", "Lashes"], {
		message: "You need to select at least one service.",
	}),
	thumbnail: z
		.instanceof(File)
		.refine((file) => file.size !== 0, "Please upload an image"),
});

export const useCreateMaster = ({
	page,
	search,
}: {
	page: string;
	search: string;
}) => {
	const { t } = useTranslation()
	const { toast } = useToast();
	const client = useQueryClient();
	const mutation = useMutation({
		mutationFn: async ({
			data,
			params,
		}: {
			data: FormData;
			params: servicesReq;
		}) => await createMasterFn({ data, params }),
		onError: (err: AxiosError<{ target: any }>) => {
			// Email exception
			if ((err.response?.data.target[0] as string) === "email")
				toast({
					variant: "destructive",
					title: t('emailErr.title'),
					description: t('emailErr.desc'),
				});
		},
		onSuccess: () => {
			form.reset();
			client.invalidateQueries({ queryKey: ["masters", page, search] });
			client.invalidateQueries({ queryKey: ["masters", "count"] });
			window.location.reload();
		},
	});
	const form = useForm<
		| z.infer<typeof formSchema>
		| {
			firstName: string;
			lastName: string;
			contact: string;
			email: string;
			birthDate: string;
			description: string;
			services: string[];
			thumbnail: any;
		}
	>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			contact: "",
			email: "",
			birthDate: "",
			description: "",
			services: [],
			thumbnail: new File([""], "filename"),
		},
	});

	const onSubmit = async (
		values:
			| z.infer<typeof formSchema>
			| {
				firstName: string;
				lastName: string;
				contact: string;
				email: string;
				birthDate: string;
				description: string;
				services: string[];
				thumbnail: any;
			}
	) => {
		values.birthDate = toISO8601DateString(new Date(values.birthDate));
		const formData: FormData = new FormData();
		formData.append("firstName", values.firstName);
		formData.append("lastName", values.lastName);
		formData.append("contact", values.contact);
		formData.append("email", values.email);
		formData.append("birthDate", values.birthDate);
		formData.append("thumbnail", values.thumbnail);
		if (values.description)
			formData.append("description", values.description);

		mutation.mutate({
			data: formData,
			params: {
				lashes: values.services === "Lashes" ? true : false,
				brows: values.services === "Brows" ? true : false,
				nails: values.services === "Nails" ? true : false,
			},
		});
	};

	return { form, onSubmit };
};
