import { useContext } from "react";

import TodoItem from "./TodoItem";
// css 로드
import styles from "../Todo.module.css"
// useState 훅 임포트
// import {useState} from "react";

// App.tsx에서 정의한 타입스크립트 인터페이스 임포트
import { Todo } from "../App";

//


import TodoContext from "../components/contexts/todo";


// ptopd 인터페이스 정의
// interface Props {
//     readonly todos: Todo[];

//     // 함수타입 추가
//     readonly onRemove : (id:number) => void;
//     readonly onToggle : (id:number) => void;
// }



// const TodoList = ({ todos, onRemove, onToggle}: Props) => {

//    // Todos 목록상태 정의
//     // const [todos] = useState(["todoitem1" , "todoitem2" , "todoitem3"]);

//     // return (
//     //     <div className={styles.list}>
//     //         {todos.map((todo) => (<TodoItem />))}            
//     //     </div>
//     // )

//     return (
//         <div className={styles.list}>
//             {/* TodoItem 컴포넌트에 데이터 전달 */}
//             {todos.map((todo) => (<TodoItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>))}
//         </div>
//     )



// };

// const TodoList = () => {
//     return (
//         <TodoConsumer>
//             {({ state, actions }) => (
//                 <div className={styles.list}>
//                     {state.todos.map((todo) => (
//                         <TodoItem
//                             todo={todo}
//                             key={todo.id}
//                             onRemove={actions.onRemove}
//                             onToggle={actions.onToggle}
//                         />
//                     ))}
//                 </div>
//             )}
//         </TodoConsumer>

        
//     );
// };

// const TodoList = () => {
//     const { state, actions } = useContext(TodoContext);
//     return (
//       <div className={styles.list}>
//         {state.todos.map((todo) => (
//           <TodoItem
//             todo={todo}
//             key={todo.id}
//             onRemove={actions.onRemove}
//             onToggle={actions.onToggle}
//           />
//         ))}
//       </div>
//     );
//   };

interface Props {
  readonly todos: Todo[];
  readonly onRemove: (id: number) => void;
  readonly onToggle: (id: number) => void;
}

const TodoList = ({ todos, onRemove, onToggle }: Props) => {

  return (
    <div className={styles.list}>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
