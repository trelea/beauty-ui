import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form";
import { RegistragionField } from "./RegistrationField";
import { Textarea } from "./ui/textarea";
import { Services } from "@/pages/admin/hooks/useCreateMaster";
import { Button } from "./ui/button";
import { SiReactquery } from "react-icons/si";
import { useUpdateMaster } from "@/pages/admin/hooks/useUpdateMaster";
import { useGetMaster } from "@/pages/admin/hooks/useGetMaster";
import { UploadThumbanil } from "./UploadThumbnail";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export const UpdateMaterForm = ({
    id,
    page,
    search,
}: // setOpen,
{
    id: string;
    page: string;
    search: string;
    // setOpen: any;
}) => {
    const { data, error, isError, isFetching, isLoading } = useGetMaster({
        id,
    });
    const { form, onSubmit } = useUpdateMaster({ data, page, search });

    if (error || isError) alert("Error");
    if (isLoading || isFetching)
        return (
            <div className="flex flex-col justify-center items-center w-full flex-grow">
                <SiReactquery className="h-12 w-12 md:w-16 md:h-12 xl:h-20 xl:w-20 aspect-square animate-spin" />
                <h1 className="text-lg font-medium">Loading...</h1>
            </div>
        );

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="space-y-3 h-fit overflow-y-scroll">
                    {/* THUMBNAIL */}
                    <UploadThumbanil
                        form={form}
                        image={`${import.meta.env.VITE_THUMBS_URL}/${
                            data?.data.thumbnail
                        }`}
                    />
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
                        forSettings={true}
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
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Services</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={data?.data.services[0]}
                                    >
                                        {Services.map((s, _) => {
                                            return (
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem
                                                            value={s}
                                                        />
                                                    </FormControl>
                                                    <FormLabel>{s}</FormLabel>
                                                </FormItem>
                                            );
                                        })}
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage className="text-sm" />
                            </FormItem>
                        )}
                    />
                    {/* UPDATE */}
                    <Button className="w-full" type="submit">
                        Update
                    </Button>
                </div>
            </form>
        </Form>
    );
};
