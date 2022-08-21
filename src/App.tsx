import { Header } from './components/atoms';
import { InputField } from './components/modules';
import { Todos } from './components/organisms';
import { useTodos } from './features/todo/useTodos';
import './App.css';

function App() {
  const { todos, submitText, changeSubmitText, addTodo, deleteTodo } = useTodos();

  return (
    <>
      <Header />
      <div className='content-area'>
        <InputField submitText={submitText} addTodo={addTodo} changeSubmitText={changeSubmitText} />
        <Todos todos={todos} deleteTodo={deleteTodo} />
      </div>
    </>
  );
}

export default App;
