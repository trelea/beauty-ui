import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMasterFn } from "../api/admin.apis";

export const useDeleteMaster = ({
    page,
    search,
}: {
    page: string;
    search: string;
}) => {
    const client = useQueryClient();
    const mutation = useMutation({
        mutationFn: async (id: string) => await deleteMasterFn(id),
        onError: (err) => console.log(err),
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ["masters", page, search] });
            client.invalidateQueries({ queryKey: ["masters", "count"] });
        },
    });

    const deleteMaster = (id: string) => {
        mutation.mutate(id as string);
    };

    return { deleteMaster };
};
