/* eslint-disable */

import React from 'react';
import {
    CardBody,
    Input,
} from 'reactstrap'; //
import { Separator } from 'components/common/CustomBootstrap';
import { all } from 'redux-saga/effects';

const PaymentMethod = () => {

    return (
        <>
            <CardBody className='card rounded-md' style={{ borderRadius: "16px" }}>
                <h2 style={{ fontSize: '24px', fontWeight: '500' }}>Payment method</h2>
                <p style={{ fontSize: '16px', fontWeight: '600' }}>Card details</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='w-50 pr-2' >
                        <div
                            className='d-flex justify-content-between '
                            style={{
                                border: '1px solid #0DAC8A',
                                borderRadius: '12px',
                                padding: '16px',
                            }}>
                            <div
                                className='d-flex justify-content-between align-items-center'
                            >
                                <div
                                    className='d-flex '
                                >
                                    <div className='mr-3'>
                                        <img src={'/assets/img/payment/visa-image.png'} style={{ width: '30px', height: '30px' }} alt='Visa' />
                                    </div>
                                    <div>
                                        <p className='mb-0' style={{ fontSize: '14px', fontWeight: '500' }}> Visa Ending in 2424</p>
                                        <p className='mb-2' style={{ fontSize: '14px', fontWeight: '400' }}> Expiry 06/2024</p>
                                        <p className='mb-0' style={{ fontSize: '14px', fontWeight: '600' }}> Set as default <span style={{ color: '#0DAC8A', fontWeight: '800', marginLeft: '10px' }}>Edit</span></p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className='d-flex'
                            >

                                <label class="checkbox_r">
                                    <input type="checkbox" class="checkbox__input_r" checked />
                                    <span class="checkbox__inner_r"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='w-50 pl-2' >
                        <div
                            className='d-flex justify-content-between '
                            style={{
                                border: '1px solid #0DAC8A',
                                borderRadius: '12px',
                                padding: '16px',
                            }}>
                            <div
                                className='d-flex justify-content-between align-items-center'
                            >
                                <div
                                    className='d-flex '
                                >
                                    <div className='mr-3'>
                                        <img src={'/assets/img/payment/master-image.png'} style={{ width: '30px', height: '30px' }} alt='Visa' />
                                    </div>
                                    <div>
                                        <p className='mb-0' style={{ fontSize: '14px', fontWeight: '500' }}> Visa Ending in 2424</p>
                                        <p className='mb-2' style={{ fontSize: '14px', fontWeight: '400' }}> Expiry 06/2024</p>
                                        <p className='mb-0 ' style={{ fontSize: '14px', fontWeight: '600' }}> Set as default <span style={{ color: '#0DAC8A', fontWeight: '800', marginLeft: '10px' }}>Edit</span></p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className='d-flex'
                            >

                                <label class="checkbox_r">
                                    <input type="checkbox" class="checkbox__input_r" />
                                    <span class="checkbox__inner_r"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <p style={{ color: "#0dac8a", fontWeight: "600", fontSize: "14px" }} className='mt-3'>+ Add New PaymentMethod Method</p>
                <p style={{ fontSize: '16px', fontWeight: '600' }}>Billing Information</p>
                <div className='d-flex justify-content-between align-items-center mb-2'>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                        <i className='simple-icon-user' style={{ fontSize: "16px" }} />
                        <p style={{ fontSize: "14px", fontWeight: "500", margin: "0" }}>Surname</p>
                    </div>
                    <div style={{ fontSize: "14px", fontWeight: "500" }}>mtc Business Germany GmbH</div>
                </div>
                <Separator className="mb-3" />
                <div className='d-flex justify-content-between align-items-center mb-2'>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                        <i className='simple-icon-location-pin' style={{ fontSize: "16px" }} />
                        <p style={{ fontSize: "14px", fontWeight: "500", margin: "0" }}>Billing Address</p>
                    </div>
                    <div style={{ fontSize: "14px", fontWeight: "500" }}>Geldstrasse 1, 1111 Geldstadt</div>
                </div>
                <Separator className="mb-3" />
                <div className='d-flex justify-content-between align-items-center mb-2'>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                        <i className='simple-icon-phone' style={{ fontSize: "16px" }} />
                        <p style={{ fontSize: "14px", fontWeight: "500", margin: "0" }}>Telephone number</p>
                    </div>
                    <div style={{ fontSize: "14px", fontWeight: "500" }}>+419123456789</div>
                </div>
                <Separator className="mb-3" />
            </CardBody>
        </>
    );
};

export default PaymentMethod;
