/* eslint-disable */

import React, { useState } from 'react';
import {
    CardBody, Row, Input
} from 'reactstrap'; //
import { Colxx } from 'components/common/CustomBootstrap';

const ProfileSetting = () => {

    return (
        <CardBody className='bg-white'>
            <h2>General Information</h2>
            <Row>
                <Colxx
                    md="12"
                    lg="12"
                    xl="12"
                    className="mb-4"
                >
                    <div>
                        <p className="text-muted mb-0">Current Password</p>
                        <Input type='password' className='w-100 rounded-sm' placeholder={"Current Password"} />
                    </div>

                </Colxx>
            </Row>
            <Row>
                <Colxx
                    md="12"
                    lg="12"
                    xl="12"
                    className="mb-4"
                >
                    <div>
                        <p className="text-muted mb-0">New Password</p>
                        <Input type='password' className='w-100 rounded-sm' placeholder={"New Password"} />
                    </div>

                </Colxx>
            </Row>
            <Row>
                <Colxx
                    md="12"
                    lg="12"
                    xl="12"
                    className="mb-4"
                >
                    <div>
                        <p className="text-muted mb-0">Confirm Password</p>
                        <Input type='password' className='w-100 rounded-sm' placeholder={"Confirm Password"} />
                    </div>

                </Colxx>
            </Row>
        </CardBody>
    );
};
export default ProfileSetting;
