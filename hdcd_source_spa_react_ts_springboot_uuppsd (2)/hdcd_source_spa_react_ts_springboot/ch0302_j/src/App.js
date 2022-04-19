import React from "react";
import "./App.css";

function App() {
  const isDeveloper = true;

  return (
    <div>
      {isDeveloper && <h1>developer</h1>}
      {!isDeveloper && <h1>not developer</h1>}
    </div>
  );
}

export default App;
