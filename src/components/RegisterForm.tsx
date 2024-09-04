import React from "react";
import { Form } from "./ui/form";
import { RegistragionField } from "./RegistrationField";
import { Button } from "./ui/button";
import { SlSocialGoogle } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useSigninGoogle } from "@/hooks/useSignInGoogle";
import { UseFormReturn } from "react-hook-form";
import { usei18nUtil } from "@/utils/usei18nUtil";
import { Trans } from "react-i18next";

interface Props {
  form: UseFormReturn<any>;
  onSubmit: any;
}

export const RegisterForm: React.FC<Props> = ({ form, onSubmit }) => {
  // GOOGLE SIGNIN
  const { signinWithGoogle } = useSigninGoogle();
  const { t, lang } = usei18nUtil();

  return (
    <div className="container bg-white rounded-lg p-6 shadow-lg max-sm:mx-4 sm:w-[550px]">
      <h1 className="text-black font-celesse text-5xl font-normal text-center mb-6">
        {t("register.register")}
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {/* FIRST NAME */}
            <RegistragionField
              form={form}
              name="firstName"
              type="text"
              placeholder={t("register.firstName")}
            />

            {/* LAST NAME */}
            <RegistragionField
              form={form}
              name="lastName"
              type="text"
              placeholder={t("register.lastName")}
            />

            {/* PHONE */}
            <RegistragionField
              form={form}
              name="phone"
              type="tel"
              placeholder={t("register.phone")}
            />

            {/* EMAIL */}
            <RegistragionField
              form={form}
              name="email"
              type="email"
              placeholder={t("register.email")}
            />

            {/* PASSWORD */}
            <RegistragionField
              form={form}
              name="password"
              type="password"
              placeholder={t("register.password")}
            />

            {/* BIRTH DATE */}
            <RegistragionField
              form={form}
              name="birthDate"
              type="date"
              placeholder={t("register.birthDate")}
            />

            {/* SUBMIT */}
            <Button className="w-full bg-primary text-center text-[#505050] text-lg font-normal h-12 border border-[#A7B15A]">
              {t("register.register")}
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

      <Trans i18nKey={"register.alreadyAcc"}>
        <h1 className="text-center mt-14">
          Already have an account?{" "}
          <Link to={`/${lang}/login`} preventScrollReset className="underline">
            Login now
          </Link>
        </h1>
      </Trans>
    </div>
  );
};
