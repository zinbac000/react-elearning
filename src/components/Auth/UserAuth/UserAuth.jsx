import React, { useState } from 'react';
import { Button } from 'antd';

import classes from './UserAuth.module.scss';
import UserMenu from '../UserMenu/UserMenu';
import UserNav from '../UserNav/UserNav';

const UserAuth = ({ onDesktop }) => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(true);
  };

  const handleLogout = () => {
    setIsLogin(false);
  };

  return onDesktop ? (
    <div className={'onDesktop'}>
      {isLogin ? (
        <UserNav handleLogout={handleLogout} />
      ) : (
        <div className={classes.ButtonWrapper}>
          <Button
            className={[classes.Button, classes.SigninBtn]}
            onClick={handleLogin}
          >
            Sign in
          </Button>
          <Button className={[classes.Button, classes.SignupBtn]}>
            Sign up
          </Button>
        </div>
      )}
    </div>
  ) : (
    <div className={'onMobile'}>
      {isLogin ? (
        <UserMenu handleLogout={handleLogout} />
      ) : (
        <div className={classes.UserWrapper}>
          <a className={classes.UserLink} href="#" onClick={handleLogin}>
            Sign in
          </a>
          <a className={classes.UserLink} href="#">
            Sign up
          </a>
        </div>
      )}
    </div>
  );
};

export default UserAuth;
