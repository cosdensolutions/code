import { useRef, useState } from 'react';
import { TableVirtuoso, VirtuosoHandle } from 'react-virtuoso';

import UserCard from './components/UserCard';
import { createUsers } from './user';

export default function App() {
  const [users, setUsers] = useState(() => createUsers(0, 20));
  const [isLoading, setIsLoading] = useState(false);

  const virtuosoRef = useRef<VirtuosoHandle>(null);

  async function fetchNextPage() {
    const newUsers = createUsers(users.length, users.length + 20);

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);

    setUsers([...users, ...newUsers]);
  }

  return (
    <div>
      <button
        className="mb-4"
        onClick={() => {
          virtuosoRef.current?.scrollToIndex({
            index: Math.random() * users.length,
            align: 'start',
            behavior: 'smooth',
          });
        }}
      >
        Scroll
      </button>
      <TableVirtuoso
        ref={virtuosoRef}
        className="!h-[200px]"
        data={users}
        endReached={fetchNextPage}
        itemContent={(_, user) => <UserCard user={user} />}
        fixedFooterContent={
          isLoading
            ? () => <div className="bg-grayscale-700">Loading...</div>
            : undefined
        }
        fixedHeaderContent={() => (
          <tr>
            <th className="w-[150px] bg-grayscale-700 text-left">Id</th>
            <th className="w-[150px] bg-grayscale-700 text-left">Name</th>
          </tr>
        )}
      />
    </div>
  );
}
