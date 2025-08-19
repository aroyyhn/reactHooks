import { useState, useLayoutEffect, useRef } from "react";

export default function ScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    const handleScroll = () => {
      setScrollY(box.scrollTop);
    };

    box.addEventListener("scroll", handleScroll);
    handleScroll(); // posisi awal

    return () => {
      box.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ padding: 12 }}>
      <h2 style={{ marginBottom: 8 }}>useLayoutEffect: Scroll Position</h2>
      <p>Scroll Y: {scrollY}px</p>

      {/* scroll di dalam div */}
      <div
        ref={boxRef}
        style={{
          height: "300px",
          overflowY: "scroll",
          background: "#f9fafb",
          marginTop: 16,
          border: "1px solid #ddd",
          borderRadius: "6px",
        }}
      >
        <div style={{ height: "800px", padding: 20 }}>
          <p>Scroll di area ini untuk melihat nilai berubah!</p>
        </div>
      </div>
    </div>
  );
}
