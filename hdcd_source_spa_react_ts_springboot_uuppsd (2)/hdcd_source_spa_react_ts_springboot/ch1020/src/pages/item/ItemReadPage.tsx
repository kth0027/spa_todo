import React from "react";
import ItemReadContainer from "../../containers/item/ItemReadContainer";
import MainLayout from "../../layout/MainLayout";
import { useParams } from 'react-router-dom';

function ItemReadPage() {
  const { itemId }: { itemId: string } = useParams();

  return (
    <MainLayout>
      <ItemReadContainer itemId={itemId} />
    </MainLayout>
  );
}

export default ItemReadPage;
