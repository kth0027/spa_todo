import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CodeDetailList from "../../components/codedetail/CodeDetailList";
import { fetchList, FETCH_LIST } from "../../modules/codedetail";
import { RootState } from "../../modules";

const CodeDetailListContainer = () => {
  const dispatch = useDispatch();

  const { codeDetails, isLoading } = useSelector(({ codedetail, loading }: RootState) => ({
    codeDetails: codedetail.codeDetails,
    isLoading: loading[FETCH_LIST],
  }));

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  return <CodeDetailList codeDetails={codeDetails} isLoading={isLoading} />;
};

export default CodeDetailListContainer;
