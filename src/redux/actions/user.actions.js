import { userConstants } from 'config/constants/user.constants';
import { userService } from 'services/user.service';
import { alertActions } from './alert.actions';

class UserAction {
  signin = ({ username, password, remember }) => {
    const request = (user) => ({ type: userConstants.SIGNIN_REQUEST, user });
    const success = (user) => ({ type: userConstants.SIGNIN_SUCCESS, user });
    const failure = (error) => ({ type: userConstants.SIGNIN_FAILURE, error });

    return (dispatch) => {
      dispatch(request({ username }));

      userService
        .signin(username, password, remember)
        .then((user) => {
          dispatch(success(user));
        })
        .catch((error) => {
          dispatch(failure(error.response.data));
          dispatch(alertActions.error(error.response.data));
        });
    };
  };

  signout = () => {
    userService.signout();
    return { type: userConstants.SIGNOUT };
  };

  signup = (
    { username, password, fullname, phone, groupid, email },
    history,
  ) => {
    const request = (user) => {
      return { type: userConstants.SIGNUP_REQUEST, user };
    };
    const success = (user) => {
      return { type: userConstants.SIGNUP_SUCCESS, user };
    };
    const failure = (error) => {
      return { type: userConstants.SIGNUP_FAILURE, error };
    };
    return (dispatch) => {
      dispatch(request(username));

      userService
        .signup(username, password, fullname, phone, groupid, email)
        .then((user) => {
          console.log('user', user);
          dispatch(success(user));
          history.push('/signin');
          dispatch(alertActions.success('Registration successful'));
        })
        .catch((error) => {
          dispatch(failure(error.response.data));
          dispatch(alertActions.error(error.response.data));
        });
    };
  };

  getAll = () => {
    const request = () => {
      return { type: userConstants.GETALL_REQUEST };
    };
    const success = (users) => {
      return { type: userConstants.GETALL_SUCCESS, users };
    };
    const failure = (error) => {
      return { type: userConstants.GETALL_FAILURE, error };
    };

    return (dispatch) => {
      dispatch(request());

      userService
        .getAll()
        .then((users) => dispatch(success(users)))
        .catch((error) => dispatch(failure(error.response.data)));
    };
  };

  _delete = (id) => {
    const request = (id) => {
      return { type: userConstants.DELETE_REQUEST, id };
    };
    const success = (id) => {
      return { type: userConstants.DELETE_SUCCESS, id };
    };
    const failure = (id, error) => {
      return { type: userConstants.DELETE_FAILURE, id, error };
    };

    return (dispatch) => {
      dispatch(request(id));

      userService
        .delete(id)
        .then((user) => dispatch(success(id)))
        .catch((error) => dispatch(failure(id, error.response.data)));
    };
  };
}

export const userActions = new UserAction();
