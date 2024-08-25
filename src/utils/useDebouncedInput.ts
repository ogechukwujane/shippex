import { useEffect, useState } from 'react';

export const useDebounce = (input: string) => {
  const [debouncedInput, setDebouncedInput] = useState<string>('');
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebouncedInput(input);
    }, 500);
    return () => clearTimeout(debounceTimer);
  }, [input]);
  return debouncedInput;
};
