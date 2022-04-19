import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemRead from "../../components/item/ItemRead";
import { fetchOne, FETCH_ONE } from "../../modules/item";
import * as api from "../../lib/api";
import { isAdmin as hasRoleAdmin } from "../../modules/selector";
import { useHistory } from 'react-router-dom';
import { RootState } from "../../modules";

interface Props {
  readonly itemId: string;
}

const ItemReadContainer = ({ itemId }: Props) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { item, isLoading, isAdmin } = useSelector((state: RootState) => ({
    item: state.item.item,
    isLoading: state.loading[FETCH_ONE],
    isAdmin: hasRoleAdmin(state),
  }));

  useEffect(() => {
    dispatch(fetchOne(itemId));
  }, [dispatch, itemId]);

  const onRemove = async () => {
    try {
      await api.removeItem(itemId);

      alert("삭제가 완료되었습니다.");

      history.push("/item");
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

  const onBuy = async () => {
    try {
      const response = await api.buyItem(itemId);

      alert(response.data);
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
    <ItemRead
      item={item}
      isLoading={isLoading}
      itemId={itemId}
      onRemove={onRemove}
      isAdmin={isAdmin}
      onBuy={onBuy}
    />
  );
};

export default ItemReadContainer;
