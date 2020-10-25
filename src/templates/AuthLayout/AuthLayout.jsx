import React, { Fragment } from 'react';
import { ON_DESKTOP } from 'config/setting';

import { Route } from 'react-router-dom';
import classes from './AuthLayout.module.scss';
import Header from 'components/MainLayout/Header/Header';

export const AuthLayout = ({ Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Fragment>
          <Header />
          <section className={classes.AuthLayout}>
            <div
              className={[classes.AuthLayout__LeftCover, ON_DESKTOP].join(' ')}
            ></div>
            <div className={classes.AuthLayout__Content}>
              <Component {...props} />
            </div>
          </section>
        </Fragment>
      )}
    />
  );
};
