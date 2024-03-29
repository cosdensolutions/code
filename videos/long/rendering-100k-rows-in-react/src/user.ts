export type User = {
  id: number;
  name: string;
};

export function createUsers(from = 0, to = 100000): User[] {
  return Array.from({ length: to - from }, (_, i) => ({
    id: i + from,
    name: `User ${i + from}`,
  }));
}
