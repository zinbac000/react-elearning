import React, { useState } from 'react';

import { AutoComplete, Col, Divider, Input, Row } from 'antd';

import classes from './MyCourses.module.scss';
import { useSelector } from 'react-redux';
import MyCoursesItem from '../MyCoursesItem/MyCoursesItem';

const courseArr = ['android', 'java', 'ios'];

const searchResult = (query) => {
  return courseArr
    .filter((item) => item.includes(query))
    .map((item) => ({
      value: item,
      label: item,
    }));
};

const MyCourses = () => {
  const [options, setOptions] = useState([]);
  const { popular } = useSelector((state) => state.courseReducer);

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  return (
    <Col xs={24} md={18} lg={19} className={classes.MyCourses}>
      <Row
        align="middle"
        justify="space-between"
        className={classes.MyCourses__Wrapper}
      >
        <Col xs={24} md={8}>
          <p className={classes.MyCourses__Title}>My Courses</p>
          <p className={classes.MyCourses__Subtitle}>Find your course here.</p>
        </Col>
        <Col xs={24} md={12} className={classes.MyCourses__Search}>
          <AutoComplete options={options} onSearch={handleSearch}>
            <Input.Search
              size="large"
              placeholder="Search your course"
              enterButton
            />
          </AutoComplete>
        </Col>
      </Row>

      <Divider />

      <Col
        xs={{ span: 20, offset: 2 }}
        md={{ span: 14, offset: 5 }}
        lg={{ span: 24, offset: 0 }}
        className={classes.MyCourses__CardContainer}
      >
        {popular?.map((course) => (
          <MyCoursesItem key={course.maKhoaHoc} course={course} />
        ))}
      </Col>
    </Col>
  );
};

export default MyCourses;
