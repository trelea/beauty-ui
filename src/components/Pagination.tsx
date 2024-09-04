import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Props {
  page: number;
  setPage: any;
  totalPages: number;
}

export const Paginate: React.FC<Props> = ({ page, setPage, totalPages }) => {
  return (
    <>
      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            {/* PREV BTN */}
            {page > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  // aria-label={t("pagination.prevAriaLabel")}
                  // aria-valuetext={t("pagination.prev")}
                  onClick={() =>
                    setPage((page: URLSearchParams) => {
                      return {
                        page: String(Number(page.get("page")) - 1),
                      };
                    })
                  }
                />
              </PaginationItem>
            )}

            {page > 2 && (
              <PaginationItem>
                <PaginationEllipsis
                // aria-valuetext={t("pagination.more")}
                />
              </PaginationItem>
            )}

            {page > 1 && (
              <PaginationItem>
                <PaginationLink
                  onClick={() =>
                    setPage((page: URLSearchParams) => {
                      return {
                        page: String(Number(page.get("page")) - 1),
                      };
                    })
                  }
                >
                  {page - 1}
                </PaginationLink>
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationLink isActive>{page}</PaginationLink>
            </PaginationItem>

            {totalPages > 2 && page !== totalPages && (
              <PaginationItem>
                <PaginationLink
                  onClick={() =>
                    setPage((page: URLSearchParams) => {
                      return {
                        page: String(Number(page.get("page")) + 1),
                      };
                    })
                  }
                >
                  {page + 1}
                </PaginationLink>
              </PaginationItem>
            )}

            {/* ... */}
            {page !== totalPages && page !== totalPages - 1 && (
              <PaginationItem>
                <PaginationEllipsis
                // aria-valuetext={t("pagination.more")}
                />
              </PaginationItem>
            )}

            {/* NEXT BTN */}
            {page < totalPages && (
              <PaginationItem>
                <PaginationNext
                  // aria-label={t("pagination.nextAriaLabel")}
                  // aria-valuetext={t("pagination.next")}
                  onClick={() =>
                    setPage((page: URLSearchParams) => {
                      return {
                        page: String(Number(page.get("page")) + 1),
                      };
                    })
                  }
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
};
