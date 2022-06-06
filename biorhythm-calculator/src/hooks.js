import { useState } from "react";

export function useLocalStorage(key, defaultValue) {
  const initialValue = localStorage.getItem(key) ?? defaultValue;
  const [value, setValue] = useState(initialValue);

  const setAndStoreValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  return [value, setAndStoreValue];
}
