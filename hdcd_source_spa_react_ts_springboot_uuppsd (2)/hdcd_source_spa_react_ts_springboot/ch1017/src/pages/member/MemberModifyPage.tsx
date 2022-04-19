import React from "react";
import MemberModifyContainer from "../../containers/member/MemberModifyContainer";
import MainLayout from "../../layout/MainLayout";
import { useParams } from 'react-router-dom';

function MemberModifyPage() {
  const { userNo }: { userNo: string } = useParams();

  return (
    <MainLayout>
      <MemberModifyContainer userNo={userNo} />
    </MainLayout>
  );
}

export default MemberModifyPage;
