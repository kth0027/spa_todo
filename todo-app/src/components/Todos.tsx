import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

// useState 훅 함수를 가져온다.
// useRef 훅을 불러온다
// useCallback 사용
import { useState, useRef, useCallback, SetStateAction } from "react";

// 타입스크립트 인터페이스 로드
import { Todo } from "../App"

// TODO CONTEXT로드
import { TodoProvider } from "./contexts/todo";





// const Todos = () => {

//     // Todo 목록 상태 정의 및 초기화 설정
//     // const [todos] = useState([
//     //     { id:1, text:"todoItem1", done : true},
//     //     { id:2, text:"todoItem2", done : false},
//     //     { id:3, text:"todoItem3", done : false}
//     // ]);

//     // 빈배열을 초기값으로 설정
//     const [todos, setTodos] = useState<Todo[]>([]);

//     // 함수형

//     // Todo 입력상태 정의
//     const [input, setInput] = useState("");

//     const nextId = useRef(1);

//     // 새로운 Todo 항목을 추가한다.
//     const onInsert = useCallback((text: string) => {
//         const todo = {
//             id: nextId.current,
//             text, done: false
//         };

//         // setTodos(todos.concat(todo));

//         setTodos((todos) => todos.concat(todo));

//         nextId.current += 1;
//     }, []);


//     // 삭제 이벤트
//     const onRemove = useCallback((id: number) => {
//         // setTodos(todos.filter((todo)=>todo.id!==id));

//         setTodos((todos) => todos.filter((todo) => todo.id !== id));
//     }, []);


//     // 체크
//     const onToggle = useCallback((id: number) => {
//         // setTodos(todos.map((todo) => todo.id === id ? {...todo, done : !todo.done} : todo));
//         setTodos((todos) => todos.map((todo) => todo.id === id ?
//             { ...todo, done: !todo.done } : todo))
//     }, []);

//     // 전체삭제
//     const onClearAll = useCallback(() => {
//         // setTodos([]);

//         // 함수형
//         setTodos(() => []);
//     }, []);

//     // 텍스트 입력 요소 변경 이벤트 처리
//     const onChange = useCallback((e: { target: { value: SetStateAction<string>; }; }) => {
//         setInput(e.target.value);
//     }, []);

//     // submit 이벤트 처리하는 onSubmit 함수
//     const onSubmit = useCallback((e: { preventDefault: () => void; }) => {
//         e.preventDefault();

//         onInsert(input);
//         setInput("");
//     }, [onInsert, input]);









//     return (

//         <TodoProvider>
//             <TodoHeader ></TodoHeader>
//             {/* <TodoInput onInsert={onInsert} ></TodoInput> */}
//             <TodoInput input={input} onChange={onChange} onSubmit={onSubmit} ></TodoInput>
//             {/* Todos 컴포넌트 상태(todos) 전달 */}
//             <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
//             <TodoFooter onClearAll={onClearAll} />
//         </TodoProvider>

  
//     );
// };


const Todos = () => {
    return (
      <TodoProvider>
        <TodoHeader />
        <TodoInput />
        <TodoList />
        <TodoFooter />
      </TodoProvider>
    );
  };

export default Todos;