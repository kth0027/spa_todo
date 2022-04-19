import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoticeList from "../../components/notice/NoticeList";
import { fetchList, FETCH_LIST } from "../../modules/notice";
import { isAdmin as hasRoleAdmin } from "../../modules/selector";
import { RootState } from "../../modules";

const NoticeListContainer = () => {
  const dispatch = useDispatch();

  const { notices, isLoading, isAdmin } = useSelector((state: RootState) => ({
    notices: state.notice.notices,
    isLoading: state.loading[FETCH_LIST],
    isAdmin: hasRoleAdmin(state),
  }));

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  return (
    <NoticeList 
      notices={notices} 
      isLoading={isLoading} 
      isAdmin={isAdmin}
    />
  );
};

export default NoticeListContainer;
