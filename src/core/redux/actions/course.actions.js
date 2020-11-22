import {
  FETCH_POPULAR_COURSE,
  FETCH_COURSE_BY_CATEGORIES,
} from 'core/redux/types/CourseType';
import { courseService } from 'core/services/course.service';

export const fetchAllCourse = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_POPULAR_COURSE,
      payload: courseService.list(currentPage, pageSize),
    });
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
