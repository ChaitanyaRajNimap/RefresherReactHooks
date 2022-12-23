import React, { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    // setTimeout(() => {
    //   setCount((count) => count + 1);
    // }, 1000);

    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    setCalculation(() => count * 2);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1>Count - {count}</h1>
      {/* <button onClick={() => setCount((c) => c + 1)}>Incerement Count</button> */}
      <h1>Calculation - {calculation}</h1>
    </>
  );
}

export default UseEffect;
