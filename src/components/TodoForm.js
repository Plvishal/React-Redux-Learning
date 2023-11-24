import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/Actions/todoAction';

function TodoForm() {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText('');
    // dispatch need actions
    dispatch(addTodo(todoText));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button>create Todo</button>
      </form>
    </div>
  );
}

export default TodoForm;
