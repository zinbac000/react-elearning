import { message } from 'antd';
import { userConstants } from 'core/config/constants/user.constants';
import { userService } from 'core/services/user.service';
import { alertActions } from './alert.actions';

const signin = ({ username, password, remember }) => {
  const success = (payload) => ({
    type: userConstants.SIGNIN_SUCCESS,
    payload,
  });

  const failure = (error) => ({
    type: userConstants.SIGNIN_FAILURE,
    error,
  });

  return (dispatch) => {
    userService
      .signin(username, password, remember)
      .then((user) => {
        dispatch(success(user));
        message.success({ content: 'Login successful' });
      })
      .catch((error) => {
        dispatch(failure(error.response?.data));
        message.error({ content: error.response?.data });
      });
  };
};

const signout = () => {
  userService.signout();
  return { type: userConstants.SIGNOUT };
};

const signup = (
  { username, password, fullname, phone, email },
  handleToSignin,
) => {
  const request = (user) => ({ type: userConstants.SIGNUP_REQUEST, user });

  const success = (user) => ({ type: userConstants.SIGNUP_SUCCESS, user });

  const failure = (error) => ({ type: userConstants.SIGNUP_FAILURE, error });

  return (dispatch) => {
    dispatch(request(username));

    userService
      .signup(username, password, fullname, phone, email)
      .then((user) => {
        dispatch(success(user));
        dispatch(alertActions.success({ message: 'Registration successful' }));
        handleToSignin();
      })
      .catch((error) => {
        dispatch(failure(error.response.data));
        dispatch(alertActions.error({ message: error.response.data }));
      });
  };
};

const getInfo = () => {
  const request = () => ({
    type: userConstants.GETINFO_REQUEST,
  });
  const success = (payload) => ({
    type: userConstants.GETINFO_SUCCESS,
    payload,
  });
  const failure = (error) => ({ type: userConstants.GETINFO_FAILURE, error });
  return (dispatch) => {
    dispatch(request());

    userService
      .getInfo()
      .then((user) => dispatch(success(user)))
      .catch((error) => dispatch(failure(error.response.data)));
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

    userService
      .getAll()
      .then((users) => dispatch(success(users)))
      .catch((error) => dispatch(failure(error.response.data)));
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

    userService
      .delete(id)
      .then((user) => dispatch(success(id)))
      .catch((error) => dispatch(failure(id, error.response.data)));
  };
};

export const userActions = {
  signin,
  signout,
  signup,
  getInfo,
  getAll,
  _delete,
};
