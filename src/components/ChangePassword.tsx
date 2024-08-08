import React from "react";
import { Card, CardContent } from "./ui/card";
import { Form } from "./ui/form";
import { Button } from "./ui/button";
import { RegistragionField } from "./RegistrationField";
import { useChangePassword } from "@/pages/settings/hooks/useChangePassword";

export const ChangePassword: React.FC = () => {
    const { form, onSubmit } = useChangePassword();
    return (
        <Card className="grow shadow-lg rounded-xl">
            <CardContent className="flex justify-center items-center w-full h-full pt-6 md:py-14 xl:p-0">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="xl:w-1/2"
                    >
                        <div className="space-y-4">
                            {/* PASSWORD */}
                            <RegistragionField
                                form={form}
                                name="password"
                                type="password"
                                placeholder="Current password"
                                forSettings={true}
                            />

                            {/* NEW PASSWORD */}
                            <RegistragionField
                                form={form}
                                name="new_password"
                                type="password"
                                placeholder="New password"
                                forSettings={true}
                            />

                            {/* CONNFIRM PASSWORD */}
                            <RegistragionField
                                form={form}
                                name="confirm_password"
                                type="password"
                                placeholder="Confirm password"
                                forSettings={true}
                            />

                            {/* SUBMIT */}
                            <Button className="w-full bg-primary text-center text-[#505050] text-lg font-normal h-12 border border-[#A7B15A]">
                                Save
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};
