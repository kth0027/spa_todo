import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

// useState 훅 함수를 가져온다.
import {useState} from "react";

const Todos = () => {

    // Todo 목록 상태 정의 및 초기화 설정
    const [todos] = useState([
        { id:1, text:"todoItem1", done : true},
        { id:2, text:"todoItem2", done : false},
        { id:3, text:"todoItem3", done : false}
    ]);


    return (
        <div>
            <TodoHeader ></TodoHeader>
            <TodoInput></TodoInput>
            {/* Todos 컴포넌트 상태(todos) 전달 */}
            <TodoList todos={todos} />
            <TodoFooter/>
        </div>
    );
};

export default Todos;