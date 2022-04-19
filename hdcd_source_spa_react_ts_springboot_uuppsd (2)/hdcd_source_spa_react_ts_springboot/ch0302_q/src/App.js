import React from "react";
import "./App.css";

function App() {
  const code = "01";

  const getNationality = (code) => {
    if (code === "01") {
      return "Korea";
    } else if (code === "02") {
      return "Germany";
    } else if (code === "03") {
      return "Australia";
    } else {
      return "None";
    }
  };

  return <h1>Alex's nationality is {getNationality(code)}.</h1>;
}

export default App;
