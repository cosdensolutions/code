import {
  useDeferredValue,
  useEffect,
  useState,
} from 'react';

import SlowList from './SlowList';

const Demo = () => {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  return (
    <div className='tutorial'>
      <SlowList text={deferredQuery} />
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Search...'
      />
    </div>
  );
};

export default Demo;
