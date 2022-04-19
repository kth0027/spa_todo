import { createAction } from "redux-actions";
import { createReducer } from "typesafe-actions";
import { takeLatest } from "redux-saga/effects";
import * as api from "../lib/api";
import createRequestSaga from "../lib/createRequestSaga";
import { ChargeCoin } from "../App";

export const FETCH_CHARGE_LIST = "coin/FETCH_CHARGE_LIST";
const FETCH_CHARGE_LIST_SUCCESS = "coin/FETCH_CHARGE_LIST_SUCCESS";
const FETCH_CHARGE_LIST_FAILURE = "coin/FETCH_CHARGE_LIST_FAILURE";

export const fetchChargeList = createAction(FETCH_CHARGE_LIST);

const fetchChargeListSaga = createRequestSaga(FETCH_CHARGE_LIST, api.fetchChargeCoinList);

export function* coinSaga() {
  yield takeLatest(FETCH_CHARGE_LIST, fetchChargeListSaga);
}

export interface CoinState {
  chargeCoins: ChargeCoin[];
  error: any;
}

const initialState: CoinState = {
  chargeCoins: [],
  error: null,
};

const coin = createReducer(
  initialState,
  {
    [FETCH_CHARGE_LIST]: (state) => ({
      ...state,
      chargeCoins: [],
    }),
    [FETCH_CHARGE_LIST_SUCCESS]: (state, action) => ({
      ...state,
      chargeCoins: action.payload,
    }),
    [FETCH_CHARGE_LIST_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
);

export default coin;
