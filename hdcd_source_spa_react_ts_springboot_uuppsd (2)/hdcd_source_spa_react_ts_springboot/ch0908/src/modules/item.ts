import { createReducer } from "typesafe-actions";
import { Item } from "../App";
import { createAction } from "redux-actions";
import { takeLatest, call, put } from "redux-saga/effects";
import { fetchItemApi } from "../lib/api";
import {
  startLoading,
  endLoading,
} from "./loading";
import { AxiosResponse } from "axios";

const FETCH_SUCCESS = "item/FETCH_SUCCESS";
const FETCH_FAILURE = "item/FETCH_FAILURE";

export const FETCH_ITEM = "item/FETCH_ITEM";

export const fetchSuccess = createAction(FETCH_SUCCESS, (data: string) => data);
export const fetchFailure = createAction(FETCH_FAILURE, (err: any) => err);

export const fetchItem = createAction(FETCH_ITEM, (itemId: string) => itemId);

function* fetchItemSaga(action: ReturnType<typeof fetchItem>) {
  yield put(startLoading(FETCH_ITEM));
  try {
    const response: AxiosResponse = yield call(fetchItemApi, action.payload);
    yield put(fetchSuccess(response.data));
  } catch (e) {
    yield put(fetchFailure(e));
  }
  yield put(endLoading(FETCH_ITEM));
}

export function* itemSaga() {
  yield takeLatest(FETCH_ITEM, fetchItemSaga);
}

export interface ItemState {
  item: Item;
  items: Item[];
  error: any;
}

const initialState: ItemState = {
  item: { itemId: '', itemName: '', price: 0, description: '' },
  items: [],
  error: null,
};

const item = createReducer(
  initialState,
  {
    [FETCH_SUCCESS]: (state, action) => ({
      ...state,
      item: action.payload,
    }),
    [FETCH_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
);

export default item;
