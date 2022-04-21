import React from "react";
import { useTable } from "react-table";

const Table = ({ columns, data, updateMyData, skipPageReset, showGrid, breakAll, maxLine }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // state,
  } = useTable({
    columns,
    data,
    updateMyData,
    autoResetPage: !skipPageReset,
  });

  const style = {
    showGrid: `${showGrid ? 'divide-x' : ''}`,
    breakAll: `${breakAll ? 'break-all' : 'break-words'}`,
    maxLine: `${maxLine ? `line-clamp-${maxLine}` : 'line-clamp-none'}`,
  }

  return (
    <div className="flex flex-col w-full">
      <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="align-middle inline-block overflow-x-auto">
          <table
            className="min-w-full divide-y divide-inherit  sm:rounded-2xl border border-inherit  "
            {...getTableProps()}
          >
            <thead className="bg-slate-50 dark:bg-slate-700">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} className={style.showGrid}>
                  {headerGroup.headers.map((column) => (
                    <th
                      className="px-6 py-3 text-left text-sm leading-4 text-slate-900 dark:text-slate-200 tracking-wider 
                      border-slate-300 dark:border-slate-600 font-semibold
                      "
                      {...column.getHeaderProps()}
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody
              className="divide-y divide-inherit  "
              {...getTableBodyProps()}
            >
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} className={`${style.showGrid} ${style.breakAll} `}>
                    {row.cells.map((cell) => {

                      return (
                        <td
                          className={`px-6 py-2 whitespace-no-wrap text-sm leading-5 font-medium text-slate-500 dark:text-slate-400 border-slate-300 dark:border-slate-700
                          ${cell.column.className ?? ''}
                          `}
                          {...cell.getCellProps()}
                        >
                          <div
                            className={`${style.maxLine}
                            ${cell.column.items.className ?? ''}
                            `}
                            title={cell.value}
                          >
                            {cell.render("Cell")}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;