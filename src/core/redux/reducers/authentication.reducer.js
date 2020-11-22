import { userConstants } from 'core/config/constants/user.constants';
import { localStorageUtil } from 'core/utility/localStorage.utility';

let user = localStorageUtil.getProfile();

const initialState = user ? { loggedIn: true, user } : {};

export const authenticationReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case userConstants.SIGNIN_REQUEST:
      return {
        loggingIn: true,
        username: payload.username,
      };
    case userConstants.SIGNIN_SUCCESS:
      return {
        loggedIn: true,
        user: payload.user,
      };
    case userConstants.SIGNIN_FAILURE:
      return {};
    case userConstants.SIGNOUT:
      return {};
    default:
      return state;
  }
};
