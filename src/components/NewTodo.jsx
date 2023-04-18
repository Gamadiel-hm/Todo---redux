import Button from './Button';
import Input from './Input';
import TextArea from './TextArea';
import { v1 as uid } from 'uuid';

import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/features/todo/todoSlice.js';

function NewTodo() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const todoForm = new FormData(e.target);
    const keysValues = [];
    todoForm.forEach((value, key) => keysValues.push([key, value]));
    const todo = {
      uuid: uid(),
      completed: false,
      title: keysValues[0][1],
      description: keysValues[1][1]
    };
    // console.log(todo);
    dispatch(addTodo(todo));
  };

  return (
    <form
      className='container mx-auto flex justify-center gap-4'
      onSubmit={handleSubmit}>
      <div className='flex gap-2 flex-1 justify-center'>
        <Input
          tittle='Add todo'
          name='title'
          color='bg-slate-900'
        />
        <TextArea
          title='description'
          name='description'
          color='bg-slate-900'
        />
      </div>
      <Button
        title='Add'
        type='submit'
        color='bg-slate-400'
      />
    </form>
  );
}

export default NewTodo;
