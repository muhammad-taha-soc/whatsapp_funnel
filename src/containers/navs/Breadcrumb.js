/* eslint-disable react/no-array-index-key */
import React from 'react';
import './navStyles.css';
// import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
// import { NavLink } from 'react-router-dom';
// import IntlMessages from 'helpers/IntlMessages';
// import { adminRoot } from 'constants/defaultValues';

// const getMenuTitle = (sub) => {
//   if (`/${sub}` === adminRoot) return <IntlMessages id="menu.home" />;
//   return <IntlMessages id={`menu.${sub}`} />;
// };

// const getUrl = (path, sub) => {
//   return path.split(sub)[0] + sub;
// };

const BreadcrumbContainer = ({ heading }) => {
  return (
    <>
      {heading && (
        <div className="coupon-heading">
          {heading}
          {/* <IntlMessages style={{color:"red"}} id={heading} /> */}
        </div>
      )}
      {/* <BreadcrumbItems match={match} /> */}
    </>
  );
};


export default BreadcrumbContainer;
