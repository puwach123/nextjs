import { useState, useEffect } from "react";
import useThrottled from "./useThrottled";

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  const throttledResizeHandler = useThrottled(() =>
    setWidth(window.innerWidth)
  );

  useEffect(() => {
    window.addEventListener("resize", throttledResizeHandler);
    return () => {
      window.removeEventListener("resize", throttledResizeHandler);
    };
  }, [throttledResizeHandler]);

  return width;
}

export function useWindowHeight() {
  const [height, setHeight] = useState(window.innerHeight);
  const throttledResizeHandler = useThrottled(() =>
    setHeight(window.innerHeight)
  );
  useEffect(() => {
    window.addEventListener("resize", throttledResizeHandler);
    return () => {
      window.removeEventListener("resize", throttledResizeHandler);
    };
  }, [throttledResizeHandler]);

  return height;
}
