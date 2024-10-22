/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
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
} from 'reactstrap'; // Added Dropdown, DropdownToggle, DropdownMenu, DropdownItem
import DatatablePagination from 'components/DatatablePagination';
import IntlMessages from 'helpers/IntlMessages';

import products from 'data/products';

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
                >
                  {column.render('Header')}{' '}
                  {column.render('Header') === 'Last edit' && (
                    <i
                      className={`ml-2 mt-1 ${
                        column.isSortedDesc
                          ? 'simple-icon-arrow-up'
                          : 'simple-icon-arrow-down'
                      }`}
                    />
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

const Draft = () => {
  const cols = React.useMemo(
    () => [
      {
        Header: 'Surname',
        accessor: 'newsLetter',
        cellClass: 'font-weight-bold w-75',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Last edit',
        accessor: 'createDate',
        cellClass: 'text-muted w-20',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Action',
        accessor: '',
        cellClass: 'w-20',
        Cell: (props) => <ActionDropdown props={props} />, // Replaced with ActionDropdown component
        disableSortBy: true,
      },
    ],
    []
  );

  return (
    <Card className="h-100">
      <CardBody>
        <CardTitle className="d-flex flex-row justify-content-between font-weight-bold">
          <IntlMessages id="Draft" />
          <div>
            <Badge color="" className="mb-1 border border-theme-4">
              <i className="iconsminds-calendar-4" />
              <IntlMessages id="dashboards.filters" />
            </Badge>{' '}
          </div>
        </CardTitle>
        <Table columns={cols} data={products} />
      </CardBody>
    </Card>
  );
};

// Action Dropdown component
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
        className="simple-icon-options-vertical"
        tag="span"
        data-toggle="dropdown"
      />
      <DropdownMenu right>
        <DropdownItem className="">
          <i className="simple-icon-minus mr-2" />
          Duplicate{' '}
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem className='text-theme-5 '>
          <i className="simple-icon-trash mr-2" /> Delete
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Draft;
