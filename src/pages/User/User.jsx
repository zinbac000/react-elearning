import React from 'react';

import {
  NavLink,
  Redirect,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';

import { Col, Row, Avatar, Menu } from 'antd';

import classes from './User.module.scss';
import Account from './components/Account/Account';
import MyCourses from './components/MyCourses/MyCourses';

const linkList = [
  {
    title: 'Account',
    to: '/user/account',
  },
  {
    title: 'My course',
    to: '/user/my-courses',
  },
];

const User = () => {
  const location = useLocation();

  const newLinkList = linkList.map((item) =>
    item.to === location.pathname
      ? { ...item, isActive: true }
      : { ...item, isActive: false },
  );

  return (
    <Row className={classes.User}>
      <Col xs={24} md={6} lg={5} xl={4} className={classes.User__Container}>
        <Avatar className={classes.User__Avatar} size={110}>
          K
        </Avatar>
        <p className={classes.User__Username}>Knowcode</p>

        <Menu className={classes.User__Menu} mode="vertical">
          {newLinkList.map((item) => (
            <Menu.Item
              key={item.title}
              className={[
                item.isActive && 'ant-menu-item-active ant-menu-item-selected',
              ]}
            >
              <NavLink to={item.to}>{item.title}</NavLink>
            </Menu.Item>
          ))}
        </Menu>
      </Col>
      <Switch>
        <Route path="/user/account" component={Account} />
        <Route path="/user/my-courses" component={MyCourses} />
        <Redirect from="/user" to="/user/account" />
      </Switch>
    </Row>
  );
};

export default User;
