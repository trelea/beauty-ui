import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { validateOTPFn, validateOTPReq } from "../api/register.apis";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";

const formSchema = z.object({
    otp: z.string().min(4).max(4),
});

export const useValidateOTP = (token: string) => {
    const mutation = useMutation({
        mutationFn: async ({
            token,
            data,
        }: {
            token: string;
            data: validateOTPReq;
        }) => await validateOTPFn({ token, data }),
        onError: (err: AxiosError) =>
            form.setError("otp", { message: "Wrong OTP" }),
        onSuccess: () => (window.location.pathname = "/login"),
    });

    const form = useForm<validateOTPReq>({
        resolver: zodResolver(formSchema),
        defaultValues: { otp: "" },
    });

    const onSubmit = (values: z.infer<typeof formSchema> | validateOTPReq) => {
        mutation.mutate({ token, data: values as validateOTPReq });
        form.reset();
    };

    return { form, onSubmit };
};
