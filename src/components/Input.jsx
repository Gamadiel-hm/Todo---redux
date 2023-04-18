function Input({ tittle, name, color }) {
  return (
    <input
      className={`${color} px-2 py-1 outline-none rounded `}
      type='text'
      placeholder={tittle}
      name={name}
    />
  );
}

export default Input;
