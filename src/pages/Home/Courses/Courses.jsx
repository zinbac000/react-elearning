import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoursePagination } from 'redux/actions/CourseAction';

import Course from './Course/Course';
import classes from './Courses.module.scss';

const Courses = () => {
  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const spinnerRef = useRef(null);

  const dispatch = useDispatch();

  let timeoutId = null;

  let { count, currentPage, items, totalCount } = useSelector(
    (state) => state.CourseReducer.courseList,
  );

  useEffect(() => {
    dispatch(fetchCoursePagination());
  }, []);

  useEffect(() => {
    if (items) {
      setCourseList((courseList) => [...courseList, ...items]);
      setLoading(false);
    }
  }, [items]);

  useEffect(() => {
    if (loading && spinnerRef.current) {
      spinnerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }, [loading]);

  const handleInfiniteOnLoad = (e) => {
    e.persist();

    const courseWidth = e.target.firstChild.offsetWidth;
    const viewWidth = e.target.clientWidth;
    const elementAmount = count * currentPage;
    const GAP = 20;

    const endOfScroll =
      courseWidth * elementAmount + GAP * (elementAmount - 1) - viewWidth;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    if (courseList.length >= totalCount) {
      setHasMore(false);
      setLoading(false);
      return;
    }

    if (e.target.scrollLeft === endOfScroll) {
      setLoading(true);
    }
    console.log(hasMore);
    if (e.target.scrollLeft > endOfScroll && hasMore) {
      timeoutId = setTimeout(() => {
        dispatch(fetchCoursePagination(currentPage + 1));
      }, 200);
    }
  };

  return (
    <div className={classes.Courses}>
      <div className={classes.Courses__Title}>Frontend Course</div>

      <div className={classes.Courses__Content} onScroll={handleInfiniteOnLoad}>
        {courseList?.map((course) => (
          <Course key={course.maKhoaHoc} course={course} />
        ))}
        {loading && hasMore && (
          <div className={classes.Courses__Loading} ref={spinnerRef}>
            <Spin />
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
