import { action_type } from "redux/action_type";

// ==============================|| COMBINE REDUCER ||============================== //
// **  Initial State
const initialState = {
    completed_videos: [],
}

const tourReducer = (state = initialState, action) => {
    switch (action.type) {
        case action_type.FETCH_ALL_COMPLETED_VIDEOS:
            return { ...state, completed_videos: action.completed_videos }
        case action_type.ADD_COMPLETED_VIDEOS:
            let aVideo = [...state.completed_videos];
            aVideo.push(action.completed_videos);
            return { ...state, completed_videos: aVideo }
            
        default:
            return state
    }
}

export default tourReducer;
