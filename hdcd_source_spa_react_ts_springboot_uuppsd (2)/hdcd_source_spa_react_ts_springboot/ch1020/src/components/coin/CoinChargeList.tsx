import React from "react";
import styles from "../../Shop.module.css";
import { ChargeCoin } from "../../App";

interface Props {
  readonly chargeCoins: ChargeCoin[];
  readonly isLoading: boolean;
}

function CoinChargeList({ chargeCoins, isLoading }: Props) {
  return (
    <div className={styles.centered}>
      <h2>충전 내역</h2>
      {isLoading && "로딩중..."}
      {!isLoading && chargeCoins && (
        <>
          <table className={styles.shop_table}>
            <thead>
              <tr>
                <th align="center" className={styles.w_80}>번호</th>
                <th align="center" className={styles.w_300}>충전금액</th>
                <th align="center" className={styles.w_180}>등록일시</th>
              </tr>
            </thead>
            <tbody>
              {!chargeCoins.length && (
                <tr>
                  <td colSpan={3}>
                    List is empty.
                  </td>
                </tr>
              )}
              {!!chargeCoins.length && chargeCoins.map((chargeCoin) => (
                <tr key={chargeCoin.historyNo}>
                  <td align="center">{chargeCoin.historyNo}</td>
                  <td align="left">{chargeCoin.amount}</td>
                  <td align="center">{chargeCoin.regDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default CoinChargeList;
