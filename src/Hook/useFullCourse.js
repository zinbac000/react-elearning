import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoursePagination } from 'redux/actions/CourseAction';

const useFullCourse = () => {
  const dispatch = useDispatch();
  let courseList = useSelector((state) => state.CourseReducer.courseList);
  useEffect(() => {
    dispatch(fetchCoursePagination());
  }, []);
  return courseList;
};

export default useFullCourse;
