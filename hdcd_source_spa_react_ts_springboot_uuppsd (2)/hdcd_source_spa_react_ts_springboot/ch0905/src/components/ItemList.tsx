import React from "react";
import { Link } from "react-router-dom";
import styles from "../Item.module.css";

function ItemList() {
  return (
    <div className={styles.centered}>
      <h2>상품 목록</h2>
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
          <tr>
            <td align="center">100</td>
            <td align="left">
              <Link to={`/read/100`}>풍경사진</Link>
            </td>
            <td align="right">1000 원</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ItemList;
