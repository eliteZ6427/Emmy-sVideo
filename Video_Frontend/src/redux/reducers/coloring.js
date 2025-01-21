import { action_type } from "redux/action_type";

// ==============================|| COMBINE REDUCER ||============================== //

// FETCH_ALL_COLORING_PAGE
// FETCH_COLORING_PAGE_BY_ID
// ADD_COLORING_PAGE
// UPDATE_COLORING_PAGE
// DELETE_COLORING_PAGE

// **  Initial State
const initialState = {
    coloringData: [],
    selectedColoringData: [],
}

const coloringReducer = (state = initialState, action) => {
    switch (action.type) {
        case action_type.FETCH_ALL_COLORING_PAGE:
            return { ...state, coloringData: action.coloringData }

        case action_type.FETCH_COLORING_PAGE_BY_ID:
            return { ...state, selectedColoringData: action.selectedColoringData }

        case action_type.ADD_COLORING_PAGE:
            let aColoring = [...state.coloringData];
            aColoring.push(action.coloringData);
            return { ...state, coloringData: aColoring }

        case action_type.DELETE_COLORING_PAGE:
            const coloring_id = action.coloring_data_id;
            let rColoring = [...state.coloringData];
            for (let i = 0; i < rColoring.length; i++) {
                const item = rColoring[i];
                if (item.id == coloring_id) {
                    rColoring.splice(i, 1);
                    break
                }
            }
            return { ...state, coloringData: rColoring }

        case action_type.UPDATE_COLORING_PAGE:
            let allData = [...state.coloringData];
            for (let i = 0; i < allData.length; i++) {
                const coloringDataTmp = allData[i];
                if (coloringDataTmp.id == action.coloringData.id) {
                    allData[i] = action.coloringData;
                    break;
                }
            }
            return { ...state, coloringData: allData }

        default:
            return state
    }
}


export default coloringReducer;
