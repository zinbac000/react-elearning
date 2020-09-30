/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import { List, Divider } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import classes from './UserMenuBody.module.scss';

const UserMenuBody = ({ handleLogout, onClose }) => {
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
        'Knowland credits',
        'Purchase history',
      ],
    },
    {
      header: 'Profile',
      link: ['Public profile', 'Edit profile', 'Log out'],
    },
  ];

  const renderNavLink = () =>
    userNavLink.map((section, index) => (
      <Fragment key={index}>
        <List
          header={
            <div className={classes.UserSection__Heading}>{section.header}</div>
          }
          split={false}
          dataSource={section.link}
          renderItem={(item) => (
            <a
              onClick={handleLogout}
              className={classes.UserSection__Navlink}
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
      <div className={classes.UserHeader}>
        <LeftOutlined className={'userDrawerIcon'} onClick={onClose} />
        <p>Menu</p>
      </div>
      <div className={classes.UserSection__Wrapper}>{renderNavLink()}</div>
    </Fragment>
  );
};

export default UserMenuBody;
