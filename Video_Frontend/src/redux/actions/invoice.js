import { alert_error_from_server, alert_forbiden_error, alert_session_terminated } from './warningMsgFunc';

import { action_type } from 'redux/action_type';
import { handleLogout } from './login';
import useJwt from 'utils/jwt/useJwt';

export const getAllInvoice = (token, param) => async (dispatch) => {
  try {
    useJwt
      .getAllInvoice(token, param)
      .then(res => {
        const res_data = res.data;
        if (res_data.status) {
          dispatch({ type: action_type.FETCH_ALL_INVOICE, invoiceData: res_data.data });
        }
      })
      .catch(err => {
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

export const getValidInvoice = (token, tourplace) => async (dispatch) => {
  try {
    useJwt
      .getValidInvoice(token, tourplace)
      .then(res => {
        const res_data = res.data;
        if (res_data.status) {
          dispatch({ type: action_type.FETCH_ALL_VALID_INVOICE, validInvoiceData: res_data.data });
        }
      })
      .catch(err => {
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