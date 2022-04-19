import React from "react";
import { Link } from "react-router-dom";
import styles from "../Item.module.css";

function ItemRegisterForm() {
  return (
    <div className={styles.centered}>
      <h2>상품 등록</h2>
      <form>
        <table>
          <tbody>
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
              <td>상품파일</td>
              <td>
                <input type="file" />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>상품설명</td>
              <td>
                <textarea rows={5}></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <div className={styles.align_centered}>
          <button type="submit">등록</button>
          <Link to="/">취소</Link>
        </div>
      </form>
    </div>
  );
}

export default ItemRegisterForm;
