import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
// import { Row } from 'reactstrap';
import {
  Row,
  Card,
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
  //   Form,
  FormGroup,
  Label,
  Input,
  // CardBody,
  //   CardTitle,
  Badge,
  CardTitle,
} from 'reactstrap';
// import Select from 'react-select';

import { NavLink } from 'react-router-dom';
// import { TbRotateClockwise2 } from 'react-icons/tb';

// import SingleLightbox from 'components/pages/SingleLightbox';
// import recentPostsData from 'data/recentposts';
// import RecentPost from 'components/common/RecentPost';
// import whotoFollowData from 'data/follow';
// import UserFollow from 'components/common/UserFollow';
// import GalleryDetail from 'containers/pages/GalleryDetail';
import classnames from 'classnames';
// import IntlMessages from 'helpers/IntlMessages';
import { Colxx } from 'components/common/CustomBootstrap';
// import Breadcrumb from 'containers/navs/Breadcrumb';
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
// import AccountProfile from 'containers/dashboards/AccountProfile';
import IntlMessages from 'helpers/IntlMessages';
// import ReactCountryDropdown from 'react-country-dropdown';
// import Schedule from 'containers/newsletter/Schedule';
// import Draft from 'containers/newsletter/Draft';
// import History from 'containers/newsletter/History';
// import TagsInput from 'react-tagsinput';
// import CustomSelectInput from 'components/common/CustomSelectInput';
// import ReactQuill from 'react-quill';
// import TagsInputExample from 'containers/forms/TagsInputExample';
import { IoMdCheckmark } from 'react-icons/io';
import { GoTriangleRight, GoImage } from 'react-icons/go';
import { LuFileUp } from 'react-icons/lu';
import { BsFileText } from 'react-icons/bs';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import CountrySelect from 'containers/newsletter/CountrySelect';

