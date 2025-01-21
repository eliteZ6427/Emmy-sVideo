import { alert_delete_success, alert_error_from_server, alert_forbiden_error, alert_push_notification_success, alert_session_terminated, alert_update_success } from './warningMsgFunc';

import { action_type } from 'redux/action_type';
import { handleLogout } from './login';
import useJwt from 'utils/jwt/useJwt';

export const getAllClients = (token, param) => async (dispatch) => {
  try {
    useJwt
      .getAllClients(token, param)
      .then(res => {
        if (res.status) {
          dispatch({ type: action_type.FETCH_ALL_CLIENTS, clientsData: res.data });
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
export const pushNotificationToClients = (token, param) => async (dispatch) => {
  try {
    useJwt
      .pushNotificationToClients(token, param)
      .then(res => {
        dispatch(alert_push_notification_success());
        // if (res.status) {
        // }
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
export const toogleSelectedClient = (id) => async (dispatch) => {
  dispatch({type: action_type.UPADTE_SELECTEDCLIENTSDATA, id: id});
}
export const deleteClient = (id, token) => async (dispatch) => {
  try {
    useJwt
      .deleteClient(id, token)
      .then(res => {
        if (res.data.status) {
          dispatch({ type: action_type.DELETE_CLIENT, id: id });
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

export const getClientByID = (token, param) => async (dispatch) => {

  try {
    useJwt
      .getClientByID(token, param)
      .then(res => {
        if(res.data.status){
            dispatch({ type: action_type.FECTCH_CLIENT_BY_ID, selectedClientData: res.data.data });
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

export const updateClient = (token, param) => async (dispatch) => {
  try {
    useJwt
      .updateClient(token, param)
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