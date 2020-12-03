import React from 'react';

import { Redirect, Route } from 'react-router-dom';
import { usePageRouting } from 'CustomHook/usePageRouting';

import { Spin } from 'antd';
import { useSelector } from 'react-redux';

// import classes from './AuthLayout.module.scss';

export const AuthLayout = ({ Component, ...rest }) => {
  const [isLoading] = usePageRouting();
  const { loggedIn } = useSelector(
    (rootReducer) => rootReducer.authenticationReducer,
  );

  return loggedIn ? (
    <Redirect to="/" />
  ) : (
    <Route
      {...rest}
      render={(props) => (
        <Spin size="large" spinning={isLoading}>
          <Component {...props} />
        </Spin>
      )}
    />
  );
};
