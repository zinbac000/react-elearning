import React, { Fragment } from 'react';

import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { MainLayout } from 'templates/MainLayout/MainLayout';
import { AuthLayout } from 'templates/AuthLayout/AuthLayout';

import { Alert } from 'antd';

import Home from 'pages/Home/Home';
import Categories from 'pages/Categories/Categories';
import User from 'pages/User/User';
import Auth from 'pages/Auth/Auth';

const App = () => {
  const { message, type } = useSelector(
    (rootReducer) => rootReducer.alertReducer,
  );
  const { loggedIn } = useSelector(
    (rootReducer) => rootReducer.authenticationReducer,
  );

  return (
    <Fragment>
      {message && <Alert message={message} type={type} closable />}

      <Router>
        <Switch>
          <MainLayout exact path="/" Component={Home} />
          <MainLayout path="/categories" Component={Categories} />
          <MainLayout path="/user" Component={User} />

          {loggedIn ? (
            <Redirect to="/" />
          ) : (
            <AuthLayout path="/auth/:modeParams" Component={Auth} />
          )}

          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
