import React from "react";
import { Calendar } from "./ui/calendar";
import { Card, CardContent } from "./ui/card";
import { SetURLSearchParams } from "react-router-dom";
import { toISO8601DateString } from "@/lib/utils";
import { Badge } from "./ui/badge";

interface Props {
    date: Date;
    setDate: (prop: Date) => void;
    setParams: SetURLSearchParams;
    service: "lashes" | "nails" | "brows";
}

export const AppointmentsCalendar: React.FC<Props> = ({
    date,
    setDate,
    setParams,
    service,
}) => {
    return (
        <Card className="basis-1/2 shadow-xl">
            <CardContent className="w-full p-0 flex flex-col h-full">
                <h1 className="font-recoleta text-2xl md:text-3xl font-medium p-4 md:p-6 shadow-md w-full">
                    Select Date
                </h1>
                <div className="flex flex-col justify-center items-center gap-6 flex-1 p-5">
                    <Calendar
                        mode="single"
                        selected={new Date(toISO8601DateString(date as Date))}
                        defaultMonth={
                            new Date(toISO8601DateString(date as Date))
                        }
                        onSelect={(d) => {
                            setDate(new Date(toISO8601DateString(d as Date)));
                            setParams({
                                [service]: "true",
                                _check_date: toISO8601DateString(d as Date),
                            });
                        }}
                        className="rounded-md border shadow-md"
                        disabled={(d) =>
                            d < new Date(toISO8601DateString(new Date(), true))
                        }
                    />
                    <Badge variant="outline" className="text-md px-6 shadow-md">
                        {toISO8601DateString(date as Date)}
                    </Badge>
                </div>
            </CardContent>
        </Card>
    );
};
