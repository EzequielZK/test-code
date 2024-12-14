import { useState } from "react";

export default function useDebounce() {
  const [loading, setLoading] = useState(false);

  const debounce = (callback: () => void, delay: number) => {
    let timeout: NodeJS.Timeout;

    return () => {
      setLoading(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        callback();
        setLoading(false);
      }, delay);
    };
  };

  return { debounce, loading };
}
