import styles from "../Todo.module.css"

const TodoInput = () => {
    // return <h1>TodoInput</h1>

    return (
        <div className={styles.input}>
            <form action="">
                <input type="text" placeholder="할 일을 입력 하세요" />
                <button type="submit">추가</button>
            </form>
        </div>
    )
};

export default TodoInput;