import { useState, useEffect } from "react";

type windowSizeType = { width?: number; height?: number };

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<windowSizeType>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
