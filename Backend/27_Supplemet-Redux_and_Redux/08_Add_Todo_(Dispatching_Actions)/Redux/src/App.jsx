import './App.css';
import Todo from './components/Todo';
import { Provider } from "react-redux";
import store from "./app/store.js";

function App() {
  return (
    <>
      <Provider store={store}> {/* snow nested component can directly access store.js */}
        <Todo />
      </Provider>
    </>
  )
}

export default App
