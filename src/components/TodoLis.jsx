import useRedux from '../hooks/useRedux';
import Button from './Button';
import Input from './Input';
import Modal from './Modal';
import TextArea from './TextArea';

function TodoLi({ todo }) {
  const { uuid, title, description } = todo;
  const { dispatchUpdate } = useRedux();

  return (
    <>
      <li className='flex gap-2 justify-around'>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className='flex gap-4'>
          <Button
            title='Update'
            type='button'
            color='bg-yellow-500'
          />
          <Button
            title='Delete'
            type='button'
            color='bg-rose-600'
          />
        </div>
        <Modal title={title}>
          <form className='flex flex-col p-7 gap-8 place-content-center h-full'>
            <Input
              name='ChangeTodo'
              color='bg-indigo-500'
              tittle='Change todo'
            />
            <TextArea
              title='description'
              name='descriptionChange'
              color='bg-indigo-500'
            />
            <Button
              title='Change'
              color='bg-indigo-500'
              type='submit'
            />
          </form>
        </Modal>
      </li>
    </>
  );
}

export default TodoLi;
