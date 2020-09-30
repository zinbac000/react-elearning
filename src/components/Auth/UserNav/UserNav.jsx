/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classes from './UserNav.module.scss';

import { Menu, Dropdown } from 'antd';

const UserNav = () => {
  const userNavLink = [
    ['My course', 'My cart', 'Wishlist', 'Teach on Knowland'],
    [
      'Account settings',
      'Payment methods',
      'Knowland credits',
      'Purchase history',
    ],
    ['Notifications', 'Messages'],
    ['Public profile', 'Edit profile'],
    ['Help', 'Logout'],
  ];

  const renderMenuItemGroup = userNavLink.map((section, index) => {
    return (
      <Menu.ItemGroup key={`gr-${index}`}>
        {section.map((item, index) => (
          <Menu.Item key={index}>
            <a href="#">{item}</a>
          </Menu.Item>
        ))}
      </Menu.ItemGroup>
    );
  });

  const menu = (
    <Menu>
      <Menu.Item
        key={classes.UserNav__Wrapper}
        className={classes.UserNav__Wrapper}
      >
        <img
          className={classes.UserNav__Avatar}
          src="https://picsum.photos/64/64"
          alt="avatar"
        />
        <div>
          <h4>Hi, User</h4>
          <span>user-email@email.com</span>
        </div>
      </Menu.Item>
      {renderMenuItemGroup}
    </Menu>
  );

  return (
    <Dropdown
      overlay={menu}
      overlayClassName={classes.UserNav}
      align={{
        offset: [20, 15],
      }}
      placement="bottomRight"
    >
      <img
        className={classes.DropdownAvatar}
        src="https://picsum.photos/200/200"
        alt="avatar"
      />
    </Dropdown>
  );
};

export default UserNav;
