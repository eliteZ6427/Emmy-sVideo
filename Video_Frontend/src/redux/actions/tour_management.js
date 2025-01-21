import { alert_error_from_server, alert_forbiden_error, alert_session_terminated, alert_send_video_success } from './warningMsgFunc';

import { action_type } from 'redux/action_type';
import { handleLogout } from './login';
import useJwt from 'utils/jwt/useJwt';
import { getValidInvoice } from './invoice';


export const uploadClientVideoFile = (token, param) => async (dispatch) => {
    try {
        useJwt
            .uploadClientVideoFile(token, param)
            .then(res => {
                if (res.data.status) {
                    dispatch({ type: action_type.ADD_COMPLETED_VIDEOS,  completed_videos: res.data.data})
                    dispatch(alert_send_video_success());
                    const tourplace_id = param.get('tourplace_id');
                    dispatch(getValidInvoice(token, tourplace_id));
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

export const getAllCompletedVideos = (token, tourplace) => async (dispatch) => {
    try {
        useJwt
            .getAllCompletedVideos(token, tourplace)
            .then(res => {
                if (res.data.status) {
                    dispatch({ type: action_type.FETCH_ALL_COMPLETED_VIDEOS,  completed_videos: res.data.data})                       
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