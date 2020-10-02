import React from 'react';
import { Route } from 'react-router-dom';

import Header from 'components/MainLayout/Header/Header';
import Footer from 'components/MainLayout/Footer/Footer';
import classes from './MainLayout.module.scss';

export const MainLayout = ({ Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <div className={classes.MainLayout}>
        <Header />
        <main>
          <Component {...props} />
        </main>
        <Footer />
      </div>
    )}
  />
);
