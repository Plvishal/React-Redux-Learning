import './App.css';
import { store } from './Redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>{/* here pass the component */}</Provider>
    </div>
  );
}

export default App;
