import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemModifyForm from "../components/ItemModifyForm";
import { withRouter } from "react-router-dom";
import {
  fetchItem,
  FETCH_ITEM,
} from "../modules/item";
import axios from "axios";
import { RouteComponentProps } from 'react-router-dom';
import { RootState } from "../modules";

interface MatchParams {
  itemId: string;
}

const ItemModifyContainer = ({ match, history }: RouteComponentProps<MatchParams>) => {
  const { itemId } = match.params;

  const dispatch = useDispatch();
  
  const { item, isLoading } = useSelector(({ item, loading }: RootState) => ({
    item: item.item,
    isLoading: loading[FETCH_ITEM],
  }));

  const onModify = (itemName: string, price: number, description: string, file?: File) => {
    const itemObject = {
      itemId: itemId,
      itemName: itemName,
      price: price,
      description: description,
    };

    const formData = new FormData();

    if(file) {
      formData.append("file", file);
    }
    formData.append("item", JSON.stringify(itemObject));

    axios.put("/items", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      alert("수정되었습니다.");

      history.push("/read/" + itemId);
    })
    .catch((err) => {
      alert(err.response.data.msg);
    });
  };

  useEffect(() => {
    dispatch(fetchItem(itemId));
  }, [dispatch, itemId]);

  return (
    <ItemModifyForm
      item={item}
      isLoading={isLoading}
      onModify={onModify}
    />
  );
};

export default withRouter(ItemModifyContainer);
