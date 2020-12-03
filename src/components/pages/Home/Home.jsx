import React, { Fragment } from 'react';
import Courses from './Courses/Courses';
import Hero from './Hero/Hero';
import Intro from './Intro/Intro';

const Home = ({ courseList }) => {
  const { enrollableCourse } = courseList;

  return (
    <Fragment>
      <Hero />
      <Intro />
      <Courses title="Popular Course" courseList={enrollableCourse} />
    </Fragment>
  );
};

export default Home;
