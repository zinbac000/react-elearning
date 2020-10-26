import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Button, Modal, Dropdown, Menu } from 'antd';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import classes from './Header.module.scss';

import DrawerToggler from './DrawerToggler/DrawerToggler';
import Logo from 'components/UI/Logo/Logo';
import logo from 'assets/img/logo.svg';
import AutoCompleteSearch from 'components/UI/AutoCompleteSearch/AutoCompleteSearch';
import UserAuth from 'components/Auth/UserAuth/UserAuth';
import useToggle from 'Hook/useToggle';
import { ON_DESKTOP, ON_MOBILE } from 'config/setting';
import { courseService } from 'services/course.service';
import { useState } from 'react';
import { useEffect } from 'react';

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
        <UserAuth setDrawerOff={setDrawerOff} screenCls={ON_MOBILE} />
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
        <Button type="link" className={[classes.Header__Link, ON_DESKTOP]}>
          <Link to="/categories">Categories</Link>
        </Button>
      </Dropdown>

      <AutoCompleteSearch
        screenCls={ON_DESKTOP}
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
          <Button type="link" className={[classes.Header__Link, ON_DESKTOP]}>
            <Link to="/">My Course</Link>
          </Button>
        </Dropdown>

        <Button
          className={ON_MOBILE}
          onClick={setSearchOn}
          type="link"
          icon={<SearchOutlined className={classes.Header__IconLink} />}
        />
        <Button
          className={ON_MOBILE}
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
            screenCls={ON_MOBILE}
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
            className={[classes.Header__IconLink, ON_DESKTOP]}
            icon={
              <Link to="/">
                <ShoppingCartOutlined />
              </Link>
            }
          />
        </Dropdown>
        <div className={ON_DESKTOP}>
          <UserAuth screenCls={ON_DESKTOP} />
        </div>
      </div>
    </header>
  );
};

export default Header;
