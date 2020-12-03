import React, { useRef } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';

import CourseItem from './components/CourseItem/CourseItem';
import classes from './Courses.module.scss';

const settings = {
  lazyLoad: 'progressive',
  adaptiveHeight: true,
  rows: 2,
  dots: false,
  speed: 555,
  slidesToShow: 4,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1232,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },

    {
      breakpoint: 991,
      settings: {
        rows: 1,
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 672,
      settings: {
        rows: 1,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 536,
      settings: {
        rows: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Courses = ({ title, courseList }) => {
  const carouselRef = useRef(null);

  const handleNext = () => (carouselRef ? carouselRef.current.next() : false);
  const handlePrev = () => (carouselRef ? carouselRef.current.prev() : false);
  return (
    <div className={classes.Courses}>
      <div className={classes.Courses__Title}>{title}</div>
      <div className={classes.Courses__Wrapper}>
        <Carousel {...settings} ref={carouselRef}>
          {courseList?.map((course) => (
            <CourseItem key={course.maKhoaHoc} course={course} />
          ))}
        </Carousel>
        <div className={classes.Courses__PrevBtn} onClick={handlePrev}>
          <LeftOutlined />
        </div>
        <div className={classes.Courses__NextBtn} onClick={handleNext}>
          <RightOutlined />
        </div>
      </div>
    </div>
  );
};

export default Courses;
