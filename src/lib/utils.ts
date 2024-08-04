import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const toISO8601DateString = (dateObj: Date): string => {
    const __date__ = new Date(dateObj);
    __date__.setDate(__date__.getDate() + 1);
    return __date__.toISOString().split("T")[0];
};
