import { useCallback, useRef } from "react";

export default function useThrottled(
  callback: () => void,
  wait: number = 200,
  options?: { leading: boolean; trailing: boolean }
): () => void {
  const timeout = useRef<number>();
  const last = useRef<number>(0);

  const later = useCallback(() => {
    last.current = options?.leading ? 0 : Date.now();
    timeout.current = undefined;
    callback();
  }, [callback, options]);

  const throttled = useCallback(() => {
    const now = Date.now();
    if (!last.current && !options?.leading) last.current = now;
    const remaining = wait - (now - last.current);
    if (remaining <= 0 || remaining > wait) {
      if (timeout.current) {
        clearTimeout();
        timeout.current = undefined;
      }
      last.current = now;
      callback();
    } else if (!timeout.current && options?.trailing) {
      timeout.current = window.setTimeout(later, remaining);
    }
  }, [callback, wait, options, later]);

  return throttled;
}
