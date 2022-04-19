import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Shop.module.css";
import { Notice } from "../../App";

interface Props {
  readonly notices: Notice[];
  readonly isLoading: boolean;
  readonly isAdmin: boolean;
}

function NoticeList({ notices, isLoading, isAdmin }: Props) {
  return (
    <div className={styles.centered}>
      <h2>공지사항 목록</h2>
      {isLoading && "로딩중..."}
      {!isLoading && !notices && (
        <table className={styles.shop_table}>
          <thead>
            <tr>
              <th align="center" className={styles.w_80}>
                번호
              </th>
              <th align="center" className={styles.w_300}>
                제목
              </th>
              <th align="center" className={styles.w_180}>
                등록일시
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={3}>
                List is empty.
              </td>
            </tr>
          </tbody>
        </table>
      )}
      {!isLoading && notices && (
        <>
          {isAdmin && (
            <Link to="/notice/create">새로만들기</Link>
          )}
          <table className={styles.shop_table}>
            <thead>
              <tr>
                <th align="center" className={styles.w_80}>
                  번호
                </th>
                <th align="center" className={styles.w_300}>
                  제목
                </th>
                <th align="center" className={styles.w_180}>
                  등록일시
                </th>
              </tr>
            </thead>
            <tbody>
              {!notices.length && (
                <tr>
                  <td colSpan={3}>
                    List is empty.
                  </td>
                </tr>
              )}
              {!!notices.length && notices.map((notice) => (
                <tr key={notice.noticeNo}>
                  <td align="center">{notice.noticeNo}</td>
                  <td align="left">
                    <Link to={`/notice/read/${notice.noticeNo}`}>
                      {notice.title}
                    </Link>
                  </td>
                  <td align="center">{notice.regDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default NoticeList;
