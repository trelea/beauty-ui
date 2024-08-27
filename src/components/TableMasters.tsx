import { HoverCard } from "@radix-ui/react-hover-card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table";
import { HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Button } from "./ui/button";
import React from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import { UpdateMaterForm } from "./UpdateMasterForm";
import { getMastersRes } from "@/pages/admin/api/admin.apis";
import { useTranslation } from "react-i18next";

interface Props {
    masters?: any[];
    deleteMaster: (id: string) => void;
    page: string;
    search: string;
}

export const TableMasters: React.FC<Props> = ({
    masters,
    deleteMaster,
    page,
    search,
}) => {
    // const [open, setOpen] = React.useState<boolean>(false);
    const { t } = useTranslation();
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>{t("adminMasters.tableHeaders.img")}</TableHead>
                    <TableHead>
                        {t("adminMasters.tableHeaders.master")}
                    </TableHead>
                    <TableHead>
                        {t("adminMasters.tableHeaders.email")}
                    </TableHead>
                    <TableHead>
                        {t("adminMasters.tableHeaders.contact")}
                    </TableHead>
                    <TableHead>
                        {t("adminMasters.tableHeaders.services")}
                    </TableHead>
                    <TableHead>
                        {t("adminMasters.tableHeaders.actions")}
                    </TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {masters?.map((m: getMastersRes, __) => {
                    return (
                        <TableRow key={__}>
                            <TableCell className="p-0 m-0 py-2 pl-2">
                                <HoverCard>
                                    <HoverCardTrigger asChild>
                                        <img
                                            className="h-10 rounded-full aspect-square object-cover object-center"
                                            src={`${
                                                import.meta.env.VITE_THUMBS_URL
                                            }/${m.thumbnail}`}
                                            alt=""
                                        />
                                    </HoverCardTrigger>
                                    <HoverCardContent>
                                        <img
                                            src={`${
                                                import.meta.env.VITE_THUMBS_URL
                                            }/${m.thumbnail}`}
                                            alt=""
                                        />
                                        <p className="text-base font-normal">
                                            <strong>Date of birth: </strong>
                                            {m.birthDate.split("T")[0]}
                                        </p>
                                        <p className="text-base font-normal">
                                            <strong>Description: </strong>
                                            {m.description}.
                                        </p>
                                    </HoverCardContent>
                                </HoverCard>
                            </TableCell>
                            <TableCell>
                                {m.firstName} {m.lastName}
                            </TableCell>
                            <TableCell>{m.email}</TableCell>
                            <TableCell>{m.contact}</TableCell>
                            <TableCell>
                                <div className="flex gap-4">
                                    <strong className="bg-primary px-4 rounded-full">
                                        {m.services[0] === "Lashes" &&
                                            t("adminMasters.services.lashes")}
                                        {m.services[0] === "Brows" &&
                                            t("adminMasters.services.brows")}
                                        {m.services[0] === "Nails" &&
                                            t("adminMasters.services.nails")}
                                    </strong>
                                </div>
                            </TableCell>
                            <TableCell className="flex py-2 gap-4" id={m.id}>
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button className="shadow-lg">
                                            {t("adminMasters.btn1")}
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent>
                                        <SheetHeader>
                                            <SheetTitle>
                                                {t("adminMasters.edit")}
                                            </SheetTitle>
                                        </SheetHeader>
                                        <UpdateMaterForm
                                            id={m.id}
                                            page={page}
                                            search={search}
                                            // setOpen={setOpen}
                                        />
                                        {/* {m.id} */}
                                    </SheetContent>
                                </Sheet>

                                <Button
                                    onClick={() => deleteMaster(m.id)}
                                    className="rounded-lg bg-red-600 text-white hover:bg-red-400 shadow-lg"
                                >
                                    {t("adminMasters.btn2")}
                                </Button>
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
};
