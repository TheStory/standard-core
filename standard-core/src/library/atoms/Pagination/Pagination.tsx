import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import MuiPagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import type { SxProps } from "@mui/material/styles";
import { Link } from "@the-story/standard-core/atoms/Link";
import { usePathname, useSearchParams } from "next/navigation";

interface PaginationProps {
  totalPages: number;
  sx?: SxProps;
  scrollToId?: string;
}

const Pagination = ({ totalPages, sx, scrollToId }: PaginationProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

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
          href={`${pathname}?page=${item.page}`}
          slots={{
            first: (props) => <SkipPreviousIcon {...props} />,
            last: (props) => <SkipNextIcon {...props} />,
          }}
          {...item}
          onClick={() => {
            if (scrollToId) {
              const el = document.getElementById(scrollToId);
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 74;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }
          }}
        />
      )}
    />
  );
};

export default Pagination;
