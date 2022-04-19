import React from "react";
import "./App.css";

function App() {
  const userName = "Alex";

  let isAlex = false;

  if (userName === "Alex") {
    isAlex = true;
  } else {
    isAlex = false;
  }

  return (
    <div>
      {isAlex && <h1>Alex</h1>}
      {!isAlex && <h1>not Alex</h1>}
    </div>
  );
}

export default App;
