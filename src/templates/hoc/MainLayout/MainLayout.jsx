import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Header from 'components/MainLayout/Header/Header';
import Footer from 'components/MainLayout/Footer/Footer';
// import classes from './MainLayout.module.scss';

export const MainTemplate = ({ Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Fragment>
        <Header />
        <main>
          <Component {...props} />
        </main>
        <Footer />
      </Fragment>
    )}
  />
);
