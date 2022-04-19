import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoardRead from "../components/BoardRead";
import {
  fetchSuccess,
  fetchFailure,
} from "../modules/board";
import {
  startLoading,
  endLoading,
} from "../modules/loading";
import { fetchBoardApi, removeBoardApi } from "../lib/api";
import { RouteComponentProps } from 'react-router-dom';
import { RootState } from "../modules";
import { withRouter } from "react-router-dom";

interface MatchParams {
  boardNo: string;
}

const BoardReadContainer = ({ match, history }: RouteComponentProps<MatchParams>) => {
  const { boardNo } = match.params;

  const dispatch = useDispatch();

  const { board, isLoading } = useSelector(({ board, loading }: RootState) => ({
    board: board.board,
    isLoading: loading.FETCH,
  }));

  const readBoard = useCallback(async (boardNo) => {
    dispatch(startLoading("FETCH"));
    try {
      const response = await fetchBoardApi(boardNo);

      dispatch(fetchSuccess(response.data));

      dispatch(endLoading("FETCH"));
    } catch (e) {
      dispatch(fetchFailure(e));

      dispatch(endLoading("FETCH"));

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
