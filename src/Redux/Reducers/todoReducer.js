import { ADD_Todo, Toggle_Todo } from '../Actions/todoAction';

const initialSate = {
  todos: [],
};

export function todoReducer(state = initialSate, action) {
  switch (action.type) {
    case ADD_Todo:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false,
          },
        ],
      };
    case Toggle_Todo:
      return {
        ...state,
        todos: state.todos.map((todo, i) => {
          if (i === action.index) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
}
