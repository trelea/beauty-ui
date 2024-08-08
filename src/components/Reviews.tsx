import React from "react";
import { ReviewCard } from "./ReviewCard";
import { moreReviews, lessReviews, review } from "@/config/reviews";

export const Reviews: React.FC = () => {
    return (
        <div className="pt-14 px-8 mt-10 md:mt-12 xl:mt-14 2xl:mt-24 space-y-6 md:space-y-7 lg:space-y-8 xl:space-y-9 2xl:space-y-12 md:px-11 xl:px-40 2xl:px-56 relative z-40">
            <h1 className="text-black font-celesse text-[50px] font-normal md:text-[60px] xl:text-[90px]">
                Reviews
            </h1>
            <div className="flex flex-col gap-3 md:hidden">
                {lessReviews.map((r: review, _) => {
                    return (
                        <ReviewCard
                            key={_}
                            reviewer={r.reviewer}
                            reviewerThumb={r.thumb}
                            stars={r.stars}
                            text={r.text}
                        />
                    );
                })}
            </div>
            <div className="hidden md:grid md:grid-cols-3 md:gap-3">
                {moreReviews.map((r: review, _) => {
                    return (
                        <ReviewCard
                            key={_}
                            reviewer={r.reviewer}
                            reviewerThumb={r.thumb}
                            stars={r.stars}
                            text={r.text}
                        />
                    );
                })}
            </div>
        </div>
    );
};
