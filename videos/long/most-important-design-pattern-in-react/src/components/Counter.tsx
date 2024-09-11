import { useCount } from '@/hooks/useCount';

export default function Counter() {
  const { count, increment, decrement } = useCount();

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>Count: {count}</p>
    </div>
  );
}
