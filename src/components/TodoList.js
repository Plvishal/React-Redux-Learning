import React from 'react';
import { useSelector } from 'react-redux';

function TodoList({ onToggle }) {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <span className={todo.completed ? 'completed' : 'Pending'}>
              {todo.completed ? 'Completed' : 'Pending'}
            </span>
            <button
              onClick={() => {
                onToggle(index);
              }}
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
