import styles from "../Todo.module.css"

import {Todo} from "../App";

// props 인터페이스 정의
interface Props {
    readonly todo : Todo;
}

const TodoItem = ({todo}:Props) => {
    // return <h1>TodoItem</h1>

    return (
        <div className={styles.item}>
            <input type="checkbox" />
            <span> {todo.text} </span>
            <button>삭제</button>
        </div>
    )
};

export default TodoItem;