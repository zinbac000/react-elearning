import React from 'react';
import Course from './Course/Course';
import classes from './Courses.module.scss';

const Courses = () => {
  return (
    <div className={classes.Courses}>
      <div className={classes.Courses__Title}>Frontend Course</div>
      <div className={classes.Courses__Content}>
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
      </div>
    </div>
  );
};

export default Courses;
