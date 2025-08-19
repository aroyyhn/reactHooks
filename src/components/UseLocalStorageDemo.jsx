import useLocalStorage from "../hooks/uselocalstorage";

export default function LocalStorageDemo() {
  const [name, setName] = useLocalStorage("username", "");

  return (
    <div style={{ padding: 12 }}>
      <h2 style={{ marginBottom: 8 }}>useDebugValue + useLocalStorage</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ketik nama..."
        style={{
          padding: 8,
          border: "1px solid #ddd",
          borderRadius: 6,
          width: "100%",
        }}
      />
      <p style={{ marginTop: 10 }}>Halo, {name || "anonim"} 👋</p>
    </div>
  );
}
