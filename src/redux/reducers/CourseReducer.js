import {
  FETCH_POPULAR_COURSE,
  FETCH_COURSE_BY_CATEGORIES,
} from 'redux/types/CourseType';

const initialState = {
  courseList: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POPULAR_COURSE: {
      return {
        ...state,
        courseList: {
          ...state.courseList,
          all: payload
            .sort((current, next) => next.luotXem - current.luotXem)
            .slice(0, 12),
        },
      };
    }
    case FETCH_COURSE_BY_CATEGORIES: {
      return {
        ...state,
        courseList: { ...state.courseList, frontend: payload },
      };
    }
    default:
      return state;
  }
};
