import React, { Component } from 'react';
import { Drawer, Button, Modal } from 'antd';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import classes from './Header.module.scss';

import DrawerToggler from './DrawerToggler/DrawerToggler';

import Logo from '../../UI/Logo/Logo';
import logo from '../../../assets/img/logo.svg';

export default class Header extends Component {
  state = {
    drawerOpen: false,
    searchModalOpen: false,
  };

  handleShowDrawer = () => this.setState({ drawerOpen: true });

  handleCloseDrawer = () => this.setState({ drawerOpen: false });

  handleShowSearchModal = () => this.setState({ searchModalOpen: true });

  handleCloseSearchModal = () => this.setState({ searchModalOpen: false });

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
        <div className={classes.Logo}>
          <Logo logo={logo} />
        </div>
        <nav>
          <Button
            onClick={this.handleShowSearchModal}
            type="link"
            icon={<SearchOutlined className={classes.IconLink} />}
          />
          <Modal
            closable={false}
            style={{ top: 0, left: 0, right: 0 }}
            bodyStyle={{ height: '65px' }}
            visible={this.state.searchModalOpen}
            onCancel={this.handleCloseSearchModal}
            footer={null}
          >
            Search for anything...
          </Modal>
          <Button
            type="link"
            icon={<ShoppingCartOutlined className={classes.IconLink} />}
          />
        </nav>
      </header>
    );
  }
}
