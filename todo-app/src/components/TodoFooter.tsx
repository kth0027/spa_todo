import styles from "../Todo.module.css"
import { useContext } from "react";
import TodoContext from "../components/contexts/todo"
import {useSelector} from "react-redux";
import {TodoState} from "../modules/todos";
// redux 사용
import {useStore} from "react-redux";

// interface Props {


//     // 함수타입 추가
//     readonly onClearAll : () => void;
// }



// const TodoFooter = ({onClearAll} : Props) => {
//     // return <h1>TodoFooter</h1>

//     return (
//         <div className={styles.footer}>
//             <button onClick={()=>onClearAll()}>모두삭제</button>
//         </div>
//     )
// };


// const TodoFooter = () => {
//     return (
//       <TodoConsumer>
//         {({ actions }) => (
//           <div className={styles.footer}>
//             <button onClick={() => actions.onClearAll()}>모두 삭제</button>
//           </div>
//         )}
//       </TodoConsumer>
//     );
//   };


// const TodoFooter = () => {
//     const { actions } = useContext(TodoContext);
//     return (
//       <div className={styles.footer}>
//         <button onClick={() => actions.onClearAll()}>모두 삭제</button>
//       </div>
//     );
//   };

interface Props {
  readonly onClearAll: () => void;
}

const TodoFooter = ({ onClearAll }: Props) => {

  const { todos, nextTodoId } = useSelector((state: TodoState) => ({
    todos: state.todos,
    nextTodoId: state.nextTodoId,
  }));

  const data = {
    todos,
    nextTodoId,
  };

  const onSave = () => {
    localStorage.setItem('todo-app-data', JSON.stringify(data))
  };


  return (
    <div className={styles.footer}>
      <button onClick={onClearAll}>모두 삭제</button>
      {/* 저장버튼 추가 */}
      <button onClick={onSave}>저장</button>
    </div>
  );
};
  
export default TodoFooter;