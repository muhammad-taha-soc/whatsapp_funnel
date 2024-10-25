/* eslint-disable */
import React, { useState } from 'react';
import './modal.css'; // Importing updated CSS
import { FaEnvelope, FaPhone, FaDownload, FaTrash, FaWhatsapp, FaCheck, FaTimes } from 'react-icons/fa';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'; // Import success and failure icons
import { Colxx } from 'components/common/CustomBootstrap';
import {
    Row,
    Card,
    CardBody,
    CardTitle,
    InputGroup,
    InputGroupAddon,
    Input,
    InputGroupText,
    Button,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    CustomInput,
    UncontrolledDropdown,
} from 'reactstrap';
const CreateModal = ({ customer, onClose }) => {
    const [selectedReview, setSelectedReview] = useState(''); // State to track the selected radio button

    // Handler to update the selected radio button
    const handleRadioChange = (event) => {
        setSelectedReview(event.target.id);
    };

    // Dummy data for testing
    const dummyCustomer = {
        // title: "John Doe",
        // email: "john.doe@example.com",
        // phone: "+123456789",
        // date: "2024-10-12",
        // coupons: ["10% off", "Free shipping"],
        // suggestionSubmitted: "Add more payment options.",
        // reasonDissatisfaction: "Slow customer service.",
        // notes: "Follow up in a week."
    };

    const data = customer || dummyCustomer; // Use dummy data if customer is not available

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <header className="modal-header" style={{ color: '#1A1C21', height: '30px', fontSize: '20px', fontWeight: '600px', padding: 0 }}>
                    <h2 style={{ fontWeight: '600px', fontSize: '20px' }}>Create Coupon</h2>
                    <button className="close-button" onClick={onClose}>✖</button>
                </header>

                <div className="modal-body" style={{ padding: 0 }}>
                    <div className="bordered-container">
                        <div className="left-column">
                            <Colxx className='customer-name' xxs='12' lg='12' md='12' xl='12' style={{ color: 'black', padding: 0 }}>
                                <div style={{ color: "#667085" }}>Coupon Image </div>
                                <div className="avatar-container">
                                    <div className="avatar-box"></div>
                                    <div className="upload-icon" style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 0 }}>
                                        <img src={'/assets/img/modals/upload.svg'} style={{ width: '20px', height: '20px' }} alt='Visa' />
                                        <div style={{ color: "#0DAC8A" }}>
                                            upload image
                                        </div>
                                    </div>

                                </div>

                                <div style={{ color: "#667085", fontWeight: '500', fontSize: '14px', marginBottom: '10px' }}>Choose one of the Following </div>
                                <Colxx style={{ padding: 0 }}>
                                    <div className="flex-container">
                                        <Input
                                            addon
                                            type="radio"
                                            name="reviews"
                                            id="googleReviews"
                                            aria-label="Radio for Google Reviews"
                                            onChange={handleRadioChange}
                                        />
                                        <label
                                            style={{
                                                margin: '0px',
                                                color: selectedReview === 'googleReviews' ? '#0DAC8A' : 'black', // Change color if selected
                                            }}
                                            htmlFor="googleReviews"
                                        >
                                            Google Reviews
                                        </label>
                                    </div>
                                </Colxx>
                                <Colxx style={{ padding: 0 }}>
                                    <div className="flex-container">
                                        <Input
                                            addon
                                            type="radio"
                                            name="reviews"
                                            id="newsletter"
                                            aria-label="Radio for Newsletter"
                                            onChange={handleRadioChange}
                                            color='green'
                                        />
                                        <label
                                            style={{
                                                margin: '0px',
                                                color: selectedReview === 'newsletter' ? '#0DAC8A' : 'black',
                                            }}
                                            htmlFor="newsletter"
                                        >
                                            Newsletter
                                        </label>
                                    </div>
                                </Colxx>
                                <Colxx style={{ padding: 0 }}>
                                    <div className="flex-container">
                                        <Input
                                            addon
                                            type="radio"
                                            name="reviews"
                                            id="promotions"
                                            aria-label="Radio for Promotions"
                                            onChange={handleRadioChange}
                                        />
                                        <label
                                            style={{
                                                margin: '0px',
                                                color: selectedReview === 'promotions' ? '#0DAC8A' : 'black',
                                            }}
                                            htmlFor="promotions"
                                        >
                                            Promotions
                                        </label>
                                    </div>
                                </Colxx>

                                <Colxx>

                                </Colxx>

                                <div style={{ color: "#667085", fontSize: "14px", fontWeight: "500", marginLeft: "2px" }}>Action name </div>
                                <Input className="custom-input" placeholder="Enter Name" />
                                <div style={{ color: "#667085", fontSize: "14px", fontWeight: "500", marginLeft: "2px" }}>Effective Date </div>
                                <Input type='date' className="custom-input" />

                                <div style={{ color: "#667085", fontSize: "14px", fontWeight: "500", marginLeft: "2px" }}>Condition </div>
                                <Input className="custom-input" type="textarea" name="text" />
                                <div className="button-container">
                                    <button className="cancel-button" onClick={onClose}>
                                        Cancel
                                    </button>
                                    <button className="create-button" onClick={onClose}>
                                        Create
                                    </button>
                                </div>

                            </Colxx>
                        </div>

                    </div> {/* End of Bordered Container */}
                </div>
            </div>
        </div>
    );
};

export default CreateModal;
