/* eslint-disable */
import React from 'react';
import './modal.css'; // Importing updated CSS
import { Separator } from 'components/common/CustomBootstrap';
import {
    Input
} from 'reactstrap';

const OverviewModal = ({ customer, onClose }) => {
    const value = 'on';
    if (!customer) return null;

    // Dummy data for testing
    const dummyCustomer = {
        title: "John Doe",
        email: "john.doe@example.com",
        phone: "+123456789",
        date: "2024-10-12",
        coupons: ["10% off", "Free shipping"],
        suggestionSubmitted: "Add more payment options.",
        reasonDissatisfaction: "Slow customer service.",
        notes: "Follow up in a week."
    };

    const data = customer || dummyCustomer;

    const stylesOnHold = {
        padding: '4px 12px',
        borderRadius: '100px',
        background: '#0DAC8A1A',
        opacity: 1, // Change to 1 so it's visible
        color: '#0DAC8A', // Adjust text color as needed
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: ' pointer'
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="d-flex justify-content-between align-items-center mb-4" style={{ color: 'black' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: '700' }}>Overview</h2>
                    <button className="close-button" onClick={onClose}>✖</button>
                </div>

                <div >
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                            <img src={'/assets/img/modals/wifi-box.svg'} style={{ width: '15px', height: '15px' }} alt='Visa' />
                            <span style={{ fontSize: '14px', fontWeight: "500" }}> Coupon ID </span>
                        </div>
                        <div style={{ fontWeight: '800' }}>111221254</div>
                    </div>
                    <Separator className="mb-2" />
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                            <img src={'/assets/img/modals/flag-alt.svg'} style={{ width: '15px', height: '15px' }} alt='Visa' />
                            <span style={{ fontSize: '14px', fontWeight: "500" }}> Action Name</span>
                        </div>
                        <div style={stylesOnHold}>list</div>
                    </div>
                    <Separator className="mb-2" />
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                            <img src={'/assets/img/modals/user.svg'} style={{ width: '15px', height: '15px' }} alt='Visa' />
                            <span style={{ fontSize: '14px', fontWeight: "500" }}> Source of origin</span>
                        </div>
                        <div style={{ fontWeight: '800' }}>Demo</div>
                    </div>
                    <Separator className="mb-2" />
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                            <img src={'/assets/img/modals/laptop.svg'} style={{ width: '15px', height: '15px' }} alt='Visa' />
                            <span style={{ fontSize: '14px', fontWeight: "500" }}> Status</span>
                        </div>
                        <div
                            className="status-indicator"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: value === 'On' || value === 'on' ? '#0DAC8A' : 'red',
                                borderRadius: '20px', // More rounded corners
                                padding: '5px 13px 5px 13px',
                                color: 'white',
                                textAlign: 'center',
                                position: 'relative', // For positioning the dot correctly
                                width: '50px', // Set a fixed width for consistency
                                height: '24px', // Set a fixed height for consistency
                                bottom: '2px'
                            }}
                        >
                            <div
                                style={{
                                    position: 'absolute',
                                    left: '8px', // Position the dot
                                    top: '50%', // Center vertically
                                    transform: 'translateY(-50%)', // Center adjust
                                    borderRadius: '50%',
                                    width: '10px', // Size of the dot
                                    height: '10px', // Size of the dot
                                    backgroundColor: 'white',
                                }}
                            ></div>
                            <div style={{ top: '50%', transform: 'translateY(3%)', marginLeft: '9px', width: '20px', height: '17px', fontWeight: '500px', fontalign: 'center', fontSize: '14px', lineHeight: '16.94px' }}>

                                {value}
                            </div>
                        </div>
                    </div>
                    <Separator className="mb-2" />
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                            <img src={'/assets/img/modals/wifi-box.svg'} style={{ width: '15px', height: '15px' }} alt='Visa' />
                            <span style={{ fontSize: '14px', fontWeight: "500" }}> Issue date</span>
                        </div>
                        <div style={{ fontWeight: '800' }}>10/12/2024</div>
                    </div>
                    <Separator className="mb-2" />
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                            <img src={'/assets/img/modals/calendar.svg'} style={{ width: '15px', height: '15px' }} alt='Visa' />
                            <span style={{ fontSize: '14px', fontWeight: "500" }}> Redemption date</span>
                        </div>
                        <div style={{ fontWeight: '800' }}>10/12/2024</div>
                    </div>
                    <Separator className="mb-2" />
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                            <img src={'/assets/img/modals/user.svg'} style={{ width: '15px', height: '15px' }} alt='Visa' />
                            <span style={{ fontSize: '14px', fontWeight: "500" }}> Surname</span>
                        </div>
                        <div style={{ fontWeight: '800' }}>Linda Blair</div>
                    </div>
                    <Separator className="mb-2" />
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                            <img src={'/assets/img/modals/phone-flip.svg'} style={{ width: '15px', height: '15px' }} alt='Visa' />
                            <span style={{ fontSize: '14px', fontWeight: "500" }}> Telephone number</span>
                        </div>
                        <div style={{ fontWeight: '800' }}>+419123456789</div>
                    </div>
                    <Separator className="mb-3" />
                </div>
                <div>
                    <span>Note</span>
                    <Input type="textarea" name="text" />
                </div>
                <div className='d-flex justify-content-between align-items-center mt-4'>
                    <button style={{ backgroundColor: 'white', color: 'black', border: "1px solid gray", borderRadius: '8px', padding: "10px 14px" }} onClick={onClose}>Cancel</button>
                    <button style={{ backgroundColor: '#0dac8a', color: 'white', border: "1px solid #0dac8a", borderRadius: '8px', padding: "10px 14px" }} onClick={onClose}>Save Apply</button>
                </div>
            </div>
        </div >
    );
};

export default OverviewModal;
