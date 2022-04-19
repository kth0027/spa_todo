import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoardRead from "../components/BoardRead";
import {
  fetchStart,
  fetchSuccess,
  fetchFailure,
} from "../modules/board";
import { fetchBoardApi } from "../lib/api";
import { RouteComponentProps } from 'react-router-dom';
import { BoardState } from "../modules/board";

interface MatchParams {
  boardNo: string;
}

const BoardReadContainer = ({ match }: RouteComponentProps<MatchParams>) => {
  const { boardNo } = match.params;

  const dispatch = useDispatch();

  const { board, isLoading } = useSelector((state: BoardState) => ({
    board: state.board,
    isLoading: state.loading.FETCH,
  }));

  const readBoard = useCallback(async (boardNo) => {
    dispatch(fetchStart());
    try {
      const response = await fetchBoardApi(boardNo);

      dispatch(fetchSuccess(response.data));
    } catch (e) {
      dispatch(fetchFailure(e));

      throw e;
    }
  }, [dispatch]);

  useEffect(() => {
    readBoard(boardNo);
  }, [boardNo, readBoard]);

  return (
    <BoardRead
      boardNo={boardNo}
      board={board}
      isLoading={isLoading}
    />
  );
};

export default BoardReadContainer;
