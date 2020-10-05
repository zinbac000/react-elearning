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
    <div className={classes.UserMenu}>
      <img
        className={classes.UserMenu__Avatar}
        src="https://picsum.photos/64/64"
        alt="avatar"
      />
      <div className={classes.UserMenu__Welcome}>
        <p>Hi, Man</p>
        <span>Welcome back</span>
      </div>
      <RightOutlined className={classes.UserMenu__Icon} onClick={setDrawerOn} />

      <Drawer
        placement="left"
        key="left"
        getContainer={`.sideMenu`}
        closable={false}
        visible={drawer}
        onClose={setDrawerOff}
        className={classes.UserMenu__Drawer}
      >
        <UserMenuBody handleLogout={handleLogout} onClose={setDrawerOff} />
      </Drawer>
    </div>
  );
};
export default UserMenu;
