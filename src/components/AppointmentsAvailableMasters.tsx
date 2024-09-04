import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Table, TableBody, TableRow, TableCell } from "./ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { AxiosResponse } from "axios";
import { getAvailableRes } from "@/pages/appointments/api/appointments.apis";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { UseFormReturn } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { PhoneInput } from "./ui/phone-input";
import { Textarea } from "./ui/textarea";
import { toISO8601DateString } from "@/lib/utils";
import React from "react";
import { Badge } from "./ui/badge";
import { MdOutlineScheduleSend } from "react-icons/md";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CiCalendar } from "react-icons/ci";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";
import { ro, ru, enUS } from "date-fns/locale";
import { usei18nUtil } from "@/utils/usei18nUtil";

interface Props {
  data?: AxiosResponse<getAvailableRes[]>;
  service: "lashes" | "nails" | "brows";
  date: Date;
  form: UseFormReturn<any>;
  onSubmit: (
    values: any,
    { masterId, date }: { masterId: string; date: string }
  ) => void;
  auth: boolean;
}

export const AppointmentsAvailableMasters: React.FC<Props> = ({
  data,
  service,
  date,
  form,
  onSubmit,
  auth,
}) => {
  const [t, setT] = React.useState<string | null>(null);
  const { t: _t, lang } = usei18nUtil();
  return (
    <Card className="basis-1/2 shadow-xl">
      <CardContent className="p-0">
        <h1 className="font-celesse text-3xl md:text-4xl font-normal p-4 md:p-6 shadow-md w-full">
          {_t("appointments.availableMasters")}
        </h1>
        <ScrollArea className="h-[500px] px-2 py-1">
          <Table>
            <TableBody>
              {data?.data.map((master, _) => {
                return (
                  <TableRow key={_}>
                    {master.available.some((v) => v !== null) && (
                      <>
                        <TableCell className="p-3 md:p-4">
                          <Avatar className="shadow-xl">
                            <AvatarImage
                              src={`${import.meta.env.VITE_THUMBS_URL}/${
                                master.thumbnail
                              }`}
                              className="aspect-square object-cover object-center"
                            />
                            <AvatarFallback>I</AvatarFallback>
                          </Avatar>
                        </TableCell>

                        <TableCell className="font-normal text-md md:text-lg xl:text-xl p-0">
                          {master.firstName} {master.lastName}
                        </TableCell>

                        <TableCell className="max-md:hidden">
                          <Badge className="px-4 shadow-md">
                            {master.available.length - master.registred.length}{" "}
                            {_t("appointments.sessions")}{" "}
                            {toISO8601DateString(date as Date)}
                          </Badge>
                        </TableCell>

                        <TableCell className="flex justify-end items-center p-3 md:p-4">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button className="bg-black text-white hover:bg-zinc-200 hover:text-black font-normal text-md xl:text-xl flex justify-center items-center gap-2">
                                {_t("appointments.signup")}
                                <MdOutlineScheduleSend />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-xs rounded-lg md:max-w-xl">
                              <DialogHeader className="border-b py-3 space-y-3">
                                <div className="flex items-center gap-4">
                                  <Avatar className="shadow-xl">
                                    <AvatarImage
                                      src={`${
                                        import.meta.env.VITE_THUMBS_URL
                                      }/${master.thumbnail}`}
                                      className="aspect-square object-cover object-center"
                                    />
                                    <AvatarFallback>I</AvatarFallback>
                                  </Avatar>
                                  <DialogTitle>
                                    {master.firstName} {master.lastName}
                                  </DialogTitle>
                                </div>
                                {/* <p className="text-base text-zinc-500">
                                                                    Sigup for{" "}
                                                                    {service}{" "}
                                                                    service on{" "}
                                                                    {toISO8601DateString(
                                                                        date as Date
                                                                    )}
                                                                </p> */}
                                <ul className="text-base text-zinc-500 text-start">
                                  <li>
                                    <strong>
                                      {_t("appointments.form.master")}
                                    </strong>{" "}
                                    {master.firstName} {master.lastName}
                                  </li>
                                  <li>
                                    <strong>
                                      {_t("appointments.form.date")}
                                    </strong>{" "}
                                    {toISO8601DateString(date as Date)}
                                  </li>
                                  <li>
                                    <strong>
                                      {_t("appointments.form.time")}
                                    </strong>{" "}
                                    {t}
                                  </li>
                                  <li>
                                    <strong>
                                      {_t("appointments.form.service")}
                                    </strong>{" "}
                                    {service === "lashes"
                                      ? _t("appointments.services.lashes")
                                      : service === "nails"
                                      ? _t("appointments.services.nails")
                                      : service === "brows"
                                      ? _t("appointments.services.brows")
                                      : undefined}
                                  </li>
                                </ul>
                              </DialogHeader>
                              <Form {...form}>
                                <form
                                  className="flex flex-col gap-1 md:gap-2 xl:gap-3"
                                  onSubmit={form.handleSubmit((data) =>
                                    onSubmit(data, {
                                      masterId: master.id,
                                      date: toISO8601DateString(date as Date),
                                    })
                                  )}
                                >
                                  {/* TIME */}
                                  <FormField
                                    control={form.control}
                                    name="time"
                                    render={({ field }) => (
                                      <FormItem>
                                        <Select
                                          onValueChange={(e) => {
                                            field.onChange(e);
                                            setT(e);
                                          }}
                                          defaultValue={field.value}
                                        >
                                          <FormControl className="text-sm md:text-base lg:text-lg py-6 ">
                                            <SelectTrigger className="focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 border-zinc-400">
                                              <SelectValue
                                                placeholder={_t(
                                                  "appointments.form.select"
                                                )}
                                              />
                                            </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                            {master.available.map((time, _) => {
                                              return (
                                                <div key={_}>
                                                  {time !== null && (
                                                    <SelectItem
                                                      className="text-sm md:text-base lg:text-lg"
                                                      value={time}
                                                    >
                                                      {_t(
                                                        "appointments.form.start"
                                                      )}{" "}
                                                      {time.length === 1
                                                        ? `0${time}`
                                                        : time}
                                                    </SelectItem>
                                                  )}
                                                </div>
                                              );
                                            })}
                                          </SelectContent>
                                        </Select>
                                        <FormMessage className="text-xs" />
                                      </FormItem>
                                    )}
                                  />

                                  {/* CONTACT */}
                                  <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                          <PhoneInput
                                            className="border-zinc-400"
                                            placeholder={_t(
                                              "appointments.form.phone"
                                            )}
                                            {...field}
                                          />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                      </FormItem>
                                    )}
                                  />

                                  {!auth && (
                                    <>
                                      {/* FIRST NAME */}
                                      <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                          <FormItem>
                                            <FormControl>
                                              <Input
                                                className="py-2 h-12 text-sm md:text-base lg:text-lg focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 border-zinc-400"
                                                {...field}
                                                placeholder={_t(
                                                  "appointments.form.firstName"
                                                )}
                                              />
                                            </FormControl>
                                            <FormMessage className="text-xs" />
                                          </FormItem>
                                        )}
                                      />

                                      {/* LAST NAME */}
                                      <FormField
                                        control={form.control}
                                        name="lastName"
                                        render={({ field }) => (
                                          <FormItem>
                                            <FormControl>
                                              <Input
                                                className="py-2 h-12 text-sm md:text-base lg:text-lg focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 border-zinc-400"
                                                {...field}
                                                placeholder={_t(
                                                  "appointments.form.lastName"
                                                )}
                                              />
                                            </FormControl>
                                            <FormMessage className="text-xs" />
                                          </FormItem>
                                        )}
                                      />

                                      {/* EMAIL */}
                                      <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                          <FormItem>
                                            <FormControl>
                                              <Input
                                                type="email"
                                                className="py-2 h-12 text-sm md:text-base lg:text-lg focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 border-zinc-400"
                                                {...field}
                                                placeholder={_t(
                                                  "appointments.form.email"
                                                )}
                                              />
                                            </FormControl>
                                            <FormMessage className="text-xs" />
                                          </FormItem>
                                        )}
                                      />

                                      {/* BIRTH DATE */}
                                      <FormField
                                        control={form.control}
                                        name="birthDate"
                                        render={({ field }) => (
                                          <FormItem className="relative">
                                            <Popover>
                                              <PopoverTrigger asChild>
                                                <FormControl>
                                                  <Button
                                                    variant="outline"
                                                    className="text-sm md:text-base lg:text-lg focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 border-zinc-400 w-full flex justify-between h-12 font-normal"
                                                  >
                                                    {field.value ? (
                                                      format(field.value, "PPP")
                                                    ) : (
                                                      <span className="text-[#505050]">
                                                        {_t(
                                                          "appointments.form.birthDate"
                                                        )}
                                                      </span>
                                                    )}

                                                    <CiCalendar />
                                                  </Button>
                                                </FormControl>
                                              </PopoverTrigger>
                                              <PopoverContent className="w-fit">
                                                <Calendar
                                                  locale={
                                                    lang === "ro"
                                                      ? ro
                                                      : lang === "ru"
                                                      ? ru
                                                      : lang === "en"
                                                      ? enUS
                                                      : undefined
                                                  }
                                                  mode="single"
                                                  captionLayout="dropdown-buttons"
                                                  selected={field.value}
                                                  onSelect={field.onChange}
                                                  fromYear={1950}
                                                  toYear={2050}
                                                />
                                              </PopoverContent>
                                            </Popover>
                                            <FormMessage className="text-xs" />
                                          </FormItem>
                                        )}
                                      />
                                    </>
                                  )}

                                  {/* DESCRIPTION */}
                                  <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                          <Textarea
                                            rows={2}
                                            className="py-2 text-sm md:text-base lg:text-lg focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 border-zinc-400"
                                            {...field}
                                            placeholder={_t(
                                              "appointments.form.desc"
                                            )}
                                          />
                                        </FormControl>
                                      </FormItem>
                                    )}
                                  />
                                  <Button
                                    type="submit"
                                    className="bg-black text-white hover:bg-zinc-200 hover:text-black font-normal w-full py-6 text-sm md:text-base lg:text-lg flex justify-center items-center gap-2"
                                  >
                                    {_t("appointments.form.btn")}
                                    <MdOutlineScheduleSend />
                                  </Button>
                                </form>
                              </Form>
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </>
                    )}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
