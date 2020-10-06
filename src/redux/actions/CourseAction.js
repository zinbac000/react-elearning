import { FETCH_COURSE } from 'redux/types/CourseType';
import { courseService } from 'services/CourseService';

export const fetchCoursePagination = (currentPage, pageSize) => {
  return (dispatch) => {
    courseService
      .fetchCourse(currentPage, pageSize)
      .then((res) => {
        dispatch({
          type: FETCH_COURSE,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};
