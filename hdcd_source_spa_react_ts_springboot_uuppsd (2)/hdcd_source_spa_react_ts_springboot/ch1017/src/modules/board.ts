import { createAction } from "redux-actions";
import { createReducer } from "typesafe-actions";
import { takeLatest } from "redux-saga/effects";
import * as api from "../lib/api";
import createRequestSaga from "../lib/createRequestSaga";
import { Board } from "../App";

export const FETCH_ONE = "board/FETCH_ONE";
const FETCH_ONE_SUCCESS = "board/FETCH_ONE_SUCCESS";
const FETCH_ONE_FAILURE = "board/FETCH_ONE_FAILURE";

export const FETCH_LIST = "board/FETCH_LIST";
const FETCH_LIST_SUCCESS = "board/FETCH_LIST_SUCCESS";
const FETCH_LIST_FAILURE = "board/FETCH_LIST_FAILURE";

export const fetchOne = createAction(FETCH_ONE, (boardNo: string) => boardNo);
export const fetchList = createAction(FETCH_LIST);

const fetchOneSaga = createRequestSaga(FETCH_ONE, api.fetchBoard);
const fetchListSaga = createRequestSaga(FETCH_LIST, api.fetchBoardList);

export function* boardSaga() {
  yield takeLatest(FETCH_ONE, fetchOneSaga);
  yield takeLatest(FETCH_LIST, fetchListSaga);
}

export interface BoardState {
  board: Board | null;
  boards: Board[];
  error: any;
}

const initialState: BoardState = {
  board: null,
  boards: [],
  error: null,
};

const board = createReducer(
  initialState,
  {
    [FETCH_ONE]: (state) => ({
      ...state,
      board: null,
    }),
    [FETCH_ONE_SUCCESS]: (state, action) => ({
      ...state,
      board: action.payload,
    }),
    [FETCH_ONE_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [FETCH_LIST]: (state) => ({
      ...state,
      boards: [],
    }),
    [FETCH_LIST_SUCCESS]: (state, action) => ({
      ...state,
      boards: action.payload,
    }),
    [FETCH_LIST_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
);

export default board;
