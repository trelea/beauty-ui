import React from "react";
import { useRegister } from "./hooks/useRegister";
import { RegisterForm } from "@/components/RegisterForm";
import { ScrollRestoration, useSearchParams } from "react-router-dom";
import { OTPConfirmation } from "@/components/OTPConfirmation";

export const Register: React.FC = (): JSX.Element => {
    const [queries] = useSearchParams();
    const { form, onSubmit } = useRegister();

    return (
        <main className="w-screen h-fit min-h-svh bg-secondary flex justify-center items-center py-4">
            {queries.size === 0 && (
                <RegisterForm form={form} onSubmit={onSubmit} />
            )}
            {queries.size === 1 && queries.get("token") && (
                <OTPConfirmation token={String(queries.get("token"))} />
            )}
            <ScrollRestoration />
        </main>
    );
};
