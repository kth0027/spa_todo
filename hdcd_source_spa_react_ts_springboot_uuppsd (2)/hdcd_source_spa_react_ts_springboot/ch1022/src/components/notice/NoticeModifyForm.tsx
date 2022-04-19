import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../Shop.module.css";
import { Notice } from "../../App";

interface Props {
  readonly notice: Notice | null;
  readonly isLoading: boolean;
  readonly onModify: (noticeNo: string, title: string, content: string) => void;
}

function NoticeModifyForm({
  notice,
  isLoading,
  onModify,
}: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(notice) {
      onModify(notice.noticeNo, title, content);
    }
  };

  useEffect(() => {
    if(notice) {
      setTitle(notice.title);
      setContent(notice.content);
    }
  }, [notice]);

  return (
    <div className={styles.centered}>
      <h2>공지사항 수정</h2>
      {isLoading && "로딩중..."}
      {!isLoading && notice && (
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>번호</td>
                <td>
                  <input value={notice.noticeNo} type="text" disabled />
                </td>
              </tr>
              <tr>
                <td>등록일시</td>
                <td>
                  <input value={notice.regDate} type="text" disabled />
                </td>
              </tr>
              <tr>
                <td>제목</td>
                <td>
                  <input
                    type="text"
                    value={title}
                    onChange={handleChangeTitle}
                  />
                </td>
              </tr>
              <tr>
                <td>내용</td>
                <td>
                  <textarea
                    value={content}
                    rows={5}
                    onChange={handleChangeContent}
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles.align_center}>
            <button type="submit">수정</button>
            <Link to={`/notice/read/${notice.noticeNo}`}>취소</Link>
          </div>
        </form>
      )}
    </div>
  );
}

export default NoticeModifyForm;
