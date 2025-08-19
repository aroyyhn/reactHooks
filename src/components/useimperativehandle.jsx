import { forwardRef, useRef, useImperativeHandle } from "react";

// Komponen anak yang mengekspor method focus() ke parent
const CustomInput = forwardRef(function CustomInput(props, ref) {
  const innerRef = useRef(null);

  useImperativeHandle(
    ref,
    () => ({
      focus: () => innerRef.current?.focus(),
    }),
    []
  );

  return (
    <input
      ref={innerRef}
      placeholder={props.placeholder || "Ketik di sini..."}
      style={{ padding: 8, border: "1px solid #ddd", borderRadius: 6, width: "100%" }}
      {...props}
    />
  );
});

// Demo parent
export default function ImperativeHandleDemo() {
  const inputRef = useRef(null);

  const handleFocusFromParent = () => {
    inputRef.current?.focus();
  };

  return (
    <div style={{ padding: 12 }}>
      <h2 style={{ marginBottom: 8 }}>useImperativeHandle: Custom Input</h2>

      <CustomInput ref={inputRef} />

      <button
        onClick={handleFocusFromParent}
        style={{
          marginTop: 10,
          padding: "6px 12px",
          borderRadius: 6,
          border: "none",
          background: "#2563eb",
          color: "white",
          cursor: "pointer",
        }}
      >
        Focus dari Parent
      </button>
    </div>
  );
}
