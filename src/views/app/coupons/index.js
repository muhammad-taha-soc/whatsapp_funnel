/* eslint-disable */
import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
// import { Row } from 'reactstrap';
import {
  Row,
  // Card,
  // CardBody,
  // CardTitle,
  // CardHeader,
  Nav,
  NavItem,
  TabContent,
  TabPane,
  Button,
  // CardTitle,
  // Badge,
  // Button,
  // Badge,
  // CardText,
  // CardSubtitle,
  // Table,
  // CardImg
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
// import SingleLightbox from 'components/pages/SingleLightbox';
// import recentPostsData from 'data/recentposts';
// import RecentPost from 'components/common/RecentPost';
// import whotoFollowData from 'data/follow';
// import UserFollow from 'components/common/UserFollow';
// import GalleryDetail from 'containers/pages/GalleryDetail';
import classnames from 'classnames';
// import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
// import RecentOrders from 'containers/dashboards/RecentOrders';
// import Logs from 'containers/dashboards/Logs';
// import Tickets from 'containers/dashboards/Tickets';
// import Calendar from 'containers/dashboards/Calendar';
// import BestSellers from 'containers/dashboards/BestSellers';
// import ProfileStatuses from 'containers/dashboards/ProfileStatuses';
// import GradientCardContainer from 'containers/dashboards/GradientCardContainer';
// import Cakes from 'containers/dashboards/Cakes';
// import GradientWithRadialProgressCard from 'components/cards/GradientWithRadialProgressCard';
// import SortableStaticticsRow from 'containers/dashboards/SortableStaticticsRow';
// import AdvancedSearch from 'containers/dashboards/AdvancedSearch';
// import SmallLineCharts from 'containers/dashboards/SmallLineCharts';
// import SalesChartCard from 'containers/dashboards/SalesChartCard';
// import ProductCategoriesPolarArea from 'containers/dashboards/ProductCategoriesPolarArea';
// import WebsiteVisitsChartCard from 'containers/dashboards/WebsiteVisitsChartCard';
// import ConversionRatesChartCard from 'containers/dashboards/ConversionRatesChartCard';
// import NewsLetter from 'containers/dashboards/NewsLetter';
// import IntlMessages from 'helpers/IntlMessages';
import AccountProfile from 'containers/dashboards/AccountProfile';
import IntlMessages from 'helpers/IntlMessages';
import Schedule from 'containers/newsletter/Schedule';
import Draft from 'containers/newsletter/Draft';
import History from 'containers/newsletter/History';
import CouponsTable from 'containers/coupons/CouponsTable';
// Add this import for the icon
import { FaPlus } from 'react-icons/fa'; // Use this for the plus icon
import CreateModal from 'containers/coupons/CreateModal';

// Add this import for the icon
import AdministrationTable from 'containers/coupons/AdministrationTable';
import { GoTriangleRight } from 'react-icons/go';

const DefaultCoupons = ({ intl, match }) => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const { messages } = intl;
  console.log(messages);
  const [activeSecondTab, setActiveSecondTab] = useState('1');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal
  const handleClick = () => {
    console.log("click")
    setIsModalOpen(true);
    console.log(isModalOpen)
    if (isModalOpen) {
      setIsModalOpen(false);
    }
  };
  return (
    <>
      <div
        className="d-flex flex-row align-items-center font-weight-medium mb-3"
        style={{ marginLeft: '27px', fontSize: '14px' }}
      >
        <div className="text-primary">
          <IntlMessages id={`${'Dashboard'}`} />
        </div>
        <div className="text-muted">
          <GoTriangleRight
            className="ml-2 mr-2 "
            style={{ color: '#D1D1D4' }}
            size={15}
          />
          <IntlMessages id={`${'Coupon'}`} />
          {/* <GoTriangleRight className="ml-2 mr-2" /> */}
        </div>
      </div>
      <Row>
        <Colxx xxs="12">
          <div className="" style={{ marginLeft: '21px' }}>
            <Breadcrumb heading="Coupon" match={match} />
          </div>
          {/* <Separator className="mb-5" />   */}
        </Colxx>
      </Row>
      {isModalOpen && (
        <CreateModal
          customer={selectedCustomer}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <Colxx xxs="12">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <div style={{ width: '90%' }}>
            <Nav tabs className="mb-3 ml-2 mr-0">
              <NavItem className="w-14 text-center">
                <NavLink
                  to="#"
                  location={{}}
                  className={classnames({
                    active: activeSecondTab === '1',
                    'nav-link': true,
                  })}
                  onClick={() => {
                    setActiveSecondTab('1');
                  }}
                >
                  Overview
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
                  onClick={() => {
                    setActiveSecondTab('2');
                  }}
                >
                  Administration
                </NavLink>
              </NavItem>

            </Nav>
          </div>
          {/* New Button for Creating Coupon */}
          <div className="ml-auto" >
            <Button
              className=" text-white d-flex align-items-center justify-content-center p-2"
              onClick={handleClick}
              style={{
                borderColor: '#0DAC8A',
                backgroundColor: '#0DAC8A',
                borderRadius: '8px',
                minWidth: '170px'
              }}
            >
              <img src='/assets/img/svg/plus-circle.svg' className='mr-2' style={{ width: '17px', height: '17px' }} /> {/* Plus icon */}
              Create New Coupon
            </Button>
          </div>
        </div>
        <TabContent activeTab={activeSecondTab}>
          <TabPane tabId="1">
            <Row>
              <Colxx xl="12" md="12" lg="12" className="mb-4">
                <CouponsTable />
              </Colxx>
            </Row>
          </TabPane>

          <TabPane tabId="2">
            <Row>
              <Colxx xxs="12" lg="12" md="12" xl="12">
                <AdministrationTable />
              </Colxx>
            </Row>
          </TabPane>
        </TabContent>
      </Colxx>
    </>
  );
};

export default injectIntl(DefaultCoupons);
