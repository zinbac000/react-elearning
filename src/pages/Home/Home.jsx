import useFullCourse from 'Hook/useFullCourse';
import React, { Fragment } from 'react';
import Courses from './Courses/Courses';
import Hero from './Hero/Hero';
import Intro from './Intro/Intro';

const Home = () => {
  const courseList = useFullCourse();
  return (
    <Fragment>
      <Hero />
      <Intro />
      <Courses title="All Course" courseList={courseList} />
    </Fragment>
  );
};

export default Home;
