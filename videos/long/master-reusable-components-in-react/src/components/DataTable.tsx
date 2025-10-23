import { ReactNode } from 'react';

type Column<T> = {
  key: keyof T;
  header: string;
  render?: (value: T[keyof T]) => ReactNode;
};

type DataTableProps<T> = {
  data: T[];
  columns: Column<T>[];
};

export default function DataTable<T extends { id: number | string }>({
  data,
  columns,
}: DataTableProps<T>) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200">
        <TableHeader columns={columns} />
        <tbody>
          {data.map((row) => (
            <TableRow key={row.id} row={row} columns={columns} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

type TableHeaderProps<T> = {
  columns: Column<T>[];
};

function TableHeader<T>({ columns }: TableHeaderProps<T>) {
  return (
    <thead>
      <tr className="text-white">
        {columns.map((column) => (
          <th key={String(column.key)} className="border p-2">
            {column.header}
          </th>
        ))}
      </tr>
    </thead>
  );
}

type TableRowProps<T> = {
  row: T;
  columns: Column<T>[];
};

function TableRow<T extends { id: number | string }>({
  row,
  columns,
}: TableRowProps<T>) {
  return (
    <tr key={row.id}>
      {columns.map((column) => (
        <TableCell
          key={String(column.key)}
          value={row[column.key]}
          render={column.render}
        />
      ))}
    </tr>
  );
}

type TableCellProps<T> = {
  value: T;
  render?: (value: T) => ReactNode;
};

function TableCell<T>({ value, render }: TableCellProps<T>) {
  return (
    <td className="border p-2">{render ? render(value) : String(value)}</td>
  );
}
