import React from "react";
import { MasterCard } from "./MasterCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
// import { _master, masters } from "@/config/masters";
import { useGetMasterCardsDetails } from "@/pages/index/hooks/useGetMasterCardsDetails";
import { getMastersCardsDetailsRes } from "@/pages/index/api/index.apis";
import { usei18nUtil } from "@/utils/usei18nUtil";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Command, CommandGroup, CommandItem, CommandList } from "./ui/command";
// import { useGetMasters } from "@/pages/admin/hooks/useGetMasters";

export const Masters: React.FC = () => {
    const { t } = usei18nUtil();
    const [open, setOpen] = React.useState<boolean>();
    const [service, setService] = React.useState<
        "Lashes" | "Brows" | "Nails" | null
    >("Lashes");
    const { data, error, isError, refetch } = useGetMasterCardsDetails({
        service,
    });

    React.useEffect(() => {
        refetch();
    }, [service]);

    // const {
    //     data: masters,
    //     error,
    //     isError,
    //     isFetching,
    //     isLoading,
    // } = useGetMasters();

    return (
        <>
            {(data?.data.length as number) >= 1 && !error && !isError && (
                <div className="px-8 mt-10 md:mt-12 xl:mt-14 2xl:mt-24 space-y-6 md:space-y-7 lg:space-y-8 xl:space-y-9 2xl:space-y-12 md:px-11 xl:px-40 2xl:px-56 relative z-40">
                    <h1 className="text-black font-celesse text-[50px] font-normal md:text-[60px] xl:text-[90px]">
                        {t("home.masters")}
                    </h1>
                    <Carousel
                        opts={{ align: "start" }}
                        plugins={[
                            Autoplay({
                                delay: 5000,
                                stopOnInteraction: false,
                                stopOnFocusIn: false,
                            }),
                        ]}
                    >
                        <CarouselContent>
                            {data?.data.map(
                                (m: getMastersCardsDetailsRes, _: number) => {
                                    return (
                                        <CarouselItem
                                            key={_}
                                            className="basis-1/2 md:basis-1/3 xl:basis-1/4 border-none bg-transparent rounded-none shadow-none"
                                        >
                                            <Card className="p-0 m-0 border-none bg-transparent rounded-none shadow-none">
                                                <CardContent className="p-0 m-0 border-none bg-transparent rounded-none shadow-none">
                                                    <MasterCard
                                                        thumb={`${
                                                            import.meta.env
                                                                .VITE_THUMBS_URL
                                                        }/${m.thumbnail}`}
                                                        name={`${m.firstName} ${m.lastName}`}
                                                        profession={t(
                                                            `home.services.${m.services[0]
                                                                .toString()
                                                                .toLowerCase()}`
                                                        )}
                                                    />
                                                </CardContent>
                                            </Card>
                                        </CarouselItem>
                                    );
                                }
                            )}
                        </CarouselContent>

                        {/* <CarouselPrevious />
                        <CarouselNext /> */}

                        {(data?.data.length as number) !== 0 && (
                            <div className="w-full flex justify-center items-center mt-8">
                                <div className="flex gap-4">
                                    <CarouselPrevious
                                        className={`md:${
                                            (data?.data.length as number) > 3
                                                ? "flex"
                                                : "hidden"
                                        } xl:${
                                            (data?.data.length as number) > 4
                                                ? "flex"
                                                : "hidden"
                                        }`}
                                    />
                                    <Popover open={open} onOpenChange={setOpen}>
                                        <PopoverTrigger asChild>
                                            <Button
                                                className="shadow-2xl h-10 w-28 rounded-xl text-md md:text-lg"
                                                variant={"outline"}
                                            >
                                                {service === null
                                                    ? t("home.services.all")
                                                    : t(
                                                          `home.services.${service?.toLocaleLowerCase()}`
                                                      )}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-fit p-2">
                                            <Command>
                                                <CommandList>
                                                    <CommandGroup>
                                                        <CommandItem
                                                            value={t(
                                                                "home.services.lashes"
                                                            )}
                                                            defaultChecked={
                                                                service ===
                                                                "Lashes"
                                                                    ? true
                                                                    : false
                                                            }
                                                            onSelect={() => {
                                                                setService(
                                                                    "Lashes"
                                                                );
                                                                setOpen(false);
                                                            }}
                                                        >
                                                            {t(
                                                                "home.services.lashes"
                                                            )}
                                                        </CommandItem>
                                                        <CommandItem
                                                            value={t(
                                                                "home.services.brows"
                                                            )}
                                                            defaultChecked={
                                                                service ===
                                                                "Brows"
                                                                    ? true
                                                                    : false
                                                            }
                                                            onSelect={() => {
                                                                setService(
                                                                    "Brows"
                                                                );
                                                                setOpen(false);
                                                            }}
                                                        >
                                                            {t(
                                                                "home.services.brows"
                                                            )}
                                                        </CommandItem>
                                                        <CommandItem
                                                            value={t(
                                                                "home.services.nails"
                                                            )}
                                                            defaultChecked={
                                                                service ===
                                                                "Nails"
                                                                    ? true
                                                                    : false
                                                            }
                                                            onSelect={() => {
                                                                setService(
                                                                    "Nails"
                                                                );
                                                                setOpen(false);
                                                            }}
                                                        >
                                                            {t(
                                                                "home.services.nails"
                                                            )}
                                                        </CommandItem>
                                                        <CommandItem
                                                            value={t(
                                                                "home.services.all"
                                                            )}
                                                            defaultChecked={
                                                                service === null
                                                                    ? true
                                                                    : false
                                                            }
                                                            onSelect={() => {
                                                                setService(
                                                                    null
                                                                );
                                                                setOpen(false);
                                                            }}
                                                        >
                                                            {t(
                                                                "home.services.all"
                                                            )}
                                                        </CommandItem>
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                    <CarouselNext
                                        className={`md:${
                                            (data?.data.length as number) > 3
                                                ? "flex"
                                                : "hidden"
                                        } xl:${
                                            (data?.data.length as number) > 4
                                                ? "flex"
                                                : "hidden"
                                        }`}
                                    />
                                </div>
                            </div>
                        )}
                    </Carousel>

                    <div className="absolute -bottom-20"></div>
                </div>
            )}
        </>
    );
};
