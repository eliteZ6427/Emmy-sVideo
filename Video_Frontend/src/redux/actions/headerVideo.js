import { alert_delete_success, alert_error_from_server, alert_forbiden_error, alert_session_terminated, alert_upload_success } from './warningMsgFunc';

import { action_type } from 'redux/action_type';
import { handleLogout } from './login';
import useJwt from 'utils/jwt/useJwt';

export const getHeaders = (token, tourplace) => async (dispatch) => {
  try {
    useJwt
      .getHeaders(token, tourplace)
      .then(res => {
        if (res.status) {
          dispatch({ type: action_type.FETCH_VIDEO, header_video: res.data.data });
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

export const addHeader = (data) => async (dispatch) => {
  dispatch({ type: action_type.ADD_NEW_VIDEO, header_video: data });
  dispatch(alert_upload_success());
};


export const removeHeader = (id, token) => async (dispatch) => {
  try {
    useJwt
      .deleteHeaders(id, token)
      .then(res => {
        if (res.data.status) {
          dispatch({ type: action_type.DELETE_NEW_VIDEO, header_video: id });
          dispatch(alert_delete_success());
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