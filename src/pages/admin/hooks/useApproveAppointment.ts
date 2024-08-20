import { useMutation, useQueryClient } from "@tanstack/react-query";
import { approveAppointmentFn } from "../api/admin.apis";

export const useApproveAppointment = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: async ({
            service,
            id,
        }: {
            service: "lashes" | "nails" | "brows" | string;
            id: string;
        }) => await approveAppointmentFn({ service, id }),
        onError: (err) => console.log(err),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["lashes", "pending"] });
            queryClient.invalidateQueries({ queryKey: ["brows", "pending"] });
            queryClient.invalidateQueries({ queryKey: ["nails", "pending"] });
        },
    });

    const approveAppointment = ({
        service,
        id,
    }: {
        service: "lashes" | "nails" | "brows" | string;
        id: string;
    }) => {
        mutation.mutate({ service, id });
    };

    return { approveAppointment };
};
