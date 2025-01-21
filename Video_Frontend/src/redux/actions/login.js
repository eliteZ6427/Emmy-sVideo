import { alert_error_from_server, alert_invalid_login_info, alert_login_success, alert_now_allowed, alert_tourplace_select_error } from './warningMsgFunc';

import { action_type } from 'redux/action_type';
import useJwt from 'utils/jwt/useJwt';

const config = useJwt.jwtConfig

export const login = (param) => async (dispatch) => {
  try {
    useJwt
      .login(param)
      .then(res => {
        if (res.data.status) {
          const return_data = res.data.data;
          dispatch(alert_login_success());
          localStorage.setItem('userData', JSON.stringify(return_data))
          localStorage.setItem(config.storageUserIDKeyName, return_data.user_id)
          localStorage.setItem(config.storageTokenKeyName, return_data.access)
          localStorage.setItem(config.storageRefreshTokenKeyName, return_data.access)
          setTimeout(function () {
            dispatch({
              type: 'LOGIN',
              data: return_data,
              config,
              [config.storageTokenKeyName]: return_data.access,
              [config.storageRefreshTokenKeyName]: return_data.access
            })
          }, 100);
        }
      })
      .catch(err => {
        console.log(err);
        if (err.response.status === 423) {
          dispatch(alert_now_allowed());
        } else if (err.response.status === 406) {
          dispatch(alert_invalid_login_info());
        } else if(err.response.status === 403) {
          dispatch(alert_tourplace_select_error());
        }
      })
  } catch (error) {
    console.log(error);
    dispatch(alert_error_from_server());
  }
};

export const handleLogout = () => async (dispatch) => {
  // ** Remove user, accessToken & refreshToken from localStorage
  localStorage.removeItem('userData')
  localStorage.removeItem(config.storageUserIDKeyName)
  localStorage.removeItem(config.storageTokenKeyName)
  localStorage.removeItem(config.storageRefreshTokenKeyName)

  setTimeout(function () {
    dispatch({ type: action_type.LOGOUT, [config.storageTokenKeyName]: null, [config.storageRefreshTokenKeyName]: null })
  }, 100);
}
