import React, { useEffect, useState } from 'react';

import { courseService } from 'core/services/course.service';

import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  Drawer,
  Button,
  Modal,
  Dropdown,
  Menu,
  Col,
  Row,
  Grid,
  Select,
  Empty,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import UserAuth from 'components/MainLayout/Header/Auth/UserAuth/UserAuth';

import classes from './Header.module.scss';
import useToggle from 'CustomHook/useToggle';
import { AwaitingApprovalIcon, MenuIcon, Logo } from 'components/UI/KC-Icon';
import { SearchIcon } from 'components/UI/KC-Icon';

const dropDownOffset = [0, 12];
const { useBreakpoint } = Grid;

const Header = () => {
  const [drawer, setDrawerOn, setDrawerOff] = useToggle(false);
  const [search, setSearchOn, setSearchOff] = useToggle(false);

  const { loggedIn } = useSelector((state) => state.authenticationReducer);

  const [value, setValue] = useState();
  const [options, setOptions] = useState([]);
  const history = useHistory();

  const { lg } = useBreakpoint();

  const [state, setState] = useState({});

  const loadStateData = async () => {
    try {
      const categoriesList = await courseService.listCategories();
      const waitlistCourseList = await courseService.listWaitlistCourse();
      setState({
        categoriesList,
        waitlistCourseList,
      });
    } catch (error) {}
  };

  useEffect(() => {
    loadStateData();
  }, []);

  const waitingList = (
    <Menu>
      <Menu.ItemGroup title="Awaiting Approval Courses">
        {state.waitlistCourseList?.map(({ maKhoaHoc, tenKhoaHoc }, index) => (
          <Menu.Item key={index}>
            <Link to={`/detail/&${maKhoaHoc}`}>{tenKhoaHoc}</Link>
          </Menu.Item>
        ))}
      </Menu.ItemGroup>
    </Menu>
  );

  const categoriesList = (
    <Menu>
      {state.categoriesList?.map(({ maDanhMuc, tenDanhMuc }, index) => (
        <Menu.Item key={index}>
          <Link to={`/categories/?category=${maDanhMuc}`}>{tenDanhMuc}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  const handleSearch = async (value) => {
    try {
      const res = await courseService.list(value);
      setOptions(
        res.map(({ maKhoaHoc, tenKhoaHoc }) => {
          return {
            maKhoaHoc,
            tenKhoaHoc,
          };
        }),
      );
    } catch (error) {
      setOptions([]);
    }
  };

  const handleSelectSearchOption = (_value) => {
    history.push(`/categories/?key=${_value}`);
    setValue(null);
    setSearchOff();
  };

  return (
    <header className={classes.Header}>
      <Row align="middle">
        <Col lg={0} style={{ height: '28px' }}>
          <MenuIcon width="28" onClick={setDrawerOn} />
        </Col>
      </Row>
      <Col lg={0}>
        <Drawer
          closable={false}
          onClose={setDrawerOff}
          visible={drawer}
          placement="left"
          key="left"
          push={0}
          className="sideMenu"
        >
          <UserAuth setDrawerOff={setDrawerOff} />
        </Drawer>
      </Col>

      {!lg && (
        <Link to="/" className={classes.Header__Logo}>
          <Logo width="144" />
        </Link>
      )}

      <Col xs={10} lg={16}>
        <Row align="middle">
          {lg && (
            <>
              <Link to="/" className={classes.Header__Logo}>
                <Logo width="174" />
              </Link>
              <Dropdown
                overlayClassName={classes.Header__OverlayDropdown}
                align={{
                  offset: [0, 18],
                }}
                placement="bottomCenter"
                overlay={categoriesList}
              >
                <Button type="link">
                  <Link to="/categories">Categories</Link>
                </Button>
              </Dropdown>
            </>
          )}

          <Col xs={0} lg={13}>
            <Select
              dropdownClassName={classes.Header__SearchDropdown}
              placeholder={'Search for categories, courses...'}
              className={classes.Header__Search}
              suffixIcon={<SearchIcon />}
              notFoundContent={<Empty />}
              onSearch={handleSearch}
              onChange={handleSelectSearchOption}
              dropdownAlign={{
                offset: [0, -1],
              }}
              showSearch={true}
              value={value}
            >
              {options.map((courseList) => (
                <Select.Option key={courseList.maKhoaHoc}>
                  {courseList.tenKhoaHoc}
                </Select.Option>
              ))}
            </Select>
          </Col>
        </Row>
      </Col>

      <Col xs={4} lg={8}>
        <Row className={classes.Header__Right} align="middle" justify="end">
          <Col xs={0} lg={24}>
            <Row justify="end">
              <Button type="link" className={classes.Header__Link}>
                <Link to="/user/my-courses">My Courses</Link>
              </Button>

              {loggedIn && (
                <Dropdown
                  overlayClassName={classes.Header__OverlayDropdown}
                  align={{
                    offset: dropDownOffset,
                  }}
                  placement="bottomLeft"
                  overlay={waitingList}
                >
                  <Button
                    type="link"
                    className={classes.Header__IconLink}
                    icon={
                      <Link
                        className={classes.Header__Link}
                        to="/"
                        style={{ display: 'flex' }}
                      >
                        <AwaitingApprovalIcon />
                      </Link>
                    }
                  />
                </Dropdown>
              )}

              <UserAuth />
            </Row>
          </Col>

          {!lg && (
            <Button
              onClick={setSearchOn}
              type="link"
              icon={<SearchOutlined />}
            />
          )}

          <Modal
            className={classes.Header__SearchModal}
            onCancel={setSearchOff}
            visible={search}
            closable={false}
            footer={null}
          >
            <Select
              dropdownClassName={classes.Header__SearchDropdown}
              placeholder={'Search for categories, courses...'}
              className={classes.Header__Search}
              suffixIcon={<SearchIcon />}
              notFoundContent={<Empty />}
              onSearch={handleSearch}
              onChange={handleSelectSearchOption}
              dropdownAlign={{
                offset: [0, -1],
              }}
              showSearch={true}
              value={value}
            >
              {options.map((d) => (
                <Select.Option key={d.maKhoaHoc}>{d.tenKhoaHoc}</Select.Option>
              ))}
            </Select>
          </Modal>
        </Row>
      </Col>
    </header>
  );
};

export default Header;
