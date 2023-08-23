import { useState } from 'react';

import { users as defaultUsers } from './utils';

export default function Demo() {
  const [users, setUsers] = useState(defaultUsers);

  const handleRemove = (id: number) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <div className='tutorial flex flex-col items-start'>
      {users.map((user) => {
        return (
          <button key={user.id} onClick={() => handleRemove(user.id)}>
            {user.name}
          </button>
        );
      })}
    </div>
  );
}
