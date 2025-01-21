import { action_type } from "redux/action_type";


const initialState = {
    clientsData: [],
    selectedClientData: [],
    selectedClientsData: [],
}

const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case action_type.FETCH_ALL_CLIENTS:
            return { ...state, clientsData: action.clientsData }

        case action_type.FECTCH_CLIENT_BY_ID:
            return { ...state, selectedClientData: action.selectedClientData }

        case action_type.UPADTE_SELECTEDCLIENTSDATA:
            let allSelectedData = [...state.selectedClientsData];
            const clientExists = allSelectedData.some(client_id => client_id === action.id);
            if (clientExists) {
                allSelectedData = allSelectedData.filter(client_id => client_id !== action.id);
            } else {
                allSelectedData.push(action.id);
            }
            return { ...state, selectedClientsData: allSelectedData };

        case action_type.UPDATE_CLIENT:
            let allData = [...state.clientsData];
            for (let i = 0; i < allData.length; i++) {
                const user = allData[i];
                if (user.id == action.clientData.id) {
                    allData[i] = action.clientData;
                    break;
                }
            }
            return { ...state, clientsData: allData }

        case action_type.DELETE_CLIENT:
            const clientID = action.id;
            let rData = [...state.clientsData];
            for (let i = 0; i < rData.length; i++) {
                const item = rData[i];
                if (item.id == clientID) {
                    rData.splice(i, 1);
                    break
                }
            }
            return { ...state, clientsData: rData }

        default:
            return state
    }
}


export default clientReducer;
