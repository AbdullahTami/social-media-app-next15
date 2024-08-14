import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delay: number = 250): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handle = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handle);
  }, [value, delay]);

  return debouncedValue;
}
