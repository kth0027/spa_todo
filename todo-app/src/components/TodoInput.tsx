import styles from "../Todo.module.css";
// useState 훅 임포트
import React, {useState} from "react";

interface Props {
    readonly onInsert:(value:string) => void;
}



const TodoInput = ( {onInsert}:Props ) => {
    
    // 상태정의
    // const [value] = useState("");
    // setValue 함수로 정의
    const [value, setValue] = useState("");

    // 입력 요소 값이 발생하면 변경된 입력값을 컴포너트 상태값 설정
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }


    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        // submit 이벤트 방지하기 위해 호출
        e.preventDefault();

        onInsert(value);
        setValue("");
    }

    // return <h1>TodoInput</h1>
    
    return (
        <div className={styles.input}>
            <form action="" onSubmit={onSubmit} >
                <input type="text" placeholder="할 일을 입력 하세요" value={value} onChange={onChange} />
                <button type="submit" >추가</button>
            </form>
        </div>
    )
};

export default TodoInput;