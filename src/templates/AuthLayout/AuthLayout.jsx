import React, { Fragment, useEffect } from 'react';

import { Route, useHistory } from 'react-router-dom';

import { alertActions } from 'redux/actions/alert.actions';
import { useDispatch } from 'react-redux';

// import classes from './AuthLayout.module.scss';

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
          <Component {...props} />
        </Fragment>
      )}
    />
  );
};
