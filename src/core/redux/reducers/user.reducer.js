import { userConstants } from 'core/config/constants/user.constants';

export const userReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case userConstants.GETINFO_SUCCESS:
      return {
        user: payload.user,
      };

    case userConstants.GETINFO_FAILURE:
      return {};

    default:
      return state;
  }
};
