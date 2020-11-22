import {
  FETCH_POPULAR_COURSE,
  FETCH_COURSE_BY_CATEGORIES,
} from 'core/redux/types/CourseType';

export const courseReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_POPULAR_COURSE: {
      return {
        ...state,
        ...{
          popular: payload
            .sort((current, next) => next.luotXem - current.luotXem)
            .slice(0, 12),
        },
      };
    }
    case FETCH_COURSE_BY_CATEGORIES: {
      return {
        ...state,
        ...{ frontend: payload },
      };
    }
    default:
      return state;
  }
};
