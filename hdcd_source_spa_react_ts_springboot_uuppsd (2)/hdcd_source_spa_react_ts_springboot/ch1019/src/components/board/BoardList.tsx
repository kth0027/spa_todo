import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Shop.module.css";
import { Board } from "../../App";

interface Props {
  readonly boards: Board[];
  readonly isLoading: boolean;
  readonly isMember: boolean;
}

function BoardList({ boards, isLoading, isMember }: Props) {
  return (
    <div className={styles.centered}>
      <h2>게시판 목록</h2>
      {isLoading && "로딩중..."}
      {!isLoading && boards && (
        <>
          {isMember && (
            <Link to="/board/create">새로만들기</Link>
          )}
          <table className={styles.shop_table}>
            <thead>
              <tr>
                <th align="center" className={styles.w_80}>번호</th>
                <th align="center" className={styles.w_300}>제목</th>
                <th align="center" className={styles.w_100}>작성자</th>
                <th align="center" className={styles.w_180}>등록일시</th>
              </tr>
            </thead>
            <tbody>
              {!boards.length && (
                <tr>
                  <td colSpan={4}>
                    List is empty.
                  </td>
                </tr>
              )}
              {!!boards.length && boards.map((board) => (
                <tr key={board.boardNo}>
                  <td align="center">{board.boardNo}</td>
                  <td align="left">
                    <Link to={`/board/read/${board.boardNo}`}>
                      {board.title}
                    </Link>
                  </td>
                  <td align="right">{board.writer}</td>
                  <td align="center">{board.regDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default BoardList;
