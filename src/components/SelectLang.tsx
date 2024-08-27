import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Command, CommandGroup, CommandItem, CommandList } from "./ui/command";
import { usei18nUtil } from "@/utils/usei18nUtil";

const Langs: string[] = ["Ro", "Ru", "En"];

export const SelectLang: React.FC = () => {
    const [open, setOpen] = React.useState<boolean>(false);
    const { changeLang, lang } = usei18nUtil();

    return (
        <>
            <ul className="lg:hidden flex gap-4 text-black text-base">
                {Langs.map((l: "Ro" | "Ru" | "En" | string, _: number) => {
                    return (
                        <li
                            className={`hover:underline decoration-black decoration-2 hover:cursor-pointer ${
                                lang === l.toLocaleLowerCase() && "underline"
                            }`}
                            value={l}
                            key={_}
                            onClick={() =>
                                changeLang(
                                    l.toLowerCase() as "en" | "ro" | "ru"
                                )
                            }
                        >
                            {l}
                        </li>
                    );
                })}
            </ul>

            <div className="hidden lg:flex">
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button className="rounded-3xl m-0 p-0 bg-transparent hover:bg-secondary aspect-square">
                            {lang.charAt(0).toUpperCase() + lang.slice(1)}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-fit p-2">
                        <Command>
                            <CommandList>
                                <CommandGroup>
                                    {Langs.map(
                                        (
                                            l: "Ro" | "Ru" | "En" | string,
                                            _: number
                                        ) => {
                                            return (
                                                <CommandItem
                                                    key={_}
                                                    value={l}
                                                    onSelect={(v) => {
                                                        changeLang(
                                                            v.toLowerCase() as
                                                                | "en"
                                                                | "ro"
                                                                | "ru"
                                                        );
                                                        setOpen(false);
                                                    }}
                                                >
                                                    {l}
                                                </CommandItem>
                                            );
                                        }
                                    )}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
        </>
    );
};
