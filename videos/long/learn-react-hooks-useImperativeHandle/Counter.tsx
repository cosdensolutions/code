import {
  forwardRef,
  Ref,
  useImperativeHandle,
  useState,
} from 'react';

export type CounterRef = {
  checkSubscibed: (value: boolean) => void;
  reset: () => void;
};

interface CounterProps {}

function Counter(
  props: CounterProps,
  ref: Ref<CounterRef>,
) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  // We want to expose this to the parent
  const reset = () => {
    setCount(0);
  };

  useImperativeHandle(ref, () => ({
    checkSubscibed: (value) => console.log(value),
    reset,
  }));

  return (
    <div>
      <h1 className='text-2xl'>Count: {count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default forwardRef(Counter);
