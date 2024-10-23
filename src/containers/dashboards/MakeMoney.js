/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
import React from 'react';
// import { useTable, usePagination, useSortBy } from 'react-table';
import { Badge, Button, Card, CardBody, CardTitle } from 'reactstrap'; //
// import DatatablePagination from 'components/DatatablePagination';
import IntlMessages from 'helpers/IntlMessages';
import { GoDotFill } from 'react-icons/go';


// import products from 'data/products';

const MakeMoney = () => {
  return (
    <Card className="h-100">
      <CardBody>
        <CardTitle className="d-flex flex-row justify-content-between mb-0 font-weight-bold">
          <IntlMessages id="dashboards.make-money" />
          <div className="">
            <Button
              outline
              color="light"
              className=" border border-theme-4 text-dark font-weight-bold"
            >
              <i className="iconsminds-calendar-4 mr-2" />
              <IntlMessages id="15/5/24 - 15/6/24" />
              <i className="simple-icon-arrow-down ml-2" />
            </Button>{' '}
          </div>
        </CardTitle>
        <span className="text-muted">525 689 656</span>
        <div className="d-flex flex-row justify-content-between align-items-center mt-1">
          <Badge
            color="primary"
            className="mb-1 rounder badge-pill border border-theme-4 text-extra-small"
          >
            <GoDotFill  className="" />
            <IntlMessages id="button.active" />
          </Badge>{' '}
          <span className="ml-2 d-inline mb-2 text-primary">
            <IntlMessages id="dashboards.view-profiles" />{' '}
            <i className="iconsminds-right text-extra-small" />
          </span>
        </div>
      </CardBody>
    </Card>
  );
};

export default MakeMoney;
