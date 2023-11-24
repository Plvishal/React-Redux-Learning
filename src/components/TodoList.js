import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../Redux/Actions/todoAction';

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  //   const todos=store.getState().store
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <span className={todo.completed ? 'completed' : 'Pending'}>
              {todo.completed ? 'completed' : 'Pending'}
            </span>
            <button
              onClick={() => {
                dispatch(toggleTodo(index));
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
