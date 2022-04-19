import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Shop.module.css";
import { Board, MyInfo } from "../../App";

interface Props {
  readonly board: Board | null;
  readonly isLoading: boolean;
  readonly boardNo: string;
  readonly onRemove: () => void;
  readonly myInfo: MyInfo | null;
}

function BoardRead({ 
  board, 
  isLoading, 
  boardNo, 
  onRemove, 
  myInfo 
}: Props) {
  let isOwn = false;
  if(myInfo && board) {
    if(myInfo.userId === board.writer) {
      isOwn = true;
    }
  }

  let isAdmin = false;
  if(myInfo && myInfo.authList[0].auth === "ROLE_ADMIN") {
    isAdmin = true;
  }  

  return (
    <div className={styles.centered}>
      <h2>게시판 상세보기</h2>
      {isLoading && "로딩중..."}
      {!isLoading && board && (
        <>
          <table>
            <tbody>
              <tr>
                <td>번호</td>
                <td>
                  <input type="text" value={board.boardNo} readOnly />
                </td>
              </tr>
              <tr>
                <td>등록일시</td>
                <td>
                  <input type="text" value={board.regDate} readOnly />
                </td>
              </tr>
              <tr>
                <td>제목</td>
                <td>
                  <input type="text" value={board.title} readOnly />
                </td>
              </tr>
              <tr>
                <td>작성자</td>
                <td>
                  <input type="text" value={board.writer} readOnly />
                </td>
              </tr>
              <tr>
                <td>내용</td>
                <td>
                  <textarea value={board.content} readOnly></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles.align_center}>
            {isOwn && (
              <>
                <Link to={`/board/edit/${boardNo}`}>편집</Link>
                <button onClick={onRemove}>삭제</button>
              </>
            )}
            {isAdmin && (
              <button onClick={onRemove}>삭제</button>
            )}
            <Link to="/board">목록</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default BoardRead;
