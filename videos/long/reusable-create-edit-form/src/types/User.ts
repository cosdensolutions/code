export type User = {
  id: number;
  birthday: Date;
  email: string;
  firstName: string;
  lastName: string;
  role: 'viewer' | 'editor';
};
