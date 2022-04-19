import styles from "../Todo.module.css"

import {Todo} from "../App";

// props 인터페이스 정의
interface Props {
    readonly todo : Todo;

        // 함수타입 추가
        readonly onRemove : (id:number) => void;
        readonly onToggle : (id:number) => void;
}



const TodoItem = ({todo, onRemove, onToggle}:Props) => {
    // return <h1>TodoItem</h1>

    // todo 객체 속성 분리 저장
    const {id,text,done} = todo;

    return (
        <div className={styles.item}>
            <input type="checkbox" checked={done} onChange={ ()=> onToggle(id) } />
            <span> {todo.text} </span>
            <button onClick={ ()=> onRemove(id) }>삭제</button>
        </div>
    )
};

export default TodoItem;