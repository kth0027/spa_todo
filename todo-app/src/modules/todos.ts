// 타입스크립트 임포트
import { Todo } from "../App";


//createAction 함수사용
import { createAction } from "redux-actions";
import { createReducer } from "typesafe-actions";

// 액션 타입
// const CHANGE_TODO_INPUT = "CHANGE_TODO_INPUT" as const;
// const ADD_TODO = "ADD_TODO" as const;
// const TOGGLE_TODO_STATUS = "TOGGLE_TODO_STATUS" as const;
// const REMOVE_TODO = "REMOVE_TODO" as const;
// const CLEAR_ALL_TODOS = "CLEAR_ALL_TODOS" as const;

const CHANGE_TODO_INPUT = "CHANGE_TODO_INPUT"
const ADD_TODO = "ADD_TODO"
const TOGGLE_TODO_STATUS = "TOGGLE_TODO_STATUS"
const REMOVE_TODO = "REMOVE_TODO"
const CLEAR_ALL_TODOS = "CLEAR_ALL_TODOS"

//상태 복원 액션 타입
const RESTORE = "RESTORE";

// 필터링 유형 변경 액션 타입
const CHANGE_FILTER = "CHANGE_FILTER";

// 항목수정
const EDIT_TODO = "EDIT_TODO";

// 편집항목 ID 설정 액션 타입
const SET_EDITING_ID = "SET_EDITING_ID";

// 편집항목 ID 리셋 액션 타입
const RESET_EDITING_ID = "RESET_EDITING_ID";



// // 액션 생성 함수
// export const changeTodoInput = (input: string) => ({
//   type: CHANGE_TODO_INPUT,
//   input,
// });


// // 상태 인터페이스
// export const addTodo = (input: string) => ({
//   type: ADD_TODO,
//   todo: {
//     text: input,
//     done: false,
//   },
// });

// export const toggleTodoStatus = (id: number) => ({
//   type: TOGGLE_TODO_STATUS,
//   id,
// });

// export const removeTodo = (id: number) => ({
//   type: REMOVE_TODO,
//   id,
// });

// export const clearAllTodos = () => ({
//   type: CLEAR_ALL_TODOS,
// });

export const changeTodoInput = createAction(CHANGE_TODO_INPUT, (input: string) => input);

export const addTodo = createAction(ADD_TODO, (input: string) => ({
  text: input,
  done: false,
}));

export const toggleTodoStatus = createAction(TOGGLE_TODO_STATUS, (id: number) => id);

export const removeTodo = createAction(REMOVE_TODO, (id: number) => id);

export const clearAllTodos = createAction(CLEAR_ALL_TODOS);

// 상태 복원 액션 생성 함수
export const restore = createAction(RESTORE, (data: string) => data);

// 필터링 유형 변경 액션 생성 함수
export const changeFilter = createAction(CHANGE_FILTER, (filter: string) => filter);

// 항목 수정
export const editTodo = createAction(EDIT_TODO, (id:number, input:string) => ({
  id,input,
}));

// 

export const setEditingId = createAction(SET_EDITING_ID, (id: number) => id);

export const resetEditingId = createAction(RESET_EDITING_ID);



// 상태 인터페이스 정의
export interface TodoState {
  input: string;
  todos: Todo[];
  nextTodoId: number;
  filter: string;
  editingId: number;
}


// 초기상태
const initialState: TodoState = {
  input: "",
  todos: [],
  nextTodoId: 1,
  filter: "ALL",
  editingId: 0,
};

// // 액션 타입 정의
// type TodoAction = 
//     ReturnType<typeof changeTodoInput>
//   | ReturnType<typeof addTodo>
//   | ReturnType<typeof toggleTodoStatus>
//   | ReturnType<typeof removeTodo>
//   | ReturnType<typeof clearAllTodos>;


//   // 리듀서 함수 정의
// function todos(state: TodoState = initialState, action: TodoAction) {
//   switch (action.type) {
//     case CHANGE_TODO_INPUT:
//       return {
//         ...state,
//         input: action.input,
//       };
//     case ADD_TODO:
//       const newTodo = {...action.todo, id: state.nextTodoId};
//       state.nextTodoId++;

//       return {
//         ...state,
//         todos: state.todos.concat(newTodo),
//       };
//     case TOGGLE_TODO_STATUS:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.id ? { ...todo, done: !todo.done } : todo
//         ),
//       };
//     case REMOVE_TODO:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.id),
//       };
//     case CLEAR_ALL_TODOS:
//       return {
//         ...state,
//         todos: [],
//       };
//     default:
//       return state;
//   }
// }

const todos = createReducer(
  initialState,
  {
    [CHANGE_TODO_INPUT]: (state, { payload: input }) => ({
      ...state,
      input: input,
    }),
    [ADD_TODO]: (state, { payload: todo }) => {
      const newTodo = { ...todo, id: state.nextTodoId };
      const nextTodoId = state.nextTodoId + 1;

      return ({
        ...state,
        todos: state.todos.concat(newTodo),
        nextTodoId
      })
    },
    [TOGGLE_TODO_STATUS]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    }),
    [REMOVE_TODO]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    }),
    [CLEAR_ALL_TODOS]: (state, action) => ({
      ...state,
      todos: [],
    }),


    // 상태 복원 액션 처리
    [RESTORE]: (state, action) => {
      console.log(action);
      console.log(action.payload.todos);
      console.log(action.payload.nextTodoId);
      return ({
        ...state,
        todos: action.payload.todos,
        nextTodoId: action.payload.nextTodoId,
      })
    },


    // 필터링 유형 변경 액션 처리
    [CHANGE_FILTER]: (state, { payload: filter }) => ({
      ...state,
      filter: filter,
    }),

    // Todo 항목 변경 액션 처리
    [EDIT_TODO]: (state, action) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.input } : todo
      ),
    }),

    [SET_EDITING_ID]: (state, { payload: id }) => ({
      ...state,
      editingId: id,
    }),
    [RESET_EDITING_ID]: (state) => ({
      ...state,
      editingId: 0,
    }),
  }
);


export default todos;
