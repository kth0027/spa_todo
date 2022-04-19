import React from "react";
import MemberReadContainer from "../../containers/member/MemberReadContainer";
import MainLayout from "../../layout/MainLayout";
import { useParams } from 'react-router-dom';

function MemberReadPage() {
  const { userNo }: { userNo: string } = useParams();

  return (
    <MainLayout>
      <MemberReadContainer userNo={userNo} />
    </MainLayout>
  );
}

export default MemberReadPage;
