import React from "react";
import { Card, CardContent } from "./ui/card";
import { useGetProfile } from "@/pages/settings/hooks/useGetProfile";
import { Button } from "./ui/button";
import { SiReactquery } from "react-icons/si";
import { Form } from "./ui/form";
import { RegistragionField } from "./RegistrationField";
import { useUpdateProfile } from "@/pages/settings/hooks/useUpdateProfile";

interface Props {
    setLogin: (data: any) => void;
}

export const EditProfile: React.FC<Props> = ({ setLogin }) => {
    const { data, error, isError, isFetching, isLoading } = useGetProfile();
    const { form, onSubmit } = useUpdateProfile(data?.data, setLogin);

    if (isFetching || isLoading)
        return (
            <Card className="grow shadow-lg rounded-xl">
                <CardContent className="flex flex-col justify-center items-center h-full gap-4 p-4">
                    <SiReactquery className="h-12 w-12 md:w-16 md:h-12 xl:h-20 xl:w-20 aspect-square animate-spin" />
                    <h1 className="text-sm md:text-base xl:text-lg font-medium">
                        Loading...
                    </h1>
                </CardContent>
            </Card>
        );

    if (error || isError)
        return (
            <Card className="grow shadow-lg rounded-xl">
                <CardContent className="flex justify-center items-center h-full p-4">
                    <div className="flex flex-col justify-center items-center bg-red-600 text-white p-3 px-6 lg:p-4 lg:px-8 2xl:p-6 2xl:px-12 shadow-2xl rounded-xl">
                        <h1 className="text-sm font-medium text-center md:text-base xl:text-lg">
                            Uh oh! Something went wrong.
                        </h1>
                        <p className="text-xs text-center md:text-sm xl:text-base">
                            There was a problem with your request.
                        </p>
                        <Button
                            className="mt-3 bg-transparent hover:bg-red-500 border border-white text-white text-sm"
                            onClick={() => window.location.reload()}
                        >
                            Try again..
                        </Button>
                    </div>
                </CardContent>
            </Card>
        );

    return (
        <Card className="grow shadow-lg rounded-xl">
            <CardContent className="flex justify-center items-center w-full h-full pt-6 md:py-14 xl:p-0">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="xl:w-1/2"
                    >
                        <div className="space-y-4">
                            {/* FIRST NAME */}
                            <RegistragionField
                                form={form}
                                name="firstName"
                                type="text"
                                placeholder="First Name"
                                forSettings={true}
                                value={data?.data.firstName}
                            />

                            {/* LAST NAME */}
                            <RegistragionField
                                form={form}
                                name="lastName"
                                type="text"
                                placeholder="Last Name"
                                forSettings={true}
                                value={data?.data.lastName}
                            />

                            {/* PHONE */}
                            <RegistragionField
                                form={form}
                                name="phone"
                                type="tel"
                                placeholder="Phone"
                                forSettings={true}
                                value={data?.data.phone}
                            />

                            {/* EMAIL */}
                            {/* <RegistragionField
                                form={form}
                                name="email"
                                type="email"
                                placeholder="Email"
                            /> */}

                            {/* PASSWORD */}
                            {/* <RegistragionField
                                form={form}
                                name="password"
                                type="password"
                                placeholder="Password"
                            /> */}

                            {/* BIRTH DATE */}
                            <RegistragionField
                                form={form}
                                name="birthDate"
                                type="date"
                                placeholder="Birth date"
                                forSettings={true}
                                value={data?.data.birthDate}
                            />

                            {/* SUBMIT */}
                            <Button
                                disabled={isLoading || isFetching}
                                className="w-full bg-primary text-center text-[#505050] text-lg font-normal h-12 border border-[#A7B15A]"
                            >
                                Save
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};
