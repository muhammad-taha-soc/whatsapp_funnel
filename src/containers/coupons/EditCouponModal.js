/* eslint-disable */
import React, { useState } from 'react';
import Calendar from './CalendarModal';
import { LuPenLine } from "react-icons/lu";
import { RiCalendar2Line } from "react-icons/ri";


const EditCoupon = ({ isOpen, onClose }) => {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    if (!isOpen) return null;

    const modalStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
        },
        content: {
            background: 'white',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
            maxWidth: '400px',
            width: '90%',
            position: 'relative',
        },
        header: {
            marginBottom: '15px',
        },
        couponGraphic: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '15px',

        },
        changeButton: {
            backgroundColor: 'white',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background 0.3s',
            color: '#0DAC8A',
            marginRight: '10px',
            position: 'absolute',
            left: '100px',
            transform: 'translateY(-25%)',
        },
        formGroup: {
            marginBottom: '15px',
            position: 'relative',
        },
        label: {
            fontWeight: 'bold',
            color: '#667085',
            marginBottom: '1px',
        },
        input: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
        },
        textarea: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            resize: 'none',
            height: '80px',
        },
        modalFooter: {
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '15px',
        },
        cancelButton: {
            backgroundColor: 'white',
            color: '#86868A',
            border: '1px solid #86868A',
            padding: '10px 15px',
            borderRadius: '8px',
            cursor: 'pointer',
            marginRight: '10px',
            position: 'absolute',
            left: '20px',

        },
        saveButton: {
            backgroundColor: '#0DAC8A',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '8px',
            cursor: 'pointer',
        },
        icon: {
            marginLeft: '5px',
            color: '#0DAC8A',
            cursor: 'pointer', // Indicate that it's clickable
        },
        imageClass: {
            position: 'relative',
            width: '64px',
            height: '64px',
            borderRadius: '8px',
            overflow: 'hidden',
            marginRight: '10px',
        },
    };

    return (
        <>
            <div style={modalStyles.overlay} onClick={onClose}>
                <div style={modalStyles.content} onClick={(e) => e.stopPropagation()}>
                    <h2 style={{marginBottom: '15px', fontWeight:'bold'}}>Edit Coupon</h2>
                    <p style={{ color: '#667085' }}>Current coupon graphic</p>
                    <div style={modalStyles.couponGraphic}>
                        <div style={modalStyles.imageClass}>

                            <img
                                src="../../assets/img/blog/small-1.jpg"
                                alt="Coupon"
                                style={{ width: '64px', height: '64' }}
                            />
                        </div>
                        <button style={modalStyles.changeButton}>
                            <LuPenLine style={modalStyles.icon} />
                            Change
                        </button>
                    </div>
                    <div style={modalStyles.formGroup}>
                        <label style={modalStyles.label}>Action name</label>
                        <input
                            type="text"
                            defaultValue="20% on my products"
                            style={modalStyles.input}
                        />
                    </div>
                    <div style={modalStyles.formGroup}>
                        <label style={modalStyles.label}>Effective date</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type="text"
                                defaultValue="01.01.2024 - 31.12.2024"
                                style={modalStyles.input}
                            />
                            <RiCalendar2Line size={22} style={{
                                    position: 'absolute',
                                    right: '10px',
                                    top: '50%',
                                    color: '#667085',
                                    transform: 'translateY(-50%)',
                                    cursor: 'pointer'
                                }}
                                onClick={() => setIsCalendarOpen(true)} />
                        </div>
                    </div>
                    <div style={modalStyles.formGroup}>
                        <label style={modalStyles.label}>Condition</label>
                        <textarea
                            defaultValue="Lorem ipsum dolor sit amet, consectetur..."
                            style={modalStyles.textarea}
                        />
                    </div>
                    <div style={modalStyles.modalFooter}>
                        <button style={modalStyles.cancelButton} onClick={onClose}>
                            Cancel
                        </button>
                        <button style={modalStyles.saveButton}>Save Changes</button>
                    </div>
                </div>
            </div>

            {isCalendarOpen && (
                <Calendar
                    isOpen={isCalendarOpen}
                    onClose={() => setIsCalendarOpen(false)} // Close Calendar Modal
                />
            )}
        </>
    );
};

export default EditCoupon;
