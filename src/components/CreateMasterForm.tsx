import React from "react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form";
import { RegistragionField } from "./RegistrationField";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Services } from "@/pages/admin/hooks/useCreateMaster";
import { UploadThumbanil } from "./UploadThumbnail";
import { SelectServices } from "./SelectServices";
import { UseFormReturn } from "react-hook-form";

interface Props {
    form: UseFormReturn<any>;
    onSubmit: any;
}

export const CreateMasterForm: React.FC<Props> = ({ form, onSubmit }) => {
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="space-y-3 h-fit overflow-y-scroll">
                    {/* THUMBNAIL */}
                    <UploadThumbanil form={form} />

                    {/* FIRST NAME */}
                    <RegistragionField
                        form={form}
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        forAdmin={true}
                    />

                    {/* LAST NAME */}
                    <RegistragionField
                        form={form}
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        forAdmin={true}
                    />

                    {/* PHONE */}
                    <RegistragionField
                        form={form}
                        name="contact"
                        type="tel"
                        placeholder="Contact"
                        forAdmin={true}
                    />

                    {/* EMAIL */}
                    <RegistragionField
                        form={form}
                        name="email"
                        type="email"
                        placeholder="Email"
                        forAdmin={true}
                    />

                    {/* BIRTH DATE */}
                    <RegistragionField
                        form={form}
                        name="birthDate"
                        type="date"
                        placeholder="Birth date"
                        forAdmin={true}
                    />

                    {/* DESCRIPTION */}
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea
                                        {...field}
                                        placeholder="Master description..."
                                        className="placeholder:text-[#505050] placeholder:text-base placeholder:font-light bg-transparent border rounded-lg px-6 text-black text-lg font-light focus:border-black focus-visible:border-black focus:ring-0 focus-visible:ring-0 focus:outline-none focus-visible:outline-none h-12 border-zinc-300"
                                    />
                                </FormControl>
                                <FormMessage className="text-xs" />
                            </FormItem>
                        )}
                    />

                    {/* SERVICES */}
                    <FormField
                        control={form.control}
                        name="services"
                        render={() => (
                            <FormItem>
                                <FormLabel>Services</FormLabel>
                                {Services.map((s, _) => {
                                    return (
                                        <SelectServices
                                            key={_}
                                            form={form}
                                            service={s}
                                        />
                                    );
                                })}
                                <FormMessage className="text-sm" />
                            </FormItem>
                        )}
                    />

                    {/* SUBMIT */}
                    <Button className="w-full" type="submit">
                        Save
                    </Button>
                </div>
            </form>
        </Form>
    );
};
