import { User } from '@/user';

export default function UserCard({ user }: { user: User }) {
  return (
    <>
      <td>{user.id}</td>
      <td>{user.name}</td>
    </>
  );
}
