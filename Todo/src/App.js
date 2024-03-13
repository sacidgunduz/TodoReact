import React, { useState } from 'react';
import './App.css';
import Input from './component/Input';
import IsDoneItem from './component/IsDoneItem';
import TodoListItem from './component/TodoListItem';
import TodoTitle from './component/TodoTitle';
import IsDoneTitle from './component/IsDoneTitle';




function App() {
  const [toDoList, setToDoList] = useState([]);
  const [doneTodo, setDoneList] = useState([]);

  return (
    <>
      <div style={{
        marginLeft: 500,
        marginTop: 200,
      }}><Input toDoList={toDoList} setToDoList={setToDoList} /></div>
      <div style={{

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 700,
        gap: 10,
        
      }}>

        

        <div>
          <TodoTitle />

          <TodoListItem toDoList={toDoList} doneTodo={doneTodo} setToDoList={setToDoList} setDoneList={setDoneList} />
        </div>
        <div>
          <IsDoneTitle />

          <IsDoneItem setToDoList={setToDoList} toDoList={toDoList} doneTodo={doneTodo} setDoneList={setDoneList} />
        </div>
      </div>
    </>
  );
}

export default App;
