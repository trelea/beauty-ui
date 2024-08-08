import React from "react";
import { FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { UseFormReturn } from "react-hook-form";
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { CiCalendar } from "react-icons/ci";

interface Props {
    form: UseFormReturn<any>;
    name: string;
    type: string;
    placeholder: string;
    value?: string | any;
    forSettings?: boolean;
    forAdmin?: boolean;
}

export const RegistragionField: React.FC<Props> = ({
    form,
    name,
    type,
    placeholder,
    value,
    forSettings,
    forAdmin,
}) => {
    const [hide, setHide] = React.useState<boolean>(true);
    return (
        <div className="w-full">
            <FormField
                control={form.control}
                name={name}
                render={({ field }) => (
                    <FormItem className="relative">
                        {type === "date" ? (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant="outline"
                                            className={`w-full flex justify-between bg-transparent border rounded-lg px-6 text-black text-lg font-light focus:border-black focus-visible:border-black focus:ring-0 focus-visible:ring-0 focus:outline-none focus-visible:outline-none h-12 hover:bg-transparent ${
                                                forSettings || forAdmin
                                                    ? "border-zinc-300"
                                                    : "border-secondary"
                                            }`}
                                        >
                                            {forSettings ? (
                                                format(
                                                    field.value
                                                        ? field.value
                                                        : value,
                                                    "PPP"
                                                )
                                            ) : field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span className="text-[#505050]">
                                                    Year of birth
                                                </span>
                                            )}

                                            <CiCalendar />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-fit">
                                    <Calendar
                                        mode="single"
                                        captionLayout="dropdown-buttons"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        fromYear={1950}
                                        toYear={2050}
                                    />
                                </PopoverContent>
                            </Popover>
                        ) : (
                            <FormControl>
                                <Input
                                    defaultValue={value}
                                    className={`placeholder:text-[#505050] placeholder:${
                                        forAdmin ? "text-base" : "text-lg"
                                    } placeholder:font-light bg-transparent border rounded-lg px-6 text-black text-lg font-light focus:border-black focus-visible:border-black focus:ring-0 focus-visible:ring-0 focus:outline-none focus-visible:outline-none h-12 ${
                                        forSettings || forAdmin
                                            ? "border-zinc-300"
                                            : "border-secondary"
                                    }`}
                                    type={
                                        type === "password"
                                            ? hide
                                                ? "password"
                                                : "text"
                                            : type
                                    }
                                    placeholder={placeholder}
                                    {...field}
                                />
                            </FormControl>
                        )}
                        {type === "password" && hide && (
                            <GoEyeClosed
                                className="absolute bottom-0 right-0 h-full flex justify-center items-center mr-6"
                                onClick={() => setHide(!hide)}
                            />
                        )}
                        {type === "password" && !hide && (
                            <RxEyeOpen
                                className="absolute bottom-0 right-0 h-full flex justify-center items-center mr-6"
                                onClick={() => setHide(!hide)}
                            />
                        )}
                        <FormMessage className="text-xs" />
                    </FormItem>
                )}
            />
        </div>
    );
};
