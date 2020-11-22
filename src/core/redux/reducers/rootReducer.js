import { combineReducers } from 'redux';
import { courseReducer } from './course.reducer';
import { alertReducer } from './alert.reducer';
import { authenticationReducer } from './authentication.reducer';
import { registrationReducer } from './registration.reducer';
import { userReducer } from './user.reducer';

export const rootReducer = combineReducers({
  courseReducer,
  alertReducer,
  authenticationReducer,
  registrationReducer,
  userReducer,
});
