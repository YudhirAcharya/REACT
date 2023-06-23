import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const value = document.getElementById("count");

let count = 0;
const CountVar = () => {
  count++;
  console.log("count increased");
  return (value.innerText = `Count:${count}`);
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite App</h1>
      <button id="count-btn" onClick={CountVar}>
        Increase Count
      </button>{" "}
      <h2 id="count">Count:</h2>
      <img className="logo" src={reactLogo}></img>
    </>
  );
}

export default App;
