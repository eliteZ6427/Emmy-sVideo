import { alert_delete_success, alert_error_from_server, alert_forbiden_error, alert_register_success, alert_session_terminated, alert_update_success } from './warningMsgFunc';

import { action_type } from 'redux/action_type';
import { handleLogout } from './login';
import useJwt from 'utils/jwt/useJwt';


export const addPricing = (token, param) => async (dispatch) => {
  try {
    useJwt
      .addPricing(token, param)
      .then(res => {
        const res_data = res.data;
        if (res_data.status) {
          dispatch({ type: action_type.ADD_PRICING, pricingData: res_data.data });
          dispatch(alert_register_success());
        }
      })
      .catch(err => {
        console.log(err)
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
    console.log(error)
    dispatch(alert_error_from_server());
  }
};

export const getAllPricing = (token, tourplace) => async (dispatch) => {
  try {
    useJwt
      .getAllPricing(token, tourplace)
      .then(res => {
        if (res.data.status) {
          const data = res.data.data.sort((a, b) => a.price - b.price);
          dispatch({ type: action_type.FETCH_ALL_PRICING, pricingData: data });
        }
      })
      .catch(err => {
        console.log(err)
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

export const getPricingByID = (token, id) => async (dispatch) => {
  try {
    useJwt
      .getPricingByID(token, id)
      .then(res => {
        if (res.data.status)
          dispatch({ type: action_type.FETCH_PRICING_BY_ID, pricingData: res.data.data });
      })
      .catch(err => {
        console.log(err)
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

export const deletePricing = (id, token) => async (dispatch) => {
  try {
    useJwt
      .deletePricing(id, token)
      .then(res => {
        if (res.data.status) {
          dispatch(alert_delete_success());
          dispatch({ type: action_type.DELETE_PRICING, pricing_data_id: id });
        }
      })
      .catch(err => {
        console.log(err.response.status);
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

export const updatePricing = (token, param) => async (dispatch) => {
  try {
    useJwt
      .updatePricing(token, param)
      .then(res => {
        if (res.data.status){
          dispatch({ type: action_type.UPDATE_PRICING, pricingData: res.data.data });
          dispatch(alert_update_success());
        }
      })
      .catch(err => {
        console.log(err)
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
