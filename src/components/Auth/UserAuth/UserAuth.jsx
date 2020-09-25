/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from 'react';

import classes from './UserAuth.module.scss';
import UserMenu from '../UserMenu/UserMenu';
import UserNav from '../UserNav/UserNav';
import { Button } from 'antd';

export default class UserAuth extends Component {
  state = {
    isLogin: false,
  };

  handleLogin = () => {
    this.setState({
      isLogin: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isLogin: false,
    });
  };

  render() {
    return (
      <Fragment>
        <div className={'onMobile'}>
          {this.state.isLogin ? (
            <UserMenu handleLogout={this.handleLogout} />
          ) : (
            <div className={classes.UserWrapper}>
              <a
                className={classes.UserLink}
                href="#"
                onClick={this.handleLogin}
              >
                Login
              </a>
              <a className={classes.UserLink} href="#">
                Signup
              </a>
            </div>
          )}
        </div>

        <div className={'onDesktop'}>
          {this.state.isLogin ? (
            <UserNav handleLogout={this.handleLogout} />
          ) : (
            <div className={classes.ButtonWrapper}>
              <Button
                className={[classes.Button, classes.LoginBtn]}
                onClick={this.handleLogin}
              >
                Login
              </Button>
              <Button className={[classes.Button, classes.SignupBtn]}>
                Signup
              </Button>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}
