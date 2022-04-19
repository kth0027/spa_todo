import React from "react";
import "./App.css";

function App() {
  const code = "01";

  let nationality = "None";

  if (code === "01") {
    nationality = "Korea";
  } else if (code === "02") {
    nationality = "Germany";
  } else if (code === "03") {
    nationality = "Australia";
  } else {
    nationality = "None";
  }

  return <h1>Alex's nationality is {nationality}.</h1>;
}

export default App;
