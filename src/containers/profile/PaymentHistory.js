/* eslint-disable */
/* eslint-disable react/display-name */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
import React from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import { Badge, Card, CardBody, CardTitle } from 'reactstrap'; //
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
                                        <i
                                            className={`ml-2 mt-1 ${column.isSortedDesc
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

const NewsLetter = () => {
    const cols = React.useMemo(
        () => [
            {
                Header: 'Invoice',
                accessor: 'newsLetter',
                cellClass: 'font-weight-bold w-25',
                Cell: (props) => <>{props.value}</>,
                sortType: 'basic',
            },
            {
                Header: 'Amount',
                accessor: 'createDate',
                cellClass: 'text-muted w-20',
                Cell: (props) => <>{props.value}</>,
                sortType: 'basic',
            },
            {
                Header: 'Date',
                accessor: 'delivered',
                cellClass: 'text-theme-3 w-20 ',
                Cell: (props) => <>{props.value}</>,
                sortType: 'basic',
            },
            {
                Header: 'Status',
                accessor: 'read',
                cellClass: 'text-primary w-20',
                Cell: (props) => <>{props.value}</>,
                sortType: 'basic',
            },
            {
                Header: 'Action',
                accessor: 'clicked',
                cellClass: 'text-theme-2 w-20',
                Cell: (props) => <>{props.value}</>,
                sortType: 'basic',
            },
        ],
        []
    );

    return (
        <CardBody className='bg-white rounded-md mt-4'>
            <CardTitle className="d-flex flex-row justify-content-between font-weight-bold">
                <IntlMessages id='Billing History' />
                <div>
                    <Badge color="" className="mb-1 border border-theme-4">
                        <i className="iconsminds-download-4" />
                        <IntlMessages id="Download" />
                    </Badge>{' '}
                </div>
            </CardTitle>
            <Table columns={cols} data={products} />
        </CardBody>
    );
};

export default NewsLetter;
