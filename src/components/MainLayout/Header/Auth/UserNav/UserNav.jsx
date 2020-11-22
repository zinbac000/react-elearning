/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classes from './UserNav.module.scss';

import { Menu, Dropdown, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserNav = ({ handleSignout }) => {
  const { hoTen, email } = useSelector(
    (rootReducer) => rootReducer.authenticationReducer.user,
  );
  const userNavLink = [
    [
      {
        path: '/user/my-courses',
        label: 'My courses',
      },
      {
        path: '/404',
        label: 'My cart',
      },
      {
        path: '/404',
        label: 'Wishlist',
      },
      {
        path: '/404',
        label: 'Teach on Knowland',
      },
    ],
    [
      {
        path: '/user/account',
        label: 'Account settings',
      },
      {
        path: '/404',
        label: 'Payment methods',
      },
      {
        path: '/404',
        label: 'Knowcode credits',
      },
      {
        path: '/404',
        label: 'Purchase history',
      },
    ],
    [
      {
        path: '/404',
        label: 'Notifications',
      },
      {
        path: '/404',
        label: 'Messages',
      },
    ],
    [
      {
        path: '/404',
        label: 'Public profile',
      },
      {
        path: '/404',
        label: 'Edit profile',
      },
    ],
    [
      {
        path: '/404',
        label: 'Help',
      },
      {
        path: '/',
        label: 'Logout',
        handleSignout,
      },
    ],
  ];

  const renderMenuItemGroup = userNavLink.map((section, index) => {
    return (
      <Menu.ItemGroup key={`gr-${index}`}>
        {section.map((item, index) => (
          <Menu.Item key={index}>
            <Link to={item.path} onClick={item.handleSignout}>
              {item.label}
            </Link>
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
        <Avatar className={classes.UserNav__Avatar} size={56}>
          K
        </Avatar>
        <div>
          <Link to="/user/account">
            <h4>Hi, {hoTen}</h4>
          </Link>
          <span>{email}</span>
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
        offset: [20, 13],
      }}
      placement="bottomRight"
    >
      <Avatar className={classes.DropdownAvatar} size={38}>
        K
      </Avatar>
    </Dropdown>
  );
};

export default UserNav;
