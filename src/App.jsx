import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h1 className="counter-title">React Counter</h1>
      <div className="counter-display">
        <span className="counter-number">{count}</span>
      </div>
      <div className="counter-buttons">
        <button className="btn increment" onClick={() => setCount(count + 1)}>
          +
        </button>
        <button className="btn decrement" onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;
