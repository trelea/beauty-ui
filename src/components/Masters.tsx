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
// import { useGetMasters } from "@/pages/admin/hooks/useGetMasters";

export const Masters: React.FC = () => {
    const { data, error, isError } = useGetMasterCardsDetails();
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
                        Masters
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
                                                        profession={
                                                            m.services[0]
                                                        }
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

                        {(data?.data.length as number) > 2 && (
                            <>
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
                            </>
                        )}
                    </Carousel>
                </div>
            )}
        </>
    );
};
