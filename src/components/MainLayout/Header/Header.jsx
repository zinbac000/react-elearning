import React, { useEffect, useState } from 'react';

import { courseService } from 'core/services/course.service';

import { Link } from 'react-router-dom';

import { Drawer, Button, Modal, Dropdown, Menu } from 'antd';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import UserAuth from 'components/MainLayout/Header/Auth/UserAuth/UserAuth';
import AutoCompleteSearch from 'components/UI/AutoCompleteSearch/AutoCompleteSearch';
import DrawerToggler from './DrawerToggler/DrawerToggler';
import Logo from 'components/UI/Logo/Logo';
import logo from 'assets/img/logo.svg';

import classes from './Header.module.scss';
import useToggle from 'CustomHook/useToggle';

const dropDownOffset = [0, 12];

const Header = () => {
  const [drawer, setDrawerOn, setDrawerOff] = useToggle(false);
  const [search, setSearchOn, setSearchOff] = useToggle(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesMenu = () => {
      courseService
        .getCategoriesList()
        .then((res) => {
          setCategories(res.data);
        })
        .catch((err) => console.log(err));
    };

    categoriesMenu();
  }, []);

  const menu = (
    <Menu>
      {categories.map(({ tenDanhMuc }, index) => (
        <Menu.Item key={index}>
          <Link>{tenDanhMuc}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  const categoriesList = (
    <Menu>
      {categories.map(({ tenDanhMuc }, index) => (
        <Menu.Item key={index}>
          <Link>{tenDanhMuc}</Link>
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
        <UserAuth setDrawerOff={setDrawerOff} screenCls={'onMobile'} />
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
        overlay={categoriesList}
      >
        <Button type="link" className="onDesktop">
          <Link to="/categories">Categories</Link>
        </Button>
      </Dropdown>

      <AutoCompleteSearch
        screenCls="onDesktop"
        onFetch={async (value) => ['test', 'test1', 'test2']}
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
            <Link to="/">My Course</Link>
          </Button>
        </Dropdown>

        <Button
          className={'onMobile'}
          onClick={setSearchOn}
          type="link"
          icon={<SearchOutlined />}
        />

        <Button
          className={'onMobile'}
          type="link"
          icon={<ShoppingCartOutlined />}
        />

        <Modal
          closable={false}
          className={classes.Header__SearchModal}
          visible={search}
          onCancel={setSearchOff}
          footer={null}
        >
          <AutoCompleteSearch
            screenCls={'onMobile'}
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
            icon={
              <Link to="/">
                <ShoppingCartOutlined />
              </Link>
            }
          />
        </Dropdown>

        <div className="onDesktop">
          <UserAuth screenCls="onDesktop" />
        </div>
      </div>
    </header>
  );
};

export default Header;
