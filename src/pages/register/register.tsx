import React from "react";
import { useRegister } from "./hooks/useRegister";
import { RegisterForm } from "@/components/RegisterForm";
import {
  ScrollRestoration,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { OTPConfirmation } from "@/components/OTPConfirmation";
import { usei18nUtil } from "@/utils/usei18nUtil";

export const Register: React.FC = (): JSX.Element => {
  const [queries] = useSearchParams();
  const { form, onSubmit } = useRegister();

  const { lang } = useParams();
  const { setLangUrl } = usei18nUtil();
  React.useEffect(() => setLangUrl(lang as "en" | "ro" | "ru"), [lang]);

  return (
    <main className="w-screen h-fit min-h-svh bg-secondary flex justify-center items-center py-4">
      {queries.size === 0 && <RegisterForm form={form} onSubmit={onSubmit} />}
      {queries.size === 1 && queries.get("token") && (
        <OTPConfirmation token={String(queries.get("token"))} />
      )}
      <ScrollRestoration />
    </main>
  );
};
