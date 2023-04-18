import NewTodo from './components/NewTodo';
import TodoList from './components/todoList';

function App() {
  return (
    <div className='mt-4'>
      <header className='mb-4'>
        <h2 className='text-center text-xl mb-4'>Todo - App</h2>
        <NewTodo />
      </header>
      <main>
        <TodoList />
      </main>
    </div>
  );
}

export default App;
