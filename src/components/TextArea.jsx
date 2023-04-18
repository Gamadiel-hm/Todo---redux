function TextArea({ title, name }) {
  return (
    <textarea
      className='rounded dark:bg-slate-900'
      rows='1'
      placeholder={title}
      name={name}></textarea>
  );
}

export default TextArea;
