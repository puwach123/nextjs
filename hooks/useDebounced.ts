import { useCallback, useRef } from "react";

export default function useDebounced(
  callback: () => void,
  wait: number = 200,
  immediate: boolean = true
): () => void {
  const timeout = useRef<number>();
  const func = useRef<typeof callback>(callback);

  const later = useCallback(() => {
    timeout.current = undefined;
    func.current();
  }, []);

  const debounced = useCallback(() => {
    if (timeout.current) clearTimeout(timeout.current);
    if (immediate) {
      const callnow = !timeout.current;
      timeout.current = window.setTimeout(later, wait);
      if (callnow) func.current();
    } else {
      timeout.current = window.setTimeout(later, wait);
    }
  }, [immediate, wait, later]);

  return debounced;
}
