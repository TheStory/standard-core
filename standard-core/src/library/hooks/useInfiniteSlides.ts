import { useMemo } from "react";

export function useInfiniteSlides<T>(
  slideWidth: number,
  slideMargin: number,
  items: any[] | null | undefined = [],
) {
  const slideTotalWidth = useMemo(
    () => slideWidth + slideMargin,
    [slideWidth, slideMargin],
  );

  // SSR-safe viewport width
  const viewportWidth =
    typeof window !== "undefined" ? window.innerWidth : 1440;

  const MIN_SLIDES = useMemo(() => {
    // Ensure a large pool to keep loop smooth
    const perView = Math.ceil(viewportWidth / slideTotalWidth);
    return Math.max(perView, 12);
  }, [viewportWidth, slideTotalWidth]);

  const slides = useMemo(() => {
    if (!items || items.length === 0) return [] as T[];
    const duplicationsNeeded = Math.ceil((MIN_SLIDES * 3) / items.length);
    return Array.from({ length: duplicationsNeeded }, () => items).flat();
  }, [items, MIN_SLIDES]);

  return { slides, slideTotalWidth } as {
    slides: T[];
    slideTotalWidth: number;
  };
}
