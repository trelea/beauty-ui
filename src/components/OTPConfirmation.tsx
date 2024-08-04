import { useValidateToken } from "@/pages/register/hooks/useValidateToken";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "./ui/input-otp";
import { SiReactquery } from "react-icons/si";
import { FormField, Form, FormItem, FormControl, FormMessage } from "./ui/form";
import { useValidateOTP } from "@/pages/register/hooks/useValidateOTP";

interface Props {
    token: string;
}

export const OTPConfirmation: React.FC<Props> = ({ token }) => {
    const { isError, isFetching, isLoading } = useValidateToken(token);
    const { form, onSubmit } = useValidateOTP(token);

    if (isFetching || isLoading)
        return (
            <div className="flex flex-col justify-center items-center gap-8 w-96">
                <SiReactquery className="animate-spin h-20 w-20" />
                <h1 className="text-center text-xl text-gray-400">
                    Trying to validate token...
                </h1>
            </div>
        );

    if (isError)
        return (
            <div className="container bg-white rounded-lg p-6 shadow-lg max-sm:mx-4 sm:w-[550px]">
                <h1 className="text-black font-recoleta text-4xl font-normal text-center">
                    Invalid Token
                </h1>
                <div className="flex justify-center items-center my-9 px-10">
                    <h1 className="text-center text-xl text-red-600">
                        Your token may be invalid or an expired token. Please go
                        back and try to{" "}
                        <Link
                            to={"/register"}
                            preventScrollReset
                            className="underline"
                        >
                            Signup again.
                        </Link>
                    </h1>
                </div>

                <h1 className="text-center mt-14">
                    Go back to sign in?{" "}
                    <Link
                        to={"/login"}
                        preventScrollReset
                        className="underline"
                    >
                        Login now
                    </Link>
                </h1>
            </div>
        );

    return (
        <div className="container bg-white rounded-lg p-6 shadow-lg max-sm:mx-4 sm:w-[550px]">
            <h1 className="text-black font-recoleta text-4xl font-normal text-center">
                Verify your email
            </h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex justify-center items-center my-9">
                        <FormField
                            control={form.control}
                            name="otp"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <InputOTP maxLength={4} {...field}>
                                            <InputOTPGroup>
                                                <InputOTPSlot
                                                    index={0}
                                                    className="text-2xl w-10 h-10 sm:w-11 md:w-12 lg:w-14 xl:w-16 2xl:w-20 md:h-12 xl:h-14"
                                                />
                                            </InputOTPGroup>
                                            <InputOTPSeparator />
                                            <InputOTPGroup>
                                                <InputOTPSlot
                                                    index={1}
                                                    className="text-2xl w-10 h-10 sm:w-11 md:w-12 lg:w-14 xl:w-16 2xl:w-20 md:h-12 xl:h-14"
                                                />
                                            </InputOTPGroup>
                                            <InputOTPSeparator />
                                            <InputOTPGroup>
                                                <InputOTPSlot
                                                    index={2}
                                                    className="text-2xl w-10 h-10 sm:w-11 md:w-12 lg:w-14 xl:w-16 2xl:w-20 md:h-12 xl:h-14"
                                                />
                                            </InputOTPGroup>
                                            <InputOTPSeparator />
                                            <InputOTPGroup>
                                                <InputOTPSlot
                                                    index={3}
                                                    className="text-2xl w-10 h-10 sm:w-11 md:w-12 lg:w-14 xl:w-16 2xl:w-20 md:h-12 xl:h-14"
                                                />
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button className="w-full bg-primary text-center text-[#505050] text-lg font-normal h-12 border border-[#A7B15A]">
                        Verify
                    </Button>
                </form>
            </Form>

            <h1 className="text-center mt-14">
                Go back to sign in?{" "}
                <Link to={"/login"} preventScrollReset className="underline">
                    Login now
                </Link>
            </h1>
        </div>
    );
};
