import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeTodoInput,
  addTodo,
  toggleTodoStatus,
  removeTodo,
  clearAllTodos,
  changeFilter,
} from "../modules/todos";
import Todos from "../components/Todos";
import { TodoState } from "../modules/todos";

const TodosContainer = () => {
  const { input, filter, todos } = useSelector((state: TodoState) => ({
    input: state.input,
    filter: state.filter,
    todos: state.todos,
  }));
  
  const dispatch = useDispatch();

  const onChangeInput = useCallback((input) => dispatch(changeTodoInput(input)), [dispatch]);
  const onInsert = useCallback((input) => dispatch(addTodo(input)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggleTodoStatus(id)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(removeTodo(id)), [dispatch]);
  const onClearAll = useCallback(() => dispatch(clearAllTodos()), [dispatch]);
  const onChangeFilter = useCallback((filter) => dispatch(changeFilter(filter)),[dispatch]);

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
      onClearAll={onClearAll}
      filter={filter}
      onChangeFilter={onChangeFilter}
    />
  );
};

export default TodosContainer;
