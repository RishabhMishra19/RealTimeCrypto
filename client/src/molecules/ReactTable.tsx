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
import styles from "./ReactTable.module.scss"; // Importing the SCSS file
import { Pagination } from "../components/Pagination";

interface ReactTableProps<T extends object> {
  columns: Column<T>[];
  data: T[];
  pageCount: number;
  totalRecords: number;
  pageNum: number;
  setPageNum: (pageNum: number) => void;
  recordsPerPage: number;
  setRecordsPerPage: (recordsPerPage: number) => void;
}

interface TableStateWithPagination<T extends object>
  extends TableState<T>,
    UsePaginationState<T> {}

export const ReactTable = <T extends object>({
  columns,
  data,
  pageCount,
  totalRecords,
  pageNum,
  setPageNum,
  recordsPerPage,
  setRecordsPerPage,
}: ReactTableProps<T>) => {
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page } =
    useTable<T>(
      {
        columns,
        data,
        initialState: { pageIndex: 0, pageSize: 10 } as Partial<
          TableStateWithPagination<T>
        >,
        manualPagination: true,
        pageCount,
      } as TableOptions<T> & {
        manualPagination: boolean;
        pageCount: number;
      },
      usePagination
    ) as TableInstance<T> & UsePaginationInstanceProps<T> & TableOptions<T>;

  const handleNext = () => {
    setPageNum(pageNum + 1);
  };

  const handlePrev = () => {
    setPageNum(pageNum - 1);
  };

  const isPrevDisabled = pageNum === 1;
  const isNextDisabled = pageNum === pageCount;

  console.log({ isPrevDisabled, isNextDisabled, pageNum });

  return (
    <div style={{ width: "100%" }}>
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
      <Pagination
        handleNext={handleNext}
        handlePrev={handlePrev}
        pageCount={pageCount}
        pageNum={pageNum}
        setPageNum={setPageNum}
        totalRecords={totalRecords}
        recordsPerPage={recordsPerPage}
        setRecordsPerPage={setRecordsPerPage}
      />
      <hr />
    </div>
  );
};
