import styles from "../Todo.module.css"

const TodoItem = () => {
    // return <h1>TodoItem</h1>

    return (
        <div className={styles.item}>
            <input type="checkbox" />
            <span>todoitem</span>
            <button>삭제</button>
        </div>
    )
};

export default TodoItem;