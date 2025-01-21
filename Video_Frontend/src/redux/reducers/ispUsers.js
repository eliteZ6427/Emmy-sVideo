import { action_type } from "redux/action_type";


const initialState = {
    ispUsersData: [],
    selectedISPUsersData: [],
    addIspModalStatus: false,
}

const ispUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case action_type.FETCH_ISP_USERS:
            return { ...state, ispUsersData: action.ispUsersData }

        case action_type.FECTCH_ISP_USER_BY_ID:
            return { ...state, selectedISPUsersData: action.selectedISPUserData }

        case action_type.TOOGLE_ISP_ADD_MODAL:
            return { ...state, addIspModalStatus: action.status }
            
        case action_type.UPDATE_ISP_USER:
            let allData = [...state.ispUsersData];
            for (let i = 0; i < allData.length; i++) {
                const user = allData[i];
                if (user.id == action.ispUsersData.id) {
                    allData[i] = action.ispUsersData;
                    break;
                }
            }
            return { ...state, ispUsersData: allData }

        case action_type.DELETE_ISP_USER:
            const ispUserID = action.id;
            let rData = [...state.ispUsersData];
            for (let i = 0; i < rData.length; i++) {
                const item = rData[i];
                if (item.id == ispUserID) {
                    rData.splice(i, 1);
                    break
                }
            }
            return { ...state, ispUsersData: rData }

        default:
            return state
    }
}


export default ispUsersReducer;
