import { useState } from 'react';
import { Output } from './Output';

export const Greeting = () => {
  const [textChanged, setTextChanged] = useState(false);

  const clickHandler = () => {
    setTextChanged(true);
  };

  return (
    <div>
      <h2>Hello!</h2>
      {!textChanged && <Output>This is my greeting.</Output>}
      {textChanged && <Output>This has changed!</Output>}
      <button onClick={clickHandler}>change text</button>
    </div>
  );
};
