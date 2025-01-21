import { action_type } from "redux/action_type";

const initialState = {
    resend_email: '',
}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case action_type.SET_RESEND_EMAIL:
            return { ...state, resend_email: action.resend_email }

        default:
            return state
    }
}


export default registerReducer;
