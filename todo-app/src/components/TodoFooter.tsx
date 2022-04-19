import styles from "../Todo.module.css"

interface Props {


    // 함수타입 추가
    readonly onClearAll : () => void;
}



const TodoFooter = ({onClearAll} : Props) => {
    // return <h1>TodoFooter</h1>

    return (
        <div className={styles.footer}>
            <button onClick={()=>onClearAll()}>모두삭제</button>
        </div>
    )
};

export default TodoFooter;