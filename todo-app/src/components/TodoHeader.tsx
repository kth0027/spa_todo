import styles from "../Todo.module.css"

const TodoHeader = () => {
    // return <h1>TodoHeader</h1>

    return (
        <div className={styles.header}>
            <h1>TODO Application</h1>
        </div>
    );
};

export default TodoHeader;