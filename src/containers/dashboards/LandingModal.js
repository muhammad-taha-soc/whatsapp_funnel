/* eslint-disable */
import React, { useState } from 'react';
import './LandingModal.css'; // Ensure you have appropriate styles
import VideoPlayer from 'components/common/VideoPlayer';
import { Card, CardBody, CardTitle } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';


const LandingModal = ({ isOpen, onClose }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

    const getDaysArray = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const days = daysInMonth(month, year);
        const firstDay = new Date(year, month, 1).getDay();

        const daysArray = [];
        for (let i = 0; i < firstDay; i++) {
            daysArray.push(null); // Fill the start of the week with null
        }

        for (let day = 1; day <= days; day++) {
            daysArray.push(day);
        }

        return daysArray;

    };

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    };

    const handleDateClick = (day) => {
        setSelectedDate(day);
    };

    const handleTodayClick = () => {
        setCurrentDate(new Date());
        setSelectedDate(new Date().getDate());
    };

    const handleApplyClick = () => {
        if (selectedDate) {
            console.log(`Selected date: ${selectedDate}`);
            onClose(); // Close the modal after selection
        }
    };

    const daysArray = getDaysArray();
    const monthName = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();

    let dayArray = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let resultArray = [...dayArray, ...daysArray.filter(item => item !== null)];
    console.log(resultArray)
    return (
      <>
      <div>
      {isOpen && (
          <div className="modal-overlay" onClick={() => onClose()}>
            {/* <div><VideoPlayer /></div> */}

            <div
              className="modal-content-landing-page"
              style={{ color: 'black' }}
              onClick={(e) => e.stopPropagation()}
            >
              <VideoPlayer
                autoplay={false}
                controls
                className="video-js card-img video-content mb-3"
                poster="/assets/img/video/poster.jpg"
                sources={[
                  {
                    src: 'https://github.com/bower-media-samples/big-buck-bunny-1080p-60fps-30s/raw/master/video.mp4',
                    type: 'video/mp4',
                  },
                ]}
              />
              <div
                // style={{
                //   //   width: '440px',
                //   //   height: '30px',
                //   fontWeight: '600px',
                //   lineHeight: '30px',
                //   fontSize: '20px',
                // }}
                className="text-muted text-one"
              >
              </div>
              <div className='video-text'>Please arrange an onboarding call. We look forward to seeing you! </div>
          

              <Card >
                <CardBody className='cal'>
                  <div
                    className=" d-flex flex-row justify-content-between align-items-center"
                    // style={{ marginRight: '2px', marginLeft: '2px', gap: 4 }}
                  >
                    <CardTitle
                    // style={{
                    //   width: '99px',
                    //   height: '17px',
                    //   fontWeight: '500px',
                    //   lineHeight: '16.94px',
                    //   fontSize: '14px',
                    // }}
                    className='mb-4'
                    >{`${monthName} ${year}`}</CardTitle>
                    
                    <div style={{ display: 'flex', gap: '5px' }} className='mb-4'>
                      <button
                        onClick={handleTodayClick}
                        className="today-button"
                        style={{
                          border: '1px solid #0DAC8A',
                          color: '#0DAC8A',
                          backgroundColor: 'white',
                        }}
                      >
                        Today
                      </button>
                      <button
                        onClick={handlePrevMonth}
                        className="arrow-button"
                        style={{ backgroundColor: '#0DAC8A', color: 'white' }}
                      >
                        <i className="simple-icon-arrow-left"></i>
                      </button>
                      <button
                        onClick={handleNextMonth}
                        className="arrow-button"
                        style={{ color: 'white', backgroundColor: '#0DAC8A' }}
                      >
                        <i className="simple-icon-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                   <div className="flex-container">
                    {resultArray.map(
                      (day) => (
                        // <div key={day} className="day-header">
                       <div key={day} className="flex-item">

                          {day}
                        </div>
                      )
                    )}
                  </div> 
                  {/* <div className="calendar-body">
                    {daysArray.map((day, index) => (
                      <div
                        key={index}
                        className={`day ${
                          day === null
                            ? 'blank'
                            : day === selectedDate
                            ? 'selected'
                            : ''
                        }`}
                        onClick={() => day && handleDateClick(day)}
                      >
                        {day}
                      </div>
                    ))}
                  </div> */}

                  <div className="calendar-footer">
                    <button className="cancel-button" onClick={() => onClose()}>
                      Cancel
                    </button>
                    <button className="apply-button" onClick={handleApplyClick}>
                      Apply
                    </button>
                  </div>
                </CardBody>
              </Card>
      
            </div>
          </div>
        )}
      </div>
 
      </>
    );

};

export default LandingModal;
