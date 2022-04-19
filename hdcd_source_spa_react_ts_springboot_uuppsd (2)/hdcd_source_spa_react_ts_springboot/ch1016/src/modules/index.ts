import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import { AuthState } from "../modules/auth";
import { CodeGroupState } from "../modules/codegroup";
import { CodeDetailState } from "../modules/codedetail";
import { MemberState } from "../modules/member";
import { LoadingState } from "../modules/loading";
import loading from "./loading";
import codegroup, { codeGroupSaga } from "./codegroup";
import codedetail, { codeDetailSaga } from "./codedetail";
import member, { memberSaga } from "./member";

export interface RootState {
  auth: AuthState;
  codegroup: CodeGroupState;
  codedetail: CodeDetailState;
  member: MemberState,
  loading: LoadingState;
}

const rootReducer = combineReducers({
  auth,
  loading,
  codegroup,
  codedetail,
  member,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    codeGroupSaga(),
    codeDetailSaga(),
    memberSaga(),
  ]);
}

export default rootReducer;
