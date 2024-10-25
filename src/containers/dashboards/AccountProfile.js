/* eslint-disable */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
import React from 'react';
import { Badge, Card, CardBody, CardTitle, Row } from 'reactstrap'; //
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import SingleLightbox from 'components/pages/SingleLightbox';
import { FaRegCopy } from "react-icons/fa";
import { LuPenLine } from "react-icons/lu";
import { GoInfo } from "react-icons/go";




const AccountProfile = () => {
  return (
    <Card className="mb-4">
      <div className="account-profile-section">
        <div className='profile-img-d' style={{ display: "flex" }}>
          <div style={{ position: "relative" }}>
            <SingleLightbox
              thumb="/assets/img/profiles/l-1.jpg"
              large="/assets/img/profiles/1.jpg"
              className="account-profile-img "
            />
            <span
              style={{
                position: "absolute",
                bottom: "6px",
                right: "10px",
                backgroundColor: "white",
                padding: "5px",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
              }}>
              <i
                className="simple-icon-camera text-primary"
                style={{ fontSize: "20px" }}
              />
            </span>
          </div>
          <div style={{ marginTop: "80px" }}>
            <div>
              <p style={{ color: '#86868A', fontWeight: '500', fontSize: '14px' }}>Name</p>
              <CardTitle className="mb-0 font-weight-bold">
                <div className='d-flex'>

                  <p style={{ color: '#0D0D26', fontWeight: '600', fontSize: '20px' }}>Sam Emili</p>
                  <LuPenLine style={{ marginLeft: '3px', color: '#3482FF' }} />

                </div>
              </CardTitle>
            </div>
          </div>
        </div>
      </div>
      <Separator className="mb-5" />
      <CardBody>
        <Row>
          <Colxx
            md="4"
            lg="4"
            xl="4"
            className="mb-4 d-flex flex-row justify-content-between align-items-center"
          >
            <div>
              <p className="text-muted" style={{ marginBottom: '2px' }}>Connected Number</p>
              <p className="font-weight-bold">+4919384434403</p>
            </div>
            <div className='d-flex align-items-center justify-content-center ' style={{ gap: 20 }}>
              <FaRegCopy style={{ color: '#86868A', width: '16px', height: '20px' }} />
              <div style={{
                width: "1px", /* Narrow width for vertical separator */
                height: '36px', /* Height of the separator */
                backgroundColor: '#E5E5E5', /* Separator color */
                opacity: 1, /* Ensure it's visible, change to less than 1 for semi-transparent */
                transform: 'rotate(0deg)', /* Keep vertical; no need for -90deg rotation */
              }}
              >

              </div>
            </div>
          </Colxx>

          <Colxx
            md="4"
            lg="4"
            xl="4"
            className="mb-4 d-flex flex-row justify-content-between align-items-center"
          >
            <div>
              <p className="text-muted" style={{ marginBottom: '2px' }}>Connected Number</p>
              <p className="font-weight-bold">+4919384434403</p>
            </div>
            <div className='d-flex align-items-center justify-content-center ' style={{ gap: 20 }}>
              <GoInfo style={{ color: '#86868A', width: '20px', height: '20px' }} />
              <div style={{
                width: "1px", /* Narrow width for vertical separator */
                height: '36px', /* Height of the separator */
                backgroundColor: '#E5E5E5', /* Separator color */
                opacity: 1, /* Ensure it's visible, change to less than 1 for semi-transparent */
                transform: 'rotate(0deg)', /* Keep vertical; no need for -90deg rotation */
              }}
              >
              </div>
            </div>
          </Colxx>

          <Colxx
            lg="4"
            xl="4"
            className="mb-4 d-flex flex-row justify-content-between align-items-center"
          >
            <div>
              <p className="text-muted" style={{ marginBottom: '2px' }}>Connected Number</p>
              <p className="font-weight-bold">+4919384434403</p>
            </div>
            <FaRegCopy style={{ color: '#86868A', width: '16px', height: '20px' }} />
          </Colxx>
        </Row>
        <Row>
          <Colxx
            md="3"
            lg="3"
            xl="3"
            className="mb-4 d-flex flex-row justify-content-between align-items-center"
          >
            <div>
              <p className="text-muted">Number Status</p>
              <Badge
                color="outline-primary"
                className="mb-1  text-primary rounder badge-pill border border-theme-1 text-extra-small"
                pill
              >
                {/* <i className="iconsminds-record-2" /> */}
                <IntlMessages id="Connected" />
              </Badge>{' '}
            </div>
            <div className='d-flex align-items-center justify-content-center '>
              <div style={{
                width: "1px", /* Narrow width for vertical separator */
                height: '36px', /* Height of the separator */
                backgroundColor: '#E5E5E5', /* Separator color */
                opacity: 1, /* Ensure it's visible, change to less than 1 for semi-transparent */
                transform: 'rotate(0deg)', /* Keep vertical; no need for -90deg rotation */
              }}
              >
              </div>
            </div>
            {/* <i className="iconsminds-files" /> */}
          </Colxx>
          <Colxx
            md="3"
            lg="3"
            xl="3"
            className="mb-4 d-flex flex-row justify-content-between align-items-center"
          >
            <div>
              <p className="text-muted">Business Verification</p>
              <Badge
                color="outline-primary"
                className="mb-1  text-primary rounder badge-pill border border-theme-1 text-extra-small"
                pill
              >
                {/* <i className="iconsminds-record-2" /> */}
                <IntlMessages id="Verified" />
              </Badge>{' '}
            </div>
            <div className='d-flex align-items-center justify-content-center ' style={{ gap: 20 }}>
              <GoInfo style={{ color: '#86868A', width: '20px', height: '20px' }} />
              <div style={{
                width: "1px", /* Narrow width for vertical separator */
                height: '36px', /* Height of the separator */
                backgroundColor: '#E5E5E5', /* Separator color */
                opacity: 1, /* Ensure it's visible, change to less than 1 for semi-transparent */
                transform: 'rotate(0deg)', /* Keep vertical; no need for -90deg rotation */
              }}
              >
              </div>
            </div>

          </Colxx>

          <Colxx
            md="3"
            lg="3"
            xl="3"
            className="mb-4 d-flex flex-row justify-content-between align-items-center"
          >
            <div>
              <p className="text-muted">Account Status</p>
              <Badge
                color="outline-primary"
                className="mb-1  text-primary rounder badge-pill border border-theme-1 text-extra-small"
                pill
              >
                {/* <i className="iconsminds-record-2" /> */}
                <IntlMessages id="Approved" />
              </Badge>{' '}
            </div>
            <div className='d-flex align-items-center justify-content-center '>
              <div style={{
                width: "1px", /* Narrow width for vertical separator */
                height: '36px', /* Height of the separator */
                backgroundColor: '#E5E5E5', /* Separator color */
                opacity: 1, /* Ensure it's visible, change to less than 1 for semi-transparent */
                transform: 'rotate(0deg)', /* Keep vertical; no need for -90deg rotation */
              }}
              >
              </div>
            </div>
            {/* <i className="iconsminds-copyright" /> */}
          </Colxx>
          <Colxx
            md="3"
            lg="3"
            xl="3"
            className="mb-4 d-flex flex-row justify-content-between align-items-center"
          >
            <div>
              <p className="text-muted">Credit Line</p>
              <Badge
                color="outline-primary"
                className="mb-1  text-primary rounder badge-pill border border-theme-1 text-extra-small"
                pill
              >
                {/* <i className="iconsminds-record-2" /> */}
                <IntlMessages id="Shared" />
              </Badge>{' '}
            </div>
            <GoInfo style={{ color: '#86868A', width: '20px', height: '20px' }} />
          </Colxx>
        </Row>
      </CardBody>
    </Card>
  );
};

export default AccountProfile;
