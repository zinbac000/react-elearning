import React, { Fragment } from 'react';
import Courses from './Courses/Courses';
import Hero from './Hero/Hero';
import Intro from './Intro/Intro';
import './Home.scss';

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
