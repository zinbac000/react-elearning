import {
  FETCH_POPULAR_COURSE,
  FETCH_COURSE_BY_CATEGORIES,
} from 'redux/types/CourseType';
import { courseService } from 'services/CourseService';

export const fetchAllCourse = (currentPage, pageSize) => {
  return (dispatch) => {
    courseService
      .fetchAllCourse(currentPage, pageSize)
      .then((res) => {
        dispatch({
          type: FETCH_POPULAR_COURSE,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const fetchCourseByCategories = (courseType) => {
  return (dispatch) => {
    courseService
      .fetchCourseByCategories(courseType)
      .then((res) => {
        dispatch({
          type: FETCH_COURSE_BY_CATEGORIES,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};
