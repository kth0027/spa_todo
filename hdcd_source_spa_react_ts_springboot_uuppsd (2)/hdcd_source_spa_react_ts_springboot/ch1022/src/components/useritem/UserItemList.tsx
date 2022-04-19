import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import styles from "../../Shop.module.css";
import { UserItem } from "../../App";

interface Props {
  readonly userItems: UserItem[];
  readonly isLoading: boolean;
  readonly onDownload: (userItemNo: string) => void;
}

function UserItemList({ 
  userItems, 
  isLoading, 
  onDownload 
}: Props) {
  const handleClickDownload = useCallback((userItemNo: string) => {
    onDownload(userItemNo);
  }, [onDownload]);

  return (
    <div className={styles.centered}>
      <h2>구매상품 목록</h2>
      {isLoading && "로딩중..."}
      {!isLoading && userItems && (
        <>
          <table className={styles.shop_table}>
            <thead>
              <tr>
                <th align="center" className={styles.w_80}>번호</th>
                <th align="center" className={styles.w_100}>상품명</th>
                <th align="center" className={styles.w_100}>상품가격</th>
                <th align="center" className={styles.w_100}>구매일시</th>
                <th align="center" className={styles.w_180}>다운로드</th>
              </tr>
            </thead>
            <tbody>
              {!userItems.length && (
                <tr>
                  <td colSpan={5}>
                    List is empty.
                  </td>
                </tr>
              )}
              {!!userItems.length && userItems.map((userItem) => (
                <tr key={userItem.userItemNo}>
                  <td align="center">{userItem.userItemNo}</td>
                  <td align="left">
                    <Link to={`/useritem/read/${userItem.userItemNo}`}>
                      {userItem.itemName}
                    </Link>
                  </td>
                  <td align="right">{userItem.price}</td>
                  <td align="center">{userItem.regDate}</td>
                  <td align="center"><span onClick={() => handleClickDownload(userItem.userItemNo)}>DOWNLOAD</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default UserItemList;
