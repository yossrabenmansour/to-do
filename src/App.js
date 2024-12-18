import './App.css';
import TaskForm from './Components/react/TaskForm';
import TaskList from './Components/react/TaskList';
import Store from './Components/Redux/Store';
import { Provider} from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <TaskForm/>
        <TaskList/>
      </Provider>
    </div>
  );
}

export default App;
