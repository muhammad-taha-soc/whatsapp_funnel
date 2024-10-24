/* eslint-disable */
/* eslint-disable react/display-name */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import { Badge, Card, CardBody, CardTitle } from 'reactstrap'; //
import DatatablePagination from 'components/DatatablePagination';
import IntlMessages from 'helpers/IntlMessages';


import products from 'data/products';
import Calendar from './CalendarModal';
import EditCoupon from './EditCouponModal';

function Table({ columns, data, onEditCoupon }) {
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
                                    {/* {column.render('Header') !== 'AdministrationTable' && (
                                        <i
                                            className={`ml-2 mt-1 ${column.isSortedDesc
                                                ? 'simple-icon-arrow-up'
                                                : 'simple-icon-arrow-down'
                                                }`}
                                        />
                                    )} */}
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
                            <tr {...row.getRowProps()}
                                onClick={() => {
                                    // If the clicked cell is not "Validity", open edit coupon modal
                                    const isValidityColumnClicked = row.cells.some(
                                        (cell) => cell.column.id === 'delivered' && cell.getCellProps().onClick
                                    );

                                    if (!isValidityColumnClicked) {
                                        onEditCoupon(row.original);
                                    }
                                }}
                            >
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
        </>
    );
}

const AdministrationTable = () => {
    const [isEditCouponOpen, setIsEditCouponOpen] = useState(false);
    const [selectedCoupon, setSelectedCoupon] = useState(null);

    const cols = React.useMemo(
        () => [
            {
                Header: 'Coupon',
                accessor: 'newsLetter',
                cellClass: 'font-weight-bold w-25',
                Cell: (props) => <><div style={{ cursor: 'pointer', border: '1px solid #DDDDDD', borderRadius:'10px' }}>
                    <img src={'/assets/img/blog/coupon.svg'} style={{ width: '20px', height: '17px' }} alt='Visa' /></div></>,
                sortType: 'basic',
            },
            {
                Header: 'Promotion Name',
                accessor: 'createDate',
                cellClass: 'text-muted w-20',
                Cell: (props) => <><div style={{ cursor: 'pointer' }}>
                    {props.value}</div></>,
                sortType: 'basic',
            },
            {
                Header: 'Validity',
                accessor: 'delivered',
                cellClass: 'text-theme-3 w-20 ',
                Cell: (props) => <><div style={{ cursor: 'pointer' }}>
                    {props.value}</div></>,
                sortType: 'basic',
            },
            {
                Header: 'Condition',
                accessor: 'read',
                cellClass: 'text-primary w-20',
                Cell: (props) => <><div style={{ cursor: 'pointer' }}>
                    {props.value}</div></>,
                sortType: 'basic',
            },
            {
                Header: 'Action',
                accessor: 'clicked',
                cellClass: 'text-theme-2 w-20',
                Cell: (props) => <><div style={{ cursor: 'pointer' }}>
                    {props.value}</div></>,
                sortType: 'basic',
            },
        ],
        []
    );



    const handleEditCoupon = (coupon) => {
        setSelectedCoupon(coupon);
        setIsEditCouponOpen(true); // Open the edit coupon modal
    };

    return (
        <CardBody className='bg-white rounded-md mt-4'>
            <Table
                columns={cols}
                data={products}
                onEditCoupon={handleEditCoupon}
            />

            {isEditCouponOpen && (
                <EditCoupon
                    isOpen={isEditCouponOpen}
                    onClose={() => setIsEditCouponOpen(false)}
                    coupon={selectedCoupon}
                />
            )}
        </CardBody>
    );
};

export default AdministrationTable;
