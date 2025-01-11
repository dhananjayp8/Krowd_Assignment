import "./App.css";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue.trim()]);
      setInputValue("");
    }
  };

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="App">
      <div>
        <div
          style={{
            backgroundColor: "#3A3B3C",
            padding: "2rem",
            height: "5rem",
            color: "green",
          }}
        >
          <h1
            className
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              fontWeight: "800",
            }}
          >
            Item List Manager
          </h1>
        </div>
        <div
          style={{
            marginTop: "4rem",
          }}
        >
          <h1
            style={{
              fontSize: "2rem",
            }}
          >
            Item List
          </h1>
          <div style={{ marginTop: "20px" }}>
            <input
              type="text"
              value={inputValue}
              onChange={inputHandler}
              placeholder="Enter item"
              style={{
                padding: "10px",
                width: "700px",
                marginRight: "10px",
                // border: "1px solid #ccc",
                boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.2)",
              }}
            />
            <div>
              <button
                onClick={addItem}
                style={{
                  padding: "12px 24px",
                  backgroundColor: "green",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  margin: "2rem",
                  width: "500px",
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                Add Item
              </button>
            </div>

            <ul
              style={{
                padding: "10px",
                listStyleType: "none",
              }}
            >
              {items.map((item, index) => (
                <li key={index} style={{ padding: "5px 0" }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
