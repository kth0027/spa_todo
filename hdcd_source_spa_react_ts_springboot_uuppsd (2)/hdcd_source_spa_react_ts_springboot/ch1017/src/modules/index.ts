import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import { AuthState } from "../modules/auth";
import { CodeGroupState } from "../modules/codegroup";
import { CodeDetailState } from "../modules/codedetail";
import { MemberState } from "../modules/member";
import { BoardState } from "../modules/board";
import { LoadingState } from "../modules/loading";
import loading from "./loading";
import codegroup, { codeGroupSaga } from "./codegroup";
import codedetail, { codeDetailSaga } from "./codedetail";
import member, { memberSaga } from "./member";
import board, { boardSaga } from "./board";

export interface RootState {
  auth: AuthState;
  codegroup: CodeGroupState;
  codedetail: CodeDetailState;
  member: MemberState,
  board: BoardState,
  loading: LoadingState;
}

const rootReducer = combineReducers({
  auth,
  loading,
  codegroup,
  codedetail,
  member,
  board,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    codeGroupSaga(),
    codeDetailSaga(),
    memberSaga(),
    boardSaga(),
  ]);
}

export default rootReducer;
