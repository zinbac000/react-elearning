import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllCourse } from 'redux/actions/course.actions';

import { Route } from 'react-router-dom';

import Header from 'components/MainLayout/Header/Header';
import Footer from 'components/MainLayout/Footer/Footer';
import classes from './MainLayout.module.scss';

export const MainLayout = ({ Component, ...rest }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCourse());
  }, [dispatch]);

  useEffect(() => {
    document.body.removeAttribute('style'); //fix antd overflow hidden bug
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => (
        <Fragment>
          <Header />
          <main className={classes.MainLayout__Content}>
            <Component {...props} />
          </main>
          <Footer />
        </Fragment>
      )}
    />
  );
};
