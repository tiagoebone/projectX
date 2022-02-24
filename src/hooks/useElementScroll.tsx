import { useCallback, useState, useEffect } from "react";

interface Scroll {
  scrollLeft: number;
  scrollRight: number;
  scrollTop: number;
  scrollBottom: number;
}

function useElementScroll<T extends HTMLElement = HTMLDivElement>(): [
  (node: T | null) => void,
  Scroll
] {
  const [ref, setRef] = useState<T | null>(null);
  const [scroll, setScroll] = useState<Scroll>({
    scrollLeft: 0,
    scrollRight: 0,
    scrollTop: 0,
    scrollBottom: 0,
  });

  const handleScrollLeft = useCallback(() => {
    if (
      ref?.scrollLeft !== undefined &&
      ref?.scrollWidth !== undefined &&
      ref?.scrollHeight !== undefined &&
      ref?.scrollTop !== undefined &&
      ref?.offsetWidth !== undefined &&
      ref?.offsetHeight !== undefined
    ) {
      setScroll({
        scrollLeft: ref.scrollLeft,
        scrollRight: ref.scrollWidth - ref.scrollLeft - ref.offsetWidth,
        scrollTop: ref.scrollTop,
        scrollBottom: ref.scrollHeight - ref.scrollTop - ref.offsetHeight,
      });
    }
  }, [
    ref?.scrollLeft,
    ref?.scrollHeight,
    ref?.scrollWidth,
    ref?.offsetWidth,
    ref?.scrollTop,
    ref?.offsetHeight,
  ]);

  useEffect(() => {
    ref?.addEventListener("scroll", handleScrollLeft);
    return () => ref?.removeEventListener("scroll", handleScrollLeft);
    // eslint-disable-next-line
  }, [ref?.scrollLeft, ref?.scrollHeight]);

  useEffect(() => {
    if (
      ref?.scrollLeft !== undefined &&
      ref?.scrollWidth !== undefined &&
      ref?.scrollHeight !== undefined &&
      ref?.scrollTop !== undefined &&
      ref?.offsetWidth !== undefined &&
      ref?.offsetHeight !== undefined
    ) {
      setScroll({
        scrollLeft: ref.scrollLeft,
        scrollRight: ref.scrollWidth - ref.scrollLeft - ref.offsetWidth,
        scrollTop: ref.scrollTop,
        scrollBottom: ref.scrollHeight - ref.scrollTop - ref.offsetHeight,
      });
    }
    // eslint-disable-next-line
  }, [ref?.scrollWidth, ref?.scrollHeight]);

  return [setRef, scroll];
}

export default useElementScroll;

//usage
// const [squareRef, { width, height }] = useElementSize()
