import TodoItem from "./TodoItem";
// css 로드
import styles from "../Todo.module.css"

const TodoList = () => {
    return (
        <div className={styles.list}>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
        </div>
    )
};

export default TodoList;