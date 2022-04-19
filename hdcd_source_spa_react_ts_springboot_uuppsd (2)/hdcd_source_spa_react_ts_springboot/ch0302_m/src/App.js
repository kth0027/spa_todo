import React from "react";
import "./App.css";

function App() {
  const userName = "Alex";

  return <div>{userName === "Alex" ? <h1>Alex</h1> : <h1>not Alex</h1>}</div>;
}

export default App;
