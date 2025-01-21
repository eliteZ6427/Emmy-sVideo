import { alert_paid_success, alert_paid_failed, alert_paid_pending, alert_error_from_server, alert_forbiden_error, alert_session_terminated } from './warningMsgFunc';

import { handleLogout } from './login';
import useJwt from 'utils/jwt/useJwt';
import payment_type from 'utils/payment_type';
import { action_type } from 'redux/action_type';

export const pay = (token, param) => async (dispatch) => {
    try {
        useJwt
            .pay(token, param)
            .then(res => {
                const res_data = res.data;
                if (res_data.status) {
                    switch (res_data.data.status) {
                        case payment_type.PENDING:
                        case payment_type.APPROVED:
                            dispatch(alert_paid_pending());
                            break;
                        case payment_type.COMPLETED:
                            dispatch({type: action_type.ADD_VALID_INVOICE, invoiceItem: res_data.data});
                            dispatch(alert_paid_success());
                            break;
                        case payment_type.CANCELED:
                        case payment_type.VOIDED:
                        case payment_type.REFUNDED:
                        case payment_type.DECLINED:
                        case payment_type.INSUFFCIENT_FUNDS:
                        case payment_type.CARD_EXPIRED:
                        case payment_type.CARD_DECLINED:
                        case payment_type.INVALID_CARD:
                        case payment_type.FRAUD_DETECTED:
                        case payment_type.UNKNOWN:
                            dispatch(alert_paid_failed(res.message));
                            break;
                        default:
                            break;
                    }
                } else {
                    dispatch(alert_paid_failed("Failed Payment!"));
                }
                dispatch({ type: action_type.SET_SELECT_PRICE_FOR_BUY, price_id: -1 });
                dispatch({ type: action_type.SHOW_PAY_MODAL, status: false });
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
                dispatch({ type: action_type.SET_SELECT_PRICE_FOR_BUY, price_id: -1 });
                dispatch({ type: action_type.SHOW_PAY_MODAL, status: false });
            })
    } catch (error) {
        dispatch(alert_error_from_server());
    }
};
