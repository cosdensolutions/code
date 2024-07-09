import { useUserState } from './state/user';

export default function App() {
  const { setData, resetData } = useUserState();

  return (
    <div>
      <UserCard />
      <input onChange={(e) => setData({ name: e.target.value })} />
      <button onClick={resetData}>Reset</button>
    </div>
  );
}

function UserCard() {
  const { data } = useUserState();
  return (
    <>
      <h1 className="text-xl font-bold">{data?.name}</h1>
    </>
  );
}
