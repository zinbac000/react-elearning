import { alertConstants } from 'config/constants/alert.constants';

class AlertActions {
  success = (message) => ({ type: alertConstants.SUCCESS, message });
  error = (message) => ({ type: alertConstants.ERROR, message });
  clear = () => ({ type: alertConstants.CLEAR });
}

export const alertActions = new AlertActions();
