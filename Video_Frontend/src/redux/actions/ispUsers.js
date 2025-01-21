import { alert_register_success, alert_delete_success, alert_error_from_server, alert_forbiden_error, alert_session_terminated, alert_update_success } from './warningMsgFunc';

import { action_type } from 'redux/action_type';
import { handleLogout } from './login';
import useJwt from 'utils/jwt/useJwt';

export const inviteNewISP = (token, param) => async (dispatch) => {
  try {
    useJwt
      .inviteNewISP(token, param)
      .then(res => {
        if (res.status) {
          dispatch(alert_register_success());
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
}

export const getISPUsers = (token, param) => async (dispatch) => {
  try {
    useJwt
      .getISPUsers(token, param)
      .then(res => {
        if (res.status) {
          dispatch({ type: action_type.FETCH_ISP_USERS, ispUsersData: res.data });
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

export const deleteISPUser = (id, token) => async (dispatch) => {
  try {
    useJwt
      .deleteISPUser(id, token)
      .then(res => {
        if (res.data.status) {
          dispatch({ type: action_type.DELETE_ISP_USER, id: id });
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

export const getISPUserByID = (token, param) => async (dispatch) => {

  try {
    useJwt
      .getISPUserByID(token, param)
      .then(res => {
        if (res.data.status) {
          dispatch({ type: action_type.FECTCH_ISP_USER_BY_ID, selectedISPUserData: res.data.data });
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

export const updateISPUser = (token, param) => async (dispatch) => {
  try {
    useJwt
      .updateISPUser(token, param)
      .then(res => {
        if (res.data.status) {
          dispatch(alert_update_success());
        } else {
          console.log(res)
          dispatch(alert_error_from_server());
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