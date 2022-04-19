import React from "react";
import { Link } from "react-router-dom";
import styles from "../Item.module.css";

function ItemRead() {
  return (
    <div className={styles.centered}>
      <h2>상품 상세보기</h2>
      <table>
        <tbody>
          <tr>
            <td>상품번호</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>상품명</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>상품가격</td>
            <td>
              <input type="text" />
              &nbsp;원
            </td>
          </tr>
          <tr>
            <td>미리보기</td>
            <td>
              <img src="" alt="" width="200" />
            </td>
          </tr>
          <tr>
            <td>상품설명</td>
            <td>
              <textarea></textarea>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.align_centered}>
        <Link to={`/edit/200`}>편집</Link>
        <button>삭제</button>
        <Link to="/">목록</Link>
      </div>
    </div>
  );
}

export default ItemRead;
