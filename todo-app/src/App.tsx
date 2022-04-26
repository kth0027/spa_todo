// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

//
import Todos from './components/Todos';

// 
import TodosContainer from './containers/TodosContainer';

// 인터페이스 정의
export interface Todo {
  id : number;
  text : string;
  done : boolean;
}


// function App() {
//   return (
//       <Todos/>
//   );
// }

function App() {
  return (
        <TodosContainer />
  );
}


export default App;
