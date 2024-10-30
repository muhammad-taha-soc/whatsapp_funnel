/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import { Badge, Card, CardBody, CardTitle } from 'reactstrap'; //
import DatatablePagination from 'components/DatatablePagination';
import IntlMessages from 'helpers/IntlMessages';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import products from 'data/products';
import { BsSliders2 } from 'react-icons/bs';
import { Separator } from 'components/common/CustomBootstrap';
// import { FaCalendarDays } from 'react-icons/fa6';

function Table({ columns, data }) {
  const [currentPage, setCurrentPage] = useState(1);
  // const [totalItemCount] = useState(0);
  const [selectedPageSize] = useState(8);
  const [selectedOrderOption] = useState({
    column: 'title',
    label: 'Product Name',
  });
  const startIndex = (currentPage - 1) * selectedPageSize;
  const endIndex = currentPage * selectedPageSize;
  //  const pageSizes = [4, 8, 12, 20];

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedPageSize, selectedOrderOption]);

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
            <tr
              {...headerGroup.getHeaderGroupProps()}
              style={{ borderBottom: '1px solid #E8E8E9' }}
            >
              {headerGroup.headers.map((column, columnIndex) => (
                <>
                <th
                  className="text-muted font-weight-medium text-14px "
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
                        <FaCaretUp className="" 
                        // style={{ marginLeft: '50%' }} 
                        />
                      ) : (
                        <FaCaretDown
                          className=""
                          // style={{ marginLeft: '50%' }}
                        />
                      )}
                    </>
                  )}
                  {/* <span /> */}
                </th>
                
                </>
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
      <div className="d-flex flex-row justify-content-between align-items-center mr-2 ml-2">
        <span className="text-muted">
          <IntlMessages id="Showing " />
          {startIndex + 1} - {data.length >= endIndex ? endIndex : data.length}
          <IntlMessages id=" from " />
          {data.length}
        </span>
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
      </div>
    </>
  );
}

const NewsLetter = () => {
  const cols = React.useMemo(
    () => [
      {
        Header: 'Newsletter',
        accessor: 'newsLetter',
        cellClass: 'font-weight-medium w-25 text-14px table-heading-row-color',
        Cell: (props) => (
          <span style={{ fontSize: '14px' }}>{props.value}</span>
        ),
        sortType: 'basic',
      },
      {
        Header: 'Date',
        accessor: 'createDate',
        cellClass: 'text-muted w-20 text-14px',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Delivered (%)',
        accessor: 'delivered',
        cellClass: ' w-20 text-14px',
        Cell: (props) => (
          // <div className=" text-theme-3 bg-theme-3-opacity" >
          //   {props.value}
          // </div>
          <Badge color="" className="text-theme-3 bg-theme-3-opacity rounded">
            <IntlMessages id={props.value} />
          </Badge>
        ),
        sortType: 'basic',
      },
      {
        Header: 'Read (%)',
        accessor: 'read',
        cellClass: ' w-20 text-14px',
        Cell: (props) => (
          // <div className="text-primary bg-primary-opacity ">{props.value}</div>
          <Badge color="" className="text-primary bg-primary-opacity rounded">
            <IntlMessages id={props.value} />
          </Badge>
        ),
        sortType: 'basic',
      },
      {
        Header: 'Clicked (%)',
        accessor: 'clicked',
        cellClass: ' w-20 text-14px',
        Cell: (props) => (
          // <div className="text-theme-2 bg-theme-2-opacity">{props.value}</div>
          <Badge color="" className="text-theme-2 bg-theme-2-opacity rounded">
            <IntlMessages id={props.value} />
          </Badge>
        ),
        sortType: 'basic',
      },
    ],
    []
  );

  return (
    <Card className="h-100">
      <CardBody className='p-4'>
        <CardTitle className="d-flex flex-row justify-content-between ">
          <span style={{ fontSize: '24px', fontWeight: '500' }}>
            <IntlMessages id="Newsletter" />
          </span>
          <div>
            <Badge
              style={{ fontWeight: '400', fontSize: '14px' }}
              color=""
              className="mb-1 mr-2 rounder align-content-center border border-theme-4"
            >
              <img
                className="mr-2"
                alt="calendar"
                src="/assets/img/dashboard/calendar-icon.svg"
              />
              <IntlMessages
                className="font-weight-light"
                id="dashboards.select-date"
              />
            </Badge>
            <Badge
              style={{ fontWeight: '400', fontSize: '14px' }}
              color=""
              className="mb-1 border border-theme-4"
            >
              <BsSliders2 className="mr-2" size={15} />

              <IntlMessages id="dashboards.filters" />
            </Badge>{' '}
          </div>
        </CardTitle>
        <Separator className="separator-class" />
        <Table columns={cols} data={products} />
      </CardBody>
      {/* <div className="">
        <span className="text-muted">
          <IntlMessages id="Showing " />
          {startIndex + 1} -
          {products.length >= endIndex ? endIndex : products.length}
          <IntlMessages id=" from " />
          {products.length}
        </span>
      </div> */}
    </Card>
  );
};

export default NewsLetter;
