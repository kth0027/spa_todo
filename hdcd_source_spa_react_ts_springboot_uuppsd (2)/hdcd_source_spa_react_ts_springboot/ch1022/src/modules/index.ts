import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import { AuthState } from "../modules/auth";
import { CodeGroupState } from "../modules/codegroup";
import { CodeDetailState } from "../modules/codedetail";
import { MemberState } from "../modules/member";
import { BoardState } from "../modules/board";
import { NoticeState } from "../modules/notice";
import { ItemState } from "../modules/item";
import { CoinState } from "../modules/coin";
import { UserItemState } from "../modules/useritem";
import { PdsState } from "../modules/pds";
import { LoadingState } from "../modules/loading";
import loading from "./loading";
import codegroup, { codeGroupSaga } from "./codegroup";
import codedetail, { codeDetailSaga } from "./codedetail";
import member, { memberSaga } from "./member";
import board, { boardSaga } from "./board";
import notice, { noticeSaga } from "./notice";
import item, { itemSaga } from "./item";
import coin, { coinSaga } from "./coin";
import useritem, { useritemSaga } from "./useritem";
import pds, { pdsSaga } from "./pds";

export interface RootState {
  auth: AuthState;
  codegroup: CodeGroupState;
  codedetail: CodeDetailState;
  member: MemberState,
  board: BoardState,
  notice: NoticeState,
  item: ItemState,
  coin: CoinState,
  useritem: UserItemState,
  pds: PdsState,
  loading: LoadingState;
}

const rootReducer = combineReducers({
  auth,
  loading,
  codegroup,
  codedetail,
  member,
  board,
  notice,
  item,
  coin,
  useritem,
  pds,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    codeGroupSaga(),
    codeDetailSaga(),
    memberSaga(),
    boardSaga(),
    noticeSaga(),
    itemSaga(),
    coinSaga(),
    useritemSaga(),
    pdsSaga(),
  ]);
}

export default rootReducer;
