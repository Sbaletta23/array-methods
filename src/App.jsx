import { useMemo, useState } from "react";


let key = 1;

function App() {
  const [items, setItems] = useState([
    {
      id: 0,
      name: "Cámara digital",
      price: 100,
      count: 1,
      status: "wish"
    },
    {
      id: 1,
      name: "Television",
      price: 200,
      count: 2,
      status: "bought"
    }
  ]);

  const total = useMemo(() => {
    return items.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
  }, [items]);

  const isValid = useMemo(() => {
    return items.every((item) => {
      return item.name && item.status && item.count > 0 && item.price > 0;
    });
  }, [items]);

  function handleAdd() {
    setItems((items) => {
      return items.concat({
        id: ++key,
        name: "",
        price: 0,
        count: 1,
        status: "wish"
      });
    });
  }

  function handleEdit(modifiedtem) {
    setItems((items) => {
      return items.map((originalItem) =>
        originalItem.id === modifiedtem.id ? modifiedtem : originalItem
      );
    });
  }

  function handleRemove(removeItem) {
    setItems((items) => {
      return items.filter((originalItem) =>
        originalItem.id === removeItem.id ? false : true
      );
    });
  }

  return (
    <main>
      <h1>Wincy</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              value={item.name}
              onChange={(event) =>
                handleEdit({ ...item, name: event.target.value })
              }
            />

            <input
              style={{ width: 96 }}
              value={item.price}
              onChange={(event) =>
                handleEdit({ ...item, price: Number(event.target.value) })
              }
            />

            <input
              style={{ width: 96 }}
              value={item.count}
              onChange={(event) =>
                handleEdit({ ...item, count: Number(event.target.value) })
              }
            />

            <select
              value={item.status}
              onChange={(event) =>
                handleEdit({
                  ...item,
                  status: event.target.value
                })
              }
            >
              <option value="wish">Wish</option>
              <option value="bought">Bought</option>
              <option value="cancelled">Cancelled</option>
            </select>

            <button onClick={() => handleRemove(item)}> Delete </button>
          </li>
        ))}
      </ul>

      <button onClick={handleAdd}>Add item</button>
      <p>Are items valid?: {isValid ? "✅" : "⛔"}</p>
      <p>Total: ${total}</p>
    </main>
  );
}

export default App;
