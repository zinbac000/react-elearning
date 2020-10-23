import { ON_DESKTOP } from 'config/setting';
import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Route } from 'react-router-dom';
import classes from './AuthLayout.module.scss';

export const AuthLayout = ({ Component, ...rest }) => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <Route
      {...rest}
      render={(props) => (
        <section className={classes.AuthLayout}>
          <div
            className={[classes.AuthLayout__LeftCover, ON_DESKTOP].join(' ')}
          ></div>
          <div className={classes.AuthLayout__Content}>
            <Component {...props} />
          </div>
        </section>
      )}
    />
  );
};