const CreateNewTemplate = ({ intl, match }) => {
  const { messages } = intl;
  console.log(messages);
  console.log(match);
  // const selectData = [
  //   { label: 'Cake', value: 'cake', key: 0 },
  //   { label: 'Cupcake', value: 'cupcake', key: 1 },
  //   { label: 'Dessert', value: 'dessert', key: 2 },
  // ];

  const [activeSecondTab, setActiveSecondTab] = useState('1');
  // const [selectedOptionLT, setSelectedOptionLT] = useState('');
  //    const [textQuillBubble, setTextQuillBubble] = useState('');
  // const [tagsLT, setTagsLT] = useState([]);
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <div className="d-flex flex-row justify-content-between align-items-center mb-1">
            {/* <Nav tabs className=" mb-3 ml-0 mr-0">
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
                  Dashboard
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
                  Newsletter
                </NavLink>
              </NavItem>
            </Nav> */}
            <div
              className="d-flex flex-row justify-content-around align-items-center font-weight-medium"
              style={{ fontSize: '16px',fontWeight:'500' }}
            >
              <span className="text-primary">
                <IntlMessages id={`${'Dashboard'}`} />
              </span>
              <GoTriangleRight className="ml-2 mr-2" />
              <IntlMessages id={`${'Newsletter'}`} />
              <GoTriangleRight className="ml-2 mr-2 text-muted" />
              <div className="text-muted">
                <IntlMessages id={`${'Create Newsletter'}`} />
              </div>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <p
                className="text-muted font-weight-bold mr-2 mt-3"
                // color="light"
              >
                <IoMdCheckmark size={20} className="mr-1" />
                Saved
              </p>
              <Button
                color="light"
                className="default  btn-primary bg-theme-1 mr-1 text-white font-weight-bold"
                style={{ borderRadius: '0.5rem', fontSize: '14px' }}
              >
                <IntlMessages id={`${'Send To Review'}`} />
              </Button>{' '}
              <Button
                color="light"
                className="w-10 bg-theme-1 text-white font-weight-bold"
                style={{ borderRadius: '0.5rem' }}
              >
                <img
                  className=""
                  style={{ margin: 'auto -10px' }}
                  alt="calendar"
                  src="/assets/img/newsletter/clock-small-icon.svg"
                  // width="20px"
                  height="20px"
                />
              </Button>{' '}
            </div>
          </div>
        </Colxx>
      </Row>
      <Colxx
        xxs="12"
        xs="12"
        sm="12"
        lg="12"
        md="12"
        xxl="12"
        xl="12"
        className="rounded p-0"
      >
        <Card>
          <Colxx xxs="12" xs="12" sm="12" lg="12" md="12" xxl="12" xl="12">
            <div className="d-flex flex-row justify-content-between">
              <Nav tabs className=" mb-3 ml-0 mr-0">
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
                    Create New Templates
                  </NavLink>
                </NavItem>
              </Nav>
              {/* <div className="">
              <Button
                color="light"
                className="default btn btn-primary bg-primary text-white font-weight-bold"
              >
                <i className="simple-icon-plus mr-2" />
                <IntlMessages
                  id={`${
                    activeSecondTab === '1'
                      ? 'Create Newsletter'
                      : 'New Template'
                  }`}
                />
              </Button>{' '}
            </div> */}
            </div>
            <TabContent activeTab={activeSecondTab}>
              <TabPane tabId="1" style={{ fontSize: '14px' }}>
                <Row>
                  <Colxx lg="6" xl="6" md="6">
                    <Row>
                      <Colxx lg="6" xl="6" md="6" className="mb-4">
                        <FormGroup className="mb-2">
                          <Label
                            className="text-muted"
                            style={{ fontSize: '14px', fontWeight: '500' }}
                          >
                            <IntlMessages id="Template Name" />
                          </Label>
                          <Input
                            type="name"
                            placeholder="Enter name"
                            style={{ borderRadius: '8px' }}
                            className=""
                          />
                        </FormGroup>
                      </Colxx>
                      <Colxx lg="6" xl="6" md="6" className="mb-4">
                      <FormGroup className="mb-2 mt-1">
                        <Label
                          className="text-muted"
                          style={{ fontSize: '14px', fontWeight: '500' }}
                        >
                          <IntlMessages id="Language" />
                        </Label>
                          {/* <Select
                      components={{ Input: CustomSelectInput }}
                      className="react-select"
                      classNamePrefix="react-select"
                      name="form-field-name"
                      value={selectedOptionLT}
                      onChange={(val) => setSelectedOptionLT(val)}
                      options={selectData}
                      placeholder="Select existing template"
                    /> */}
                          {/* <Colxx md="3" lg="3" xl="3"> */}
                          {/* <ReactCountryDropdown
                            defaultCountry="DE"
                            onSelect={(country) => console.log(country.name)}
                            // className="ml-10" 
                          /> */}
                          <CountrySelect />
                          {/* </Colxx> */}
                        </FormGroup>
                      </Colxx>
                    </Row>
                    <Row>
                      <Colxx lg="12" xl="12" md="12" className="mb-4">
                        <CardTitle className="mb-2 font-weight-bold">
                          Blah Blah
                        </CardTitle>
                        <div
                          className="text-muted"
                          style={{ fontSize: '14px' }}
                        >
                          <IntlMessages id="Lorem ipsum dolor sit amet consectetur. Eget hac faucibus at in. Sed pharetra nunc pellentesque ante adipiscing sit turpis lacus. Scelerisque pellentesque sed auctor sem. Lorem ipsum dolor sit amet consectetur. Eget hac faucibus at in. Sed pharetra nunc pellentesque ante adipiscing sit turpis lacus. Scelerisque pellentesque sed auctor sem. " />
                        </div>
                      </Colxx>
                    </Row>
                    <Row>
                      <Colxx lg="12" xl="12" md="12" className="mb-2">
                        <FormGroup className="mb-2">
                          <Label
                            className="text-muted"
                            style={{ fontSize: '14px', fontWeight: '500' }}
                          >
                            <IntlMessages id="Headers (Optional)" />
                          </Label>
                          <div className="d-flex flex-row justify-content-between ">
                            <Badge
                              color="outline-light"
                              className="mb-1 mr-3 w-25 text-primary text-center d-flex flex-row justify-content-center align-items-center"
                              style={{ fontWeight: '400' }}
                            >
                              <BsFileText className="mr-1" size={17} />

                              <IntlMessages id="Text" />
                            </Badge>
                            <Badge
                              color="outline-light"
                              className="mb-1 mr-3 w-25 text-primary text-center d-flex flex-row justify-content-center align-items-center"
                              style={{ fontWeight: '400' }}
                            >
                              <GoImage
                                className="mr-1"
                                // style={{ transform: 'scalex(-1)' }}
                                size={17}
                              />

                              <IntlMessages id="Image" />
                            </Badge>
                            <Badge
                              color="outline-light"
                              className="mb-1 mr-3 w-25 text-primary text-center d-flex flex-row justify-content-center align-items-center"
                              style={{ fontWeight: '400' }}
                            >
                              <AiOutlinePlayCircle className="mr-1" size={17} />

                              <IntlMessages id="Video" />
                            </Badge>
                            <Badge
                              color="outline-light"
                              className="mb-1  w-25 text-primary text-center d-flex flex-row justify-content-center align-items-center"
                              style={{ fontWeight: '400' }}
                            >
                              <LuFileUp className="mr-1" size={17} />

                              <IntlMessages id="File" />
                            </Badge>
                          </div>
                        </FormGroup>
                      </Colxx>
                    </Row>
                    <Row>
                      <Colxx lg="12" xl="12" md="12" className="mb-4">
                        <FormGroup className="mb-2">
                          <Label
                            className="text-muted"
                            style={{ fontSize: '14px', fontWeight: '500' }}
                          >
                            <IntlMessages id="Message" />
                          </Label>
                          {/* <ReactQuill
                      theme="bubble"
                      value={textQuillBubble}
                      onChange={(val) => setTextQuillBubble(val)}
                    /> */}
                          <Input
                            type="textarea"
                            placeholder="Write text message"
                            style={{ borderRadius: '8px' }}
                          />
                        </FormGroup>
                        <span style={{ fontSize: '12px', color: '#667085' }}>
                          <IntlMessages id="* Make sure the message you write is in the same language that you chose above." />
                        </span>
                      </Colxx>
                    </Row>
                    <Row>
                      <Colxx lg="12" xl="12" md="12" className="mb-4">
                        <FormGroup className="mb-2">
                          <Label
                            className="text-muted"
                            style={{ fontSize: '14px', fontWeight: '500' }}
                          >
                            <IntlMessages id="Footer (Optional)" />
                          </Label>
                          <Input
                            type="name"
                            placeholder="Enter Footer text"
                            style={{ borderRadius: '8px' }}
                          />
                        </FormGroup>
                      </Colxx>
                    </Row>
                    <Row>
                      <Colxx lg="6" xl="6" md="6" className="mb-2">
                        <Label
                          className="text-muted"
                          style={{ fontSize: '14px', fontWeight: '500' }}
                        >
                          <IntlMessages id="Button text" />
                        </Label>
                        <Input
                          type="name"
                          placeholder="Enter button text"
                          style={{ borderRadius: '8px' }}
                        />
                      </Colxx>
                      <Colxx lg="6" xl="6" md="6" className="mb-2">
                        <Label
                          className="text-muted"
                          style={{ fontSize: '14px', fontWeight: '500' }}
                        >
                          <IntlMessages id="Website URL" />
                        </Label>
                        <Input
                          type="name"
                          placeholder="Enter website URL"
                          style={{ borderRadius: '8px' }}
                        />
                      </Colxx>
                    </Row>
                    <Row>
                      <Colxx lg="12" xl="12" md="12" className="mb-4">
                        <span
                          style={{
                            fontSize: '12px',
                            color: '#667085',
                            lineHeight: '20px',
                          }}
                        >
                          <IntlMessages id="* You can add up to three regular buttons or one URL button. You can only pick one type of button, not both." />
                        </span>
                      </Colxx>
                    </Row>
                    <Row>
                      <Colxx lg="12" xl="12" md="12" className="mb-4">
                        <FormGroup className="mb-2">
                          <Label
                            className="text-muted"
                            style={{ fontSize: '14px', fontWeight: '500' }}
                          >
                            <IntlMessages id="Variable" />
                          </Label>
                          <Input
                            type="name"
                            placeholder=""
                            style={{ borderRadius: '8px' }}
                          />
                        </FormGroup>
                      </Colxx>
                    </Row>
                  </Colxx>
                  <Colxx lg="6" xl="6" md="6" className="text-center">
                    <img
                      className=""
                      // style={{ margin: 'auto -10px' }}
                      alt="whatsapp"
                      src="/assets/img/newsletter/whatsapp.svg"
                      // width="20px"
                      // height="20px"
                    />
                  </Colxx>
                </Row>
              </TabPane>
            </TabContent>
          </Colxx>
        </Card>
      </Colxx>
    </>
  );
};
export default injectIntl(CreateNewTemplate);
