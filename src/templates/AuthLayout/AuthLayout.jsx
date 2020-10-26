import React, { Fragment, useEffect } from 'react';
import { ON_DESKTOP } from 'config/setting';

import { Route, useHistory } from 'react-router-dom';
import classes from './AuthLayout.module.scss';
import Header from 'components/MainLayout/Header/Header';
import { alertActions } from 'redux/actions/alert.actions';
import { useDispatch } from 'react-redux';

export const AuthLayout = ({ Component, ...rest }) => {
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    history.listen(() => {
      dispatch(alertActions.clear());
    });
  }, [history]);

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
