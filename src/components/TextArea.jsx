function TextArea({ title, name, color }) {
  return (
    <textarea
      className={`${color} rounded outline-none `}
      rows='1'
      placeholder={title}
      name={name}></textarea>
  );
}

export default TextArea;
