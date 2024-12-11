/* eslint-disable */

import React, { useState } from 'react';
import {
    CardBody, Row, Input
} from 'reactstrap'; //
import { Colxx } from 'components/common/CustomBootstrap';

const ProfileSetting = () => {

    return (
        <CardBody className='card' style={{ borderRadius: "16px" }}>
            <h2 style={{ fontSize: '24px', fontWeight: '500' }}>Password</h2>
            <Row>
                <Colxx
                    md="12"
                    lg="12"
                    xl="12"
                    className="mb-4"
                >
                    <div>
                        <p className="text-muted mb-0"
                            style={{ fontSize: '14px', fontWeight: '400', color: '#667085' }}>Current Password</p>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #d7d7d7", borderRadius: "4px", padding: "0 5px" }}>
                            <Input type='password' className='w-100 rounded-sm' placeholder={"passwors"}
                                style={{ border: "none" }}
                            />
                            <i className='simple-icon-eye' style={{ fontSize: "12px", fontWeight: "600", color: "#86868A" }} />
                        </div>
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
                        <p className="text-muted mb-0"
                            style={{ fontSize: '14px', fontWeight: '400', color: '#667085' }}>New Password</p>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #d7d7d7", borderRadius: "4px", padding: "0 5px" }}>
                            <Input type='password' className='w-100 rounded-sm' placeholder={"passwors"}
                                style={{ border: "none" }}
                            />
                            <i className='simple-icon-eye' style={{ fontSize: "12px", fontWeight: "600", color: "#86868A" }} />
                        </div>
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
                        <p className="text-muted mb-0"
                            style={{ fontSize: '14px', fontWeight: '400', color: '#667085' }}>Confirm Password</p>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #d7d7d7", borderRadius: "4px", padding: "0 5px" }}>
                            <Input type='password' className='w-100 rounded-sm' placeholder={"passwors"}
                                style={{ border: "none" }}
                            />
                            <i className='simple-icon-eye' style={{ fontSize: "12px", fontWeight: "600", color: "#86868A" }} />
                        </div>
                    </div>

                </Colxx>
            </Row>
        </CardBody>
    );
};
export default ProfileSetting;
