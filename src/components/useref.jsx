import { useRef, useEffect } from "react";

export default function AutoFocusInput() {
  const inputRef = useRef(null);

  // Fokuskan input saat komponen mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const focusAgain = () => inputRef.current?.focus();

  return (
    <div style={{ padding: 12 }}>
      <h2 style={{ marginBottom: 8 }}>useRef: Auto Focus</h2>
      <input
        ref={inputRef}
        placeholder="Ketik di sini..."
        style={{ padding: 8, border: "1px solid #ddd", borderRadius: 6, width: "100%", maxWidth: 360 }}
      />
      <button onClick={focusAgain} style={{ marginTop: 8 }}>
        Focus lagi
      </button>
    </div>
  );
}
