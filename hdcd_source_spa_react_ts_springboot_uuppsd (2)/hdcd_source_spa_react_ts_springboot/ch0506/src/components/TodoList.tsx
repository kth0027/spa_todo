
import TodoItem from "./TodoItem";
import styles from "../Todo.module.css";

import { Todo } from "../App";

interface Props {
  readonly todos: Todo[];
}

const TodoList = ({ todos }: Props) => {

  return (
    <div className={styles.list}>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
