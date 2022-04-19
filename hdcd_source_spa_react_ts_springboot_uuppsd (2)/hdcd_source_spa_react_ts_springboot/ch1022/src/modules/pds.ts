import { createAction } from "redux-actions";
import { createReducer } from "typesafe-actions";
import { takeLatest } from "redux-saga/effects";
import * as api from "../lib/api";
import createRequestSaga from "../lib/createRequestSaga";
import { Pds } from "../App";

export const FETCH_ONE = "pds/FETCH_ONE";
const FETCH_ONE_SUCCESS = "pds/FETCH_ONE_SUCCESS";
const FETCH_ONE_FAILURE = "pds/FETCH_ONE_FAILURE";

export const FETCH_LIST = "pds/FETCH_LIST";
const FETCH_LIST_SUCCESS = "pds/FETCH_LIST_SUCCESS";
const FETCH_LIST_FAILURE = "pds/FETCH_LIST_FAILURE";

const ADD_ATTACH = "pds/ADD_ATTACH";
const REMOVE_ATTACH = "pds/REMOVE_ATTACH";
const RESET_ATTACH = "pds/RESET_ATTACH";
const FETCH_ATTACH_LIST = "pds/FETCH_ATTACH_LIST";

export const fetchOne = createAction(FETCH_ONE, (itemId: string) => itemId);
export const fetchList = createAction(FETCH_LIST);

export const addAttach = createAction(ADD_ATTACH, (attach: string) => attach);
export const removeAttach = createAction(REMOVE_ATTACH, (index: number) => index);
export const resetAttach = createAction(RESET_ATTACH);
export const fetchAttachList = createAction(FETCH_ATTACH_LIST, (data: string) => data);

const fetchOneSaga = createRequestSaga(FETCH_ONE, api.fetchPds);
const fetchListSaga = createRequestSaga(FETCH_LIST, api.fetchPdsList);

export function* pdsSaga() {
  yield takeLatest(FETCH_ONE, fetchOneSaga);
  yield takeLatest(FETCH_LIST, fetchListSaga);
}

export interface PdsState {
  pdsItem: Pds | null;
  pdsItems: Pds[];
  attachments: string[];
  error: any;
}

const initialState: PdsState = {
  pdsItem: null,
  pdsItems: [],
  attachments: [],
  error: null,
};

const pds = createReducer(
  initialState,
  {
    [FETCH_ONE]: (state) => ({
      ...state,
      pdsItem: null,
    }),
    [FETCH_ONE_SUCCESS]: (state, action) => ({
      ...state,
      pdsItem: action.payload,
    }),
    [FETCH_ONE_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [FETCH_LIST]: (state) => ({
      ...state,
      pdsItems: [],
    }),
    [FETCH_LIST_SUCCESS]: (state, action) => ({
      ...state,
      pdsItems: action.payload,
    }),
    [FETCH_LIST_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [ADD_ATTACH]: (state, {payload: attach}) => {
      const newAttach = state.attachments.concat(attach);
      return {
        ...state,
        attachments: newAttach,
      }
    },
    [REMOVE_ATTACH]: (state, {payload: index}) => {
      const attachmentsClone = [...state.attachments];
  
      attachmentsClone.splice(index, 1);

      return {
        ...state,
        attachments: attachmentsClone,
      }
    },
    [FETCH_ATTACH_LIST]: (state, action) => ({
      ...state,
      attachments: action.payload,
    }),
    [RESET_ATTACH]: (state) => ({
      ...state,
      attachments: [],
    }),
  },
);

export default pds;
