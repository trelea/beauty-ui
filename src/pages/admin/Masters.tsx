import React from "react";
import { BaseLoyout } from "../../components/Loyout";
import { useGetMasters } from "./hooks/useGetMasters";
import { SiReactquery } from "react-icons/si";
import { Paginate } from "@/components/Pagination";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";
import { useDeleteMaster } from "./hooks/useDeleteMaster";
import { TableMasters } from "@/components/TableMasters";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { CreateMasterForm } from "@/components/CreateMasterForm";
import { useCreateMaster } from "./hooks/useCreateMaster";

export const Masters: React.FC = () => {
    const {
        data,
        error,
        isError,
        isFetching,
        isLoading,
        totalPages,
        search,
        setSearch,
        page,
        setPage,
    } = useGetMasters(false);
    const { deleteMaster } = useDeleteMaster({
        page: page.get("page") as string,
        search,
    });
    const { form, onSubmit } = useCreateMaster({
        page: page.get("page") as string,
        search,
    });
    React.useEffect(
        () => setPage({ page: page.get("page") as string }),
        [page]
    );
    if (error || isError) alert("Error");

    return (
        <BaseLoyout adminNavbar={true}>
            <div className="px-8 md:px-11 xl:px-40 2xl:px-56 pt-36 min-h-screen flex flex-col gap-4">
                <div className="flex gap-10 items-center relative">
                    <Input
                        value={search}
                        type="text"
                        placeholder="Search master..."
                        className="rounded-full focus-visible:ring-0 focus-visible:outline-none text-base p-6 shadow-xl focus:ring-0 focus:outline-none focus-visible:ring-offset-0 pl-10"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className="h-full flex justify-center items-center absolute top-0 left-0 p-4 rounded-full">
                        <FaSearch className="h-4 w-4 aspect-square" />
                    </div>
                    <Sheet>
                        <SheetTrigger>
                            <Button className="rounded-full shadow-xl px-10 text-base">
                                Create Master
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Create master</SheetTitle>
                            </SheetHeader>
                            <CreateMasterForm form={form} onSubmit={onSubmit} />
                        </SheetContent>
                    </Sheet>
                </div>
                {(isLoading || isFetching) && (
                    <div className="flex flex-col justify-center items-center w-full flex-grow">
                        <SiReactquery className="h-12 w-12 md:w-16 md:h-12 xl:h-20 xl:w-20 aspect-square animate-spin" />
                        <h1 className="text-lg font-medium">Loading...</h1>
                    </div>
                )}
                {Number(data?.data.length) >= 1 && (
                    <div className="flex flex-col justify-between flex-grow pb-10">
                        <TableMasters
                            masters={data?.data}
                            deleteMaster={deleteMaster}
                            page={page.get("page") as string}
                            search={search}
                        />
                        <Paginate
                            page={Number(page.get("page"))}
                            totalPages={Number(totalPages)}
                            setPage={setPage}
                        />
                    </div>
                )}
            </div>
        </BaseLoyout>
    );
};
