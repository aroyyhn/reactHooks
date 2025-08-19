import { useState, useEffect, useDebugValue } from "react";

export default function useLocalStorage(key, initialValue) {
  // Ambil data dari localStorage saat pertama render
  const [value, setValue] = useState(() => {
    try {
      const jsonValue = localStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : initialValue;
    } catch (e) {
      console.error("Error parsing localStorage", e);
      return initialValue;
    }
  });

  // Simpan ke localStorage setiap kali value berubah
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error("Error saving to localStorage", e);
    }
  }, [key, value]);

  // Debug info di React DevTools
  useDebugValue(`${key}: ${JSON.stringify(value)}`);

  return [value, setValue];
}
