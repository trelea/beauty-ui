import React from "react";
import { FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { UseFormReturn } from "react-hook-form";
import { Checkbox } from "./ui/checkbox";

interface Props {
    form: UseFormReturn<any>;
    service: string;
}

export const SelectServices: React.FC<Props> = ({ form, service }) => {
    return (
        <FormField
            control={form.control}
            name="services"
            render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                        <Checkbox
                            className="m-0 p-0"
                            checked={field.value?.includes(service)}
                            onCheckedChange={(e) => {
                                return e
                                    ? field.onChange([...field.value, service])
                                    : field.onChange(
                                          field.value?.filter(
                                              (value: string) =>
                                                  value !== service
                                          )
                                      );
                            }}
                        />
                    </FormControl>
                    <FormLabel className="p-0 m-0 font-medium">
                        {service}
                    </FormLabel>
                </FormItem>
            )}
        />
    );
};
