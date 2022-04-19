import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import styles from "../../Shop.module.css";

interface Props {
  readonly onRegister: (title: string, content: string) => void;
}

function NoticeRegisterForm({ onRegister }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleChangeTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const handleChangeContent = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }, []);

  const handleSubmit = useCallback((e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();

      onRegister(title, content);
    },
    [title, content, onRegister]
  );

  return (
    <div className={styles.centered}>
      <h2>공지사항 등록</h2>

      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>제목</td>
              <td>
                <input type="text" value={title} onChange={handleChangeTitle} />
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <textarea
                  rows={5}
                  value={content}
                  onChange={handleChangeContent}
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <div className={styles.align_center}>
          <button type="submit">등록</button>
          <Link to="/notice">취소</Link>
        </div>
      </form>
    </div>
  );
}

export default NoticeRegisterForm;
