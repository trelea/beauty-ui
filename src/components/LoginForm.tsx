import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Form } from "./ui/form";
import { RegistragionField } from "./RegistrationField";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { SlSocialGoogle } from "react-icons/sl";
import { useSigninGoogle } from "@/hooks/useSignInGoogle";
import { Trans } from "react-i18next";
import { usei18nUtil } from "@/utils/usei18nUtil";

interface Props {
  form: UseFormReturn<any>;
  onSubmit: any;
}

export const LoginForm: React.FC<Props> = ({ form, onSubmit }) => {
  // GOOGLE SIGNIN
  const { signinWithGoogle } = useSigninGoogle();
  const { t, lang } = usei18nUtil();

  return (
    <div className="container bg-white rounded-lg p-6 shadow-lg max-sm:mx-4 sm:w-[550px]">
      <h1 className="text-black font-celesse text-5xl font-normal text-center mb-6">
        {t("login.login")}
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {/* FIRST NAME */}
            <RegistragionField
              form={form}
              name="email"
              type="email"
              placeholder={t("login.email")}
            />

            {/* PASSWORD */}
            <RegistragionField
              form={form}
              name="password"
              type="password"
              placeholder={t("login.password")}
            />

            {/* SUBMIT */}
            <Button className="w-full bg-primary text-center text-[#505050] text-lg font-normal h-12 border border-[#A7B15A]">
              {t("login.email")}
            </Button>
          </div>
        </form>
      </Form>
      <div className="flex justify-center items-center mt-10">
        <div className="h-24 w-24 border border-black rounded-full flex justify-center items-center hover:bg-secondary">
          <SlSocialGoogle
            className="h-full w-full aspect-square p-4"
            onClick={() => signinWithGoogle()}
          />
        </div>
      </div>

      <Trans i18nKey={"login.noAcc"}>
        <h1 className="text-center mt-14">
          Not have an account yet?{" "}
          <Link
            to={`/${lang}/register`}
            preventScrollReset
            className="underline"
          >
            Register now
          </Link>
        </h1>
      </Trans>
    </div>
  );
};
