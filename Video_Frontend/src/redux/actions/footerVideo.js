import { alert_delete_success, alert_error_from_server, alert_forbiden_error, alert_session_terminated, alert_upload_success } from './warningMsgFunc';

import { action_type } from 'redux/action_type';
import { handleLogout } from './login';
import useJwt from 'utils/jwt/useJwt';

export const getFooters = (token, tourplace) => async (dispatch) => {
  try {
    useJwt
      .getFooters(token, tourplace)
      .then(res => {
        if (res.status) {
          dispatch({ type: action_type.FETCH_FOOTER_VIDEO, footer_video: res.data.data });
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

export const addFooter = (data) => async (dispatch) => {
  dispatch({ type: action_type.ADD_NEW_FOOTER_VIDEO, footer_video: data });
  dispatch(alert_upload_success());
};


export const removeFooter = (id, token) => async (dispatch) => {
  try {
    useJwt
      .deleteFooters(id, token)
      .then(res => {
        if (res.data.status) {
          dispatch({ type: action_type.DELETE_FOOTER_VIDEO, footer_video: id });
          dispatch(alert_delete_success());
        }
      })
      .catch(err => {
        console.log(err);
        if (err.response.status === 401) {
          dispatch(alert_session_terminated());
          dispatch(handleLogout());
        } else if (err.response.status === 403) {
          console.log(err.response)
          dispatch(alert_forbiden_error());
        } else {
          dispatch(alert_error_from_server());
        }
      })
  } catch (error) {
    dispatch(alert_error_from_server());
  }
};