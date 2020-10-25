import { userConstants } from 'config/constants/user.constants';
import { history } from 'config/helper/history';
import { userService } from 'services/user.service';
import { alertActions } from './alert.actions';

const signin = (username, password, remember) => {
  const request = (user) => ({ type: userConstants.SIGNIN_REQUEST, user });
  const success = (user) => ({ type: userConstants.SIGNIN_SUCCESS, user });
  const failure = (error) => ({ type: userConstants.SIGNIN_FAILURE, error });

  return (dispatch) => {
    dispatch(request({ username }));

    userService.signin(username, password, remember).then(
      (user) => {
        dispatch(success(user));
        history.push('/');
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      },
    );
  };
};

const signout = () => {
  userService.signout();
  return { type: userConstants.SIGNOUT };
};

const signup = (user) => {
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
    dispatch(request(user));

    userService.signup(user).then(
      (user) => {
        dispatch(success());
        history.push('/login');
        dispatch(alertActions.success('Registration successful'));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      },
    );
  };
};

const getAll = () => {
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

    userService.getAll().then(
      (users) => dispatch(success(users)),
      (error) => dispatch(failure(error.toString())),
    );
  };
};

const _delete = (id) => {
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

    userService.delete(id).then(
      (user) => dispatch(success(id)),
      (error) => dispatch(failure(id, error.toString())),
    );
  };
};

export const userActions = {
  signin,
  signout,
  signup,
  getAll,
  delete: _delete,
};
