import { useReducer, useState } from "react";

function todoReducer(todos, action) {
  switch (action.type) {
    case "ADD":
      return [...todos, { id: Date.now(), text: action.payload, done: false }];
    case "TOGGLE":
      return todos.map((t) =>
        t.id === action.payload ? { ...t, done: !t.done } : t
      );
    case "DELETE":
      return todos.filter((t) => t.id !== action.payload);
    default:
      return todos;
  }
}

export default function UseReducerDemo() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    dispatch({ type: "ADD", payload: text });
    setText("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Todo List</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Tambah todo..."
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
              style={{
                cursor: "pointer",
                textDecoration: todo.done ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
              style={{ marginLeft: 8 }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
