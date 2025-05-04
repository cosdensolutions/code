import DataTable from './components/DataTable';

type Employee = {
  id: number;
  name: string;
  email: string;
  role: string;
};

function App() {
  const columns: Array<{
    key: keyof Employee;
    header: string;
    render?: (
      value: Employee[keyof Employee],
    ) => React.ReactNode;
  }> = [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Name' },
    {
      key: 'email',
      header: 'Email',
      render: (value) => (
        <a
          href={`mailto:${value}`}
          className="text-blue-600 hover:underline"
        >
          {value}
        </a>
      ),
    },
    {
      key: 'role',
      header: 'Role',
      render: (value) => (
        <span className="rounded-full bg-gray-100 text-black px-2 py-1 text-sm">
          {value}
        </span>
      ),
    },
  ];

  const dummyData: Employee[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Developer',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Designer',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'Manager',
    },
  ];

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">
        Employee Table
      </h1>
      <DataTable<Employee>
        data={dummyData}
        columns={columns}
      />
    </div>
  );
}

export default App;
