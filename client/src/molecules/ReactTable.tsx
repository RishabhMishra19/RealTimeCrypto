import React from "react";
import {
  useTable,
  usePagination,
  Column,
  TableInstance,
  TableOptions,
  UsePaginationInstanceProps,
  UsePaginationState,
  TableState,
} from "react-table";
import ReactPaginate from "react-paginate";
import styles from "./ReactTable.module.scss"; // Importing the SCSS file

interface ReactTableProps<T extends object> {
  columns: Column<T>[];
  data: T[];
  fetchMoreData: (pageIndex: number) => void;
  pageCount: number;
  totalCount: number;
}

interface TableStateWithPagination<T extends object>
  extends TableState<T>,
    UsePaginationState<T> {}

const ReactTable = <T extends object>({
  columns,
  data,
  fetchMoreData,
  pageCount,
  totalCount,
}: ReactTableProps<T>) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    state,
  } = useTable<T>(
    {
      columns,
      data,
      initialState: { pageIndex: 0 } as Partial<TableStateWithPagination<T>>,
      manualPagination: true,
      pageCount,
    } as TableOptions<T> & {
      manualPagination: boolean;
      pageCount: number;
    },
    usePagination
  ) as TableInstance<T> & UsePaginationInstanceProps<T> & TableOptions<T>;

  const { pageIndex } = state as TableStateWithPagination<T>;

  const handlePageClick = (selectedItem: { selected: number }) => {
    fetchMoreData(selectedItem.selected);
  };

  return (
    <div>
      <table {...getTableProps()} className={styles.table}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className={styles["header-row"]}
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className={styles["header-cell"]}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className={styles["body-row"]}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className={styles["body-cell"]}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles["pagination-container"]}>
        <ReactPaginate
          previousLabel={"< previous"}
          nextLabel={"next >"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={styles.pagination}
          activeClassName={"active"}
          previousClassName={"previous"}
          nextClassName={"next"}
          disabledClassName={"disabled"}
        />
      </div>
      <div className={styles["page-info"]}>Current Page: {pageIndex + 1}</div>{" "}
      <div className={styles["page-info"]}>Total Count: {totalCount}</div>{" "}
    </div>
  );
};

export default ReactTable;
