import { useDispatch, useSelector } from 'react-redux';
import {
  addTodo,
  updateTodo
} from '../redux/features/todo/todoSlice.js';
function useRedux() {
  const selector = useSelector(state => state.todos);

  const dispatch = todo => useDispatch(addTodo(todo));
  const dispatchUpdate = todo => useDispatch(updateTodo(todo));

  return { selector, dispatch, dispatchUpdate };
}

export default useRedux;
