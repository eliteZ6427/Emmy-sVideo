import { action_type } from "redux/action_type";

// ==============================|| COMBINE REDUCER ||============================== //
// **  Initial State
const initialState = {
    tourplaceData: [],
    selectedTourplaceData: [],
    selectTourplace: -1,
    tourplaceUpdateModalStatus: false,
    tourplaceAddModalStatus: false,
    selectForUpdateTourplace: -1,
}

const tourplaceReducer = (state = initialState, action) => {
    switch (action.type) {
        case action_type.FETCH_ALL_TOURPLACE:
            return { ...state, tourplaceData: action.tourplaceData }

        case action_type.FETCH_TOURPLACE_BY_ID:
            return { ...state, selectedTourplaceData: action.tourplaceData }

        case action_type.ADD_TOURPLACE:
            let aTourplace = [...state.tourplaceData];
            aTourplace.push(action.tourplaceData);
            return { ...state, tourplaceData: aTourplace }

        case action_type.DELETE_TOURPLACE:
            const tourplace_id = action.tourplace_data_id;
            let rTourplace = [...state.tourplaceData];
            for (let i = 0; i < rTourplace.length; i++) {
                const item = rTourplace[i];
                if (item.id == tourplace_id) {
                    rTourplace.splice(i, 1);
                    break
                }
            }
            return { ...state, tourplaceData: rTourplace }

        case action_type.UPDATE_TOURPLACE:
            return {
                ...state,
                tourplaceData: state.tourplaceData.map(tourplaceDataTmp =>
                    tourplaceDataTmp.id === action.tourplaceData.id
                        ? { ...tourplaceDataTmp, ...action.tourplaceData }
                        : tourplaceDataTmp
                )
            };
        case action_type.UPDATE_TOURPLACE_STATUS:
            return {
                ...state,
                tourplaceData: state.tourplaceData.map(tourplaceDataTmp => {
                    if (
                        tourplaceDataTmp.id === action.tourplaceData.id &&
                        tourplaceDataTmp.place_name === action.tourplaceData.place_name &&
                        tourplaceDataTmp.status === action.tourplaceData.status
                    ) {
                        return { ...tourplaceDataTmp, ...action.tourplaceData };
                    }
                    return tourplaceDataTmp;
                })
            };
        case action_type.TOURPLACE_UPDATE_MODAL_STATUS:
            return { ...state, tourplaceUpdateModalStatus: action.status }
        case action_type.TOURPLACE_ADD_MODAL_STATUS:
            return { ...state, tourplaceAddModalStatus: action.status }
        case action_type.SELECT_FOR_UPDATE_TOURPLACE:
            return { ...state, selectForUpdateTourplace: action.tourplace_id }
        default:
            return state
    }
}

export default tourplaceReducer;
