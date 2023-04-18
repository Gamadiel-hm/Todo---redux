import Button from './Button';

function Modal({ title, children }) {
  return (
    <>
      <section className='fixed left-0 top-0 min-h-screen min-w-full bg-slate-500 grid opacity-80 place-content-center'>
        <div className='w-80 h-80 bg-indigo-400 py-4 rounded-lg'>
          <header className='flex justify-around px-4 pb-3 border-b border-slate-800'>
            <h4>Todo : {title}</h4>
            <Button
              type='button'
              title='X'
              color='bg-indigo-400'
            />
          </header>
          {children}
        </div>
      </section>
    </>
  );
}

export default Modal;
