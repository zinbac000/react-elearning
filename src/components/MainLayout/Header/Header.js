/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Drawer, Button, Modal, Dropdown, Menu } from 'antd';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import classes from './Header.module.scss';

import DrawerToggler from './DrawerToggler/DrawerToggler';

import Logo from '../../UI/Logo/Logo';
import logo from '../../../assets/img/logo.svg';
import AutoCompleteSearch from '../../UI/AutoCompleteSearch/AutoCompleteSearch';
import UserAuth from '../../Auth/UserAuth/UserAuth';

export default class Header extends Component {
  state = {
    drawerOpen: false,
    searchModalOpen: false,
  };

  handleShowDrawer = () => this.setState({ drawerOpen: true });

  handleCloseDrawer = () => this.setState({ drawerOpen: false });

  handleShowSearchModal = () => this.setState({ searchModalOpen: true });

  handleCloseSearchModal = () => this.setState({ searchModalOpen: false });

  menu = (
    <Menu>
      {[
        'Thiết kế giao diện',
        'Lập trình di động',
        'Lập trình web',
        'Lập trình ios a',
      ].map((item, index) => (
        <Menu.Item key={index}>
          <a href="#">{item}</a>
        </Menu.Item>
      ))}
    </Menu>
  );

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
          push={0}
        >
          <div className="sideMenu">
            <UserAuth />
          </div>
        </Drawer>
        <div className={classes.Logo}>
          <Logo logo={logo} />
        </div>
        <Dropdown
          overlayClassName={classes.Header__OverlayDropdown}
          align={{
            offset: [0, 16],
          }}
          placement="bottomCenter"
          overlay={this.menu}
        >
          <Button type="link" className={[classes.Link, 'onDesktop']}>
            Categories
          </Button>
        </Dropdown>

        <div className={'onDesktop'}>
          <AutoCompleteSearch
            width={300}
            onFetch={async (value) => ['test', 'test1', 'test2']}
            onSearch={(value) => {
              console.log(value);
            }}
          />
        </div>

        <div className={classes.Right}>
          <Dropdown
            overlayClassName={classes.Header__OverlayDropdown}
            align={{
              offset: [0, 16],
            }}
            placement="bottomCenter"
            overlay={this.menu}
          >
            <Button type="link" className={[classes.Link, 'onDesktop']}>
              My Courses
            </Button>
          </Dropdown>

          <Button
            className={'onMobile'}
            onClick={this.handleShowSearchModal}
            type="link"
            icon={<SearchOutlined className={classes.IconLink} />}
          />
          <Modal
            closable={false}
            className={classes.Header__SearchModal}
            visible={this.state.searchModalOpen}
            onCancel={this.handleCloseSearchModal}
            footer={null}
          >
            <AutoCompleteSearch
              width="100%"
              onSearch={(value) => {
                this.handleCloseSearchModal();
              }}
              onFetch={async (value) => ['test', 'test1', 'test2']}
            />
          </Modal>
          <Dropdown
            overlayClassName={classes.Header__OverlayDropdown}
            align={{
              offset: [0, 16],
            }}
            placement="bottomCenter"
            overlay={this.menu}
          >
            <Button
              type="link"
              icon={<ShoppingCartOutlined className={classes.IconLink} />}
            />
          </Dropdown>
          <div className={'onDesktop'}>
            <UserAuth />
          </div>
        </div>
      </header>
    );
  }
}
