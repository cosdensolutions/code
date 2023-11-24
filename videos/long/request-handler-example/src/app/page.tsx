import { getUsers } from "@/api/users";

export default async function Home() {
  const usersResponse = await getUsers({ limit: 10, page: 1 });

  if (usersResponse.code === "error") {
    return <div>{usersResponse.error.message}</div>;
  }

  return (
    <div>
      {usersResponse.data.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
