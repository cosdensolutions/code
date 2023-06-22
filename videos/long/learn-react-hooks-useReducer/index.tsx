import { useReducer } from 'react';

interface State {
  count: number;
  error: string | null;
}

interface Action {
  type: 'increment' | 'decrement';
}

function reducer(state: State, action: Action) {
  const { type } = action;

  switch (type) {
    case 'increment': {
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? 'Maximum reached' : null,
      };
    }
    case 'decrement': {
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? 'Minimum reached' : null,
      };
    }
    default:
      return state;
  }
}

export default function Demo() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });

  return (
    <div className='tutorial'>
      <div>Count: {state.count}</div>
      {state.error && <div className='mb-2 text-red-500'>{state.error}</div>}
      <button className='mb-2' onClick={() => dispatch({ type: 'increment' })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
