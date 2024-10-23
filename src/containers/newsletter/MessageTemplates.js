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
  Input,
} from 'reactstrap';
import DatatablePagination from 'components/DatatablePagination';
import IntlMessages from 'helpers/IntlMessages';

import products from 'data/products';
import { FaSearch } from 'react-icons/fa';

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

const MessageTemplates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRows, setSelectedRows] = useState(new Set());

    const toggleRowSelection = (id) => {
      setSelectedRows((prevSelected) => {
        const newSelected = new Set(prevSelected);
        if (newSelected.has(id)) {
          newSelected.delete(id);
        } else {
          newSelected.add(id);
        }
        return newSelected;
      });
    };

  const cols = React.useMemo(
    () => [
      {
        Header: 'Surname',
        accessor: 'newsLetter',
        cellClass: 'font-weight-bold w-40',
        Cell: ({row}) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                checked={selectedRows.has(row.id)}
                onChange={() => toggleRowSelection(row.id)}
                style={{ marginRight: '8px' }}
              />
              {row.original.title}
            </div>
        ),
        sortType: 'basic',
      },
      {
        Header: 'Category',
        accessor: 'createDate',
        cellClass: 'text-muted w-20',
        Cell: () => <>Marketing</>,
        sortType: 'basic',
      },
      {
        Header: 'Language',
        accessor: 'stock',
        cellClass: 'text-muted w-20',
        Cell: () => <>German</>,
        sortType: 'basic',
      },
      {
        Header: 'Status',
        accessor: 'read',
        cellClass: 'text-primary w-20',
        Cell: () => (
          <>
            <Badge
              color="outline-primary"
              className="mb-1  text-primary rounder badge-pill border border-theme-1 text-extra-small"
              pill
            >
              {/* <i className="iconsminds-record-2" /> */}
              <IntlMessages id="Approved" />
            </Badge>{' '}
          </>
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
          <div
            className="input-group"
            style={{ width: '300px', position: 'relative' }}
          >
            <Input
              type="text"
              placeholder="Search Customer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ paddingLeft: '30px' }}
            />
            <FaSearch
              className="search-icon"
              style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1,
                color: '#888',
              }}
            />
          </div>
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

export default MessageTemplates;
