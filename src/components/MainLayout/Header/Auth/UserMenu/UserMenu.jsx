/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';

import { Drawer } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import UserMenuBody from './UserMenuBody/UserMenuBody';
import classes from './UserMenu.module.scss';
import useToggle from 'CustomHook/useToggle';

const UserMenu = ({ handleSignout }) => {
  const [drawer, setDrawerOn, setDrawerOff] = useToggle(false);

  return (
    <Fragment>
      <img
        className={classes.UserMenu__Avatar}
        src="https://picsum.photos/64/64"
        alt="avatar"
        onClick={setDrawerOn}
      />
      <div className={classes.UserMenu__Welcome} onClick={setDrawerOn}>
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
        <UserMenuBody handleSignout={handleSignout} onClose={setDrawerOff} />
      </Drawer>
    </Fragment>
  );
};
export default UserMenu;
