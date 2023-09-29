import { useState } from 'react';

import { useLocalStorage } from './useLocalStorage';

const Demo = () => {
  const [value, setValue] = useState('');

  const { getItem, setItem, removeItem } = useLocalStorage('value');

  return (
    <div className='tutorial-shorts'>
      <h1 className='mb-2 text-3xl font-bold'>useLocalStorage</h1>
      <input
        className='mb-4'
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className='flex flex-row gap-4'>
        <button onClick={() => setItem(value)}>Set</button>
        <button onClick={() => console.log(getItem())}>Get</button>
        <button onClick={removeItem}>Remove</button>
      </div>
    </div>
  );
};

export default Demo;
