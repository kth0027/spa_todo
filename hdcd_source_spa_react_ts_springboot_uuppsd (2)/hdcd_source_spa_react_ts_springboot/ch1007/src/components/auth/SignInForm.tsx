import React from "react";
import styles from "../../Shop.module.css";

function SignInForm() {
  return (
    <div className={styles.centered}>
      <h2>로그인</h2>
      <form>
        <table>
          <tbody>
            <tr>
              <td>아이디</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td>
                <input type="password" />
              </td>
            </tr>
            <tr>
              <td colSpan={2} align="center">
                <button type="submit">로그인</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default SignInForm;
