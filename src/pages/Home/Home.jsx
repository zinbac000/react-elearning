import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Courses from './Courses/Courses';
import Hero from './Hero/Hero';
import Intro from './Intro/Intro';

const Home = () => {
  const allCourseList = useSelector(
    (state) => state.CourseReducer.courseList.all,
  );

  return (
    <Fragment>
      <Hero />
      <Intro />
      <Courses title="Popular Course" courseList={allCourseList} />
    </Fragment>
  );
};

export default Home;
