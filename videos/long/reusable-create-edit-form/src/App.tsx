import UserForm from './components/UserForm';

export default function App() {
  return (
    <div className="mx-auto max-w-[500px]">
      <UserForm
        user={{
          id: 1,
          birthday: new Date(),
          firstName: 'Darius',
          lastName: 'Cosden',
          email: 'email@cosdensolutions.io',
          role: 'viewer',
        }}
      />
    </div>
  );
}
