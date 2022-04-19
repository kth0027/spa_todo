import React from "react";
import styles from "../../Shop.module.css";
import { PayCoin } from "../../App";

interface Props {
  readonly payCoins: PayCoin[];
  readonly isLoading: boolean;
}

function CoinPayList({ payCoins, isLoading }: Props) {
  return (
    <div className={styles.centered}>
      <h2>구매 내역</h2>
      {isLoading && "로딩중..."}
      {!isLoading && payCoins && (
        <>
          <table className={styles.shop_table}>
            <thead>
              <tr>
                <th align="center" className={styles.w_80}>번호</th>
                <th align="center" className={styles.w_100}>상품명</th>
                <th align="center" className={styles.w_100}>구매금액</th>
                <th align="center" className={styles.w_180}>등록일시</th>
              </tr>
            </thead>
            <tbody>
              {!payCoins.length && (
                <tr>
                  <td colSpan={4}>
                    List is empty.
                  </td>
                </tr>
              )}
              {!!payCoins.length && payCoins.map((payCoin) => (
                <tr key={payCoin.historyNo}>
                  <td align="center">{payCoin.historyNo}</td>
                  <td align="left">{payCoin.itemName}</td>
                  <td align="left">{payCoin.amount}</td>
                  <td align="center">{payCoin.regDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default CoinPayList;
