import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTable } from 'react-table';
import moment from 'moment';

const SurvivalCases = () => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const data = useMemo(
    () => [
      {
        patient_id: '001',
        date: '2020-05-01',
        name: 'John Doe',
        gender: 'male',
        birthday: '1959-10-23',
        prognosis: 'positive',
      },
      {
        patient_id: '002',
        date: '2020-06-17',
        name: 'Jane Doe',
        gender: 'female',
        birthday: '1989-04-10',
        prognosis: 'negative',
      },
      {
        patient_id: '003',
        date: '2020-07-02',
        name: 'Peter Smith',
        gender: 'male',
        birthday: '2003-08-03',
        prognosis: 'negative',
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Date',
        id: 'Date',
        accessor: (originalRow, rowIndex) => { 
          return moment(originalRow.date, "YYYY-MM-DD").format('L'); 
        },
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Gender',
        id: 'Gender',
        accessor: (originalRow, rowIndex) => { return capitalizeFirstLetter(originalRow.gender); },
      },
      {
        Header: 'Birthday',
        id: 'Birthday',
        accessor: (originalRow, rowIndex) => { 
          const birthday = moment(originalRow.birthday, "YYYY-MM-DD");
          return birthday.format('L') + ' (age ' + birthday.fromNow(true) + ')'; 
        },
      },
      {
        Header: 'Prognosis',
        id: 'Prognosis',
        accessor: (originalRow, rowIndex) => { 
          const prognosis = originalRow.prognosis;
          const isPositive = prognosis === 'positive';
          return (
            <span className={`px-2 inline-flex text-sm rounded-full ${isPositive ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
            {capitalizeFirstLetter(prognosis)}
            </span>
          );
        },
      },
      {
        id: 'Link',
        accessor: (originalRow, rowIndex) => { 
          const link = '/survival/details/' + String(originalRow.patient_id); 
          return (
            <Link to={link} className="text-right text-indigo-600 hover:text-indigo-900">Details</Link>
          );
        },
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className="bg-gray-100 p-4 mx-4 mb-4 rounded-md shadow-md text-gray-700">
      <h2 className="border-b border4-gray-500 text-lg font-medium">Cases</h2>
      <div className="flex flex-col mt-2">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <table {...getTableProps()} className="min-w-full">
              <thead>
              {
                headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => ( 
                    <th {...column.getHeaderProps()} className="px-6 py-3 border-b border-gray-200 bg-gray-200 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">
                    {column.render('Header')}
                    </th>
                  ))}
                  </tr>
                ))
              }
              </thead>
              <tbody {...getTableBodyProps()} className="bg-white">
              {
                rows.map(row => {
                  prepareRow(row)
                  return (
                    <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <td {...cell.getCellProps()} className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-md leading-5 text-gray-600">
                        {cell.render('Cell')}
                        </td>
                    })}
                    </tr>
                  )
                })
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurvivalCases;
