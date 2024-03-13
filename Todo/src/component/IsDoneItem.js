import React from 'react';
import { ListGroup } from 'react-bootstrap';


function IsDoneItem({ doneTodo, setDoneList }) {

  const DeleteFromDoneList = (index) => {
    const updatedDoneList = [...doneTodo];
    updatedDoneList.splice(index, 1);
    setDoneList(updatedDoneList);
    localStorage.setItem('doneList', JSON.stringify(updatedDoneList));
  };
  return (
    <div>
      <span style={{ textDecoration: 'line-through', color: 'gray' }}>
        <ListGroup>
          {JSON.parse(localStorage.getItem('doneList')).map((done, index) =>
            <ListGroup.Item key={index}>
              {done}<button onClick={() => DeleteFromDoneList(index)}>Done</button>
            </ListGroup.Item>
          )}
        </ListGroup>
      </span>
    </div>
  );
}

export default IsDoneItem;