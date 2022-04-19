import React from "react";
import ItemModifyContainer from "../../containers/item/ItemModifyContainer";
import MainLayout from "../../layout/MainLayout";
import { useParams } from 'react-router-dom';

function ItemModifyPage() {
  const { itemId }: { itemId: string } = useParams();

  return (
    <MainLayout>
      <ItemModifyContainer itemId={itemId} />
    </MainLayout>
  );
}

export default ItemModifyPage;
