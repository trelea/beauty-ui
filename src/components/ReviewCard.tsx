import { Card, CardContent, CardHeader } from "./ui/card";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";

interface Props {
    reviewer: string;
    reviewerThumb: any;
    stars: number;
    text: string;
}

export const ReviewCard: React.FC<Props> = ({
    reviewer,
    reviewerThumb,
    stars,
    text,
}) => {
    return (
        <Card className="p-3 lg:p-4 2xl:p-5 space-y-3 lg:space-y-4 2xl:space-y-5 shadow-lg">
            <CardHeader className="p-0 m-0 flex flex-row justify-between">
                <div className="flex items-center gap-2 lg:gap-3 2xl:gap-4">
                    <img
                        src={reviewerThumb}
                        alt=""
                        className="aspect-square size-7 2xl:size-9 rounded-full"
                    />
                    <h1 className="text-base font-normal 2xl:text-xl">
                        {reviewer}
                    </h1>
                </div>

                <div className="flex gap-1">
                    {Array(stars)
                        .fill(0)
                        .map((_, __) => {
                            return (
                                <IoStarSharp
                                    key={__}
                                    className="text-yellow-500 aspect-square size-4 lg:size-5 2xl:size-6"
                                />
                            );
                        })}
                    {Array(5 - stars)
                        .fill(0)
                        .map((_, __) => {
                            return (
                                <IoStarOutline
                                    key={__}
                                    className="stroke-yellow-500 aspect-square size-4 lg:size-5 2xl:size-6"
                                />
                            );
                        })}
                </div>
            </CardHeader>
            <CardContent className="p-0 m-0 text-lg font-normal lg:text-xl 2xl:text-2xl">
                {text}
            </CardContent>
        </Card>
    );
};
