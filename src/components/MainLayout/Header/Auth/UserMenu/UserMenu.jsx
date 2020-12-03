/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import useToggle from 'CustomHook/useToggle';

import { menu } from 'core/config/constants/menu.constants';
import { Divider, Drawer, List } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import classes from './UserMenu.module.scss';

const UserMenu = ({ handleSignout }) => {
  const [drawer, setDrawerOn, setDrawerOff] = useToggle(false);

  const { mobile } = menu;

  const renderMenuLink = () =>
    mobile.map((section, index) => (
      <Fragment key={index}>
        <List
          header={
            <div className={classes.UserMenu__Body__Heading}>
              {section.header}
            </div>
          }
          split={false}
          dataSource={section.link}
          renderItem={(item) => (
            <Link
              onClick={item.signoutFlag && handleSignout}
              className={classes.UserMenu__Body__Link}
              to={item.path}
            >
              {item.label}
            </Link>
          )}
        />
        {index !== mobile.length - 1 ? <Divider /> : null}
      </Fragment>
    ));

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
        <div className={classes.UserMenu__Body}>
          <LeftOutlined onClick={setDrawerOff} />
          <p>Menu</p>
        </div>
        <div className={classes.UserMenu__Body__Wrapper}>
          {renderMenuLink()}
        </div>
      </Drawer>
    </Fragment>
  );
};
export default UserMenu;
