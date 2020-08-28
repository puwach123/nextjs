import { useState, useEffect, useRef, DependencyList } from "react";

export function useDeepEqual<T>(
  value: T,
  deepEqualFn: (curr: T, prev: T) => boolean
): T {
  const ref = useRef<T>(value);

  if (!deepEqualFn(value, ref.current)) ref.current = value;

  return ref.current;
}

export function useFetcher<T, U extends any[]>(
  fetcher: (...args: U) => Promise<T>,
  args: U,
  deps: DependencyList = []
): [T | undefined, boolean, string] {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const data = await fetcher(...args);
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetch();
    return () => {
      setError("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [data, loading, error];
}
