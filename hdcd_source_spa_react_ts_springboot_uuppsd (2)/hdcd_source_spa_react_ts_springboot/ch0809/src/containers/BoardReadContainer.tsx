import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoardRead from "../components/BoardRead";
import {
  readBoardThunk,
} from "../modules/board";
import { RouteComponentProps } from 'react-router-dom';
import { BoardState } from "../modules/board";

interface MatchParams {
  boardNo: string;
}

const BoardReadContainer = ({ match}: RouteComponentProps<MatchParams>) => {
  const { boardNo } = match.params;

  const dispatch = useDispatch();

  const { board, isLoading } = useSelector((state: BoardState) => ({
    board: state.board,
    isLoading: state.loading.FETCH,
  }));

  useEffect(() => {
    dispatch(readBoardThunk(boardNo));
  }, [dispatch, boardNo]);

  return (
    <BoardRead
      boardNo={boardNo}
      board={board}
      isLoading={isLoading}
    />
  );
};

export default BoardReadContainer;
