import styles from "../Todo.module.css"
import { useContext } from "react";
import TodoContext from "../components/contexts/todo"

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


const TodoFooter = () => {
    const { actions } = useContext(TodoContext);
    return (
      <div className={styles.footer}>
        <button onClick={() => actions.onClearAll()}>모두 삭제</button>
      </div>
    );
  };
  
export default TodoFooter;