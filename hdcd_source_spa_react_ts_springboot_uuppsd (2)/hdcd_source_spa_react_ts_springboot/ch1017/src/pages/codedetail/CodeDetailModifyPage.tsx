import React from "react";
import CodeDetailModifyContainer from "../../containers/codedetail/CodeDetailModifyContainer";
import MainLayout from "../../layout/MainLayout";
import { useParams } from 'react-router-dom';

function CodeDetailModifyPage() {
  const { groupCode, codeValue }: { groupCode: string, codeValue: string } = useParams();

  return (
    <MainLayout>
      <CodeDetailModifyContainer groupCode={groupCode} codeValue={codeValue} />
    </MainLayout>
  );
}

export default CodeDetailModifyPage;
