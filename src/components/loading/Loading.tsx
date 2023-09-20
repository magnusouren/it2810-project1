import './Loading.css';

export const Spinner = () => {
  return (
    <div className='spinner-container' data-testid='spinner'>
      <div className='spinner'></div>
    </div>
  );
};
