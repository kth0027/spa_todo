import React from "react";
import "./App.css";

function App() {
  const isDeveloper = true;

  return <h1>{isDeveloper ? "developer" : "not developer"}</h1>;
}

export default App;
