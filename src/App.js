import { useState } from 'react';
import './App.css';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const createTodo = (text) => {
    setTodos([...todos, { id: todos.lenght + 1, text, completed: false }]);
  };
  const toggleTodo = (index) => {
    const list = [...todos];
    list[index].completed = !list[index].completed;
    setTodos(list);
  };
  return (
    <div className="App">
      <Provider store={store}>
        <TodoForm onCreateTodo={createTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} />
      </Provider>
    </div>
  );
}

export default App;
