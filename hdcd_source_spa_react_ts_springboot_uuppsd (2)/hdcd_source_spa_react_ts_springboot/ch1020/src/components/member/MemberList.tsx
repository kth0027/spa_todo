import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Shop.module.css";
import { Member } from "../../App";

interface Props {
  readonly members: Member[];
  readonly isLoading: boolean;
}

function MemberList({ members, isLoading }: Props) {
  return (
    <div className={styles.centered}>
      <h2>회원 목록</h2>
      {isLoading && "로딩중..."}
      {!isLoading && members && (
        <>
          <Link to="/member/create">새로만들기</Link>
          <table className={styles.shop_table}>
            <thead>
              <tr>
                <th align="center" className={styles.w_60}>번호</th>
                <th align="center" className={styles.w_80}>아이디</th>
                <th align="center" className={styles.w_300}>비밀번호</th>
                <th align="center" className={styles.w_100}>사용자명</th>
                <th align="center" className={styles.w_100}>직업</th>
                <th align="center" className={styles.w_180}>등록일시</th>
              </tr>
            </thead>
            <tbody>
              {!members.length && (
                <tr>
                  <td colSpan={6}>
                    List is empty.
                  </td>
                </tr>
              )}
              {!!members.length && members.map((member) => (
                <tr key={member.userNo}>
                  <td align="center">{member.userNo}</td>
                  <td align="center">
                    <Link to={`/member/read/${member.userNo}`}>
                      {member.userId}
                    </Link>
                  </td>
                  <td align="left">{member.userPw}</td>
                  <td align="center">{member.userName}</td>
                  <td align="center">{member.job}</td>
                  <td align="center">{member.regDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default MemberList;
