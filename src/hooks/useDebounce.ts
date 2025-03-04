import { useEffect, useState } from "react";

const useDebounce = (term: string, delay: number) => {
  const [debouncedValue, setDevouncedValue] = useState("");

  useEffect(() => {
    const id = setTimeout(() => setDevouncedValue(term), delay);

    return () => clearTimeout(id);
  }, [term, delay]);

  return debouncedValue;
};

export default useDebounce;
