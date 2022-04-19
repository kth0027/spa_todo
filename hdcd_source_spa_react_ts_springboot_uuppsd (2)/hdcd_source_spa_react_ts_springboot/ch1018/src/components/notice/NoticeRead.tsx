import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Shop.module.css";
import { Notice } from "../../App";

interface Props {
  readonly notice: Notice | null;
  readonly isLoading: boolean;
  readonly noticeNo: string;
  readonly onRemove: () => void;
  readonly isAdmin: boolean;
}

function NoticeRead({ 
  notice, 
  isLoading, 
  noticeNo, 
  onRemove,
  isAdmin
}: Props) {
  return (
    <div className={styles.centered}>
      <h2>공지사항 상세보기</h2>
      {isLoading && "로딩중..."}
      {!isLoading && notice && (
        <>
          <table>
            <tbody>
              <tr>
                <td>번호</td>
                <td>
                  <input type="text" value={notice.noticeNo} readOnly />
                </td>
              </tr>
              <tr>
                <td>등록일시</td>
                <td>
                  <input type="text" value={notice.regDate} readOnly />
                </td>
              </tr>
              <tr>
                <td>제목</td>
                <td>
                  <input type="text" value={notice.title} readOnly />
                </td>
              </tr>
              <tr>
                <td>내용</td>
                <td>
                  <textarea value={notice.content} readOnly></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles.align_center}>
          {isAdmin && (
            <>
              <Link to={`/notice/edit/${noticeNo}`}>편집</Link>
              <button onClick={onRemove}>삭제</button>
            </>
          )}
          <Link to="/notice">목록</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default NoticeRead;
