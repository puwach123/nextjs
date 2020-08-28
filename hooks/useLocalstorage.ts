import { useState, useCallback, Dispatch, SetStateAction } from "react";

export default function useLocalStorage<T>(
  key: string,
  initialValue?: T
): [T | undefined, (value: T) => void, () => void] {
  if (!key) throw new Error("key is empty");

  const [state, setState] = useState<T | undefined>(() => {
    const value = localStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    } else {
      initialValue && localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });

  const setItem: Dispatch<SetStateAction<T | undefined>> = useCallback(
    (valOrFunc) => {
      const newState =
        typeof valOrFunc === "function"
          ? (valOrFunc as Function)(state)
          : valOrFunc;
      if (typeof newState === "undefined") return;

      const value = JSON.stringify(newState);
      localStorage.setItem(key, value);
      setState(JSON.parse(value));
    },
    [key, state]
  );

  const removeItem = useCallback(() => {
    localStorage.removeItem(key);
  }, [key]);

  return [state, setItem, removeItem];
}
