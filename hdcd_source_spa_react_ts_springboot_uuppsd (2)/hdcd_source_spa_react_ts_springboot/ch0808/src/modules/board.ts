import { createReducer } from 'typesafe-actions';
import { Board } from "../App";
import { createAction } from "redux-actions";
import { fetchBoardApi } from "../lib/api";
import { Dispatch } from 'redux';

const FETCH = "board/FETCH";
const FETCH_SUCCESS = "board/FETCH_SUCCESS";
const FETCH_FAILURE = "board/FETCH_FAILURE";

export const fetchStart = createAction(FETCH);
export const fetchSuccess = createAction(FETCH_SUCCESS, (data: string) => data);
export const fetchFailure = createAction(FETCH_FAILURE, (err: any) => err);

export const readBoardThunk = (boardNo: string) => async (dispatch: Dispatch) => {
  dispatch(fetchStart());
  try {
    const response = await fetchBoardApi(boardNo);

    dispatch(fetchSuccess(response.data));
  } catch (e) {
    dispatch(fetchFailure(e));

    throw e;
  }
};

export interface BoardState {
  loading: { FETCH: boolean, FETCH_LIST: boolean};
  board: Board;
  boards: Board[];
  error: any;
}

const initialState: BoardState = {
  loading: {
    FETCH: false,
    FETCH_LIST: false,
  },
  board: { boardNo: '', title: '', writer: '', content: '', regDate: '' },
  boards: [],
  error: null,
};

const board = createReducer(
  initialState,
  {
    [FETCH]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        FETCH: true,
      },
    }),
    [FETCH_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        FETCH: false,
      },
      board: action.payload,
    }),
    [FETCH_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        FETCH: false,
      },
      error: action.payload,
    }),
  },
);

export default board;
