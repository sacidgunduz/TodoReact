import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const Input = ({ toDoList, setToDoList }) => {
    const [inputValue, setInputValue] = useState(''); // state 
   

    const handleAddTodo = () => {
        setToDoList([inputValue, ...toDoList]);
        localStorage.setItem('toDoList', JSON.stringify([inputValue, ...toDoList]))
        setInputValue('')
    };
    const handleWithEnter = (e) => {
        if (e.key === "Enter") {
            handleAddTodo()
        }
    }

    return (
        <div id='Input'>
            <InputGroup className="mb-3">
                <Form.Control type="text" onKeyDown={handleWithEnter} value={inputValue} onChange={event=>setInputValue(event.target.value)} />
                <Button variant="outline-secondary" id="addTodo" onClick={handleAddTodo}>
                    Add Todo
                </Button>
            </InputGroup>

        </div>
    );
};

export default Input;