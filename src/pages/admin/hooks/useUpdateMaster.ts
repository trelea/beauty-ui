import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { getMastersRes, servicesReq, updateMasterFn } from "../api/admin.apis";
import { AxiosError, AxiosResponse } from "axios";
import React from "react";
import { toISO8601DateString } from "@/lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
    firstName: z
        .union([z.string().min(2).max(50), z.literal("")])
        .transform((e) => (e === "" ? undefined : e))
        .optional(),
    lastName: z
        .union([z.string().min(2).max(50), z.literal("")])
        .transform((e) => (e === "" ? undefined : e))
        .optional(),
    contact: z
        .union([z.string().min(4).max(12), z.literal("")])
        .transform((e) => (e === "" ? undefined : e))
        .optional(),
    email: z
        .union([z.string().email(), z.literal("")])
        .transform((e) => (e === "" ? undefined : e))
        .optional(),
    birthDate: z
        .union([z.date(), z.literal("")])
        .transform((e) => (e === "" ? undefined : e))
        .optional(),
    description: z
        .union([z.string().optional(), z.literal("")])
        .transform((e) => (e === "" ? "" : e))
        .optional(),
    services: z
        .union([
            z
                .array(z.string())
                .min(1, { message: "You have to select at least one item." })
                .max(3),
            z.literal(""),
        ])
        .transform((e) => (e === "" ? undefined : e))
        .optional(),
    thumbnail: z
        .union([z.instanceof(File), z.literal("")])
        .transform((e) => (e === "" ? undefined : e))
        .optional(),
});

export const useUpdateMaster = ({
    data,
    page,
    search,
}: // setOpen,
{
    data: AxiosResponse<getMastersRes> | undefined;
    page: string;
    search: string;
    // setOpen: any;
}) => {
    const { toast } = useToast();
    const client = useQueryClient();
    const mutation = useMutation({
        mutationFn: async ({
            id,
            data,
            params,
        }: {
            id: string;
            data: FormData;
            params: servicesReq;
        }) => await updateMasterFn({ id, data, params }),
        onError: (err: AxiosError<{ target: any }>) => {
            // Email exception
            if ((err.response?.data.target[0] as string) === "email")
                toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "Masters must have unique emails.",
                });
        },
        onSuccess: () => {
            // setOpen(false);
            form.reset();
            client.invalidateQueries({ queryKey: ["masters", page, search] });
            window.location.reload();
        },
    });
    const form = useForm<z.infer<typeof formSchema> | any>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            contact: "",
            email: "",
            birthDate: "",
            description: "",
            services: "",
            thumbnail: "",
        },
    });

    React.useEffect(() => {
        form.reset({
            firstName: data?.data.firstName,
            lastName: data?.data.lastName,
            contact: data?.data.contact,
            email: data?.data.email,
            birthDate: new Date(
                data?.data.birthDate
                    ? data?.data.birthDate.split("T")[0]
                    : new Date().toJSON().split("T")[0]
            ),
            description: data?.data.description,
            services: data?.data.services,
            thumbnail: new File([""], String(data?.data.thumbnail)),
        });
    }, [data]);

    const onSubmit = (
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
        values.birthDate = toISO8601DateString(
            new Date(String(values.birthDate))
        );
        const formData: FormData = new FormData();
        formData.append("firstName", values.firstName as string);
        formData.append("lastName", values.lastName as string);
        formData.append("contact", values.contact as string);
        formData.append("email", values.email as string);
        formData.append("birthDate", values.birthDate as string);
        formData.append("description", values.description as string);
        if (
            (values.thumbnail.name as string) !==
            (data?.data.thumbnail as string)
        )
            formData.append("thumbnail", values.thumbnail);

        mutation.mutate({
            id: data?.data.id as string,
            data: formData,
            params: {
                lashes: values.services?.includes("Lashes") ? true : false,
                brows: values.services?.includes("Brows") ? true : false,
                nails: values.services?.includes("Nails") ? true : false,
            },
        });
    };

    return { form, onSubmit };
};
