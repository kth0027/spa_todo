import { useContext } from "react";
import styles from "../Todo.module.css";
// useState 훅 임포트
// import React, {useState} from "react";

//
import { TodoConsumer } from "./contexts/todo";

//
import TodoContext from "./contexts/todo";



// interface Props {
//     // readonly onInsert: (value: string) => void;
//     readonly input: string;
//     readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//     readonly onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
// }



// // const TodoInput = ( {onInsert}:Props ) => {
//     const TodoInput = ({ input, onChange, onSubmit }: Props) => {

//     // 상태정의
//     // const [value] = useState("");
//     // setValue 함수로 정의
//     /*
//     const [value, setValue] = useState("");

//     // 입력 요소 값이 발생하면 변경된 입력값을 컴포너트 상태값 설정
//     const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
//         setValue(e.target.value);
//     }


//     const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
//         // submit 이벤트 방지하기 위해 호출
//         e.preventDefault();

//         onInsert(value);
//         setValue("");
//     }
//     */

//     // return <h1>TodoInput</h1>

//     return (
//         <div className={styles.input}>
//         <form onSubmit={onSubmit}>
//           <input placeholder="할 일을 입력하세요" value={input} onChange={onChange} />
//           <button type="submit">추가</button>
//         </form>
//       </div>
//     );
    
// };

// const TodoInput = () => {
//     return (
//         <TodoConsumer>
//         {({ state, actions }) => (
//           <div className={styles.input}>
//             <form onSubmit={actions.onSubmit}>
//               <input
//                 placeholder="할 일을 입력하세요"
//                 value={state.input}
//                 onChange={actions.onChange}
//               />
//               <button type="submit">추가</button>
//             </form>
//           </div>
//         )}
//       </TodoConsumer>
//     )
// }

// const TodoInput = () => {

//     const { state, actions } = useContext(TodoContext);
//     return (
//       <div className={styles.input}>
//         <form onSubmit={actions.onSubmit}>
//           <input
//             placeholder="할 일을 입력하세요"
//             value={state.input}
//             onChange={actions.onChange}
//           />
//           <button type="submit">추가</button>
//         </form>
//       </div>
//     );
//   };

interface Props {
  readonly input: string;
  readonly onInsert: (input: string) => void;
  readonly onChangeInput: (input: string) => void;
}

const TodoInput = ({ input, onInsert, onChangeInput }: Props) => {

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onInsert(input);
    onChangeInput("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => onChangeInput(e.target.value);

  return (
    <div className={styles.input}>
      <form onSubmit={onSubmit}>
        <input
          placeholder="할 일을 입력하세요"
          value={input}
          onChange={onChange}
        />
        <button type="submit">추가</button>
      </form>
    </div>
  );
};

export default TodoInput;