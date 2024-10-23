/* eslint-disable */
/* eslint-disable react/display-name */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import {
    Badge, Card, CardBody, CardTitle, Row, Input, Dropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    ButtonDropdown,
} from 'reactstrap'; //
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import SingleLightbox from 'components/pages/SingleLightbox';


const ProfileInfo = () => {
    const [dropdownBasicOpen, setDropdownBasicOpen] = useState(false);
    return (
        <Card className="mb-4">
            <div className="account-profile-section">
                <SingleLightbox
                    thumb="/assets/img/profiles/l-1.jpg"
                    large="/assets/img/profiles/1.jpg"
                    className="account-profile-img "
                />
                <div>
                    <p className="">Name</p>
                    <CardTitle className="mb-0 font-weight-bold">
                        <p className="">Sam Emili</p>
                    </CardTitle>
                </div>
            </div>
            <Separator className="mb-5" />
            <CardBody>
                <h2>General Information</h2>
                <Row>
                    <Colxx
                        md="6"
                        lg="6"
                        xl="6"
                        className="mb-4"
                    >
                        <div>
                            <p className="text-muted mb-0">Company Name</p>
                            <Input className='w-100 rounded-sm' placeholder={"Name"} />
                        </div>

                    </Colxx>
                    <Colxx
                        md="6"
                        lg="6"
                        xl="6"
                        className="mb-4"
                    >
                        <div>
                            <p className="text-muted mb-0">Address</p>
                            <Input className='w-100 rounded-sm' placeholder={"Address"} />
                        </div>
                    </Colxx>
                </Row>
                <Row>
                    <Colxx
                        md="6"
                        lg="6"
                        xl="6"
                        className="mb-4"
                    >
                        <div>
                            <p className="text-muted mb-0">Friendly Name</p>
                            <Input className='w-100 rounded-sm' placeholder={"Friendly Name"} />
                        </div>

                    </Colxx>
                    <Colxx
                        md="6"
                        lg="6"
                        xl="6"
                        className="mb-4"
                    >
                        <div>
                            <p className="text-muted mb-0">E-mail address</p>
                            <Input className='w-100 rounded-sm' placeholder={"abcd@gmail.com"} />
                        </div>
                    </Colxx>
                </Row>
                <Row>
                    <Colxx
                        md="6"
                        lg="6"
                        xl="6"
                        className="mb-4"
                    >
                        <div>
                            <p className="text-muted mb-0">Website</p>
                            <Input className='w-100 rounded-sm' placeholder={"make.io"} />
                        </div>

                    </Colxx>
                    <Colxx
                        md="6"
                        lg="6"
                        xl="6"
                        className="mb-4"
                    >
                        <div>
                            <p className="text-muted mb-0">Google link</p>
                            <Input className='w-100 rounded-sm' placeholder={"google.com"} />
                        </div>
                    </Colxx>

                </Row>
                {/*  */}
                <Row>
                    <Colxx
                        md="6"
                        lg="6"
                        xl="6"
                        className="mb-4"
                    >
                        <div>
                            <p className="text-muted mb-0">Telephone Number</p>
                            <Row>
                                <Colxx
                                    md="3"
                                    lg="3"
                                    xl="3">
                                    <Dropdown
                                        isOpen={dropdownBasicOpen}
                                        toggle={() => setDropdownBasicOpen(!dropdownBasicOpen)}
                                        className="mb-5 bg-red-1 rounded-sm"
                                    >
                                        <DropdownToggle caret color="" outline>
                                            <IntlMessages id="dropdowns.dropdown" />
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem header>
                                                <IntlMessages id="dropdowns.header" />
                                            </DropdownItem>
                                            <DropdownItem disabled>
                                                <IntlMessages id="dropdowns.action" />
                                            </DropdownItem>
                                            <DropdownItem>
                                                UK
                                                {/* <IntlMessages id="ue" /> */}
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>
                                                <IntlMessages id="dropdowns.another-action" />
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </Colxx>
                                <Colxx
                                    md="9"
                                    lg="9"
                                    xl="9"
                                >
                                    <Input className='w-100 rounded-sm' placeholder={"make.io"} />
                                </Colxx>
                            </Row>
                        </div>

                    </Colxx>
                    <Colxx
                        md="6"
                        lg="6"
                        xl="6"
                        className="mb-4"
                    >
                        <div>
                            <p className="text-muted mb-0">Direct Chat WhatApp Number</p>
                            <Row>
                                <Colxx
                                    md="3"
                                    lg="3"
                                    xl="3">
                                    <Dropdown
                                        isOpen={dropdownBasicOpen}
                                        toggle={() => setDropdownBasicOpen(!dropdownBasicOpen)}
                                        className="mb-5 bg-red-1 rounded-sm"
                                    >
                                        <DropdownToggle caret color="" outline>
                                            <IntlMessages id="dropdowns.dropdown" />
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem header>
                                                <IntlMessages id="dropdowns.header" />
                                            </DropdownItem>
                                            <DropdownItem disabled>
                                                <IntlMessages id="dropdowns.action" />
                                            </DropdownItem>
                                            <DropdownItem>
                                                UK
                                                {/* <IntlMessages id="ue" /> */}
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>
                                                <IntlMessages id="dropdowns.another-action" />
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </Colxx>
                                <Colxx
                                    md="9"
                                    lg="9"
                                    xl="9"
                                >
                                    <Input className='w-100 rounded-sm' placeholder={"make.io"} />
                                </Colxx>
                            </Row>
                        </div>

                    </Colxx>

                </Row>
                <h2>Opening Hours</h2>
                <Row>
                    <Colxx
                        md="6"
                        lg="6"
                        xl="6"
                        className="mb-4"
                    >
                        <Row>
                            <Colxx
                                md="3"
                                lg="3"
                                xl="3"
                                className="mb-4"
                            >
                                Day
                            </Colxx>

                            <Colxx
                                md="9"
                                lg="9"
                                xl="9"
                                className="mb-4"
                            >
                                Form
                            </Colxx>
                        </Row>
                        {/*  */}
                        <Row className='mb-2'>
                            <Colxx
                                md="3"
                                lg="3"
                                xl="3"
                                className="d-flex align-items-center"
                            >
                                Monday
                            </Colxx>

                            <Colxx
                                md="9"
                                lg="9"
                                xl="9"

                            >
                                <Input className='w-100 rounded-sm' placeholder={"abcd@gmail.com"} />
                            </Colxx>
                        </Row>
                        <Row className='mb-2'>
                            <Colxx
                                md="3"
                                lg="3"
                                xl="3"
                                className="d-flex align-items-center"
                            >
                                Tuesday
                            </Colxx>

                            <Colxx
                                md="9"
                                lg="9"
                                xl="9"

                            >
                                <Input className='w-100 rounded-sm' placeholder={"abcd@gmail.com"} />
                            </Colxx>
                        </Row>
                        <Row className='mb-2'>
                            <Colxx
                                md="3"
                                lg="3"
                                xl="3"
                                className="d-flex align-items-center"
                            >
                                Wednesday
                            </Colxx>

                            <Colxx
                                md="9"
                                lg="9"
                                xl="9"

                            >
                                <Input className='w-100 rounded-sm' placeholder={"abcd@gmail.com"} />
                            </Colxx>
                        </Row>
                        <Row className='mb-2'>
                            <Colxx
                                md="3"
                                lg="3"
                                xl="3"
                                className="d-flex align-items-center"
                            >
                                Thursday
                            </Colxx>

                            <Colxx
                                md="9"
                                lg="9"
                                xl="9"

                            >
                                <Input className='w-100 rounded-sm' placeholder={"abcd@gmail.com"} />
                            </Colxx>
                        </Row>
                        <Row className='mb-2'>
                            <Colxx
                                md="3"
                                lg="3"
                                xl="3"
                                className="d-flex align-items-center"
                            >
                                Friday
                            </Colxx>

                            <Colxx
                                md="9"
                                lg="9"
                                xl="9"

                            >
                                <Input className='w-100 rounded-sm' placeholder={"abcd@gmail.com"} />
                            </Colxx>
                        </Row>
                        <Row className='mb-2'>
                            <Colxx
                                md="3"
                                lg="3"
                                xl="3"
                                className="d-flex align-items-center"
                            >
                                Saturaday
                            </Colxx>

                            <Colxx
                                md="9"
                                lg="9"
                                xl="9"

                            >
                                <Input className='w-100 rounded-sm' placeholder={"abcd@gmail.com"} />
                            </Colxx>
                        </Row>
                        <Row className='mb-2'>
                            <Colxx
                                md="3"
                                lg="3"
                                xl="3"
                                className="d-flex align-items-center"
                            >
                                Sunday
                            </Colxx>

                            <Colxx
                                md="9"
                                lg="9"
                                xl="9"

                            >
                                <Input className='w-100 rounded-sm' placeholder={"abcd@gmail.com"} />
                            </Colxx>
                        </Row>

                    </Colxx>
                    <Colxx
                        md="6"
                        lg="6"
                        xl="6"
                        className="mb-4"
                    >
                        <Row >
                            <Colxx
                                md="12"
                                lg="12"
                                xl="12"
                                className="mb-4"
                            >
                                Unit
                            </Colxx>
                        </Row>
                        <Row className='mb-2'>
                            <Colxx
                                md="12"
                                lg="12"
                                xl="12"
                            >
                                <Input className='w-100 rounded-sm' placeholder={"abcd@gmail.com"} />
                            </Colxx>
                        </Row>
                        <Row className='mb-2'>
                            <Colxx
                                md="12"
                                lg="12"
                                xl="12"
                            >
                                <Input className='w-100 rounded-sm' placeholder={"abcd@gmail.com"} />
                            </Colxx>
                        </Row>
                        <Row className='mb-2'>
                            <Colxx
                                md="12"
                                lg="12"
                                xl="12"
                            >
                                <Input className='w-100 rounded-sm' placeholder={"abcd@gmail.com"} />
                            </Colxx>
                        </Row>
                        <Row className='mb-2'>
                            <Colxx
                                md="12"
                                lg="12"
                                xl="12"
                            >
                                <Input className='w-100 rounded-sm' placeholder={"abcd@gmail.com"} />
                            </Colxx>
                        </Row>
                        <Row className='mb-2'>
                            <Colxx
                                md="12"
                                lg="12"
                                xl="12"
                            >
                                <Input className='w-100 rounded-sm' placeholder={"abcd@gmail.com"} />
                            </Colxx>
                        </Row>
                        <Row className='mb-2'>
                            <Colxx
                                md="12"
                                lg="12"
                                xl="12"
                            >
                                <Input className='w-100 rounded-sm' placeholder={"abcd@gmail.com"} />
                            </Colxx>
                        </Row>
                        <Row className='mb-2'>
                            <Colxx
                                md="12"
                                lg="12"
                                xl="12"
                            >
                                <Input className='w-100 rounded-sm' placeholder={"abcd@gmail.com"} />
                            </Colxx>
                        </Row>
                    </Colxx>
                </Row>
            </CardBody>
        </Card>
    );
}

export default ProfileInfo