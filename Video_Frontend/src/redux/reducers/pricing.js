import { action_type } from "redux/action_type";

// ==============================|| COMBINE REDUCER ||============================== //
// **  Initial State
const initialState = {
    pricingData: [],
    selectedPricingData: [],
    selectPricing: -1,
    pricingUpdateModalStatus: false,
    pricingAddModalStatus: false,
    selectForUpdatePricing: -1,
    selectedPriceForBuy: -1,
    paymodalStatus: false,
}

const pricingReducer = (state = initialState, action) => {
    switch (action.type) {
        case action_type.SET_SELECT_PRICE_FOR_BUY:
            return {...state, selectedPriceForBuy: action.price_id}

        case action_type.SHOW_PAY_MODAL:
            return {...state, paymodalStatus: action.status}

        case action_type.FETCH_ALL_PRICING:
            return { ...state, pricingData: action.pricingData }

        case action_type.FETCH_PRICING_BY_ID:
            return { ...state, selectedPricingData: action.pricingData }

        case action_type.ADD_PRICING:
            let aPricing = [...state.pricingData];
            aPricing.push(action.pricingData);
            return { ...state, pricingData: aPricing }

        case action_type.DELETE_PRICING:
            const pricing_id = action.pricing_data_id;
            let rPricing = [...state.pricingData];
            for (let i = 0; i < rPricing.length; i++) {
                const item = rPricing[i];
                if (item.id == pricing_id) {
                    rPricing.splice(i, 1);
                    break
                }
            }
            return { ...state, pricingData: rPricing }

        case action_type.UPDATE_PRICING:
            return {
                ...state,
                pricingData: state.pricingData.map(pricingDataTmp =>
                    pricingDataTmp.id === action.pricingData.id
                        ? { ...pricingDataTmp, ...action.pricingData }
                        : pricingDataTmp
                )
            };
        case action_type.UPDATE_PRICING_STATUS:
            return {
                ...state,
                pricingData: state.pricingData.map(pricingDataTmp => {
                    if (
                        pricingDataTmp.id === action.pricingData.id &&
                        pricingDataTmp.level === action.pricingData.level &&
                        pricingDataTmp.title === action.pricingData.title &&
                        pricingDataTmp.price === action.pricingData.price &&
                        pricingDataTmp.record_time === action.pricingData.record_time &&
                        pricingDataTmp.record_limit === action.pricingData.record_limit &&
                        pricingDataTmp.snapshot_limit === action.pricingData.snapshot_limit 
                    ) {
                        return { ...pricingDataTmp, ...action.pricingData };
                    }
                    return pricingDataTmp;
                })
            };
        case action_type.PRICING_UPDATE_MODAL_STATUS:
            return { ...state, pricingUpdateModalStatus: action.status }
        case action_type.PRICING_ADD_MODAL_STATUS:
            return { ...state, pricingAddModalStatus: action.status }
        case action_type.SELECT_FOR_UPDATE_PRICING:
            return { ...state, selectForUpdatePricing: action.pricing_id }
        default:
            return state
    }
}

export default pricingReducer;
