import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// import { ProtectedRoute, UserRole } from 'helpers/authHelper';

const ContactDefault = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-default" */ './table')
);
// const ContentDefault = React.lazy(() =>
//   import(/* webpackChunkName: "dashboard-content" */ './content')
// );
// const AnalyticsDefault = React.lazy(() =>
//   import(/* webpackChunkName: "dashboard-analytics" */ './analytics')
// );
// const EcommerceDefault = React.lazy(() =>
//   import(/* webpackChunkName: "dashboard-ecommerce" */ './ecommerce')
// );

const Contacts = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/table`} />
      <Route
        path={`${match.url}/table`}
        render={(props) => <ContactDefault {...props} />}
      />
      {/* <Route
        path={`${match.url}/content`}
        render={(props) => <ContentDefault {...props} />}
      />
      <Route
        path={`${match.url}/ecommerce`}
        render={(props) => <EcommerceDefault {...props} />}
      />
      <Route
        path={`${match.url}/analytics`}
        render={(props) => <AnalyticsDefault {...props} />}
      /> */}
      {/* 
      <ProtectedRoute
        path={`${match.url}/default`}
        component={DashboardDefault}
        roles={[UserRole.Admin]}
      />
      <ProtectedRoute
        path={`${match.url}/content`}
        component={ContentDefault}
        roles={[UserRole.Admin]}
      />
      <ProtectedRoute
        path={`${match.url}/ecommerce`}
        component={EcommerceDefault}
        roles={[UserRole.Editor]}
      />
      <ProtectedRoute
        path={`${match.url}/analytics`}
        component={AnalyticsDefault}
        roles={[UserRole.Editor]}
      />
      */}

      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Contacts;
