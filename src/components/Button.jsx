function Button({ title, type, color }) {
  return (
    <button
      className={`${color} px-6 rounded-md hover:bg-slate-800 ${
        type !== 'button' ? 'animate-pulse' : 'add'
      } transition duration-300 ease-out hover:ease-in`}
      type={type}>
      {title}
    </button>
  );
}

export default Button;
