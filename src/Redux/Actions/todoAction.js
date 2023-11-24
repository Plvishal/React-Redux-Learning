// Action
export const ADD_Todo = 'ADD Todo';
export const Toggle_Todo = 'Toggle_Todo';

// Actions Creators
export const addTodo = (text) => ({ text, type: ADD_Todo });
export const toggleTodo = (index) => ({ index, type: Toggle_Todo });
