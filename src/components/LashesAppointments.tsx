import React from "react";
import { SetURLSearchParams } from "react-router-dom";
import { toISO8601DateString } from "@/lib/utils";
import { useGetAvailableLashes } from "@/pages/appointments/hooks/useGetAvailable";
import { SiReactquery } from "react-icons/si";
import { AppointmentsCalendar } from "./AppointmentsCalendar";
import { AppointmentsAvailableMasters } from "./AppointmentsAvailableMasters";
import { useCreateAppointment } from "@/pages/appointments/hooks/useCreateAppointment";
import { useCreateAppointmentUnauth } from "@/pages/appointments/hooks/useCreateAppointmentUnauth";

interface Props {
  _date: string;
  setParams: SetURLSearchParams;
  auth: boolean;
}
export const LashesAppointments: React.FC<Props> = ({
  _date,
  setParams,
  auth,
}) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date(_date));
  const { data, error, isError, isLoading, isFetching } = useGetAvailableLashes(
    toISO8601DateString(date as Date)
  );
  const { form, onSubmit } = useCreateAppointment({
    service: "lashes",
  });
  const { form: uForm, onSubmit: uOnSubmit } = useCreateAppointmentUnauth({
    service: "lashes",
  });

  if (error || isError) alert("Error");
  if (isFetching || isLoading)
    return (
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <SiReactquery className="animate-spin h-20 w-20" />
      </div>
    );

  return (
    <div className="flex flex-col xl:flex-row py-10 gap-10">
      <AppointmentsCalendar
        date={date as Date}
        setDate={setDate}
        setParams={setParams}
        service="lashes"
      />
      <AppointmentsAvailableMasters
        data={data}
        service="lashes"
        date={date as Date}
        form={auth ? form : uForm}
        onSubmit={auth ? onSubmit : uOnSubmit}
        auth={auth}
      />
    </div>
  );
};
