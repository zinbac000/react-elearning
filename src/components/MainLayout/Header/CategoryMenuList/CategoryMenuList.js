import React, { Component } from 'react';
import { Menu } from 'antd';
// import { Link } from 'react-router-dom';
import classes from './CategoryMenuList.module.scss';

export default class CategoryMenuList extends Component {
  renderMenuItems = () => {
    return this.props.categories.map((category) => (
      <Menu.Item key={category}>
        {/* This will be replaced by Link when applying Routing functionality */}
        <a href="#">{category}</a>
      </Menu.Item>
    ));
  };

  render() {
    return (
      <Menu className={classes.CategoryMenuList}>{this.renderMenuItems()}</Menu>
    );
  }
}
