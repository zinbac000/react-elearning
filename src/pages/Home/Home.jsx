import React, { Fragment } from 'react';
import Courses from './Courses/Courses';
import Hero from './Hero/Hero';
import Intro from './Intro/Intro';

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Intro />
      <Courses />
    </Fragment>
  );
};

export default Home;
