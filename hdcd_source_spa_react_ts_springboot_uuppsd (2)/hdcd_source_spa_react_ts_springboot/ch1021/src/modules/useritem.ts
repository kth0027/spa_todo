import { createAction } from "redux-actions";
import { createReducer } from "typesafe-actions";
import { takeLatest } from "redux-saga/effects";
import * as api from "../lib/api";
import createRequestSaga from "../lib/createRequestSaga";
import { UserItem } from "../App";

export const FETCH_ONE = "useritem/FETCH_ONE";
const FETCH_ONE_SUCCESS = "useritem/FETCH_ONE_SUCCESS";
const FETCH_ONE_FAILURE = "useritem/FETCH_ONE_FAILURE";

export const FETCH_LIST = "useritem/FETCH_LIST";
const FETCH_LIST_SUCCESS = "useritem/FETCH_LIST_SUCCESS";
const FETCH_LIST_FAILURE = "useritem/FETCH_LIST_FAILURE";

export const fetchOne = createAction(FETCH_ONE, (userItemNo: string) => userItemNo);
export const fetchList = createAction(FETCH_LIST);

const fetchOneSaga = createRequestSaga(FETCH_ONE, api.fetchUserItem);
const fetchListSaga = createRequestSaga(FETCH_LIST, api.fetchUserItemList);

export function* useritemSaga() {
  yield takeLatest(FETCH_ONE, fetchOneSaga);
  yield takeLatest(FETCH_LIST, fetchListSaga);
}

export interface UserItemState {
  userItem: UserItem | null;
  userItems: UserItem[];
  error: any;
}

const initialState: UserItemState = {
  userItem: null,
  userItems: [],
  error: null,
};

const useritem = createReducer(
  initialState,
  {
    [FETCH_ONE]: (state) => ({
      ...state,
      userItem: null,
    }),
    [FETCH_ONE_SUCCESS]: (state, action) => ({
      ...state,
      userItem: action.payload,
    }),
    [FETCH_ONE_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [FETCH_LIST]: (state) => ({
      ...state,
      userItems: [],
    }),
    [FETCH_LIST_SUCCESS]: (state, action) => ({
      ...state,
      userItems: action.payload,
    }),
    [FETCH_LIST_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
);

export default useritem;
