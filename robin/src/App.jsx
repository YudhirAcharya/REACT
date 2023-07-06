import { useState } from "react";
import "./App.css";
const title = {
  grettings: "hello",
  name: "robin",
};
const list = [2, 4, 6, 8, 10];
const mappedList = list.map((number) => {
  return (number = " even  " + number);
});

const dictionary = [
  {
    title: "thunderstruck",
    date: 1978,
    artists: "acdc",
    id: 1,
  },
  {
    title: "unholy",
    date: 2005,
    artists: "sam smith",
    id: 2,
  },
];

const mappedDictionaryTitle = dictionary.map((items) => {
  return <p key={items.id}>{items.title}</p>;
});
const mappedDictionaryDate = dictionary.map((items) => {
  return <p key={items.id}>{items.date}</p>;
});

const mappedDictionary = dictionary.map((items) => {
  return (
    <>
      <li key={items.id}>{items.artists}</li>
      <li key={items.id}>{items.date}</li>
    </>
  );
});

function App() {
  return (
    <>
      <div className="greetings">
        {mappedList}
        {mappedDictionaryTitle}
        {mappedDictionaryDate}
        {mappedDictionary}
        <form>
          <h2>
            {title.grettings} {title.name}
          </h2>
          <label>
            ID: <input type="number"></input>{" "}
            <button>Submit</button>
          </label>
          <br></br>
          <label htmlFor="search">Search: </label>
          <input id="search" type="text"></input>
        </form>
      </div>
    </>
  );
}

export default App;
