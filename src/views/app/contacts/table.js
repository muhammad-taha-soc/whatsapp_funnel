import React from 'react';
import { injectIntl } from 'react-intl';
import { Row, TabPane } from 'reactstrap';
// import { NavLink } from 'react-router-dom';
// import classnames from 'classnames';
import { Colxx } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import CustomersTable from 'containers/contacts/CustomersTable';
import { GoTriangleRight } from 'react-icons/go';
import IntlMessages from 'helpers/IntlMessages';

const DefaultCustomers = ({ match }) => {
//   const { messages } = intl; 
  // const [activeSecondTab, setActiveSecondTab] = useState('1');

  return (
    <>
      <div className="d-flex align-items-center font-weight-bold mb-3 ml-3">
        <div className="text-primary">
          <IntlMessages id={`${'Dashboard'}`} />
        </div>
        <div className="text-muted">
          <GoTriangleRight className="ml-2 mr-2 " size={15} />
          <IntlMessages id={`${'Customer'}`} />
          {/* <GoTriangleRight className="ml-2 mr-2" /> */}
        </div>
      </div>
      <Row>
        <Colxx xxs="12">
          <div className="ml-3">
            <Breadcrumb heading="menu.customers" match={match} />
          </div>
          {/* <Separator className="mb-5" /> */}
        </Colxx>
      </Row>
      <Colxx xxs="12" xs="12" sm="12" lg="12" md="12" xxl="12" xl="12">
        {/* <Nav tabs className="mb-3 ml-0 mr-0">
          <NavItem className="w-14 text-center">
            <NavLink
              to="#"
              location={{}}
              className={classnames({
                active: activeSecondTab === '1',
                'nav-link': true,
              })}
              onClick={() => setActiveSecondTab('1')}
            >
              Customers
            </NavLink>
          </NavItem>
          <NavItem className="w-14 text-center">
            <NavLink
              to="#"
              location={{}}
              className={classnames({
                active: activeSecondTab === '2',
                'nav-link': true,
              })}
              onClick={() => setActiveSecondTab('2')}
            >
              Account Details
            </NavLink>
          </NavItem>
        </Nav> */}

        {/* <TabContent activeTab={activeSecondTab}> */}
        <TabPane tabId="1">
          <Row>
            <Colxx xl="12" md="12" lg="12" className="mb-4">
              <CustomersTable />
            </Colxx>
          </Row>
        </TabPane>
        {/* </TabContent> */}
      </Colxx>
    </>
  );
};

export default injectIntl(DefaultCustomers);
