import React, { Component } from 'react';
import { Drawer, Button, Modal, Dropdown } from 'antd';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import classes from './Header.module.scss';

import DrawerToggler from './DrawerToggler/DrawerToggler';

import Logo from '../../UI/Logo/Logo';
import logo from '../../../assets/img/logo.svg';
import AutoCompleteSearch from '../../UI/AutoCompleteSearch/AutoCompleteSearch';
import CategoryMenuList from './CategoryMenuList/CategoryMenuList';

export default class Header extends Component {
  state = {
    drawerOpen: false,
    searchModalOpen: false,
    isTransparent: !!this.props.transparentOnTop,
  };

  componentDidMount() {
    if (this.props.transparentOnTop) {
      window.addEventListener('scroll', this.handleCheckWindowScroll);
    }
  }

  componentWillUnmount() {
    if (this.props.transparentOnTop) {
      window.removeEventListener('scroll', this.handleCheckWindowScroll);
    }
  }

  /**
   * This method is used to check the scrolling distance
   * from top of the page to toggle transparent mode of header
   */
  handleCheckWindowScroll = () => {
    if (window.pageYOffset > 65 && this.state.isTransparent) {
      this.setState({
        isTransparent: false,
      });
    } else if (window.pageYOffset <= 65 && !this.state.isTransparent) {
      this.setState({
        isTransparent: true,
      });
    }
  };

  handleShowDrawer = () => this.setState({ drawerOpen: true });

  handleCloseDrawer = () => this.setState({ drawerOpen: false });

  handleShowSearchModal = () => this.setState({ searchModalOpen: true });

  handleCloseSearchModal = () => this.setState({ searchModalOpen: false });

  render() {
    return (
      <header
        className={[
          classes.Header,
          this.state.isTransparent ? classes.Transparent : null,
        ].join(' ')}
      >
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
        <Dropdown
          placement="bottomCenter"
          overlay={
            <CategoryMenuList
              categories={[
                'Thiết kế giao diện',
                'Lập trình di động',
                'Lập trình web',
              ]}
            />
          }
        >
          <Button type="link" className={[classes.Link, classes.onDesktop]}>
            Categories
          </Button>
        </Dropdown>

        <div className={classes.onDesktop}>
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
            placement="bottomCenter"
            overlay={
              <CategoryMenuList
                categories={[
                  'Thiết kế giao diện',
                  'Lập trình di động',
                  'Lập trình web',
                ]}
              />
            }
          >
            <Button type="link" className={[classes.Link, classes.onDesktop]}>
              My Courses
            </Button>
          </Dropdown>

          <Button
            className={classes.onMobile}
            onClick={this.handleShowSearchModal}
            type="link"
            icon={<SearchOutlined className={classes.IconLink} />}
          />
          <Modal
            closable={false}
            style={{ top: 0, left: 0, right: 0 }}
            bodyStyle={{
              height: '65px',
              display: 'flex',
              padding: 0,
              alignItems: 'center',
            }}
            visible={this.state.searchModalOpen}
            onCancel={this.handleCloseSearchModal}
            footer={null}
          >
            <AutoCompleteSearch
              width="100%"
              onSearch={(value) => {
                this.handleCloseSearchModal();
                console.log(value);
              }}
              onFetch={async (value) => ['test', 'test1', 'test2']}
            />
          </Modal>
          <Dropdown
            placement="bottomCenter"
            overlay={
              <CategoryMenuList
                categories={[
                  'Thiết kế giao diện',
                  'Lập trình di động',
                  'Lập trình web',
                ]}
              />
            }
          >
            <Button
              type="link"
              icon={<ShoppingCartOutlined className={classes.IconLink} />}
            />
          </Dropdown>
        </div>
      </header>
    );
  }
}
