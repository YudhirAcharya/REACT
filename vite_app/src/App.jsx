import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const CountVar = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>Vite App</h1>
      <button id="count-btn" onClick={CountVar}>
        Increase Count
      </button>{" "}
      <h2 id="count">Count: {count}</h2>
      <img className="logo" src={reactLogo}></img>
    </>
  );
}

export default App;
