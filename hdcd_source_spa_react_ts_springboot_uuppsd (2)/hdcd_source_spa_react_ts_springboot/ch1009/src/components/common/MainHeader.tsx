import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Shop.module.css";

function MainHeader() {
  return (
    <div className={styles.align_right}>
      <Link to="/signin">로그인</Link>
    </div>
  );
}

export default MainHeader;
