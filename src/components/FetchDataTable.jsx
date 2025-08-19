// src/components/FetchDataTable.jsx
import { useEffect, useState } from "react";

export default function FetchDataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  return (
    <div className="p-4 border rounded">
      <h2 className="font-semibold mb-2">Fetch Data</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
