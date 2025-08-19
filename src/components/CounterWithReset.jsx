// src/components/CounterWithReset.jsx
import { useState } from "react";

export default function CounterWithReset() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border rounded">
      <h2 className="font-semibold mb-2">Counter</h2>
      <p>Count: {count}</p>
      <div className="flex gap-2 mt-2">
        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-2 py-2.5 text-center me-2 mb-2 " onClick={() => setCount(count + 1)}>Increment</button>
        <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-2 py-2.5 text-center me-2 mb-2"onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
