import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [userName, setUserName] = useState("Alex");

  useEffect(() => {
    console.log("useEffect");
    console.log("userName : " + userName);
  }, []);

  const handleClickTyler = () => setUserName("Tyler");
  const handleClickJulian = () => setUserName("Julian");

  return (
    <div>
      <h1>Hello {userName}!</h1>;
      <button onClick={handleClickTyler}>Tyler</button>
      <button onClick={handleClickJulian}>Julian</button>
    </div>
  );
};

export default App;
