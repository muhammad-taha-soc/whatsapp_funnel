/* eslint-disable */

import React, { useState, useMemo } from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import { Card, CardBody, CardTitle, Input, Badge } from 'reactstrap';
import DatatablePagination from 'components/DatatablePagination';
import IntlMessages from 'helpers/IntlMessages';
import products from 'data/products';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import { FaEllipsisV, FaWhatsapp, FaFileDownload, FaTrash, FaSearch } from 'react-icons/fa';
import Modal from './Modal';

function Table({ columns, data, onRowClick }) {
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
                    {headerGroups.map(headerGroup => (
                        <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th key={column.id} {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    {column.isSorted && (
                                        <i className={`ml-2 mt-1 ${column.isSortedDesc ? 'simple-icon-arrow-up' : 'simple-icon-arrow-down'}`} />
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row);
                        return (
                            <tr key={row.id} {...row.getRowProps()} onClick={() => onRowClick(row.original)}>
                                {row.cells.map(cell => (
                                    <td key={cell.column.id} {...cell.getCellProps({ className: cell.column.cellClass })}>
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
                defaultPageSize={pageSize}
                onPageChange={gotoPage}
                onPageSizeChange={setPageSize}
            />
        </>
    );
}

const CouponsTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedRowId, setExpandedRowId] = useState(null);
    const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
    const [selectedRows, setSelectedRows] = useState(new Set());
    const [selectedCustomer, setSelectedCustomer] = useState(null); // State for selected customer


    const [filterStates, setFilterStates] = useState({
        status: false,
        satisfied: false,
        reviewLinkClicked: false,
        suggestionImprovement: false,
    });

    const [checkboxStates, setCheckboxStates] = useState({
        status: { lead: false, customer: false },
        satisfied: { yes: false, no: false },
        reviewLinkClicked: { yes: false, no: false },
        suggestionImprovement: { yes: false, no: false },
    });
    const resetFilters = () => {
        setFilterStates({
            status: false,
            satisfied: false,
            reviewLinkClicked: false,
            suggestionImprovement: false,
        });
        // Reset checkbox states if needed
    };
    const handleRowClick = (customer) => {
        setSelectedCustomer(customer); // Set the selected customer
    };

    const handleActionToggle = id => {
        setExpandedRowId(prevId => (prevId === id ? null : id));
    };

    const toggleFilterDropdown = () => {
        setFilterDropdownOpen(!filterDropdownOpen);
    };

    const toggleRowSelection = id => {
        setSelectedRows(prevSelected => {
            const newSelected = new Set(prevSelected);
            if (newSelected.has(id)) {
                newSelected.delete(id);
            } else {
                newSelected.add(id);
            }
            return newSelected;
        });
    };

    const toggleFilterOption = (option) => {
        setFilterStates(prev => ({ ...prev, [option]: !prev[option] }));
    };

    const toggleCheckbox = (category, option) => {
        setCheckboxStates(prev => ({
            ...prev,
            [category]: { ...prev[category], [option]: !prev[category][option] }
        }));
    };

    const cols = useMemo(() => [
        {
            Header: <IntlMessages id="coupons.id" />,
            accessor: 'title',
            cellClass: 'font-weight-bold',
            Cell: ({ row }) => (
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
        },
        {
            Header: <IntlMessages id="coupons.status" />,
            accessor: 'status',
            cellClass: 'text-muted',
        },
        {
            Header: <IntlMessages id="coupons.actionName" />,
            accessor: 'satisfied',
            cellClass: 'text-theme-3',
            Cell: ({ value }) => value ? <AiFillCheckCircle className="text-success" /> : <AiFillCloseCircle className="text-danger" />,
        },
        {
            Header: <IntlMessages id="coupons.sourceofOrigin" />,
            accessor: 'reviewLink',
            cellClass: 'text-theme-2',
            Cell: ({ value }) => value ? <AiFillCheckCircle className="text-success" /> : <AiFillCloseCircle className="text-danger" />,
        },
        {
            Header: <IntlMessages id="coupons.issue-date" />,
            accessor: 'suggestion',
            cellClass: 'text-theme-2',
            Cell: ({ value }) => value ? <AiFillCheckCircle className="text-success" /> : <AiFillCloseCircle className="text-danger" />,
        },
        {
            Header: <IntlMessages id="coupons.redemption-date" />,
            accessor: 'suggestion1',
            cellClass: 'text-theme-2',
            Cell: ({ value }) => value ? <AiFillCheckCircle className="text-success" /> : <AiFillCloseCircle className="text-danger" />,
        },
        {
            Header: <IntlMessages id="coupons.name" />,
            accessor: 'suggestion2',
            cellClass: 'text-theme-2',
            Cell: ({ value }) => value ? <AiFillCheckCircle className="text-success" /> : <AiFillCloseCircle className="text-danger" />,
        },
        {
            Header: <IntlMessages id="coupons.telephone" />,
            accessor: 'suggestion3',
            cellClass: 'text-theme-2',
            Cell: ({ value }) => value ? <AiFillCheckCircle className="text-success" /> : <AiFillCloseCircle className="text-danger" />,
        },
        {
            Header: <IntlMessages id="coupons.action" />,
            accessor: 'action',
            Cell: ({ row }) => (
                <div className="position-relative">
                    <button
                        type="button"
                        onClick={() => handleActionToggle(row.id)}
                        className="btn btn-link"
                        aria-expanded={expandedRowId === row.id}
                        aria-haspopup="true"
                    >
                        <FaEllipsisV />
                    </button>
                    {expandedRowId === row.id && (
                        <div className="dropdown-menu show" style={{ position: 'absolute', zIndex: 1000 }}>
                            <div className="dropdown-item">
                                <AiFillCloseCircle className="mr-2" /> <IntlMessages id="Unsubscribe from Account" />
                            </div>
                            <div className="dropdown-item">
                                <FaWhatsapp className="mr-2" /> <IntlMessages id="Unsubscribe from Whatsapp" />
                            </div>
                            <div className="dropdown-item">
                                <FaFileDownload className="mr-2" /> <IntlMessages id="Download Contact Data" />
                            </div>
                            <div className="dropdown-divider" />
                            <div className="dropdown-item text-danger">
                                <FaTrash className="mr-2" /> <IntlMessages id="Delete Contact" />
                            </div>
                        </div>
                    )}
                </div>
            ),
        },
    ], [expandedRowId, selectedRows]);

    // Filter data based on search term
    const filteredData = products.filter(product =>
        product.title && product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Card className="h-100">
                <CardBody>
                    <CardTitle className="d-flex flex-row justify-content-between font-weight-bold mb-3">
                        <div className='input-group' style={{ width: '300px', position: 'relative' }}>
                            <Input
                                type="text"
                                placeholder="Search Coupon..."
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                style={{ paddingLeft: '30px' }}
                            />
                            <FaSearch className="search-icon" style={{
                                position: 'absolute',
                                left: '10px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 1,
                                color: '#888'
                            }} />
                        </div>
                        <div>
                            <Badge color="" className="mb-1 border border-theme-4" onClick={toggleFilterDropdown} style={{ cursor: 'pointer', padding: '10px 15px' }}>
                                <i className="iconsminds-calendar-4" />
                                <IntlMessages id="dashboards.filters" />
                            </Badge>
                            {filterDropdownOpen && (
                                <div className="filter-dropdown" style={{
                                    position: 'absolute',
                                    background: 'white',
                                    border: '1px solid #ddd',
                                    padding: '15px',
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                    zIndex: 10,
                                    top: '40px',
                                    right: '0px',
                                }}>
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h6>Filter</h6>
                                        <button type="button" className="close" onClick={toggleFilterDropdown}>
                                            <span>&times;</span>
                                        </button>
                                    </div>
                                    <div className="filter-options">
                                        <div className="filter-option">
                                            <div className="filter-option-title" onClick={() => toggleFilterOption('status')}>
                                                Status
                                            </div>
                                            {filterStates.status && (
                                                <div className="filter-option-content">
                                                    <div className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="checkbox-lead"
                                                            checked={checkboxStates.status.lead}
                                                            onChange={() => toggleCheckbox('status', 'lead')}
                                                        />
                                                        <label className="custom-control-label" htmlFor="checkbox-lead">Lead</label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="checkbox-customer"
                                                            checked={checkboxStates.status.customer}
                                                            onChange={() => toggleCheckbox('status', 'customer')}
                                                        />
                                                        <label className="custom-control-label" htmlFor="checkbox-customer">Customer</label>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="filter-option">
                                            <div className="filter-option-title" onClick={() => toggleFilterOption('satisfied')}>
                                                Satisfied
                                            </div>
                                            {filterStates.satisfied && (
                                                <div className="filter-option-content">
                                                    <div className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="checkbox-satisfied-yes"
                                                            checked={checkboxStates.satisfied.yes}
                                                            onChange={() => toggleCheckbox('satisfied', 'yes')}
                                                        />
                                                        <label className="custom-control-label" htmlFor="checkbox-satisfied-yes">Yes</label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="checkbox-satisfied-no"
                                                            checked={checkboxStates.satisfied.no}
                                                            onChange={() => toggleCheckbox('satisfied', 'no')}
                                                        />
                                                        <label className="custom-control-label" htmlFor="checkbox-satisfied-no">No</label>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="filter-option">
                                            <div className="filter-option-title" onClick={() => toggleFilterOption('reviewLinkClicked')}>
                                                Review Link Clicked
                                            </div>
                                            {filterStates.reviewLinkClicked && (
                                                <div className="filter-option-content">
                                                    <div className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="checkbox-review-yes"
                                                            checked={checkboxStates.reviewLinkClicked.yes}
                                                            onChange={() => toggleCheckbox('reviewLinkClicked', 'yes')}
                                                        />
                                                        <label className="custom-control-label" htmlFor="checkbox-review-yes">Yes</label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="checkbox-review-no"
                                                            checked={checkboxStates.reviewLinkClicked.no}
                                                            onChange={() => toggleCheckbox('reviewLinkClicked', 'no')}
                                                        />
                                                        <label className="custom-control-label" htmlFor="checkbox-review-no">No</label>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="filter-option">
                                            <div className="filter-option-title" onClick={() => toggleFilterOption('suggestionImprovement')}>
                                                Suggestion for Improvement
                                            </div>
                                            {filterStates.suggestionImprovement && (
                                                <div className="filter-option-content">
                                                    <div className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="checkbox-suggestion-yes"
                                                            checked={checkboxStates.suggestionImprovement.yes}
                                                            onChange={() => toggleCheckbox('suggestionImprovement', 'yes')}
                                                        />
                                                        <label className="custom-control-label" htmlFor="checkbox-suggestion-yes">Yes</label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="checkbox-suggestion-no"
                                                            checked={checkboxStates.suggestionImprovement.no}
                                                            onChange={() => toggleCheckbox('suggestionImprovement', 'no')}
                                                        />
                                                        <label className="custom-control-label" htmlFor="checkbox-suggestion-no">No</label>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </CardTitle>
                    <Table columns={cols} data={filteredData} onRowClick={handleRowClick} />
                </CardBody>
            </Card>
            {selectedCustomer && (
                <Modal customer={selectedCustomer} onClose={() => setSelectedCustomer(null)} /> // Modal
            )}
        </>
    );
};

export default CouponsTable;