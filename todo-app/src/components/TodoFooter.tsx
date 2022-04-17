import styles from "../Todo.module.css"

const TodoFooter = () => {
    // return <h1>TodoFooter</h1>

    return (
        <div className={styles.footer}>
            <button>모두삭제</button>
        </div>
    )
};

export default TodoFooter;