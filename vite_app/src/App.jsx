import React from "react";
import { useState } from "react";
import { people } from "./data";
import "./app.css";

const App = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: "20",
    hobby: "art",
  });

  const newPerson = () => {
    setPerson({
      name: "harry",
      age: "25",
      hobby: "football",
    });
  };
  const [increment, setValue] = useState(0);
  const incrementValue = () => {
    setValue(increment + 1);
  };
  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.hobby}</h2>
      <button onClick={newPerson}>change</button>
      <h2>increment: {increment}</h2>
      <button onClick={incrementValue}>increment</button>
    </>
  );
};
export default App;
