"use client";

import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import MuiPagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import type { SxProps } from "@mui/material/styles";
import { usePathname, useRouter } from "@thestory/standard-core/config";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";

interface PaginationProps {
  totalPages: number;
  sx?: SxProps;
  scrollToId?: string;
  onIsScrolledChange?: (isScrolled: boolean) => void;
}

const Pagination = ({
  totalPages,
  sx,
  scrollToId,
  onIsScrolledChange,
}: PaginationProps) => {
  const searchParams = useSearchParams();
  const { replace, push } = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const page = new URLSearchParams(params.toString());

    if (!page.get("page")) {
      params.set("page", "1");
      replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
  }, [pathname, replace, searchParams]);

  const currentPage = +(searchParams.get("page") || 1);

  const handleChange = useCallback(
    (_: React.ChangeEvent<unknown>, value: number) => {
      const params = new URLSearchParams(searchParams);
      params.set("page", value.toString());

      let isScrolled = false;
      if (scrollToId) {
        const el = document.getElementById(scrollToId);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 74;
          window.scrollTo({ top: y, behavior: "smooth" });
          isScrolled = true;
        }
      }

      onIsScrolledChange?.(isScrolled);

      push(`${pathname}?${params.toString()}`, {
        scroll: !scrollToId,
      });
    },
    [scrollToId, searchParams, pathname, push, onIsScrolledChange],
  );

  if (totalPages <= 1) {
    return null;
  }

  return (
    <MuiPagination
      sx={{
        mx: "auto",
        width: "fit-content",
        my: 7,
        ...sx,
      }}
      onChange={handleChange}
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
