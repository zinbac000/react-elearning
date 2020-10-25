import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Courses from './Courses/Courses';
import Hero from './Hero/Hero';
import Intro from './Intro/Intro';

const Home = () => {
  const { popular } = useSelector((state) => state.course);
  console.log(popular);
  return (
    <Fragment>
      <Hero />
      <Intro />
      <Courses title="Popular Course" courseList={popular} />
    </Fragment>
  );
};

export default Home;
