import React, { useEffect, useState } from 'react';

import { Route } from 'react-router-dom';

import { Spin } from 'antd';

import Header from 'components/MainLayout/Header/Header';
import Footer from 'components/MainLayout/Footer/Footer';

import { courseService } from 'core/services/course.service';
import { usePageRouting } from 'CustomHook/usePageRouting';

import classes from './MainLayout.module.scss';

export const MainLayout = ({ Component, ...rest }) => {
  const [courseList, setCourseList] = useState({
    fullCourse: [],
    enrollableCourse: [],
  });

  const [isLoading] = usePageRouting();

  const loadCourseList = async () => {
    try {
      const data = await courseService.list();
      let enrollableData = await courseService.enrollableList();

      // enrollableData = enrollableData.map(courseInfo => courseInfo.maKhoaHoc)

      enrollableData = data
        .filter((courseInfo) =>
          enrollableData.some(
            (enrollableInfo) =>
              courseInfo.maKhoaHoc === enrollableInfo.maKhoaHoc,
          ),
        )
        .sort((current, next) => next.luotXem - current.luotXem)
        .slice(0, 24);

      setCourseList({
        ...courseList,
        fullCourse: data,
        enrollableCourse: enrollableData,
      });
    } catch (err) {}
  };

  useEffect(() => {
    document.body.removeAttribute('style'); //fix antd overflow hidden bug

    loadCourseList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('courseList', courseList);

  return (
    <Route
      {...rest}
      render={(props) => (
        <Spin size="large" spinning={isLoading}>
          <Header />
          <main className={classes.MainLayout__Content}>
            <Component {...props} courseList={courseList} />
          </main>
          <Footer />
        </Spin>
      )}
    />
  );
};
