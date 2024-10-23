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
            <CardBody className='bg-white rounded-md'>
                <h2>PaymentMethod</h2>
                <p>Card details</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='w-50 pr-2' >
                        <div
                            className='d-flex justify-content-between '
                            style={{
                                border: '1px solid #0dac8a',
                                borderRadius: '8px',
                                padding: '10px 20px',
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
                                        <p className='mb-0' style={{ color: '#344054', fontSize: '14px', fontWeight: '600' }}> Visa Ending in 2424</p>
                                        <p className='mb-1' style={{ color: '#475467', fontSize: '14px', fontWeight: '400' }}> Expiry 06/2024</p>
                                        <p className='mb-0' style={{ color: "#475467", fontSize: '14px', fontWeight: '600' }}> Set as default <span style={{ color: '#0DAC8A', fontWeight: '800' }}>Edit</span></p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className='d-flex'
                            >
                                <Input
                                    style={{ maxWidth: '20px', maxHeight: '20px' }}
                                    addon
                                    type="checkbox"
                                    aria-label="Checkbox for following text input"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='w-50 pl-2' >
                        <div
                            className='d-flex justify-content-between align-items-top'
                            style={{
                                border: '1px solid #0dac8a',
                                borderRadius: '8px',
                                padding: '10px 20px',
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
                                        <p className='mb-0' style={{ color: '#344054', fontSize: '14px', fontWeight: '600' }}> Visa Ending in 2424</p>
                                        <p className='mb-1' style={{ color: '#475467', fontSize: '14px', fontWeight: '400' }}> Expiry 06/2024</p>
                                        <p className='mb-0' style={{ color: "#475467", fontSize: '14px', fontWeight: '600' }}> Set as default <span style={{ color: '#0DAC8A', fontWeight: '800' }}>Edit</span></p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className='d-flex'
                            >
                                <Input
                                    style={{ maxWidth: '20px', maxHeight: '20px' }}
                                    addon
                                    type="checkbox"
                                    aria-label="Checkbox for following text input"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <p style={{ color: "#0dac8a" }} className='mt-3'>+ Add New PaymentMethod Method</p>
                <p >Billing Information</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>Surname</div>
                    <div>mtc Business Germany GmbH</div>
                </div>
                <Separator className="mb-3" />
                <div className='d-flex justify-content-between align-items-center'>
                    <div>Billing address</div>
                    <div>Geldstrasse 1, 1111 Geldstadt</div>
                </div>
                <Separator className="mb-3" />
                <div className='d-flex justify-content-between align-items-center'>
                    <div>Telephone number</div>
                    <div>+419123456789</div>
                </div>
                <Separator className="mb-3" />
            </CardBody>
        </>
    );
};

export default PaymentMethod;
