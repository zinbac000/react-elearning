import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './UserAuth.module.scss';
import UserMenu from '../UserMenu/UserMenu';
import UserNav from '../UserNav/UserNav';
import { ON_DESKTOP } from 'config/setting';

const UserAuth = ({ screenCls }) => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(true);
  };

  const handleLogout = () => {
    setIsLogin(false);
  };

  const renderAuth = () => {
    return isLogin ? (
      screenCls === ON_DESKTOP ? (
        <UserNav handleLogout={handleLogout} />
      ) : (
        <UserMenu handleLogout={handleLogout} />
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
        isLogin ? classes.UserAuth__LoggedIn : undefined,
      ].join(' ')}
    >
      {renderAuth()}
    </div>
  );
};

export default UserAuth;
