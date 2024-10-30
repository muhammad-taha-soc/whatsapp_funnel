/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
import React, { useState,useEffect } from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import {
  Badge,
  Card,
  CardBody,
  CardTitle,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'; 
import DatatablePagination from 'components/DatatablePagination';
import IntlMessages from 'helpers/IntlMessages';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

import products from 'data/products';
import { BsSliders2 } from 'react-icons/bs';

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
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, columnIndex) => (
                <th
                  className="text-muted"
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
                  {!['Action', 'Sent', 'Surname'].includes(
                    column.render('Header')
                  ) && (
                    <>
                      {column.isSortedDesc ? (
                        <FaCaretUp className="ml-2" />
                      ) : (
                        <FaCaretDown className="ml-2" />
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

      <div className="d-flex flex-row justify-content-between align-items-center mr-2 ml-2">
        <span className="text-muted">
          <IntlMessages id="Showing " />
          {startIndex + 1} -{data.length >= endIndex ? endIndex : data.length}
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

const History = () => {
  const cols = React.useMemo(
    () => [
      {
        Header: 'Surname',
        accessor: 'newsLetter',
        cellClass: 'font-weight-bold w-20',
        Cell: (props) => <span style={{fontSize:'14px'}}>{props.value}</span>,
        sortType: 'basic',
      },
      {
        Header: 'Begin',
        accessor: 'createDate',
        cellClass: 'text-muted w-15',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Sent',
        accessor: 'stock',
        cellClass: 'text-muted w-10',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Delivered (%)',
        accessor: 'delivered',
        cellClass: ' w-20',
        Cell: (props) => (
          // <div className=" text-theme-3 bg-theme-3-opacity">
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
        cellClass: 'w-20',
        Cell: (props) => (
          // <div className="text-primary bg-primary-opacity">{props.value}</div>
          <Badge color="" className="text-primary bg-primary-opacity rounded">
            <IntlMessages id={props.value} />
          </Badge>
        ),
        sortType: 'basic',
      },
      {
        Header: 'Clicked (%)',
        accessor: 'clicked',
        cellClass: 'w-20',
        Cell: (props) => (
          // <div className="text-theme-2 bg-theme-2-opacity">{props.value}</div>
          <Badge color="" className="text-theme-2 bg-theme-2-opacity rounded">
            <IntlMessages id={props.value} />
          </Badge>
        ),
        sortType: 'basic',
      },
      {
        Header: 'Action',
        accessor: '',
        cellClass: 'w-10',
        Cell: (props) => <ActionDropdown props={props} />,
        // sortType: 'basic',
        disableSortBy: true,
      },
    ],
    []
  );

  return (
    <Card className="h-100">
      <CardBody>
        <CardTitle className="d-flex flex-row justify-content-between font-weight-bold">
          <span style={{ fontSize: '24px' }}>
            <IntlMessages id="History" />
          </span>
          <div>
            <Badge
              color=""
              className="mb-1 border border-theme-4"
              style={{ fontWeight: '400', fontSize: '14px' }}
            >
              <BsSliders2 className="mr-2" size={15} />
              <IntlMessages id="dashboards.filters" />
            </Badge>{' '}
          </div>
        </CardTitle>
        <Table columns={cols} data={products} />
      </CardBody>
    </Card>
  );
};


const ActionDropdown = ({ props }) => {
  console.log({ props });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown
      isOpen={dropdownOpen}
      toggle={toggleDropdown}
      className=" c-pointer"
    >
      <DropdownToggle
        className="simple-icon-options-vertical "
        tag="span"
        data-toggle="dropdown"
      />
      <DropdownMenu right className="">
        <DropdownItem className="">
          <i className="simple-icon-minus mr-2" />
          Duplicate{' '}
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem className="text-theme-5 ">
          <i className="simple-icon-trash mr-2" /> Delete
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default History;
