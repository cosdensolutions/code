import { useEffect, useState } from 'react';

interface DemoProps {}

export default function Demo({}: DemoProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // The code that we want to run
    console.log('The count is:', count);

    // Optional return functio
    return () => {
      console.log('I am being cleaned up!');
    };
  }, [count]); // The dependency array

  return (
    <div className='tutorial'>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
