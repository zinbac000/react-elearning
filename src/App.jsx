import React, { Fragment } from 'react';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { MainLayout } from 'templates/MainLayout/MainLayout';
import { AuthLayout } from 'templates/AuthLayout/AuthLayout';

import Home from 'components/pages/Home/Home';
import Categories from 'components/pages/Categories/Categories';
import User from 'components/pages/User/User';
import Auth from 'components/pages/Auth/Auth';
import NotAvailable from 'components/pages/NotAvailable/NotAvailable';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/404" component={NotAvailable} />
          <MainLayout path="/categories" Component={Categories} />
          <MainLayout path="/user/my-courses" Component={User} />
          <MainLayout path="/user/account" Component={User} />
          <MainLayout exact path="/" Component={Home} />

          <AuthLayout path="/auth/:modeParams" Component={Auth} />

          <Redirect from="*" to="/404" />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
