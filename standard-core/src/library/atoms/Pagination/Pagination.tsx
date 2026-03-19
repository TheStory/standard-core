import { useNormalizedPathname } from "../../hooks";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import MuiPagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import type { SxProps } from "@mui/material/styles";
import { Link } from "@the-story/standard-core/atoms/Link";

interface PaginationProps {
  totalPages: number;
  sx?: SxProps;
  scrollToId?: string;
  onIsScrolledChange?: (isScrolled: boolean) => void;
  scrollOffset?: number;
}

const Pagination = ({
  totalPages,
  sx,
  scrollToId,
  onIsScrolledChange,
  scrollOffset = 100,
}: PaginationProps) => {
  const { createUrlWithQueryParams, searchParams, router } =
    useNormalizedPathname();

  const currentPage = +(searchParams.get("page") || 1);

  if (totalPages <= 1) return null;

  return (
    <MuiPagination
      sx={{ mx: "auto", width: "fit-content", my: 7, ...sx }}
      page={currentPage}
      count={totalPages}
      size="large"
      showFirstButton
      showLastButton
      renderItem={(item) => (
        <PaginationItem
          className="pagination-item"
          component={Link}
          href={createUrlWithQueryParams({ page: item.page ?? 1 })}
          slots={{
            first: (props) => <SkipPreviousIcon {...props} />,
            last: (props) => <SkipNextIcon {...props} />,
          }}
          {...item}
          onClick={(e) => {
            if (scrollToId) {
              const el = document.getElementById(scrollToId);
              if (el) {
                e.preventDefault();
                const y =
                  el.getBoundingClientRect().top +
                  window.scrollY -
                  scrollOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
                onIsScrolledChange?.(true);

                const nextUrl = createUrlWithQueryParams({
                  page: item.page ?? 1,
                });
                setTimeout(() => {
                  router.push(nextUrl as any, { scroll: false });
                }, 500);
              }
            }
          }}
        />
      )}
    />
  );
};

export default Pagination;
