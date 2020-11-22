/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import { List, Divider } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

import classes from './UserMenuBody.module.scss';

const UserMenuBody = ({ handleSignout, onClose }) => {
  const userNavLink = [
    {
      header: 'Alert',
      link: ['Notifications', 'Messages', 'Wishlist'],
    },
    {
      header: 'Account',
      link: [
        'Account settings',
        'Payment methods',
        'Knowcode credits',
        'Purchase history',
      ],
    },
    {
      header: 'Profile',
      link: ['Public profile', 'Edit profile', 'Log out'],
    },
  ];

  const userNavLink2 = [
    {
      header: 'Alert',
      link: [
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
    },
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

  const renderNavLink = () =>
    userNavLink.map((section, index) => (
      <Fragment key={index}>
        <List
          header={
            <div className={classes.UserMenuBody__Heading}>
              {section.header}
            </div>
          }
          split={false}
          dataSource={section.link}
          renderItem={(item) => (
            <a
              onClick={handleSignout}
              className={classes.UserMenuBody__Link}
              href="#"
            >
              {item}
            </a>
          )}
        />
        {index !== userNavLink.length - 1 ? <Divider /> : null}
      </Fragment>
    ));

  return (
    <Fragment>
      <div className={classes.UserMenuBody}>
        <LeftOutlined onClick={onClose} />
        <p>Menu</p>
      </div>
      <div className={classes.UserMenuBody__Wrapper}>{renderNavLink()}</div>
    </Fragment>
  );
};

export default UserMenuBody;
