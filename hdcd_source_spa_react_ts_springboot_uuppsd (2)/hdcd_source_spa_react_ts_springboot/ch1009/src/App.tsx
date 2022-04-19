import React from 'react';
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/auth/SignInPage";
import AdminSetupPage from "./pages/member/AdminSetupPage";

export interface LoginInput {
  userId: string;
  password: string;
}

function App() {
  return (
    <>
      <Route component={HomePage} path="/" exact />
      <Route component={SignInPage} path="/signin" exact />
      <Route component={AdminSetupPage} path="/member/setup" />
    </>
  );
}

export default App;
