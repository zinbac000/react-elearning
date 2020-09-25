/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

import { Drawer } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import UserMenuBody from './UserMenuBody/UserMenuBody';
import classes from './UserMenu.module.scss';

export default class UserMenu extends Component {
  state = {
    visible: false,
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className={classes.UserWrapper}>
        <img
          className={classes.UserAvatar}
          src="https://picsum.photos/64/64"
          alt="avatar"
        />
        <div className={classes.UserWelcome}>
          <h4>Hi, Man</h4>
          <span>Welcome back</span>
        </div>
        <RightOutlined className={'userDrawerIcon'} onClick={this.showDrawer} />

        <Drawer
          placement="right"
          key="right"
          closable={false}
          visible={this.state.visible}
          getContainer={`.sideMenu`}
          className={classes.UserMenuDrawer}
        >
          <UserMenuBody
            handleLogout={this.props.handleLogout}
            onClose={this.onClose}
          />
        </Drawer>
      </div>
    );
  }
}
