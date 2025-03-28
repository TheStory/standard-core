"use client";

import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import MuiPagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import type { SxProps } from "@mui/material/styles";
import { usePathname, useRouter } from "@thestory/standard-core/config";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface PaginationProps {
  totalPages: number;
  sx?: SxProps;
}

const Pagination = ({ totalPages, sx }: PaginationProps) => {
  const params = useSearchParams();
  const { push } = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const page = new URLSearchParams(params.toString());

    if (!page.get("page")) {
      push(`${pathname}?page=1`, { scroll: false });
    }
  }, [pathname, push, params]);

  const currentPage = +(params.get("page") || 1);

  if (totalPages <= 1) {
    return null;
  }

  return (
    <MuiPagination
      sx={{
        mx: "auto",
        width: "fit-content",
        mt: 7,
        ...sx,
      }}
      onChange={(_, value) =>
        push(`${pathname}?page=${value}`, { scroll: false })
      }
      page={currentPage}
      showFirstButton
      showLastButton
      count={totalPages}
      size="large"
      title="pagination"
      renderItem={(item) => (
        <PaginationItem
          slots={{
            first: (props) => <SkipPreviousIcon {...props} />,
            last: (props) => <SkipNextIcon {...props} />,
          }}
          {...item}
        />
      )}
    />
  );
};

export default Pagination;
