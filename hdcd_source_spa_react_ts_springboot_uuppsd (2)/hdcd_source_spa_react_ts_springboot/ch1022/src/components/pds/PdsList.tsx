import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Shop.module.css";
import { Pds } from "../../App";

interface Props {
  readonly pdsItems: Pds[];
  readonly isLoading: boolean;
  readonly isAdmin: boolean;
}

function PdsList({ pdsItems, isLoading, isAdmin }: Props) {
  return (
    <div className={styles.centered}>
      <h2>공개자료실 목록</h2>
      {isLoading && "로딩중..."}
      {!isLoading && pdsItems && (
        <>
          {isAdmin && (
            <Link to="/pds/create">새로만들기</Link>
          )}
          <table className={styles.shop_table}>
            <thead>
              <tr>
                <th align="center" className={styles.w_80}>자료번호</th>
                <th align="center" className={styles.w_300}>자료명</th>
                <th align="center" className={styles.w_100}>조회수</th>
              </tr>
            </thead>
            <tbody>
              {!pdsItems.length && (
                <tr>
                  <td colSpan={3}>
                    List is empty.
                  </td>
                </tr>
              )}
              {!!pdsItems.length && pdsItems.map((pdsItem) => (
                <tr key={pdsItem.itemId}>
                  <td align="center">{pdsItem.itemId}</td>
                  <td align="left">
                    <Link to={`/pds/read/${pdsItem.itemId}`}>
                      {pdsItem.itemName}
                    </Link>
                  </td>
                  <td align="right">{pdsItem.viewCnt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default PdsList;
