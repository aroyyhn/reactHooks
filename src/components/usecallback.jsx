import { useState, useCallback } from "react";

export default function ItemList() {
  const [items, setItems] = useState([]);

  const handleAddItem = useCallback(() => {
    setItems((prev) => [...prev, `Item ${prev.length + 1}`]);
  }, []);

  return (
    <div style={{ padding: 12 }}>
      <h2 style={{ marginBottom: 8 }}>useCallback: Daftar Item</h2>

      <button
        onClick={handleAddItem}
        style={{
          background: "#2563eb",
          color: "white",
          padding: "6px 12px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          marginBottom: "12px",
        }}
      >
        Tambah Item
      </button>

      <ul style={{ paddingLeft: 20 }}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
