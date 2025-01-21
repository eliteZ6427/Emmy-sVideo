import { alert_error_from_server, alert_forbiden_error, alert_session_terminated, alert_register_success, alert_update_success, alert_delete_success } from './warningMsgFunc';

import { action_type } from 'redux/action_type';
import { handleLogout } from './login';
import useJwt from 'utils/jwt/useJwt';

export const getTourplaceForISP = (token) => async (dispatch) => {
    try {
        useJwt
            .getTourplaceForISP(token)
            .then(res => {
                if (res.data.status) {
                    const data = res.data.data;
                    dispatch({ type: action_type.FETCH_ALL_TOURPLACE, tourplaceData: data });
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
}

export const getTourplaceByISP = (token) => async (dispatch) => {
    try {
        useJwt
            .getTourplaceByISP(token)
            .then(res => {
                if (res.data.status) {
                    const data = res.data.data;
                    dispatch({ type: action_type.FETCH_ALL_TOURPLACE, tourplaceData: data });
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
}

export const getAllTourPlace = () => async (dispatch) => {
    try {
        useJwt
            .getAllTourPlace()
            .then(res => {
                if (res.data.status) {
                    const data = res.data.data
                    dispatch({ type: action_type.FETCH_ALL_TOURPLACE, tourplaceData: data });
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

export const getTourPlace = (token) => async (dispatch) => {
    try {
        useJwt
            .getTourPlace(token)
            .then(res => {
                if (res.data.status) {
                    dispatch({ type: action_type.FETCH_ALL_TOURPLACE, tourplaceData: data });
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

export const getTourplaceByID = (token, id) => async (dispatch) => {
    try {
        useJwt
            .getTourplaceByID(token, id)
            .then(res => {
                if(res.data.status){
                    dispatch({ type: action_type.FETCH_TOURPLACE_BY_ID, tourplaceData: res.data.data });
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

export const addTourPlace = (token, param) => async (dispatch) => {
    try {
        useJwt
            .addTourPlace(token, param)
            .then(res => {
                if (res.data.status) {
                    const data = res.data.data;
                    dispatch({ type: action_type.ADD_TOURPLACE, tourplaceData: data });
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

export const deleteTourplace = (id, token) => async (dispatch) => {
    try {
        useJwt
            .deleteTourplace(id, token)
            .then(res => {
                if (res.data.status) {
                    dispatch(alert_delete_success());
                    dispatch({ type: action_type.DELETE_TOURPLACE, tourplace_data_id: id });
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


export const updateTourplace = (token, param) => async (dispatch) => {
    try {
        useJwt
            .updateTourplace(token, param)
            .then(res => {
                if (res.data.status) {
                    dispatch({ type: action_type.UPDATE_TOURPLACE, tourplaceData: res.data.data });
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