import { createReducer } from "typesafe-actions";
import { Board } from "../App"

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
  {},
);

export default board;
