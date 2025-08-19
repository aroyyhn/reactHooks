// App.jsx
import { useState } from "react";
import CounterWithReset from "./components/CounterWithReset";
import FetchDataTable from "./components/FetchDataTable";
import { ThemeProvider } from "./components/ThemeProvider";
import UseContextDemo from "./components/UseContextDemo";
import FormWithReducer from "./components/FormWithReducer";
import HeavyComputation from "./components/HeavyComputation";
import AutoFocusInput from "./components/useref";
import ItemList from "./components/usecallback";
import ScrollPosition from "./components/uselayouteffect";
import ImperativeHandleDemo from "./components/useimperativehandle";
import LocalStorageDemo from "./components/UseLocalStorageDemo";

const menuItems = [
  { key: "counter", label: "Counter", color: "blue" },
  { key: "fetch", label: "Fetch API", color: "green" },
  { key: "context", label: "useContext", color: "purple" },
  { key: "reducer", label: "useReducer", color: "orange" },
  { key: "memo", label: "useMemo", color: "pink" },
  { key: "ref", label: "useRef", color: "teal" },
  { key: "callback", label: "useCallback", color: "yellow" },
  { key: "layoutEffect", label: "useLayoutEffect", color: "red" },       
  { key: "imperative", label: "useImperativeHandle", color: "indigo" }, 
  { key: "localstorage", label: "useDebugValue + useLocalStorage", color: "emerald" },
];

export default function App() {
  const [page, setPage] = useState("counter");

  return (
    <div className="min-h-screen flex bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-xl border-r border-gray-200 flex flex-col">
        <h1 className="text-xl font-bold px-6 py-4 border-b border-gray-200 text-gray-800">
          React Hooks Playground
        </h1>
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-1 px-3 py-4">
            {menuItems.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => setPage(item.key)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 
                    ${
                      page === item.key
                        ? `bg-${item.color}-500 text-white`
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <footer className="px-6 py-4 text-xs text-gray-500 border-t border-gray-200">
          © {new Date().getFullYear()} Playground
        </footer>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 transition-all duration-300">
          {page === "counter" && <CounterWithReset />}
          {page === "fetch" && <FetchDataTable />}
          {page === "context" && (
            <ThemeProvider>
              <UseContextDemo />
            </ThemeProvider>
          )}
          {page === "reducer" && <FormWithReducer />}
          {page === "memo" && <HeavyComputation />}
          {page === "ref" && <AutoFocusInput />}
          {page === "callback" && <ItemList />}
          {page === "layoutEffect" && <ScrollPosition />}
          {page === "imperative" && <ImperativeHandleDemo />}
          {page === "localstorage" && <LocalStorageDemo />}
        </div>
      </main>
    </div>
  );
}
