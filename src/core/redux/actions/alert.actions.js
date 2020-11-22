import { alertConstants } from 'core/config/constants/alert.constants';

const success = (payload) => ({ type: alertConstants.SUCCESS, payload });
const error = (payload) => ({ type: alertConstants.ERROR, payload });
const clear = () => ({ type: alertConstants.CLEAR });

export const alertActions = {
  success,
  error,
  clear,
};
