/* eslint-disable */
import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
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
import Breadcrumb from 'containers/navs/Breadcrumb';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import ProfileInfo from 'containers/profile/ProfileInfo';
import IntlMessages from 'helpers/IntlMessages';
import ProfileSetting from 'containers/profile/ProfileSetting';
import Payment from 'containers/profile/Payment';

const DefaultProfile = ({ intl, match }) => {
    const { messages } = intl;
    console.log(messages);
    const [activeTab, setActiveTab] = useState('1');

    return (
        <>
            <Row>
                <Colxx xxs="12">
                    <Breadcrumb heading="Profile Setting" match={match} />
                </Colxx>
                <Colxx xxs="12" xs="12" sm="12" lg="12" md="12" xxl="12" xl="12">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                        <div style={{ width: '90%' }}>
                            <Nav tabs className="ml-0 mr-0">
                                <NavItem className="w-14 text-center">
                                    <NavLink
                                        to="#"
                                        location={{}}
                                        className={classnames({
                                            active: activeTab === '1',
                                            'nav-link': true,
                                        })}
                                        onClick={() => {
                                            setActiveTab('1');
                                        }}
                                    >
                                        Profile Info
                                    </NavLink>
                                </NavItem>
                                <NavItem className="w-14 text-center">
                                    <NavLink
                                        to="#"
                                        location={{}}
                                        className={classnames({
                                            active: activeTab === '2',
                                            'nav-link': true,
                                        })}
                                        onClick={() => {
                                            setActiveTab('2');
                                        }}
                                    >
                                        Account Setting
                                    </NavLink>
                                </NavItem>
                                <NavItem className="w-14 text-center">
                                    <NavLink
                                        to="#"
                                        location={{}}
                                        className={classnames({
                                            active: activeTab === '3',
                                            'nav-link': true,
                                        })}
                                        onClick={() => {
                                            setActiveTab('3');
                                        }}
                                    >
                                        Payments
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                        <div className="b-btn" style={{ border: '1px solid #0DAC8A', color: "#0DAC8A", minWidth: "120px", textAlign: "center" }}>
                            Save Change
                        </div>
                    </div>
                    <TabContent activeTab={activeTab} >
                        <TabPane tabId="1">
                            <Row >
                                <Colxx xxs="12" lg="12" md="12" xl="12" className="" >
                                    <div className='card' style={{ padding: "10px", borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }}>
                                        <div className="bg-theme-1 account-profile-background-layer account-profile-background-layer-btn"
                                            style={{ borderRadius: '10px' }}
                                        >
                                        </div>
                                    </div>
                                </Colxx>
                                <Colxx xl="12" md="12" lg="12" className="">
                                    <ProfileInfo />
                                </Colxx>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Colxx xl="12" md="12" lg="12" className="">
                                    <ProfileSetting />
                                </Colxx>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                <Colxx xl="12" md="12" lg="12" className="">
                                    <Payment />
                                </Colxx>
                            </Row>
                        </TabPane>
                    </TabContent>
                </Colxx>
            </Row>
        </>
    )

}

export default injectIntl(DefaultProfile);