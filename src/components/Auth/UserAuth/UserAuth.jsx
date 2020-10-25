import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import classes from './UserAuth.module.scss';
import UserMenu from '../UserMenu/UserMenu';
import UserNav from '../UserNav/UserNav';
import { ON_DESKTOP } from 'config/setting';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from 'redux/actions/user.actions';

const UserAuth = ({ screenCls }) => {
  const { loggedIn } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();

  const handleSignout = (e) => {
    e.preventDefault();
    dispatch(userActions.signout());
  };

  const renderAuth = () => {
    return loggedIn ? (
      screenCls === ON_DESKTOP ? (
        <UserNav handleSignout={handleSignout} />
      ) : (
        <UserMenu handleSignout={handleSignout} />
      )
    ) : (
      <Fragment>
        <Link to="/signin" className={classes.UserAuth__Signin}>
          Signin
        </Link>
        <Link to="/signup" className={classes.UserAuth__Signup}>
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
