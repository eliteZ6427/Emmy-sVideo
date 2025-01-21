import { alert_delete_success, alert_error_from_server, alert_forbiden_error, alert_session_terminated, alert_update_success } from './warningMsgFunc';

import { action_type } from 'redux/action_type';
import { handleLogout } from './login';
import useJwt from 'utils/jwt/useJwt';

export const getCustomers = (token, param) => async (dispatch) => {
  try {
    useJwt
      .getCustomers(token, param)
      .then(res => {
        if (res.status) {
          dispatch({ type: action_type.FETCH_CUSTOMERS, customerTempData: res.data });
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

export const deleteCustomer = (id, token) => async (dispatch) => {
  try {
    useJwt
      .deleteCustomer(id, token)
      .then(res => {
        if (res.data.status) {
          dispatch({ type: action_type.DELETE_CUSTOMER, customer_id: id });
          dispatch(alert_delete_success());
        }
      })
      .catch(err => {
        if (err.response.status === 401) {
          dispatch(alert_session_terminated());
          dispatch(handleLogout());
        } else if (err.response.status === 403) {
          dispatch(alert_session_terminated());
        } else {
          dispatch(alert_error_from_server());
        }
      })
  } catch (error) {
    dispatch(alert_error_from_server());
  }
};

export const getCustomerByID = (token, param) => async (dispatch) => {

  try {
    useJwt
      .getCustomerByID(token, param)
      .then(res => {
        const address = res.data.street;
        if (address) {
          const addressArray = address.split("_");
          const street = addressArray[0];
          const city = addressArray[1];
          const state = addressArray[2];
          const country = addressArray[3];
          const zipcode = addressArray[4];
          res.data = { ...res.data, street, city, state, country, zipcode }
          dispatch({ type: action_type.FETCH_CUSTOMER_BY_ID, selectedCustomerData: res.data });
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

export const updateCustomer = (token, param) => async (dispatch) => {
  try {
    useJwt
      .updateCustomer(token, param)
      .then(res => {
        if (res.data.status == "success") {
          dispatch(alert_update_success());
          return true;
        } else {
          console.log(res)
          dispatch(alert_error_from_server());
          return false;
        }
      })
      .catch(err => {
        console.log(err);
        if (err.response.status === 401) {
          dispatch(alert_session_terminated());
          dispatch(handleLogout());
        } else if (err.response.status === 403) {
          dispatch(alert_session_terminated());
        } else {
          dispatch(alert_error_from_server());
        }
        return false;
      })
  } catch (error) {
    console.log(error);
    dispatch(alert_error_from_server());
    return false;
  }
};