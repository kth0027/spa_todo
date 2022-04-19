import React from 'react';
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return <Route component={HomePage} path="/" exact />;
}

export default App;
