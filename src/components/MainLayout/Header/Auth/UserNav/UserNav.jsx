/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Link } from 'react-router-dom';
import { Menu, Dropdown, Avatar } from 'antd';
import { menu } from 'core/config/constants/menu.constants';

import classes from './UserNav.module.scss';
import { useSelector } from 'react-redux';
import { nameExtractor } from 'core/utility/helper';

const UserNav = ({ handleSignout }) => {
  const { desktop } = menu;
  const { user } = useSelector((state) => state.authenticationReducer);

  const overlayMenu = (
    <Menu>
      <Menu.Item
        key={classes.UserNav__Wrapper}
        className={classes.UserNav__Wrapper}
      >
        <Avatar className={classes.UserNav__Avatar} size={56}>
          {nameExtractor(user.hoTen)}
        </Avatar>
        <div>
          <Link to="/user/account">
            <h4>Hi, {user.hoTen}</h4>
          </Link>
          <span>{user.email}</span>
        </div>
      </Menu.Item>

      {desktop.map((section, index) => {
        return (
          <Menu.ItemGroup key={`gr-${index}`}>
            {section.map((item, index) => (
              <Menu.Item key={index}>
                <Link
                  to={item.path}
                  onClick={item.signoutFlag && handleSignout}
                >
                  {item.label}
                </Link>
              </Menu.Item>
            ))}
          </Menu.ItemGroup>
        );
      })}
    </Menu>
  );

  return (
    <Dropdown
      overlay={overlayMenu}
      overlayClassName={classes.UserNav}
      align={{
        offset: [20, 13],
      }}
      placement="bottomRight"
    >
      <Avatar className={classes.DropdownAvatar} size={38}>
        {nameExtractor(user.hoTen)}
      </Avatar>
    </Dropdown>
  );
};

export default UserNav;
