/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Drawer } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import UserMenuBody from './UserMenuBody/UserMenuBody';
import classes from './UserMenu.module.scss';
import useToggle from 'Hook/useToggle';

const UserMenu = ({ handleLogout }) => {
  const [drawer, setDrawerOn, setDrawerOff] = useToggle(false);

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
      <RightOutlined className={'userDrawerIcon'} onClick={setDrawerOn} />

      <Drawer
        placement="left"
        onClose={setDrawerOff}
        key="left"
        closable={false}
        visible={drawer}
        getContainer={`.sideMenu`}
        className={classes.UserMenuDrawer}
      >
        <UserMenuBody handleLogout={handleLogout} onClose={setDrawerOff} />
      </Drawer>
    </div>
  );
};
export default UserMenu;
