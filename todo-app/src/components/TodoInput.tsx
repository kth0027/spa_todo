import styles from "../Todo.module.css";
// useState 훅 임포트
import {useState} from "react";



const TodoInput = () => {
    
    // 상태정의
    const [value] = useState("");

    // return <h1>TodoInput</h1>
    
    return (
        <div className={styles.input}>
            <form action="">
                <input type="text" placeholder="할 일을 입력 하세요" value={value} />
                <button type="submit">추가</button>
            </form>
        </div>
    )
};

export default TodoInput;