import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import UserMenu from '../UserMenu/UserMenu';
import UserNav from '../UserNav/UserNav';

import { userActions } from 'core/redux/actions/user.actions';

import classes from './UserAuth.module.scss';
import { Grid } from 'antd';
const { useBreakpoint } = Grid;

const UserAuth = ({ setDrawerOff }) => {
  const { loggedIn } = useSelector((state) => state.authenticationReducer);
  const { lg } = useBreakpoint();
  const dispatch = useDispatch();

  const handleSignout = () => {
    setDrawerOff && setDrawerOff();
    dispatch(userActions.signout());
  };

  const renderAuth = () => {
    return loggedIn ? (
      lg ? (
        <UserNav handleSignout={handleSignout} />
      ) : (
        <UserMenu handleSignout={handleSignout} />
      )
    ) : (
      <Fragment>
        <Link
          to="/auth/signin"
          className={classes.UserAuth__Signin}
          onClick={setDrawerOff}
        >
          Signin
        </Link>
        <Link
          to="/auth/signup"
          className={classes.UserAuth__Signup}
          onClick={setDrawerOff}
        >
          Signup
        </Link>
      </Fragment>
    );
  };

  return (
    <div
      className={[
        classes.UserAuth__Wrapper,
        loggedIn ? classes.UserAuth__LoggedIn : undefined,
      ].join(' ')}
    >
      {renderAuth()}
    </div>
  );
};

export default UserAuth;
