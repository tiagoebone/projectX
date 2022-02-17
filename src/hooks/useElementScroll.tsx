import { useCallback, useState, useEffect } from "react";

interface Scroll {
  scrollLeft: number;
  scrollRight: number;
  scrollHeight: number;
}

function useElementScrollLeft<T extends HTMLElement = HTMLDivElement>(): [
  (node: T | null) => void,
  Scroll
] {
  const [ref, setRef] = useState<T | null>(null);
  const [scroll, setScroll] = useState<Scroll>({
    scrollLeft: 0,
    scrollRight: 0,
    scrollHeight: 0,
  });

  const handleScrollLeft = useCallback(() => {
    if (
      ref?.scrollLeft !== undefined &&
      ref?.scrollWidth !== undefined &&
      ref?.scrollHeight !== undefined &&
      ref?.offsetWidth !== undefined
    ) {
      setScroll({
        scrollLeft: ref.scrollLeft,
        scrollRight: ref.scrollWidth - ref.scrollLeft - ref.offsetWidth,
        scrollHeight: ref.scrollHeight,
      });
    }
  }, [ref?.scrollLeft, ref?.scrollHeight, ref?.scrollWidth, ref?.offsetWidth]);

  useEffect(() => {
    ref?.addEventListener("scroll", handleScrollLeft);
    return () => ref?.removeEventListener("scroll", handleScrollLeft);
    // eslint-disable-next-line
  }, [ref?.scrollLeft, ref?.scrollHeight]);

  return [setRef, scroll];
}

export default useElementScrollLeft;

//usage
// const [squareRef, { width, height }] = useElementSize()
