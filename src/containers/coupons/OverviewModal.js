/* eslint-disable */
import React from 'react';
import './modal.css'; // Importing updated CSS
import { Separator } from 'components/common/CustomBootstrap';
import {
    Input
} from 'reactstrap';

const OverviewModal = ({ customer, onClose }) => {
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

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="d-flex justify-content-between align-items-center mb-4" style={{ color: 'black' }}>
                    <h2>Overview</h2>
                    <button className="close-button" onClick={onClose}>✖</button>
                </div>

                <div >
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>Coupon ID</div>
                        <div style={{ fontWeight: 'bold' }}>111221254</div>
                    </div>
                    <Separator className="mb-3" />
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>Action Name</div>
                        <div>List</div>
                    </div>
                    <Separator className="mb-3" />
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>Source of origin</div>
                        <div style={{ fontWeight: 'bold' }}>Demo</div>
                    </div>
                    <Separator className="mb-3" />
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>Status</div>
                        <div>on</div>
                    </div>
                    <Separator className="mb-3" />
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>Issue date</div>
                        <div style={{ fontWeight: 'bold' }}>10/12/2024</div>
                    </div>
                    <Separator className="mb-3" />
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>Redemption date</div>
                        <div style={{ fontWeight: 'bold' }}>10/12/2024</div>
                    </div>
                    <Separator className="mb-3" />
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>Surname</div>
                        <div style={{ fontWeight: 'bold' }}>Linda Blair</div>
                    </div>
                    <Separator className="mb-3" />
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>Telephone number</div>
                        <div style={{ fontWeight: 'bold' }}>+419123456789</div>
                    </div>
                    <Separator className="mb-3" />
                </div>
                <div>
                    <span>Note</span>
                    <Input type="textarea" name="text" />
                </div>
                <div className='d-flex justify-content-between align-items-center mt-4'>
                    <button style={{ backgroundColor: 'white', color: 'black', border: "1px solid gray", borderRadius: '8px', }} onClick={onClose}>Cancel</button>
                    <button style={{ backgroundColor: '#0dac8a', color: 'white', border: "1px solid #0dac8a", borderRadius: '8px' }} onClick={onClose}>Apply</button>
                </div>
            </div>
        </div >
    );
};

export default OverviewModal;
