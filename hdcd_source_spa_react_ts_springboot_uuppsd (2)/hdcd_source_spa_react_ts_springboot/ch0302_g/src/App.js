import React from "react";
import "./App.css";

function App() {
  const hobbyArray = ["Sports", "Music", "Movie"];

  const hobbyList = hobbyArray.map((hobby, index) => (
    <li key={index}>{hobby}</li>
  ));
  console.log(hobbyList);

  return <ul>{hobbyList}</ul>;
}

export default App;
