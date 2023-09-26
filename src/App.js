import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "mango",
    },
    {
      id: 2,
      checked: false,
      item: "apple",
    },
    {
      id: 3,
      checked: true,
      item: "guava",
    },
  ]);

  const handleCheck = (id) => {
    const CheckItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(CheckItems);
    localStorage.setItem("todolist", JSON.stringify(CheckItems));
  };

  const handleDelete = (id) => {
    const DeleteItems = items.filter((item) => item.id !== id);
    setItems(DeleteItems);
    localStorage.setItem("todolist", JSON.stringify(DeleteItems));
  };

  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              />
              <label onDoubleClick={() => handleCheck(item.id)}>
                {item.item}
              </label>
              <button onClick={() => handleDelete(item.id)}>delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>nothing is there</p>
      )}
    </main>
  );
};

export default App;
