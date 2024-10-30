import React from 'react';
import {
  Card,
  CardBody,
  // UncontrolledDropdown,
  // DropdownItem,
  // DropdownToggle,
  // DropdownMenu,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import IntlMessages from 'helpers/IntlMessages';
import { AreaChart } from 'components/charts';
import { FaCaretUp } from 'react-icons/fa';

import { usersChartData } from 'data/charts';

const UsersChartCard = () => {
  return (
    <Card className="dashboard-filled-line-chart">
      <CardBody>
        <div className="float-left float-none-xs">
          <div className="d-inline-block">
            <h5
              className="d-inline"
              style={{ fontSize: '24px', fontWeight: '500' }}
            >
              <IntlMessages id="dashboards.users" />
            </h5>
            <span className="text-muted text-small d-block mt-3">
              <IntlMessages id="dashboards.in-total" />
            </span>
            <div className=" d-flex flex-row align-items-center">
              <h2
                className="d-inline-block mt-1 font-weight-bold"
                style={{ fontSize: '28px' }}
              >
                26,201
              </h2>
              <span
                className="ml-2 d-inline mb-2 text-primary font-weight-bold"
                style={{ fontSize: '14px' }}
              >
                10% <FaCaretUp className="" />
              </span>
            </div>
          </div>
        </div>

        <div className="btn-group float-right float-none-xs mt-2">
          {/* <UncontrolledDropdown>
            <DropdownToggle caret color="secondary" className="btn-xs" outline>
              <IntlMessages id="dashboards.this-week" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <IntlMessages id="dashboards.last-week" />
              </DropdownItem>
              <DropdownItem>
                <IntlMessages id="dashboards.this-month" />
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
          <Nav
            className="rounded border border-muted"
            style={{ backgroundColor: '#F8F9FB', padding: '5px 10px' }}
          >
            <NavItem className="card">
              <NavLink
                active
                href="#"
                style={{ padding: '6px 16px' }}
              >
                <IntlMessages id="dashboards.daily" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <IntlMessages id="dashboards.weekly" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <IntlMessages id="dashboards.monthly" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="" href="#">
                <IntlMessages id="dashboards.yearly" />
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </CardBody>

      <div className="chart card-body pt-0">
        <AreaChart shadow data={usersChartData} />
      </div>
    </Card>
  );
};

export default UsersChartCard;
