/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Drawer, Button, Modal, Dropdown, Menu } from 'antd';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import classes from './Header.module.scss';

import DrawerToggler from './DrawerToggler/DrawerToggler';

import Logo from '../../UI/Logo/Logo';
import logo from '../../../assets/img/logo.svg';
import AutoCompleteSearch from '../../UI/AutoCompleteSearch/AutoCompleteSearch';
import UserAuth from 'components/Auth/UserAuth/UserAuth';
import useToggle from 'Hook/useToggle';

const Header = () => {
  const [drawer, setDrawerOn, setDrawerOff] = useToggle(false);
  const [search, setSearchOn, setSearchOff] = useToggle(false);

  const dropDownOffset = [0, 12];
  const menu = (
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
  return (
    <header className={classes.Header}>
      <DrawerToggler clicked={setDrawerOn} />
      <Drawer
        closable={false}
        onClose={setDrawerOff}
        visible={drawer}
        placement="left"
        key="left"
        push={0}
        className="sideMenu"
      >
        <UserAuth onDesktop={false} />
      </Drawer>

      <div className={classes.Header__Logo}>
        <Logo logo={logo} />
      </div>

      <Dropdown
        overlayClassName={classes.Header__OverlayDropdown}
        align={{
          offset: dropDownOffset,
        }}
        placement="bottomCenter"
        overlay={menu}
      >
        <Button type="link" className={[classes.Header__Link, 'onDesktop']}>
          Categories
        </Button>
      </Dropdown>

      <AutoCompleteSearch
        onMobile={false}
        onFetch={async (value) => ['test', 'test1', 'test2']}
        onSearch={(value) => {
          console.log(value);
        }}
      />

      <div className={classes.Header__Right}>
        <Dropdown
          overlayClassName={classes.Header__OverlayDropdown}
          align={{
            offset: dropDownOffset,
          }}
          placement="bottomCenter"
          overlay={menu}
        >
          <Button type="link" className={[classes.Header__Link, 'onDesktop']}>
            My Courses
          </Button>
        </Dropdown>

        <Button
          className={'onMobile'}
          onClick={setSearchOn}
          type="link"
          icon={<SearchOutlined className={classes.Header__IconLink} />}
        />
        <Button
          className={'onMobile'}
          type="link"
          icon={<ShoppingCartOutlined className={classes.Header__IconLink} />}
        />

        <Modal
          closable={false}
          className={classes.Header__SearchModal}
          visible={search}
          onCancel={setSearchOff}
          footer={null}
        >
          <AutoCompleteSearch
            onMobile={true}
            width="100%"
            onSearch={(value) => {
              setSearchOff();
            }}
            onFetch={async (value) => ['test', 'test1', 'test2']}
          />
        </Modal>

        <Dropdown
          overlayClassName={classes.Header__OverlayDropdown}
          align={{
            offset: dropDownOffset,
          }}
          placement="bottomCenter"
          overlay={menu}
        >
          <Button
            type="link"
            className={[classes.Header__IconLink, 'onDesktop']}
            icon={<ShoppingCartOutlined />}
          />
        </Dropdown>
        <div className="onDesktop">
          <UserAuth onDesktop={true} />
        </div>
      </div>
    </header>
  );
};

export default Header;
