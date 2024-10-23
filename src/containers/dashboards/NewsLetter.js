/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
import React from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import { Badge, Card, CardBody, CardTitle } from 'reactstrap'; //
import DatatablePagination from 'components/DatatablePagination';
import IntlMessages from 'helpers/IntlMessages';
import { FaCaretDown,FaCaretUp } from 'react-icons/fa';
import products from 'data/products';
import { BsSliders2 } from 'react-icons/bs';
import { FaCalendarDays } from 'react-icons/fa6';

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 6 },
    },
    useSortBy,
    usePagination
  );

  return (
    <>
      <table {...getTableProps()} className="r-table table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, columnIndex) => (
                <th
                  key={`th_${columnIndex}`}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  // className={`
                  //   ${
                  //     column.isSorted
                  //       ? column.isSortedDesc
                  //         ? 'sorted-desc'
                  //         : 'sorted-asc'
                  //       : ''
                  //   }
                  // `}
                >
                  {column.render('Header')}{' '}
                  {column.render('Header') !== 'Newsletter' && (
                    <>
                      {column.isSortedDesc ? (
                        <FaCaretDown className='ml-2' />
                      ) : (
                        <FaCaretUp className='ml-2' />
                      )}
                    </>
                  )}
                  <span />
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            console.log({ row });

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, cellIndex) => (
                  <td
                    key={`td_${cellIndex}`}
                    {...cell.getCellProps({
                      className: cell.column.cellClass,
                    })}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <DatatablePagination
        page={pageIndex}
        pages={pageCount}
        canPrevious={canPreviousPage}
        canNext={canNextPage}
        pageSizeOptions={[4, 10, 20, 30, 40, 50]}
        showPageSizeOptions={false}
        showPageJump={false}
        defaultPageSize={pageSize}
        onPageChange={(p) => gotoPage(p)}
        onPageSizeChange={(s) => setPageSize(s)}
        paginationMaxSize={pageCount}
      />
    </>
  );
}

const NewsLetter = () => {
  const cols = React.useMemo(
    () => [
      {
        Header: 'Newsletter',
        accessor: 'newsLetter',
        cellClass: 'font-weight-bold w-25',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Date',
        accessor: 'createDate',
        cellClass: 'text-muted w-20',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Delivered (%)',
        accessor: 'delivered',
        cellClass: 'text-center w-20',
        Cell: (props) => (
          <div className=" text-theme-3 bg-theme-3-opacity font-weight-bold">
            {props.value}
          </div>
        ),
        sortType: 'basic',
      },
      {
        Header: 'Read (%)',
        accessor: 'read',
        cellClass: 'text-center w-20',
        Cell: (props) => (
          <div className="text-primary bg-primary-opacity font-weight-bold">
            {props.value}
          </div>
        ),
        sortType: 'basic',
      },
      {
        Header: 'Clicked (%)',
        accessor: 'clicked',
        cellClass: 'text-center w-20',
        Cell: (props) => (
          <div className="text-theme-2 bg-theme-2-opacity font-weight-bold">
            {props.value}
          </div>
        ),
        sortType: 'basic',
      },
    ],
    []
  );

  return (
    <Card className="h-100">
      <CardBody>
        <CardTitle className="d-flex flex-row justify-content-between font-weight-bold">
          <IntlMessages id="dashboards.news-letter" />
          <div>
            <Badge color="" className="mb-1 rounder align-content-center border border-theme-4">
              <FaCalendarDays className="mr-2" size={15} />
              <IntlMessages id="dashboards.select-date"/>
            </Badge>
            <Badge color="" className="mb-1 border border-theme-4">
              <BsSliders2 className="mr-2"  size={15}/>
              <IntlMessages id="dashboards.filters" />
            </Badge>{' '}
          </div>
        </CardTitle>
        <Table columns={cols} data={products} />
      </CardBody>
    </Card>
  );
};

export default NewsLetter;
