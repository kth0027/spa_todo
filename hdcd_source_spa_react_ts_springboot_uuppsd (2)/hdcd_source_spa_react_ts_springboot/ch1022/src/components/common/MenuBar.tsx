import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Shop.module.css";

interface Props {
  readonly isAuthorized: boolean;
  readonly isAdmin: boolean;
}

function MenuBar({ isAuthorized, isAdmin }: Props) {
  return (
    <div className={styles.centered}>
      <table>
        <tbody>
          <tr>
            {isAuthorized && isAdmin && (
              <>
                <td width="120"><Link to="/">홈</Link></td>
                <td width="120"><Link to="/codegroup">코드그룹관리</Link></td>
                <td width="120"><Link to="/codedetail">코드관리</Link></td>
                <td width="120"><Link to="/member">회원관리</Link></td>
                <td width="120"><Link to="/board">회원게시판</Link></td>
                <td width="120"><Link to="/notice">공지사항관리</Link></td>
                <td width="120"><Link to="/item">상품관리</Link></td>
                <td width="120"><Link to="/pds">공개자료실관리</Link></td>
              </>
            )}
            {isAuthorized && !isAdmin && (
              <>
                <td width="120"><Link to="/">홈</Link></td>
                <td width="120"><Link to="/board">회원게시판</Link></td>
                <td width="120"><Link to="/notice">공지사항</Link></td>
                <td width="120"><Link to="/item">상품</Link></td>
                <td width="120"><Link to="/coin/create">코인충전</Link></td>
                <td width="120"><Link to="/coin/charge">충전내역</Link></td>
                <td width="120"><Link to="/useritem">구매상품</Link></td>
                <td width="120"><Link to="/coin/pay">구매내역</Link></td>
                <td width="120"><Link to="/pds">공개자료실</Link></td>
              </>
            )}
            {!isAuthorized && (
              <>
                <td width="120"><Link to="/">홈</Link></td>
                <td width="120"><Link to="/board">회원게시판</Link></td>
                <td width="120"><Link to="/notice">공지사항</Link></td>
                <td width="120"><Link to="/item">상품</Link></td>
                <td width="120"><Link to="/pds">공개자료실</Link></td>
              </>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MenuBar;
