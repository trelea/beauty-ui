import { useGetMasterCardsDetails } from "@/pages/index/hooks/useGetMasterCardsDetails";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { getMastersCardsDetailsRes } from "@/pages/index/api/index.apis";
import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Card, CardContent } from "./ui/card";
import { da } from "date-fns/locale";

interface Props {
  service: "Nails" | "Brows" | "Lashes" | null;
}

export const MastersCarousel: React.FC<Props> = ({ service }) => {
  const { data } = useGetMasterCardsDetails({ service });

  return (
    <Card className="shadow-xl mt-6 w-full">
      <CardContent className="w-full p-0 flex flex-col h-full relative">
        <Carousel
          className="w-full relative"
          opts={{ align: "start" }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: false,
              stopOnFocusIn: false,
            }),
          ]}
        >
          <CarouselContent className="w-full px-14 py-4">
            {data?.data.map((m: getMastersCardsDetailsRes, _: number) => {
              return (
                <CarouselItem
                  key={_}
                  className="basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-1/12 border-none bg-transparent rounded-none shadow-none"
                >
                  <div className="flex flex-col justify-center items-center gap-1">
                    <Avatar className="size-11 md:size-12 lg:size-14 xl:size-16  m-0 p-0 rounded-full">
                      <AvatarImage
                        src={`${import.meta.env.VITE_THUMBS_URL}/${
                          m.thumbnail
                        }`}
                        alt="@$$nice"
                        className="aspect-square object-cover object-center"
                      />
                      <AvatarFallback>!</AvatarFallback>
                    </Avatar>

                    <h1 className="text-xs text-foreground/50 font-medium text-center">
                      {m.firstName}
                    </h1>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <CarouselPrevious
            forCarouselApointments={true}
            className="absolute"
          />
          <CarouselNext forCarouselApointments={true} className="absolute" />
        </Carousel>
      </CardContent>
    </Card>
  );
};
