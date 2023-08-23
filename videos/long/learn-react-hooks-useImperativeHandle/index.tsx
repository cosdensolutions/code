import { useRef } from 'react';

import TextInput, { TextInputRef } from './TextInput';

function Demo() {
  const inputRef = useRef<TextInputRef>(null);

  return (
    <div className='tutorial'>
      <div className='mb-2'>
        <TextInput ref={inputRef} />
      </div>
      <button onClick={() => inputRef.current?.reset()}>
        Reset From Parent
      </button>
    </div>
  );
}

export default Demo;
