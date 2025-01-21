import { alert_payment_success, alert_payment_error } from './warningMsgFunc';

import { action_type } from 'redux/action_type';
import { handleLogout } from './login';
import useJwt from 'utils/jwt/useJwt';

export const squarePay = (token, nonce, amount) => async (dispatch) => {
  try {
    useJwt
      .squarePay(token, nonce, amount)
      .then(res => {
        if (res.status) {
            dispatch(alert_payment_success());
        }else{
            dispatch(alert_payment_error());
        }
      })
      .catch(err => {
        console.log(err);
        if (err.response.status === 401) {
          dispatch(alert_session_terminated());
          dispatch(handleLogout());
        } else if (err.response.status === 403) {
          dispatch(alert_forbiden_error());
        } else {
          dispatch(alert_error_from_server());
        }
      })
  } catch (error) {
    dispatch(alert_error_from_server());
  }
};