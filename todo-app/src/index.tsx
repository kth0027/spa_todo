import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 리듀스 적용모델
import { createStore } from "redux";
import { Provider } from "react-redux";
import todos from "./modules/todos";
import { composeWithDevTools } from "redux-devtools-extension";


// 상태복원 액션 생성 함수 임포트
// import { restore } from './modules/todos';
import { restore } from "./actions/todos";
import configureStore from "./store";




// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const store = createStore(todos, composeWithDevTools());

const store = configureStore(todos);

// 상태 복원 함수
function loadData() {
  try {
    const data = localStorage.getItem("todo-app-data");
    console.log("loadData data : " + data);

    if (!data) return;

    // 상태 복원 액션 디스패치
    store.dispatch(restore(JSON.parse(data)));

  } catch (e) {
    console.log("localStorage is not working");
  }
}

// 상태 복원 함수 실행
loadData();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

