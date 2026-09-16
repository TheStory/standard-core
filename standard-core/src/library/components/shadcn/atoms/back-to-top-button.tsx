"use client";

import { ArrowUp } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

import { Button } from "./button";

type BackToTopButtonProps = { label?: string; className?: string };

function BackToTopButton({
  label = "Back to top",
  className,
}: BackToTopButtonProps) {
  const [hidden, setHidden] = useState(true);
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (value) =>
    setHidden(value <= 0.1),
  );

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={hidden ? "hidden" : "visible"}
      variants={{
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <Button
        className="fixed right-6 bottom-6 rounded-full"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        {label}
        <ArrowUp />
      </Button>
    </motion.div>
  );
}

export { BackToTopButton };
export type { BackToTopButtonProps };
