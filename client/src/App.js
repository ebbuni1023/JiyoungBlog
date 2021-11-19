import React, { Fragment } from 'react'; 
import './App.css';
// components

import InputTodo from './component/Todo/InputTodo';
import ListTodos from './component/Todo/ListTodos';

function App() {
  return (
    <Fragment>
      <div className = "container">
        <InputTodo />
        <ListTodos />
      </div>
  </Fragment>
  );
}

export default App;
