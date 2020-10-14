import { FETCH_COURSE } from 'redux/types/CourseType';

const initialState = {
  courseList: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COURSE: {
      return { ...state, courseList: payload };
    }
    default:
      return state;
  }
};
