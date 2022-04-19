import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import UserItemList from "../../components/useritem/UserItemList";
import { fetchList, FETCH_LIST } from "../../modules/useritem";
import * as api from "../../lib/api";
import { useHistory } from 'react-router-dom';
import { RootState } from "../../modules";

const UserItemListContainer = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { userItems, isLoading } = useSelector(({ useritem, loading }: RootState) => ({
    userItems: useritem.userItems,
    isLoading: loading[FETCH_LIST],
  }));

  const onDownload = async (userItemNo: string) => {
    try {
      const response = await api.downloadUserItem(userItemNo);

      const contentDisposition = response.request.getResponseHeader("Content-Disposition")
          
      const downloadFilename = contentDisposition.substring(22, contentDisposition.length - 1)
      const decodedDownloadFilename = decodeURIComponent(escape(downloadFilename))
      
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', decodedDownloadFilename)
      document.body.appendChild(link)
      link.click()
    } catch (e: any) {
      if (e.response.status === 400) {
        alert("잘못된 요청입니다.");
      } else if (e.response.status === 401) {
        alert("로그인이 필요합니다.");
        history.push("/signin");
      } else if (e.response.status === 403) {
        alert("접근 권한이 없습니다.");
        history.goBack();
      } else {
        alert(e.response.data.message);
      }
    }
  };

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  return (
    <UserItemList 
      userItems={userItems} 
      isLoading={isLoading} 
      onDownload={onDownload}
    />
  );
};

export default withRouter(UserItemListContainer);
