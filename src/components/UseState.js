import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Count - {count}</h1>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </>
  );
}

export default UseState;
