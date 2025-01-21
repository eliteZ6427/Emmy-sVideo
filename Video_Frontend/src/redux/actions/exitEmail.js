import { alert_delete_success, alert_error_from_server, alert_forbiden_error, alert_register_success, alert_session_terminated, alert_update_success } from './warningMsgFunc';

import { action_type } from 'redux/action_type';
import { handleLogout } from './login';
import useJwt from 'utils/jwt/useJwt';

// FETCH_ALL_EXIT_EMAIL
// FETCH_EXIT_EMAIL_BY_ID
// ADD_EXIT_EMAIL
// UPDATE_EXIT_EMAIL
// DELETE_EXIT_EMAIL

export const getAllExitEmail = (token) => async (dispatch) => {
  try {
    useJwt
      .getAllExitEmail(token)
      .then(res => {
        if (res.data.status)
          dispatch({ type: action_type.FETCH_ALL_EXIT_EMAIL, exitEmailData: res.data.data });
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

export const addExitEmail = (token, param) => async (dispatch) => {
  try {
    useJwt
      .addExitEmail(token, param)
      .then(res => {
        if (res.data.status) {
          const data = res.data.data;
          dispatch({ type: action_type.ADD_EXIT_EMAIL, exitEmailData: data });
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

export const getExitEmailByID = (token, id) => async (dispatch) => {
  try {
    useJwt
      .getExitEmailByID(token, id)
      .then(res => {
        if (res.data.status)
          dispatch({ type: action_type.FETCH_EXIT_EMAIL_BY_ID, selectedExitEmailData: res.data.data });
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

export const updateExitEmail = (token, param) => async (dispatch) => {
  try {
    useJwt
      .updateExitEmail(token, param)
      .then(res => {
        if (res.data.status)
          dispatch({ type: action_type.UPDATE_EXIT_EMAIL, exitEmailData: res.data.data });
        dispatch(alert_update_success());
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

export const deleteExitEmail = (token, id) => async (dispatch) => {
  try {
    useJwt
      .deleteExitEmail(token, id)
      .then(res => {
        if (res.data.status) {
          dispatch(alert_delete_success());
          dispatch({ type: action_type.DELETE_EXIT_EMAIL, exit_email_id: res.data.data.id });
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