import React, { Fragment } from 'react';

import { history } from 'config/helper/history';

import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { alertActions } from 'redux/actions/alert.actions';

import { MainLayout } from 'templates/MainLayout/MainLayout';
import { AuthLayout } from 'templates/AuthLayout/AuthLayout';

import { Alert } from 'antd';

import Home from 'pages/Home/Home';
import Categories from 'pages/Categories/Categories';
import Account from 'pages/Account/Account';
import Signin from 'pages/Auth/Signin';
import Signup from 'pages/Auth/Signup';

const App = () => {
  const { alert } = useSelector((state) => state);
  const { loggedIn } = useSelector((state) => state.authentication);

  history.listen(() => {
    alertActions.clear();
  });

  return (
    <Fragment>
      {alert.message && (
        <Alert message={alert.message} type={alert.type} closable />
      )}

      <Router history={history}>
        <Switch>
          <MainLayout exact path="/" Component={Home} />
          <MainLayout path="/categories" Component={Categories} />
          <MainLayout path="/account" Component={Account} />

          {loggedIn ? (
            <Redirect to="/" />
          ) : (
            <AuthLayout path="/signin" Component={Signin} />
          )}

          <AuthLayout path="/signup" Component={Signup} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
