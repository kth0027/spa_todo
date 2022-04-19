import React from "react";
import { Link } from "react-router-dom";
import styles from "../Item.module.css";
import { Item } from "../App";

interface Props {
  readonly items: Item[];
  readonly isLoading: boolean;
}

function ItemList({ items, isLoading }: Props) {
  return (
    <div className={styles.centered}>
      <h2>상품 목록</h2>
      {isLoading && "로딩중..."}
      {!isLoading && items && (
        <>
          <Link to="/create">새로만들기</Link>
          <table className={styles.item_table}>
            <thead>
              <tr>
                <th align="center" className={styles.item_id}>
                  상품아이디
                </th>
                <th align="center" className={styles.item_name}>
                  상품명
                </th>
                <th align="center" className={styles.item_price}>
                  상품가격
                </th>
              </tr>
            </thead>
            <tbody>
              {!items.length && (
                <tr>
                  <td colSpan={3}>
                    List is empty.
                  </td>
                </tr>
              )}
              {!!items.length && items.map((item) => (
                <tr key={item.itemId}>
                  <td align="center">{item.itemId}</td>
                  <td align="left">
                    <Link to={`/read/${item.itemId}`}>{item.itemName}</Link>
                  </td>
                  <td align="right">{item.price} 원</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default ItemList;
