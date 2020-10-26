import { combineReducers } from 'redux';
import { courseReducer } from './course.reducer';
import { alertReducer } from './alert.reducer';
import { authenticationReducer } from './authentication.reducer';
import { registrationReducer } from './registration.reducer';
import { usersReducer } from './users.reducer';

export const rootReducer = combineReducers({
  courseReducer,
  alertReducer,
  authenticationReducer,
  registrationReducer,
  usersReducer,
});
