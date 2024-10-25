/* eslint-disable */
import React from 'react';
import './modal.css'; // Importing updated CSS
import { FaEnvelope, FaPhone, FaDownload, FaTrash, FaWhatsapp, FaCheck, FaTimes } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown, faTrashCan, faCopy } from '@fortawesome/free-solid-svg-icons';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'; // Import success and failure icons
import { Colxx } from 'components/common/CustomBootstrap';
import { FaRegCopy } from "react-icons/fa6";

const Modal = ({ customer, onClose }) => {
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

    const data = customer || dummyCustomer; // Use dummy data if customer is not available


    return (
        <div className="card modal-overlay">
            <div className="modal-content">
                <header className="modal-header" style={{ color: 'black' }}>
                    <h2 style={{ fontWeight: '600px', fontSize: '20px', lineHeight: '23.5px' }}>Customer Details</h2>
                    <button className="close-button" onClick={onClose}>✖</button>
                </header>

                <div className="modal-body">
                    <div className="bordered-container">
                        <div className="left-column">
                            <Colxx className=' customer-name p-0' xxs='12' lg='12' md='12' xl='12' style={{ color: 'black' }}>
                                <div className="bg-theme-1 account-profile-background-layer account-profile-background-layer-btn p-4">

                                    <h3 className='text-left'>{dummyCustomer.title}</h3>
                                    <div style={{ borderRadius: '20px', backgroundColor: 'white', color: '#FF8E0D', padding: '7px', width: '30%', textAlign: 'center' }}>
                                        customer
                                    </div>
                                </div>

                            </Colxx>

                            <div className="customer-info">
                                <div className='d-flex justify-content-between align-items-center'>

                                    <p>
                                        <i className="iconsminds-envelope-2" style={{ marginRight: '8px', width: '20px', height: '20px', color: '#5C5C78' }} />
                                        Email:<br /><span style={{ marginLeft: '28px', color: 'black', fontWeight: '500px', fontSize: '14px' }}> {dummyCustomer.email}</span>
                                    </p>
                                    <FaRegCopy style={{ width: '16px', height: '20px', color: '#86868A' }} />
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p>
                                        <i className="simple-icon-phone" style={{ marginRight: '8px', width: '20px', height: '20px', color: '#5C5C78' }} />
                                        Telephone Number:<br />
                                        <span style={{ marginLeft: '24px', color: 'black', fontWeight: '500px', fontSize: '14px' }}> {dummyCustomer.phone}</span>
                                    </p>
                                    <FaRegCopy style={{ width: '16px', height: '20px', color: '#86868A' }} />
                                </div>
                                <p>
                                    <i className="iconsminds-calendar-4" style={{ marginRight: '8px', width: '20px', height: '20px', color: '#5C5C78' }} />Date:<br /><span style={{ marginLeft: '28px', color: 'black', fontWeight: '500px', fontSize: '14px' }}> {dummyCustomer.date}</span>
                                </p>
                            </div>

                            <div className="modal-actions">
                                <button className="action-button">
                                    <i className='simple-icon-minus mr-2' /> <span> Unsubscribe from Account</span>
                                </button>
                                <button className="action-button">
                                    <FaWhatsapp style={{ marginRight: '2px' }} /> <span> Unsubscribe from WhatsApp</span>
                                </button>
                                <button className="action-button">
                                    <FontAwesomeIcon icon={faFileArrowDown} style={{ marginRight: '8px' }} /> <span> Download Contact Data</span>
                                </button>
                                <button className="delete-button">
                                    <FontAwesomeIcon icon={faTrashCan} style={{ marginRight: '8px' }} /> <span> Delete Contact</span>
                                </button>
                            </div>
                        </div>

                        <div className="right-column" style={{ position: 'relative', paddingLeft: '10px', paddingTop: '6px' }}>
                            <div className="status">
                                <div className="status-item satisfied">
                                    <span>Satisfied</span>
                                    <AiFillCheckCircle style={{ position: 'absolute', right: '15px', color: '#0DAC8A', width: '24px', height: '24px' }} />
                                </div>
                                <div className="status-item">
                                    <span>Review link clicked</span>
                                    <AiFillCheckCircle style={{ position: 'absolute', right: '15px', color: '#0DAC8A', width: '24px', height: '24px' }} />
                                </div>
                                <div className="status-item dissatisfied">
                                    <span>Suggestion for improvement</span>
                                    <AiFillCloseCircle style={{ position: 'absolute', right: '15px', color: '#F5430B', width: '24px', height: '24px' }} />
                                </div>
                            </div>

                            <div className="customer-details mt-5">
                                <div className="coupons">
                                    <h4>Coupons</h4>
                                    <p style={{ color: '#5C5C78' }}>{Array.isArray(dummyCustomer.coupons) ? dummyCustomer.coupons.join(', ') : 'No coupons available'}</p>
                                </div>

                                <div className="suggestions mt-5">
                                    <h4>Suggestion for Improvement Submitted</h4>
                                    <p style={{ color: '#5C5C78' }}>{dummyCustomer.suggestionSubmitted}</p>
                                </div>

                                <div className="reason mt-5">
                                    <h4>Reason for Dissatisfaction</h4>
                                    <p style={{ color: '#5C5C78' }}>{dummyCustomer.reasonDissatisfaction}</p>
                                </div>

                                <div className="notes mt-5">
                                    <h4>Note Field</h4>
                                    <p>{dummyCustomer.notes}</p>
                                </div>
                            </div>
                        </div>
                    </div> {/* End of Bordered Container */}
                </div>
            </div>
        </div>
    );
};

export default Modal;
