import { action_type } from "redux/action_type";

// ==============================|| COMBINE REDUCER ||============================== //
// **  Initial State
const initialState = {
    invoiceData: [],
    validInvoiceData: [],
}

const invoiceReducer = (state = initialState, action) => {
    switch (action.type) {
        case action_type.FETCH_ALL_INVOICE:
            return { ...state, invoiceData: action.invoiceData }
        case action_type.FETCH_ALL_VALID_INVOICE:
            return { ...state, validInvoiceData: action.validInvoiceData }
        case action_type.ADD_VALID_INVOICE:
            let aValidList = [...state.validInvoiceData];
            aValidList.push(action.invoiceItem);
            return { ...state, validInvoiceData: aValidList }
        default:
            return state
    }
}

export default invoiceReducer;
