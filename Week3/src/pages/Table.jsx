import React, { useMemo } from 'react';
import { useTable } from 'react-table';

export const TablePage = () => {
  // Define columns once (avoid recreating on every render)
  const columns = useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Role', accessor: 'role' }
    ],
    []
  );

  // Define data once
  const data = useMemo(
    () => [
      { name: 'Alice', role: 'Admin' },
      { name: 'Bob', role: 'User' }
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = tableInstance;

  return (
    <div className="overflow-x-auto bg-white dark:bg-gray-800 p-4 rounded shadow">
      <table {...getTableProps()} className="w-full border-collapse">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className="text-left">
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className="p-3 border-b">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className="p-3 border-b">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
