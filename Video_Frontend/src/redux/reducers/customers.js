import { action_type } from "redux/action_type";

// ==============================|| COMBINE REDUCER ||============================== //
// **  Initial State
const initialState = {
    customerData: [],
    selectedCustomerData: []
}

const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case action_type.FETCH_CUSTOMERS:
            return { ...state, customerData: action.customerTempData }

        case action_type.FETCH_CUSTOMER_BY_ID:
            return { ...state, selectedCustomerData: action.selectedCustomerData }

        case action_type.ADD_CUSTOMER:
            let aCustomers = [...state.customerData];
            aCustomers.push(action.customerTempData);
            return { ...state, customerData: aCustomers }

        case action_type.UPDATE_CUSTOMER:
            let allData = [...state.customerData];
            for (let i = 0; i < allData.length; i++) {
                const user = allData[i];
                if (user.id == action.customerTempData.id) {
                    allData[i] = action.customerTempData;
                    break;
                }
            }
            return { ...state, customerData: allData }

        case action_type.DELETE_CUSTOMER:
            const customerID = action.customer_id;
            let rCustomers = [...state.customerData];
            for (let i = 0; i < rCustomers.length; i++) {
                const item = rCustomers[i];
                if (item.id == customerID) {
                    rCustomers.splice(i, 1);
                    break
                }
            }
            return { ...state, customerData: rCustomers }

        default:
            return state
    }
}


export default customerReducer;
