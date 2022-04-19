import { createAction } from "redux-actions";
import { createReducer } from "typesafe-actions";
import { takeLatest } from "redux-saga/effects";
import * as api from "../lib/api";
import createRequestSaga from "../lib/createRequestSaga";
import { Item } from "../App";

export const FETCH_ONE = "item/FETCH_ONE";
const FETCH_ONE_SUCCESS = "item/FETCH_ONE_SUCCESS";
const FETCH_ONE_FAILURE = "item/FETCH_ONE_FAILURE";

export const FETCH_LIST = "item/FETCH_LIST";
const FETCH_LIST_SUCCESS = "item/FETCH_LIST_SUCCESS";
const FETCH_LIST_FAILURE = "item/FETCH_LIST_FAILURE";

export const fetchOne = createAction(FETCH_ONE, (itemId: string) => itemId);
export const fetchList = createAction(FETCH_LIST);

const fetchOneSaga = createRequestSaga(FETCH_ONE, api.fetchItem);
const fetchListSaga = createRequestSaga(FETCH_LIST, api.fetchItemList);

export function* itemSaga() {
  yield takeLatest(FETCH_ONE, fetchOneSaga);
  yield takeLatest(FETCH_LIST, fetchListSaga);
}

export interface ItemState {
  item: Item | null;
  items: Item[];
  error: any;
}

const initialState: ItemState = {
  item: null,
  items: [],
  error: null,
};

const item = createReducer(
  initialState,
  {
    [FETCH_ONE]: (state) => ({
      ...state,
      item: null,
    }),
    [FETCH_ONE_SUCCESS]: (state, action) => ({
      ...state,
      item: action.payload,
    }),
    [FETCH_ONE_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [FETCH_LIST]: (state) => ({
      ...state,
      items: [],
    }),
    [FETCH_LIST_SUCCESS]: (state, action) => ({
      ...state,
      items: action.payload,
    }),
    [FETCH_LIST_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
);

export default item;
