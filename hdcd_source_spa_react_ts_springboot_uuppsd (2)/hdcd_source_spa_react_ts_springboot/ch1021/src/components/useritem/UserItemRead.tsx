import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Shop.module.css";
import { UserItem } from "../../App";

interface Props {
  readonly userItem: UserItem | null;
  readonly isLoading: boolean;
}

function UserItemRead({ userItem, isLoading }: Props) {
  const pictureUrl = () => {
    if(!userItem) {
      return "";
    }

    return (
      "/items/display?itemId=" + userItem.itemId + "&timestamp=" + new Date().getTime()
    );
  };

  return (
    <div className={styles.centered}>
      <h2>구매상품 상세보기</h2>
      {isLoading && "로딩중..."}
      {!isLoading && userItem && (
        <>
          <table>
            <tbody>
              <tr>
                <td>상품번호</td>
                <td>
                  <input type="text" value={userItem.userItemNo} readOnly />
                </td>
              </tr>
              <tr>
                <td>상품명</td>
                <td>
                  <input type="text" value={userItem.itemName} readOnly />
                </td>
              </tr>
              <tr>
                <td>상품가격</td>
                <td>
                  <input type="text" value={userItem.price} readOnly />
                </td>
              </tr>
              <tr>
                <td>상품파일</td>
                <td>
                  <img src={pictureUrl()} alt="" width="200" />
                </td>
              </tr>
              <tr>
                <td>상품설명</td>
                <td>
                  <textarea value={userItem.description} readOnly></textarea>
                </td>
              </tr>
            </tbody>
          </table>

          <Link to="/useritem">목록</Link>
        </>
      )}
    </div>
  );
}

export default UserItemRead;
