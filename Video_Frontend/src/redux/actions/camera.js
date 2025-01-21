import {
  alert_delete_success,
  alert_error_from_server,
  alert_forbiden_error,
  alert_register_success,
  alert_session_terminated,
  alert_update_success,
  alert_duplicate_camera,
  alert_restart_success,
  alert_error_connecting_camera,
  alert_error_stop_camera,
  alert_success_stop_camera,
} from './warningMsgFunc';

import { action_type } from 'redux/action_type';
import { handleLogout } from './login';
import useJwt from 'utils/jwt/useJwt';


export const addCamera = (token, param) => async (dispatch) => {
  try {
    useJwt
      .addCamera(token, param)
      .then(res => {
        if (res.data.status) {
          const data = res.data.data;
          dispatch({ type: action_type.ADD_CAMERA, cameraData: data });
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
        } else if (err.response.status === 400) {
          dispatch(alert_duplicate_camera());
        } else {
          dispatch(alert_error_from_server());
        }
      })
  } catch (error) {
    console.log(error)
    dispatch(alert_error_from_server());
  }
};

export const getAllCamera = (token, tourplace) => async (dispatch) => {
  try {
    useJwt
      .getAllCamera(token, tourplace)
      .then(res => {
        if (res.data.status) {
          const data = res.data.data.map(item => ({ ...item, status: false }))
          dispatch({ type: action_type.FETCH_ALL_CAMERA, cameraData: data });
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
export const getCamerasByTourPlace = (token) => async (dispatch) => {
  try {
    useJwt
      .getCamerasByTourPlace(token)
      .then(res => {
        if (res.data.status) {
          const data = res.data.data.map(item => ({ ...item, status: false }))
          dispatch({ type: action_type.FETCH_ALL_CAMERA, cameraData: data });
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

export const getCameraByID = (token, id) => async (dispatch) => {
  try {
    useJwt
      .getCameraByID(token, id)
      .then(res => {
        if (res.data.status)
          dispatch({ type: action_type.FETCH_CAMERA_BY_ID, cameraData: res.data.data });
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

export const deleteCamera = (id, token) => async (dispatch) => {
  try {
    useJwt
      .deleteCamera(id, token)
      .then(res => {
        if (res.data.status) {
          dispatch(alert_delete_success());
          dispatch({ type: action_type.DELETE_CAMERA, camera_data_id: id });
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
export const restartCamera = (id, token) => async (dispatch) => {
  try {
    useJwt
      .restartCamera(id, token)
      .then((res) => {
        if (res.data.status) {
          dispatch(alert_restart_success());
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
}
export const updateCamera = (token, param) => async (dispatch) => {
  try {
    useJwt
      .updateCamera(token, param)
      .then(res => {
        if (res.data.status) {
          dispatch({ type: action_type.UPDATE_CAMERA, cameraData: res.data.data });
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

export const checkCameraStatus = (token, param) => async (dispatch) => {
  try {
    useJwt.
      checkCameraStatus(token, param)
      .then(res => {
        if (res.data.status) {
          const updatedParam = { ...param, status: true };
          dispatch({ type: action_type.UPDATE_CAMERA_STATUS, cameraData: updatedParam });
        }
      }).catch(err => {
        const updatedParam = { ...param, status: false };
        dispatch({ type: action_type.UPDATE_CAMERA_STATUS, cameraData: updatedParam });
      })
  } catch (error) {
    console.log(error)
  }
}

export const createCameraStreamOffer = (token, camera_id) => async (dispatch) => {
  try {
    useJwt.
      createCameraStreamOffer(token, camera_id)
      .then(res => {
        if (res.data.status) {
          return (res.data.data.json())
        }
      }).catch(err => {
        dispatch(alert_error_connecting_camera());
      })
  } catch (error) {
    console.log(error)
  }
}

export const stopCameraStreamOffer = (camera_id, user_id) => async (dispatch) => {
  try {
    useJwt.
      stopCameraStreamOffer(camera_id, user_id)
      .then(res => {
        console.log(res.data)
        if (res.data.status) {
          console.log("Camera Stream Stopped Successfully");
          // dispatch(alert_success_stop_camera());
        }
      }).catch(err => {
        console.log(err)
        dispatch(alert_error_stop_camera());
      })
  } catch (error) {
    console.log(error)
  }
}