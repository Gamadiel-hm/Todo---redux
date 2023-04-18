import TodoLi from './TodoLis';
import useRedux from '../hooks/useRedux';

function TodoList() {
  const { selector } = useRedux();
  return (
    <section className='container mx-auto '>
      <ul>
        {selector.map(todo => (
          <TodoLi
            key={todo.uuid}
            todo={todo}
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
