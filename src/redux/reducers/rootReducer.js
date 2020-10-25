import { combineReducers } from 'redux';
import { course } from './course.reducer';
import { alert } from './alert.reducer';
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';

export const rootReducer = combineReducers({
  course,
  alert,
  authentication,
  registration,
  users,
});
