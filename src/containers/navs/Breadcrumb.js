/* eslint-disable react/no-array-index-key */
import React from 'react';
// import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
// import { NavLink } from 'react-router-dom';
import IntlMessages from 'helpers/IntlMessages';
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
        <h1>
          <IntlMessages id={heading} />
        </h1>
      )}
      {/* <BreadcrumbItems match={match} /> */}
    </>
  );
  }



export default BreadcrumbContainer;