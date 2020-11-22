import React from 'react';

import { Route } from 'react-router-dom';
import { usePageRouting } from 'CustomHook/usePageRouting';

import { Spin } from 'antd';

// import classes from './AuthLayout.module.scss';

export const AuthLayout = ({ Component, ...rest }) => {
  const [isLoading] = usePageRouting();

  return (
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
