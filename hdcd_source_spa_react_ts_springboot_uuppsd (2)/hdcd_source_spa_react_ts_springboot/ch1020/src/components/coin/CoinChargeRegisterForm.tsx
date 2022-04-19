import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import styles from "../../Shop.module.css";

interface Props {
  readonly onRegister: (amount: number) => void;
}

function CoinChargeRegisterForm({ onRegister }: Props) {
  const [amount, setAmount] = useState(0);

  const handleChangeAmount = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number.parseInt(e.target.value));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      onRegister(amount);
    },
    [amount, onRegister]
  );

  return (
    <div className={styles.centered}>
      <h2>코인 충전</h2>

      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>충전금액</td>
              <td>
                <input type="text" value={amount} onChange={handleChangeAmount} />
              </td>
            </tr>
          </tbody>
        </table>

        <div className={styles.align_center}>
          <button type="submit">충전하기</button>
          <Link to="/coin/charge">충전내역</Link>
        </div>
      </form>
    </div>
  );
}

export default CoinChargeRegisterForm;
