import Button from './Button';

function TodoLi({ todo }) {
  const { uuid, title, description, completed } = todo;

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
      </li>
    </>
  );
}

export default TodoLi;
