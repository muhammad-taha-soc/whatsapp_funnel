import React from 'react';
import { injectIntl } from 'react-intl';
import { Row, TabPane } from 'reactstrap';
// import { NavLink } from 'react-router-dom';
// import classnames from 'classnames';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import CustomersTable from 'containers/contacts/CustomersTable';

const DefaultCustomers = ({ match }) => {
//   const { messages } = intl; 
  // const [activeSecondTab, setActiveSecondTab] = useState('1');

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.customers" match={match} />
          <Separator className="mb-5" />
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
