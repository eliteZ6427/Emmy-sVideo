import { alert_error_from_server, alert_register_success, alert_email_verify_success, alert_resend_email_success } from './warningMsgFunc';

import useJwt from 'utils/jwt/useJwt';
import { action_type } from 'redux/action_type';


export const ispregister = (param, token, navigate) => async (dispatch) => {
  const { confirm_password, ...newParam } = param;
  try {
    useJwt
      .ispregister(newParam, token)
      .then(res => {
        if (res.status) {
          dispatch(alert_register_success());
          navigate('/login');
        } else {
          dispatch(alert_error_from_server());
        }
      })
      .catch(err => {
        console.log(err);
        dispatch(alert_error_from_server());
      })
  } catch (error) {
    console.log(error);
    dispatch(alert_error_from_server());
  }
};


export const register = (param, navigate) => async (dispatch) => {
  const { confirm_password, ...newParam } = param;
  try {
    useJwt
      .register(newParam)
      .then(res => {
        if (res.status) {
          dispatch(alert_register_success());
          dispatch({ type: action_type.SET_RESEND_EMAIL,  resend_email: param['email']})
          navigate('/register_success');
        } else {
          dispatch(alert_error_from_server());
        }
      })
      .catch(err => {
        console.log(err);
        dispatch(alert_error_from_server());
      })
  } catch (error) {
    console.log(error);
    dispatch(alert_error_from_server());
  }
};

export const resendVerifyEmail = (email) => async (dispatch) => {
  const param = { email : email};
  try {
    useJwt
      .resendVerifyEmail(param)
      .then(res => {
        if (res.status) {
          dispatch(alert_resend_email_success());
          dispatch({ type: action_type.SET_RESEND_EMAIL,  resend_email: param['email']})
        } else {
          dispatch(alert_error_from_server());
        }
      })
      .catch(err => {
        console.log(err);
        dispatch(alert_error_from_server());
      })
  } catch (error) {
    console.log(error);
    dispatch(alert_error_from_server());
  }
}

export const sendEmailVerification = (param, navigate) => async (dispatch) => {
  try {
    useJwt
      .sendEmailVerification(param)
      .then(res => {
        if (res.status) {
          dispatch(alert_email_verify_success());
          navigate('/login');
        } else {
          dispatch(alert_error_from_server());
        }
      })
      .catch(err => {
        console.log(err);
        dispatch(alert_error_from_server());
      })
  } catch (error) {
    console.log(error);
    dispatch(alert_error_from_server());
  }
};