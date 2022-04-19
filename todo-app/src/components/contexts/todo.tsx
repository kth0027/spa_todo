import React, { createContext, useState, useCallback, useRef } from "react";
import { Todo } from "../../App";

interface TodoState {
    readonly todos: Todo[];
    readonly input: string;
  }
  
  interface TodoAction {
    readonly setTodos: (todos: Todo[]) => void;
    readonly onInsert: (text: string) => void;
    readonly onRemove: (id: number) => void;
    readonly onToggle: (id: number) => void;
    readonly onClearAll: () => void;
    readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    readonly onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  }
  
  interface Context {
    readonly state: TodoState;
    readonly actions: TodoAction;
  }
  
  const TodoContext = createContext<Context>({
    state: { todos: [], input: "" },
    actions: {
      setTodos: (todos: Todo[]): void => {},
      onInsert: (text: string): void => {},
      onRemove: (id: number): void => {},
      onToggle: (id: number): void => {},
      onClearAll: (): void => {},
      onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {},
      onSubmit: (e: React.FormEvent<HTMLFormElement>): void => {},
    },
  });
  

  // PROPS 타입스크립트 인터페이스 정의
  interface Props {
    children: JSX.Element | JSX.Element[];
  }
  
  // 컨텍스트 공급자 정의
  const TodoProvider = ({ children }: Props) => {

    // 상태 정의
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState("");
  
    const nextId = useRef(1);
  

    // 업데이트 함수 정의
    const onInsert = useCallback((text: string) => {
      const todo = {
        id: nextId.current,
        text,
        done: false
      };
  
      setTodos((todos) => todos.concat(todo));
      
      nextId.current += 1;
    }, []);
  
    const onRemove = useCallback((id: number) => {
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    }, []);
  
    const onToggle = useCallback((id: number) => {
      setTodos((todos) =>
        todos.map((todo) =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        )
      );
    }, []);
  
    const onClearAll = useCallback(() => {
      setTodos(() => []);
    }, []);
  
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
    }, []);
    
    const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      onInsert(input);
      setInput("");
    }, [onInsert, input]);
  
    

    // 상태(state)와 업데이트 함수(actions)를 묶어 vaLUE 객체 생성
    const value = {
      state: { todos, input },
      actions: {
        setTodos,
        onInsert,
        onRemove,
        onToggle,
        onClearAll,
        onChange,
        onSubmit,
      },
    };
  
    // value 속성값 설정
    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
  };

  // TodoContext의 Consumer 속성을 TodoConsumer 변수에 저장
  const { Consumer: TodoConsumer } = TodoContext;

  export { TodoProvider, TodoConsumer };
  
  // TodoContext 내보내기
  export default TodoContext;