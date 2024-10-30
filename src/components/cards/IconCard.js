import React from 'react';
import { Card, CardBody } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
// import imgaee from "../../assets/icons/link.png"

const IconCard = ({ className = 'mb-4', icon, title, value }) => {
  // const imgURL = icon
  return (
    <div
      className={`icon-row-item ${className}`}
      // style={{ maxWidth: '235px', maxHeight: '215.5px',marginRight:'21px' }}
    >
      <Card className="">
        <CardBody className="text-center">
          {/* <img src={icon} alt={title} width={20} height={20} /> */}
          <div className="text-primary">
            {/* <i className={`${icon} `} /> */}
            {icon}
          </div>
          <p
            className="lead text-center text-dark"
            style={{
              fontWeight: '400',
              fontSize: '36px',
              marginTop: '12px',
              marginBottom: '6px',
            }}
          >
            {value}
          </p>
          <p className="card-text" style={{ fontSize: '16px' }}>
            <IntlMessages id={title} />
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default React.memo(IconCard);
