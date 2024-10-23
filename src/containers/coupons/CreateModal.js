/* eslint-disable */
import React from 'react';
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
                <header className="modal-header" style={{ color: 'black' }}>
                    <h2>Create Coupon</h2>
                    <button className="close-button" onClick={onClose}>✖</button>
                </header>

                <div className="modal-body">
                    <div className="bordered-container">
                        <div className="left-column">
                            <Colxx className='customer-name' xxs='12' lg='12' md='12' xl='12' style={{ color: 'black' }}>
                           <div>Coupon Image </div>
                           <div className= "avatar-container">
                           <div className="avatar-box"></div>
                           <div className="upload-icon">
                             <i className="iconsminds-upload" style={{ color: '#0DAC8A' }}>     upload image </i>
                               </div>
                           
                           </div>
                          
                           <div>Choose one of the Following </div>
                         <Colxx>
                         <div className="flex-container">
                    <Input
                        addon
                        type="radio"
                        name="reviews" // Use the same name for grouping
                        id="googleReviews"
                        aria-label="Radio for Google Reviews"
                    />
                    <label style={{marginTop:"10px"}}
                    htmlFor="googleReviews">Google Reviews</label>
                </div>
                         </Colxx>
              
                         <Colxx>
                         <div className="flex-container">
                    <Input
                        addon
                        type="radio"
                        name="reviews" // Use the same name for grouping
                        id="googleReviews"
                        aria-label="Radio for Google Reviews"
                    />
                    <label style={{color:"#0DAC8A",marginTop:"10px"}} htmlFor="googleReviews">Newsletter</label>
                </div>
                         </Colxx>

                         <Colxx>
                         <div className="flex-container">
                    <Input
                        addon
                        type="radio"
                        name="reviews" // Use the same name for grouping
                        id="googleReviews"
                        aria-label="Radio for Google Reviews"
                    />
                    <label style={{marginTop:"10px"}} htmlFor="googleReviews">Promotions</label>
                </div>
                         </Colxx>

                         <Colxx>
          
                         </Colxx>

                         <div>Action name </div>
                         <Input className="custom-input" placeholder="Enter Name" />
                         <div>Effective Date </div>
                         <Input type='date' className="custom-input"  />

                         <div>Condition </div>
                         <Input className="custom-input" type="textarea" name="text" />
                         <div className="button-container">
            <button  className="cancel-button">
                Cancel
            </button>
            <button className="create-button">
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
