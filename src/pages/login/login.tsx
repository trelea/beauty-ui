import React from "react";
import { useLogin } from "./hooks/useLogin";
import { LoginForm } from "@/components/LoginForm";

export const Login: React.FC = (): JSX.Element => {
    const { form, onSubmit } = useLogin();
    return (
        <main className="w-screen h-screen bg-secondary flex justify-center items-center">
            <LoginForm form={form} onSubmit={onSubmit} />
        </main>
    );
};
