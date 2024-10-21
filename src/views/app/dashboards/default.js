import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
// import { Row } from 'reactstrap';
import {
  Row,
  Card,
  CardBody,
  // CardTitle,
  // CardHeader,
  Nav,
  NavItem,
  TabContent,
  TabPane,
  // Button,
  // Badge,
  // CardText,
  // CardSubtitle,
  // Table,
  // CardImg
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import SingleLightbox from 'components/pages/SingleLightbox';
// import recentPostsData from 'data/recentposts';
// import RecentPost from 'components/common/RecentPost';
// import whotoFollowData from 'data/follow';
// import UserFollow from 'components/common/UserFollow';
// import GalleryDetail from 'containers/pages/GalleryDetail';
import classnames from 'classnames';
// import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import IconCardsCarousel from 'containers/dashboards/IconCardsCarousel';
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
import UsersChartCard from 'containers/dashboards/UsersChartCard';
import NewsLetter from 'containers/dashboards/NewsLetter';
import MakeMoney from 'containers/dashboards/MakeMoney';
// import TopRatedItems from 'containers/dashboards/TopRatedItems';

// const friendsData = whotoFollowData.slice();
// const followData = whotoFollowData.slice(0, 5);

const DefaultDashboard = ({ intl, match }) => {
  const { messages } = intl;
  console.log(messages);

  // const [activeFirstTab, setActiveFirstTab] = useState('1');
  const [activeSecondTab, setActiveSecondTab] = useState('1');

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.dashboards" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Colxx xxs="12" xs="12" sm="12" lg="12" md="12" xxl="12" xl="12">
        <Nav tabs className=" card-header-tabs mb-2 ml-0 mr-0">
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
              Home
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
              WhatsApp Account
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeSecondTab}>
          <TabPane tabId="1">
            <Row>
              <Colxx xl="12" md="12" lg="12" className="mb-4">
                <MakeMoney />
              </Colxx>
            </Row>
            <Row>
              <Colxx lg="12" xl="12" md="12" className="mb-4">
                <IconCardsCarousel />
                {/* <Row>
            <Colxx md="12" className="mb-4">
              <SalesChartCard />
            </Colxx>
          </Row> */}
              </Colxx>
              {/* <Colxx lg="12" xl="6" className="mb-4">
          <RecentOrders />
        </Colxx> */}
            </Row>
            <Row>
              <Colxx sm="12" md="12" className="mb-4">
                {/* <WebsiteVisitsChartCard /> */}
                <UsersChartCard />
              </Colxx>
            </Row>
            <Row>
              <Colxx xl="12" md="12" lg="12" className="mb-4">
                <NewsLetter />
              </Colxx>
            </Row>
            {/* <Row>
              <Colxx lg="4" md="12" className="mb-4">
                <ProductCategoriesPolarArea chartClass="dashboard-donut-chart" />
              </Colxx>
              <Colxx lg="4" md="6" className="mb-4">
                <Logs />
              </Colxx>
              <Colxx lg="4" md="6" className="mb-4">
                <Tickets />
              </Colxx>
            </Row>
            <Row>
              <Colxx xl="6" lg="12" className="mb-4">
                <Calendar />
              </Colxx>
              <Colxx xl="6" lg="12" className="mb-4">
                <BestSellers />
              </Colxx>
            </Row> */}
            {/* <Row>
              <Colxx sm="12" lg="4" className="mb-4">
                <ProfileStatuses />
              </Colxx>
              <Colxx md="6" lg="4" className="mb-4">
                <GradientCardContainer />
              </Colxx>
              <Colxx md="6" lg="4" className="mb-4">
                <Cakes />
              </Colxx>
            </Row> */}
            {/* <SortableStaticticsRow messages={messages} />
            <Row>
              <Colxx sm="12" md="6" className="mb-4">
                <WebsiteVisitsChartCard />
              </Colxx>
              <Colxx sm="12" md="6" className="mb-4">
                <ConversionRatesChartCard />
              </Colxx>
            </Row> */}
            {/* <Row>
              <Colxx lg="12" md="6" xl="4">
                <Row>
                  <Colxx lg="4" xl="12" className="mb-4">
                    <GradientWithRadialProgressCard
                      icon="iconsminds-clock"
                      title={`5 ${messages['dashboards.files']}`}
                      detail={messages['dashboards.pending-for-print']}
                      percent={(5 * 100) / 12}
                      progressText="5/12"
                    />
                  </Colxx>
                  <Colxx lg="4" xl="12" className="mb-4">
                    <GradientWithRadialProgressCard
                      icon="iconsminds-male"
                      title={`4 ${messages['dashboards.orders']}`}
                      detail={messages['dashboards.on-approval-process']}
                      percent={(4 * 100) / 6}
                      progressText="4/6"
                    />
                  </Colxx>
                  <Colxx lg="4" xl="12" className="mb-4">
                    <GradientWithRadialProgressCard
                      icon="iconsminds-bell"
                      title={`8 ${messages['dashboards.alerts']}`}
                      detail={messages['dashboards.waiting-for-notice']}
                      percent={(8 * 100) / 10}
                      progressText="8/10"
                    />
                  </Colxx>
                </Row>
              </Colxx>
              <Colxx lg="6" md="6" xl="4" sm="12" className="mb-4">
                <AdvancedSearch messages={messages} />
              </Colxx>
              <Colxx lg="6" xl="4" className="mb-4">
                <SmallLineCharts />
                <TopRatedItems />
              </Colxx>
            </Row> */}
          </TabPane>
          <TabPane tabId="2">
            <Row>
              {/* <Colxx xxs="12">
                <CardTitle className="mb-4">
                  <IntlMessages id="cards.image-card" />
                </CardTitle>
                <Row>
                  <Colxx xxs="12" xs="12" lg="12" md='12'>
                    <Card className="mb-4">
                      <div className="position-relative ">
                        <CardImg
                          top
                          src="/assets/img/cards/thumb-1.jpg"
                          alt="Card image cap"
                        />
                      </div>
                      <CardBody>
                        <CardSubtitle className="mb-4">
                          Homemade Cheesecake with Fresh Berries and Mint
                        </CardSubtitle>
                        <CardText className="text-muted text-small mb-0 font-weight-light">
                          09.04.2018
                        </CardText>
                      </CardBody>
                    </Card>
                  </Colxx>
                </Row>
              </Colxx> */}
              <Colxx xxs="12" lg="12" md="12" xl="12" className="">
                <Card className="mb-4">
                  <div className="account-profile-section">
                    <SingleLightbox
                      thumb="/assets/img/profiles/l-1.jpg"
                      large="/assets/img/profiles/1.jpg"
                      className="account-profile-img"
                    />
                    <div>
                      <p className="">Sarah Cortney</p>
                      <div>
                        <p className="">SmartLeadsPRO - Workshop</p>
                        <i className="simple-icon-pencil" />
                      </div>
                    </div>
                  </div>
                  <Separator className="mb-5" />
                  <CardBody>
                    {/* <Colxx xxs="12" lg="12" md="12" xl="12" className="">
                      <p className="mb-3">
                        <Badge
                          color="outline-secondary"
                          className="mb-1 mr-1"
                          pill
                        >
                          FRONTEND
                        </Badge>
                        <Badge
                          color="outline-secondary"
                          className="mb-1 mr-1"
                          pill
                        >
                          JAVASCRIPT
                        </Badge>
                        <Badge
                          color="outline-secondary"
                          className="mb-1 mr-1"
                          pill
                        >
                          SECURITY
                        </Badge>
                        <Badge
                          color="outline-secondary"
                          className="mb-1 mr-1"
                          pill
                        >
                          DESIGN
                        </Badge>
                      </p>
                    </Colxx> */}
                    {/* <Table borderless>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                      </tbody>
                    </Table> */}
                    <Row>
                      <Colxx md="4" lg="4" xl="4" className="mb-4">
                        {/* <SalesChartCard /> */}
                        hi
                      </Colxx>
                      <Colxx md="4" lg="4" xl="4" className="mb-4">
                        {/* <SalesChartCard /> */}
                        hi
                      </Colxx>

                      <Colxx lg="4" xl="4" className="mb-4">
                        {/* <RecentOrders /> */}hi
                      </Colxx>
                    </Row>
                  </CardBody>
                </Card>
              </Colxx>
            </Row>
          </TabPane>
        </TabContent>
      </Colxx>
    </>
  );
};
export default injectIntl(DefaultDashboard);
