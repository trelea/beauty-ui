import React from "react";
import { useLogin } from "./hooks/useLogin";
import { LoginForm } from "@/components/LoginForm";
import { ScrollRestoration, useParams } from "react-router-dom";
import { usei18nUtil } from "@/utils/usei18nUtil";

export const Login: React.FC = (): JSX.Element => {
  const { form, onSubmit } = useLogin();

  const { lang } = useParams();
  const { setLangUrl } = usei18nUtil();
  React.useEffect(() => setLangUrl(lang as "en" | "ro" | "ru"), [lang]);

  return (
    <main className="w-screen h-screen bg-secondary flex justify-center items-center">
      <LoginForm form={form} onSubmit={onSubmit} />
      <ScrollRestoration />
    </main>
  );
};
