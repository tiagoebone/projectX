import { useCallback, useState, useEffect } from "react";

interface Scroll {
  scrollLeft: number;
  scrollHeight: number;
}

function useElementScrollLeft<T extends HTMLElement = HTMLDivElement>(): [
  (node: T | null) => void,
  Scroll
] {
  const [ref, setRef] = useState<T | null>(null);
  const [left, setLeft] = useState<Scroll>({
    scrollLeft: 0,
    scrollHeight: 0,
  });

  const handleScrollLeft = useCallback(() => {
    setLeft({
      scrollLeft: ref?.scrollLeft || 0,
      scrollHeight: ref?.scrollHeight || 0,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.scrollLeft, ref?.scrollHeight, left]);

  useEffect(() => {
    ref?.addEventListener("scroll", handleScrollLeft);
    return () => ref?.removeEventListener("scroll", handleScrollLeft);
    // eslint-disable-next-line
  }, [ref?.scrollLeft, ref?.scrollHeight]);

  return [setRef, left];
}

export default useElementScrollLeft;

//usage
// const [squareRef, { width, height }] = useElementSize()
