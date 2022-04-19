import React from 'react';
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import AdminSetupPage from "./pages/member/AdminSetupPage";
import CodeGroupListPage from "./pages/codegroup/CodeGroupListPage";
import CodeGroupRegisterPage from "./pages/codegroup/CodeGroupRegisterPage";
import CodeGroupModifyPage from "./pages/codegroup/CodeGroupModifyPage";
import CodeGroupReadPage from "./pages/codegroup/CodeGroupReadPage";
import CodeDetailListPage from "./pages/codedetail/CodeDetailListPage";
import CodeDetailRegisterPage from "./pages/codedetail/CodeDetailRegisterPage";
import CodeDetailModifyPage from "./pages/codedetail/CodeDetailModifyPage";
import CodeDetailReadPage from "./pages/codedetail/CodeDetailReadPage";
import MemberListPage from "./pages/member/MemberListPage";
import MemberRegisterPage from "./pages/member/MemberRegisterPage";
import MemberModifyPage from "./pages/member/MemberModifyPage";
import MemberReadPage from "./pages/member/MemberReadPage";

export interface LoginInput {
  userId: string;
  password: string;
}

export interface AuthInfo {
  auth: string;
}

export interface MyInfo {
  userName: string;
  authList: AuthInfo[];
}

export interface CodeGroup {
  groupCode: string;
  groupName: string;
  regDate: string;
}

export interface CodeDetailKey {
  groupCode: string;
  codeValue: string;
}

export interface CodeDetail {
  groupCode: string;
  codeValue: string;
  codeName: string;
  sortSeq: number;
  regDate: string;
}

export interface CodeValue {
  label: string;
  value: string;
}

export interface Member {
  userNo: string;
  userId: string;
  userPw: string;
  userName: string;
  job: string;
  authList: AuthInfo[];
  regDate: string;
}

export interface UserAuth {
  userNo: string;
  auth: string;
}

export interface UserObject {
  userId: string;
  userPw: string;
  userName: string;
  job: string;
  authList: UserAuth[];
}

function App() {
  return (
    <>
      <Route component={HomePage} path="/" exact />
      <Route component={SignInPage} path="/signin" exact />
      <Route component={SignUpPage} path="/signup" exact />
      <Route component={AdminSetupPage} path="/member/setup" />
      <Route component={CodeGroupListPage} path="/codegroup" exact />
      <Route component={CodeGroupRegisterPage} path="/codegroup/create" />
      <Route component={CodeGroupModifyPage} path="/codegroup/edit/:groupCode" />
      <Route component={CodeGroupReadPage} path="/codegroup/read/:groupCode" />
      <Route component={CodeDetailListPage} path="/codedetail" exact />
      <Route component={CodeDetailRegisterPage} path="/codedetail/create" />
      <Route component={CodeDetailModifyPage} path="/codedetail/edit/:groupCode/:codeValue" />
      <Route component={CodeDetailReadPage} path="/codedetail/read/:groupCode/:codeValue" />
      <Route component={MemberListPage} path="/member" exact />
      <Route component={MemberRegisterPage} path="/member/create" />
      <Route component={MemberModifyPage} path="/member/edit/:userNo" />
      <Route component={MemberReadPage} path="/member/read/:userNo" />
    </>
  );
}

export default App;
