import React from "react";
import "./App.css";

function App() {
  const userName = "Tyler";

  return (
    <div>
      {userName === "Alex" && <h1>Alex</h1>}
      {!(userName === "Alex") && <h1>not Alex</h1>}
    </div>
  );
}

export default App;
