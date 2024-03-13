import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



export const TodoListItem = ({ toDoList, doneTodo, setDoneList, setToDoList }) => {

  const sendToDoneListAndDeleteFromToDoList = (todo, index) => {
    setDoneList([...doneTodo, todo]);
    localStorage.setItem('doneList', JSON.stringify([...doneTodo, todo]));
    const updatedToDoList = [...toDoList];
    updatedToDoList.splice(index, 1);
    setToDoList(updatedToDoList);
    localStorage.setItem('toDoList', JSON.stringify(updatedToDoList));

  };

  return (
    <div id='TodoListItem'>

      <ListGroup >
        {JSON.parse(localStorage.getItem('toDoList')).map((todo, index) =>
          <ListGroup.Item key={index}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'left'
            }}>
            {todo}
            <button
              style={{
                marginLeft: 110,
                position: 'fixed'
              }}
              key={index} onClick={() => sendToDoneListAndDeleteFromToDoList(todo, index)}>
              <FontAwesomeIcon icon={faArrowRight} style={{ color: "#63E6BE", }} />
            </button>
          </ListGroup.Item>
        )}
      </ListGroup>



    </div>
  );
};

export default TodoListItem;
