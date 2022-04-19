import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoardRead from "../components/BoardRead";
import {
  fetchStart,
  fetchSuccess,
  fetchFailure,
} from "../modules/board";
import { fetchBoardApi, removeBoardApi } from "../lib/api";
import { RouteComponentProps } from 'react-router-dom';
import { BoardState } from "../modules/board";
import { withRouter } from "react-router-dom";

interface MatchParams {
  boardNo: string;
}

const BoardReadContainer = ({ match, history }: RouteComponentProps<MatchParams>) => {
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

  const onRemove = async () => {
    try {
      await removeBoardApi(boardNo);

      alert("삭제되었습니다.");

      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    readBoard(boardNo);
  }, [boardNo, readBoard]);

  return (
    <BoardRead
      boardNo={boardNo}
      board={board}
      isLoading={isLoading}
      onRemove={onRemove}
    />
  );
};

export default withRouter(BoardReadContainer);
