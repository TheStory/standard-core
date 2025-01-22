"use client";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import type { SxProps } from "@mui/material";
import Fab from "@mui/material/Fab";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useTranslations } from "next-intl";
import { useState } from "react";

const FMFab = motion(Fab);

const BackToTopButton = ({ sx }: { sx?: SxProps }) => {
  const [hidden, setHidden] = useState(true);
  const { scrollYProgress } = useScroll();
  const t = useTranslations("common");

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.1) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  });

  return (
    <FMFab
      layout
      initial="hidden"
      animate={hidden ? "hidden" : "visible"}
      transition={{
        duration: 0.3,
        type: "spring",
        bounce: 0.3,
      }}
      variants={{
        visible: {
          opacity: 1,
          scale: 1,
        },
        hidden: {
          opacity: 0,
          scale: 0,
        },
      }}
      sx={{
        fontWeight: 600,
        fontSize: 16,
        position: "fixed",
        bottom: 24,
        right: 24,
        textTransform: "none",
        ...sx,
      }}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      size="large"
      color="primary"
      variant="extended"
    >
      {t("backToTop")}
      <ArrowUpwardIcon sx={{ ml: 1 }} />
    </FMFab>
  );
};

export default BackToTopButton;
