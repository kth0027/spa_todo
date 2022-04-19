import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MemberRead from "../../components/member/MemberRead";
import { fetchOne, FETCH_ONE } from "../../modules/member";
import * as api from "../../lib/api";
import { useHistory } from 'react-router-dom';
import { RootState } from "../../modules";

interface Props {
  readonly userNo: string;
}

const MemberReadContainer = ({ userNo }: Props) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { member, isLoading } = useSelector(({ member, loading }: RootState) => ({
    member: member.member,
    isLoading: loading[FETCH_ONE],
  }));

  useEffect(() => {
    dispatch(fetchOne(userNo));
  }, [dispatch, userNo]);

  const onRemove = async () => {
    try {
      await api.removeMember(userNo);

      alert("삭제가 완료되었습니다.");

      history.push("/member");
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

  return (
    <MemberRead
      member={member}
      isLoading={isLoading}
      userNo={userNo}
      onRemove={onRemove}
    />
  );
};

export default MemberReadContainer;
