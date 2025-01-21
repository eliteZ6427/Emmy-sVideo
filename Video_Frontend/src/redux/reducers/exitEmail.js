import { action_type } from "redux/action_type";

// ==============================|| COMBINE REDUCER ||============================== //

// FETCH_ALL_EXIT_EMAIL
// FETCH_EXIT_EMAIL_BY_ID
// ADD_EXIT_EMAIL
// UPDATE_EXIT_EMAIL
// DELETE_EXIT_EMAIL


// **  Initial State
const initialState = {
    exitEmailData: [],
    selectedExitEmailData: [],
}

const exitEmailReducer = (state = initialState, action) => {
    switch (action.type) {
        case action_type.FETCH_ALL_EXIT_EMAIL:
            return { ...state, exitEmailData: action.exitEmailData }

        case action_type.FETCH_EXIT_EMAIL_BY_ID:
            return { ...state, selectedExitEmailData: action.selectedExitEmailData }

        case action_type.ADD_EXIT_EMAIL:
            let aExitEmail = [...state.exitEmailData];
            aExitEmail.push(action.exitEmailData);
            return { ...state, exitEmailData: aExitEmail }

        case action_type.DELETE_EXIT_EMAIL:
            const exit_email_id = action.exit_email_id;
            let rExitEmail = [...state.exitEmailData];
            for (let i = 0; i < rExitEmail.length; i++) {
                const item = rExitEmail[i];
                if (item.id == exit_email_id) {
                    rExitEmail.splice(i, 1);
                    break
                }
            }
            return { ...state, exitEmailData: rExitEmail }

        case action_type.UPDATE_EXIT_EMAIL:
            let allData = [...state.exitEmailData];
            for (let i = 0; i < allData.length; i++) {
                const exitEmailTmp = allData[i];
                if (exitEmailTmp.id == action.exitEmailData.id) {
                    allData[i] = action.exitEmailData;
                    break;
                }
            }
            return { ...state, exitEmailData: allData }

        default:
            return state
    }
}


export default exitEmailReducer;
