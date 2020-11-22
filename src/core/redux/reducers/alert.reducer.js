import { alertConstants } from 'core/config/constants/alert.constants';

export const alertReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case alertConstants.SUCCESS:
      return {
        type: 'success',
        message: payload.message,
      };
    case alertConstants.ERROR:
      return {
        type: 'error',
        message: payload.message,
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state;
  }
};
