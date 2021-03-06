import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MemberList from "../../components/member/MemberList";
import { fetchList, FETCH_LIST } from "../../modules/member";
import { RootState } from "../../modules";

const MemberListContainer = () => {
  const dispatch = useDispatch();

  const { members, isLoading } = useSelector(({ member, loading }: RootState) => ({
    members: member.members,
    isLoading: loading[FETCH_LIST],
  }));

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  return <MemberList members={members} isLoading={isLoading} />;
};

export default MemberListContainer;
