import { useGetAppointments } from "@/pages/appointments/hooks/useGetAppointments";
import { Card, CardContent } from "./ui/card";
import { SiReactquery } from "react-icons/si";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table";
import { getUserAppointmentsRes } from "@/pages/appointments/api/appointments.apis";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { toISO8601DateString } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export const UserAppointments = () => {
    const { appointments, error, loading } = useGetAppointments();
    const { t } = useTranslation();

    if (loading)
        return (
            <Card className="grow shadow-lg rounded-xl">
                <CardContent className="flex flex-col justify-center items-center h-full gap-4 p-4">
                    <SiReactquery className="h-12 w-12 md:w-16 md:h-12 xl:h-20 xl:w-20 aspect-square animate-spin" />
                    <h1 className="text-sm md:text-base xl:text-lg font-medium">
                        {t("settings.appointmentsUser.load")}
                    </h1>
                </CardContent>
            </Card>
        );

    if (error)
        return (
            <Card className="grow shadow-lg rounded-xl">
                <CardContent className="flex justify-center items-center h-full p-4">
                    <div className="flex flex-col justify-center items-center bg-red-600 text-white p-3 px-6 lg:p-4 lg:px-8 2xl:p-6 2xl:px-12 shadow-2xl rounded-xl">
                        <h1 className="text-sm font-medium text-center md:text-base xl:text-lg">
                            {t("settings.appointmentsUser.errTitle")}
                        </h1>
                        <p className="text-xs text-center md:text-sm xl:text-base">
                            {t("settings.appointmentsUser.errDesc")}
                        </p>
                        <Button
                            className="mt-3 bg-transparent hover:bg-red-500 border border-white text-white text-sm"
                            onClick={() => window.location.reload()}
                        >
                            {t("settings.appointmentsUser.try")}
                        </Button>
                    </div>
                </CardContent>
            </Card>
        );

    return (
        <Card className="grow shadow-lg rounded-xl">
            <CardContent className="m-0 p-4">
                <ScrollArea className="h-[600px] relative overflow-auto">
                    <Table>
                        <TableHeader className="shadow-md bg-secondary sticky top-0 z-50">
                            <TableRow className="text-sm md:text-base lg:text-lg max-md:hidden">
                                <TableHead>
                                    {t(
                                        "settings.appointmentsUser.tableHeader.service"
                                    )}
                                </TableHead>
                                <TableHead>
                                    {t(
                                        "settings.appointmentsUser.tableHeader.dt"
                                    )}
                                </TableHead>
                                <TableHead>
                                    {t(
                                        "settings.appointmentsUser.tableHeader.master"
                                    )}
                                </TableHead>
                                <TableHead>
                                    {t(
                                        "settings.appointmentsUser.tableHeader.status"
                                    )}
                                </TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody className="z-40">
                            {appointments.map(
                                (
                                    appointment: getUserAppointmentsRes & {
                                        service: string;
                                    },
                                    _: number
                                ) => {
                                    const date = new Date(appointment.time)
                                        .getHours()
                                        .toString();
                                    return (
                                        <TableRow
                                            key={_}
                                            className="text-sm md:text-base lg:text-lg font-medium max-md:grid max-md:grid-cols-2 items-center"
                                        >
                                            <TableCell className="max-md:p-2">
                                                {appointment.service}
                                            </TableCell>
                                            <TableCell className="max-md:p-2 text-xs md:text-sm lg:text-lg">
                                                {toISO8601DateString(
                                                    new Date(appointment.date)
                                                )}{" "}
                                                {`${
                                                    date.length === 1
                                                        ? `0${date}`
                                                        : date
                                                }:00`}
                                            </TableCell>
                                            <TableCell className="flex items-center gap-4 max-md:hidden">
                                                <Avatar className="shadow-xl h-6 w-6">
                                                    <AvatarImage
                                                        src={`${
                                                            import.meta.env
                                                                .VITE_THUMBS_URL
                                                        }/${
                                                            appointment.master
                                                                .thumbnail
                                                        }`}
                                                        className="aspect-square object-cover object-center"
                                                    />
                                                    <AvatarFallback>
                                                        I
                                                    </AvatarFallback>
                                                </Avatar>
                                                {appointment.master.firstName}{" "}
                                                {appointment.master.lastName}
                                            </TableCell>
                                            <TableCell className="max-md:p-2">
                                                <Badge
                                                    className={`${
                                                        appointment.status ===
                                                            "PENDING" &&
                                                        "bg-yellow-500"
                                                    } ${
                                                        appointment.status ===
                                                            "DENIED" &&
                                                        "bg-red-500"
                                                    } ${
                                                        appointment.status ===
                                                            "APPROVED" &&
                                                        "bg-green-500"
                                                    } text-white hover:bg-black shadow-md`}
                                                >
                                                    {appointment.status}
                                                </Badge>
                                            </TableCell>

                                            <TableCell className="flex items-center gap-4 md:hidden p-2">
                                                <Avatar className="shadow-xl h-6 w-6">
                                                    <AvatarImage
                                                        src={`${
                                                            import.meta.env
                                                                .VITE_THUMBS_URL
                                                        }/${
                                                            appointment.master
                                                                .thumbnail
                                                        }`}
                                                        className="aspect-square object-cover object-center"
                                                    />
                                                    <AvatarFallback>
                                                        I
                                                    </AvatarFallback>
                                                </Avatar>
                                                {appointment.master.firstName}{" "}
                                                {appointment.master.lastName}
                                            </TableCell>
                                        </TableRow>
                                    );
                                }
                            )}
                        </TableBody>
                    </Table>
                </ScrollArea>
            </CardContent>
        </Card>
    );
};
