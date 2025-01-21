import { action_type } from "redux/action_type"

const initialState = {
    selected_user_type: '2'
}

const selectReducer = (state = initialState, action) => {
    switch (action.type) {
        case action_type.SELECTED_USER_TYPE:
            return { ...state, selected_user_type: action.data }
        default:
            return state
    }
}

export default selectReducer;