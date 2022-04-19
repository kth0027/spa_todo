import React from "react";
import "./App.css";

function App() {
  const hobbyArray = [
    { id: 1, name: "Sports" },
    { id: 2, name: "Music" },
    { id: 3, name: "Movie" },
  ];

  const hobbyList = hobbyArray.map((hobby) => (
    <li key={hobby.id}>{hobby.name}</li>
  ));

  console.log(hobbyList);

  return <ul>{hobbyList}</ul>;
}

export default App;
