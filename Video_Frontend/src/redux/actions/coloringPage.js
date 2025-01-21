import { alert_delete_success, alert_error_from_server, alert_forbiden_error, alert_register_success, alert_session_terminated, alert_update_success } from './warningMsgFunc';

import { action_type } from 'redux/action_type';
import { handleLogout } from './login';
import useJwt from 'utils/jwt/useJwt';

// FETCH_ALL_COLORING_PAGE
// FETCH_COLORING_PAGE_BY_ID
// ADD_COLORING_PAGE
// UPDATE_COLORING_PAGE
// DELETE_COLORING_PAGE

export const getAllColoringPage = (token) => async (dispatch) => {
  try {
    useJwt
      .getAllColoringPage(token)
      .then(res => {
        if (res.data.status)
          dispatch({ type: action_type.FETCH_ALL_COLORING_PAGE, coloringData: res.data.data });
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

export const addColoringPage = (token, param) => async (dispatch) => {
  try {
    useJwt
      .addColoringPage(token, param)
      .then(res => {
        if (res.data.status) {
          const data = res.data.data;
          dispatch({ type: action_type.ADD_COLORING_PAGE, coloringData: data });
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

export const getColoringPageByID = (token, id) => async (dispatch) => {
  try {
    useJwt
      .getColoringPageByID(token, id)
      .then(res => {
        if (res.data.status)
          dispatch({ type: action_type.FETCH_COLORING_PAGE_BY_ID, selectedColoringData: res.data.data });
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

export const updateColoringPage = (token, param) => async (dispatch) => {
  try {
    useJwt
      .updateColoringPage(token, param)
      .then(res => {
        if (res.data.status)
          dispatch({ type: action_type.UPDATE_COLORING_PAGE, coloringData: res.data.data });
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

export const deleteColoringPage = (token, id) => async (dispatch) => {
  try {
    useJwt
      .deleteColoringPage(token, id)
      .then(res => {
        if (res.data.status) {
          dispatch(alert_delete_success());
          dispatch({ type: action_type.DELETE_COLORING_PAGE, coloring_data_id: res.data.data.id });
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