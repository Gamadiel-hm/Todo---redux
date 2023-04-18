import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/features/todo/todoSlice.js';
function useRedux() {
  const selector = useSelector(state => state.todos);

  const dispatch = todo => useDispatch(addTodo(todo));

  return { selector, dispatch };
}

export default useRedux;
