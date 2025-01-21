import { action_type } from "redux/action_type"

const initialState = {
    snack_bar_open: false,
    snack_bar_type: 'success',
    snack_bar_text: ''
}

const selectReducer = (state = initialState, action) => {
    switch (action.type) {
        case action_type.ALERT_SNACK_BAR:
            return { ...state, snack_bar_open: action.snack_bar_open, snack_bar_type: action.snack_bar_type, snack_bar_text: action.snack_bar_text }
        default:
            return state
    }
}

export default selectReducer;