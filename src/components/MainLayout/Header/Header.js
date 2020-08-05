import React, { Component } from 'react';

import classes from './Header.module.scss';

import DrawerToggler from './DrawerToggler/DrawerToggler';
import { Drawer } from 'antd';

export default class Header extends Component {
  state = {
    drawerOpen: false,
  };

  handleShowDrawer = () => this.setState({ drawerOpen: true });
  handleCloseDrawer = () => this.setState({ drawerOpen: false });

  render() {
    return (
      <header className={classes.Header}>
        <DrawerToggler clicked={this.handleShowDrawer} />
        <Drawer
          closable={false}
          onClose={this.handleCloseDrawer}
          visible={this.state.drawerOpen}
          placement="left"
          key="left"
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </header>
    );
  }
}
