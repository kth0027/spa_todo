import { useState } from "react";
import TodoItem from "./TodoItem";
import styles from "../Todo.module.css";

const TodoList = () => {
  const [ todos ] = useState(["todoItem1", "todoItem2", "todoItem3"]);

  return (
    <div className={styles.list}>
      {todos.map((todo) => (
        <TodoItem />
      ))}
    </div>
  );
};

export default TodoList;
