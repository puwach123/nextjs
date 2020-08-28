import { useState, useCallback } from "react";

export default function useToggle(
  initialState: boolean
): [boolean, () => void] {
  const [toggled, setToggled] = useState<boolean>(initialState);
  const toggle = useCallback(() => setToggled((prev) => !prev), []);
  return [toggled, toggle];
}
