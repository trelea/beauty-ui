import { type ClassValue, clsx } from 'clsx';
import { da } from 'date-fns/locale';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toISO8601DateString = (dateObj: Date, dec?: boolean): string => {
  const data: string[] = dateObj.toLocaleDateString('ro-MD').split('.');

  let dayBack: string | undefined;
  if (dec === true) {
    dayBack = String(Number(data[0]) - 1);
  }

  return `${data[2]}-${data[1].length === 1 ? `0${data[1]}` : data[1]}-${
    dec
      ? dayBack?.length === 1
        ? `0${dayBack}`
        : dayBack
      : data[0].length === 1
      ? `0${data[0]}`
      : data[0]
  }`;
};
