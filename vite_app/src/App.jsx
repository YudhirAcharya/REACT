import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./app.css";

const App = () => {
  const [increment, setValue] = useState(0);
  const [increment2, setValue2] = useState(0);

  const incrementValue = () => {
    setValue(increment + 1);
  };
  const incrementValue2 = () => {
    setValue2(increment2 + 1);
  };

  useEffect(() => {
    console.log("use effect 1");
  }, [increment]);
  useEffect(() => {
    console.log("use effect 2");
  }, [increment2]);

  return (
    <>
      <h2>increment: {increment}</h2>
      <button onClick={incrementValue}>increment</button>
      <h2>increment2: {increment2}</h2>
      <button onClick={incrementValue2}>increment2</button>
    </>
  );
};
export default App;
