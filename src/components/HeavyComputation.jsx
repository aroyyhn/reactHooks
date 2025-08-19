// src/components/HeavyComputation.jsx
import { useMemo, useState } from "react";

function slowFunction(num) {
  console.log("Calculating...");
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += num;
  }
  return result;
}

export default function HeavyComputation() {
  const [number, setNumber] = useState(0);
  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  return (
    <div className="p-4 border rounded">
      <h2 className="font-semibold mb-2">useMemo Demo</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        className="border p-1"
      />
      <p>Result: {doubleNumber}</p>
    </div>
  );
}
