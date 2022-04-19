import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoardList from "../components/BoardList";
import {
  fetchListStart,
  fetchListSuccess,
  fetchListFailure,
} from "../modules/board";
import { fetchBoardListApi } from "../lib/api";
import { BoardState } from "../modules/board";

const BoardListContainer = () => {
  const dispatch = useDispatch();

  const { boards, isLoading } = useSelector((state: BoardState) => ({
    boards: state.boards,
    isLoading: state.loading.FETCH_LIST,
  }));

  const listBoard = useCallback(async () => {
    dispatch(fetchListStart());
    try {
      const response = await fetchBoardListApi();

      dispatch(fetchListSuccess(response.data));
    } catch (e) {
      dispatch(fetchListFailure(e));
      
      throw e;
    }
  }, [dispatch]);

  useEffect(() => {
    listBoard();
  }, [listBoard]);
  
  return <BoardList boards={boards} isLoading={isLoading} />;
};

export default BoardListContainer;
