import Counter from './components/Counter';
import UserForm from './components/UserForm';
import DarkModeToggle from './components/DarkModeToggle';

export default function App() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Cosden Solutions</h1>
      <Counter />
      <UserForm />
      <DarkModeToggle />
    </div>
  );
}
