import React, { useState, useEffect } from 'react';
import {  Card, CardTitle, Label, FormGroup, Button } from 'reactstrap';
// import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { Formik, Form, Field } from 'formik';
import { NotificationManager } from 'components/common/react-notifications';

import { Colxx } from 'components/common/CustomBootstrap';
import IntlMessages from 'helpers/IntlMessages';
import { loginUser } from 'redux/actions';

const validatePassword = (value) => {
  let error;
  if (!value) {
    error = 'Please enter your password';
  } else if (value.length < 4) {
    error = 'Value must be longer than 3 characters';
  }
  return error;
};

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = 'Please enter your email address';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
};

const Login = ({ history, loading, error, loginUserAction }) => {
  const [email] = useState('demo@gogo.com');
  const [password] = useState('gogo123');

  useEffect(() => {
    if (error) {
      NotificationManager.warning(error, 'Login Error', 3000, null, null, '');
    }
  }, [error]);

  const onUserLogin = (values) => {
    if (!loading) {
      if (values.email !== '' && values.password !== '') {
        loginUserAction(values, history);
        history.push('/app/dashboards/default');
      }
    }
  };

  const initialValues = { email, password };

  return (
    // <Row className="">
      // <Colxx xxs="12"  className="">
        <Card className="auth-card" style={{height: '100vH',padding:'32px 24px' }}>
          <Colxx xxs="6" md="6" lg="6" xxl="6" className="position-relative image-side">
            {/* <p className="text-white h2">MAGIC IS IN THE DETAILS</p>
            <p className="white mb-0">
              Please use your credentials to login.
              <br />
              If you are not a member, please{' '}
              <NavLink to="/user/register" className="white">
                register
              </NavLink>
              .
            </p> */}
          </Colxx>
          <Colxx xxs="6" md="6" lg="6" xxl="6" className='form-flex'>
          <div className="form-side">
            <div className="text-center">
              {/* <NavLink to="/" className="white"> */}
              <span className="logo-single-login" />
              {/* </NavLink> */}
            </div>
            <div className="text-center" style={{ marginBottom: '32px'}}>
              <CardTitle className="signup-title">
                <IntlMessages id="Sign Up" />
              </CardTitle>

              <div className="signup-heading"> Create your account to start your journey with us!</div> 
            </div>

            <Formik initialValues={initialValues} onSubmit={onUserLogin}>
              {({ errors, touched }) => (
                <Form className="av-tooltip tooltip-label-bottom">
                  <FormGroup className="form-group ">
                    <Label>
                      <div className="form-text-field" >Username/email  </div>
                    </Label>
                    <Field
                      className="form-control"
                      name="email"
                      validate={validateEmail}
                    />
                    {errors.email && touched.email && (
                      <div className="invalid-feedback d-block">
                        {errors.email}
                      </div>
                    )}
                  </FormGroup>
                  <FormGroup className="form-group">
                    <Label className="d-flex justify-content-between align-items-center">
                      <div className='form-text-field'> Password</div>
                      <div className="text-theme-1  font-weight-bold">
                        {/* <NavLink to="/user/forgot-password"> */}
                        <IntlMessages id="user.forgot-password" />
                        {/* </NavLink> */}
                      </div>
                    </Label>
                    <Field
                      className="form-control"
                      type="password"
                      name="password"
                      validate={validatePassword}
                    />
                    {errors.password && touched.password && (
                      <div className="invalid-feedback d-block">
                        {errors.password}
                      </div>
                    )}
                  </FormGroup>
                  <div className="d-flex justify-content-between align-items-center">
                    <Button
                      color="primary"
                      className={`btn-shadow btn-multiple-state w-100 ${
                        loading ? 'show-spinner' : ''
                      }`}
                      size="lg"
                    >
                      <span className="spinner d-inline-block">
                        <span className="bounce1" />
                        <span className="bounce2" />
                        <span className="bounce3" />
                      </span>
                      <span className="label">
                        <IntlMessages id="Sign Up" />
                      </span>
                    </Button>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                  <div className="already-account"> Already have an account? </div>
                  <div className="text-theme-1 already-account font-weight-bold"> Login </div>
                </div>
                </Form>
              )}
            </Formik>
          </div>
          </Colxx>
   
        </Card>
      // </Colxx>
    // </Row>
  );
};
const mapStateToProps = ({ authUser }) => {
  const { loading, error } = authUser;
  return { loading, error };
};

export default connect(mapStateToProps, {
  loginUserAction: loginUser,
})(Login);
