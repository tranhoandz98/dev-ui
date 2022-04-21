import React from "react";
import { useTable } from "react-table";

const Table = (props) => {
  const { columns, data, updateMyData,
    skipPageReset, showGrid, breakAll,
    maxLine, overflowYAuto, hightLightHeader,
    stickyHeader
  } = props;

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

    breakAll: `${breakAll ? 'break-all' : 'break-words'}`,
    header: {
      default: `divide-y z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300
      divide-slate-200 dark:divide-slate-400/20 py-2 pl-2 `,
      hightLight: `${hightLightHeader ? `bg-slate-50 dark:bg-slate-700` : ``}`,
      sticky: `${stickyHeader ? `sticky` : ``}`,
      showGrid: `${showGrid ? `divide-x` : ``}`,
      wrap: {
        default: ``,
      }
    },
    row: {
      default: ` 
      px-2 py-2 whitespace-no-wrap text-sm leading-5 text-slate-500 dark:text-slate-400
      `,
      showGrid: `${showGrid ? `divide-x` : ``}`,
      maxLine: `${maxLine ? `line-clamp-${maxLine}` : 'line-clamp-none'}`,
      wrap: {
        default: `divide-y divide-slate-300 dark:divide-slate-600`,
      }
    },
    wrap: {
      default: `scroll-xs`,
      overflowYAuto: `${overflowYAuto ? `overflow-auto lg:max-h-96` : ``}`,
    },
    table: {
      default: `w-full text-left border-collapse divide-y divide-slate-300 dark:divide-slate-600 sm:rounded-2xl`,
      showGrid: `${showGrid ? `divide-x border border-slate-300 dark:border-slate-600 ` : ``}`,
    },
  }

  return (
    <div className={`${style.wrap.default} ${style.wrap.overflowYAuto}`}>

      <table
        className={`${style.table.default} ${style.table.showGrid}`}
        {...getTableProps()}
      >
        <thead className={`${style.header.wrap.default} `}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className={`${style.header.showGrid}`}>
              {headerGroup.headers.map((column) => (
                <th
                  className={`${style.header.sticky} ${style.header.default}  ${style.header.hightLight} `}
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          className={`${style.row.wrap.default}`}
          {...getTableBodyProps()}
        >
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className={`${style.row.showGrid} ${style.breakAll} `}>
                {row.cells.map((cell) => {

                  return (
                    <td
                      className={`
                      ${style.row.default} 
                      ${cell.column.className ?? ''}
                          `}
                      {...cell.getCellProps()}
                    >
                      <div
                        className={`${style.row.maxLine}
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

  );
};

export default Table;