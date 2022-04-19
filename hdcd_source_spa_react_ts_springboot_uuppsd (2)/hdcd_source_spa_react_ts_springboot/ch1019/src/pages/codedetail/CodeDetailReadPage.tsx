import React from "react";
import CodeDetailReadContainer from "../../containers/codedetail/CodeDetailReadContainer";
import MainLayout from "../../layout/MainLayout";
import { useParams } from 'react-router-dom';

function CodeDetailReadPage() {
  const { groupCode, codeValue }: { groupCode: string, codeValue: string } = useParams();

  return (
    <MainLayout>
      <CodeDetailReadContainer groupCode={groupCode} codeValue={codeValue} />
    </MainLayout>
  );
}

export default CodeDetailReadPage;
