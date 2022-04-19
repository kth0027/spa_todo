import React from "react";
import UserItemReadContainer from "../../containers/useritem/UserItemReadContainer";
import MainLayout from "../../layout/MainLayout";
import { useParams } from 'react-router-dom';

function UserItemReadPage() {
  const { userItemNo }: { userItemNo: string } = useParams();
  
  return (
    <MainLayout>
      <UserItemReadContainer userItemNo={userItemNo} />
    </MainLayout>
  );
}

export default UserItemReadPage;
