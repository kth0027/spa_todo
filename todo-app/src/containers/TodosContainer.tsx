import React, {useCallback} from "react";

// connect 함수 임포트
import { connect, useDispatch, useSelector } from "react-redux";

// 액션 생성 함수 임포트
import {
  changeTodoInput,
  addTodo,
  toggleTodoStatus,
  removeTodo,
  clearAllTodos,
} from "../modules/todos";
import Todos from "../components/Todos";
import { TodoState } from "../modules/todos";
// import { Dispatch } from 'redux'

// import {Todo} from "../App";



/*
// 타입스크립트 타입 정의
type PropsState = ReturnType<typeof mapStateToProps>;
type PropsDispatch = ReturnType<typeof mapDispatchToProps>;


// 타입스크립트 인터페이스 정의
interface Props extends PropsState, PropsDispatch {}
*/

// interface Props {
//   readonly input: string;
//   readonly todos: Todo[];
//   readonly removeTodo: (id: number) => void;
//   readonly toggleTodoStatus: (id: number) => void;
//   readonly clearAllTodos: () => void;
//   readonly addTodo: (input: string) => void;
//   readonly changeTodoInput: (input: string) => void;
// }

// props 로 전달받음
// const TodosContainer = ({
//   input,
//   todos,
//   changeTodoInput,
//   addTodo,
//   toggleTodoStatus,
//   removeTodo,
//   clearAllTodos,
// }: Props) => {
//   //Todos 컴포넌트에 props로 전달
//   return (
//     <Todos
//       input={input}
//       todos={todos}
//       onChangeInput={changeTodoInput}
//       onInsert={addTodo}
//       onToggle={toggleTodoStatus}
//       onRemove={removeTodo}
//       onClearAll={clearAllTodos}
//     />
//   );
// };

// // 스토어 상태를 props로 맵핑
// const mapStateToProps = (state: TodoState) => ({
//   input: state.input,
//   todos: state.todos,
// });


// // 상태변경함수를 props로 매핑
// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   changeTodoInput: (input: string) => {
//     dispatch(changeTodoInput(input));
//   },
//   addTodo: (input: string) => {
//     dispatch(addTodo(input));
//   },
//   toggleTodoStatus: (id: number) => {
//     dispatch(toggleTodoStatus(id));
//   },
//   removeTodo: (id: number) => {
//     dispatch(removeTodo(id));
//   },
//   clearAllTodos: () => {
//     dispatch(clearAllTodos());
//   },
// });


// // 리덕스와 연동된 컴포넌트 반환
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(TodosContainer);


// connect 사용
// export default connect (
//   (state:TodoState) => ({
//     input : state.input,
//     todos : state.todos,
//   }),
//   (dispatch) =>({
//     changeTodoInput:(input:string) =>
//     dispatch(changeTodoInput(input)),
//     addTodo:(input:string) => 
//     dispatch(addTodo(input)),
//     toggleTodoStatus:(id:number)=>
//     dispatch(toggleTodoStatus(id)),
//     removeTodo:(id:number)=>
//     dispatch(removeTodo(id)),
//     clearAllTodos:()=>dispatch(clearAllTodos()),
//   }),
// )(TodosContain


// useSelector, useDispatch 훅 사용

const TodosContainer = () => {
  
  // 스토어 상태 조회
  const { input, todos } = useSelector((state: TodoState) => ({
    input: state.input,
    todos: state.todos,
  }));
  
  // 스토어 dispatch 사용가능
  const dispatch = useDispatch();

  // 스토어 상태 변경 함수 작성
  const onChangeInput = useCallback((input: string) => dispatch(changeTodoInput(input)), [dispatch]);
  const onInsert = useCallback((input: string) => dispatch(addTodo(input)), [dispatch]);
  const onToggle = useCallback((id: number) => dispatch(toggleTodoStatus(id)), [dispatch]);
  const onRemove = useCallback((id: number) => dispatch(removeTodo(id)), [dispatch]);
  const onClearAll = useCallback(() => dispatch(clearAllTodos()), [dispatch]);

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
      onClearAll={onClearAll}
    />
  );
};

export default TodosContainer;
