/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
import React from 'react';
// import { useTable, usePagination, useSortBy } from 'react-table';
import { Badge, Card, CardBody, CardTitle, Row } from 'reactstrap'; //
// import DatatablePagination from 'components/DatatablePagination';
import IntlMessages from 'helpers/IntlMessages';

// import products from 'data/products';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import SingleLightbox from 'components/pages/SingleLightbox';



const AccountProfile = () => {


  return (
    <Card className="mb-4">
      <div className="account-profile-section">
        <SingleLightbox
          thumb="/assets/img/profiles/l-1.jpg"
          large="/assets/img/profiles/1.jpg"
          className="account-profile-img"
        />
        <div>
          <p className="">Sarah Cortney</p>
          <CardTitle className="mb-0 font-weight-bold">
            <p className="">SmartLeadsPRO - Workshop</p>
            <i className="simple-icon-pencil text-theme-2" />
          </CardTitle>
        </div>
      </div>
      <Separator className="mb-5" />
      <CardBody>
        {/* <Colxx xxs="12" lg="12" md="12" xl="12" className="">
                      <p className="mb-3">
                        <Badge
                          color="outline-secondary"
                          className="mb-1 mr-1"
                          pill
                        >
                          FRONTEND
                        </Badge>
                        <Badge
                          color="outline-secondary"
                          className="mb-1 mr-1"
                          pill
                        >
                          JAVASCRIPT
                        </Badge>
                        <Badge
                          color="outline-secondary"
                          className="mb-1 mr-1"
                          pill
                        >
                          SECURITY
                        </Badge>
                        <Badge
                          color="outline-secondary"
                          className="mb-1 mr-1"
                          pill
                        >
                          DESIGN
                        </Badge>
                      </p>
                    </Colxx> */}
        {/* <Table borderless>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                      </tbody>
                    </Table> */}
        <Row>
          <Colxx
            md="4"
            lg="4"
            xl="4"
            className="mb-4 d-flex flex-row justify-content-between align-items-center"
          >
            <div>
              <p className="text-muted">Connected Number</p>
              <p className="font-weight-bold">+4919384434403</p>
            </div>
            <i className="iconsminds-files" />
          </Colxx>
          <Colxx
            md="4"
            lg="4"
            xl="4"
            className="mb-4 d-flex flex-row justify-content-between align-items-center"
          >
            <div>
              <p className="text-muted">Connected Number</p>
              <p className="font-weight-bold">+4919384434403</p>
            </div>
            <i className="iconsminds-files" />
          </Colxx>

          <Colxx
            lg="4"
            xl="4"
            className="mb-4 d-flex flex-row justify-content-between align-items-center"
          >
            <div>
              <p className="text-muted">Connected Number</p>
              <p className="font-weight-bold">+4919384434403</p>
            </div>
            <i className="iconsminds-files" />
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
            <i className="iconsminds-copyright" />
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
            <i className="iconsminds-copyright" />
          </Colxx>
        </Row>
      </CardBody>
    </Card>
  );
};

export default AccountProfile;
