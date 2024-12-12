import { useState } from "react";

export default function useDebounce() {
  const [loading, setLoading] = useState(false);

  const debounce = (callback: () => void, delay: number) => {
    let timeout: NodeJS.Timeout;
    console.log("asdasdsadasd");
    return () => {
      setLoading(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        console.log("COEEEEEEEE");
        callback();
        setLoading(false);
      }, delay);
    };
  };

  return { debounce, loading };
}
