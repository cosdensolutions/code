import { Profile, Sidebar } from './Components';

interface DashboardProps {}

export default function Dashboard({}: DashboardProps) {
  return (
    <div>
      <Sidebar />
      <Profile />
    </div>
  );
}
