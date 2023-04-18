function Input({ tittle, name }) {
  return (
    <input
      className='dark:bg-slate-900 px-2 py-1 outline-none rounded text-gray-200'
      type='text'
      placeholder={tittle}
      name={name}
    />
  );
}

export default Input;
