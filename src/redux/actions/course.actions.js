import {
  FETCH_POPULAR_COURSE,
  FETCH_COURSE_BY_CATEGORIES,
} from 'redux/types/CourseType';
import { courseService } from 'services/course.service';

export const fetchAllCourse = (currentPage, pageSize) => {
  return (dispatch) => {
    courseService
      .getAll(currentPage, pageSize)
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
      .getCourseByCategories(courseType)
      .then((res) => {
        dispatch({
          type: FETCH_COURSE_BY_CATEGORIES,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};
