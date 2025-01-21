import { action_type } from "redux/action_type"

const initialState = {
    header_video: []
}

const headerVideoReducer = (state = initialState, action) => {
    switch (action.type) {
        case action_type.FETCH_VIDEO:
            return { ...state, header_video: action.header_video }

        case action_type.ADD_NEW_VIDEO:
            let aVideo = [...state.header_video];
            aVideo.push(action.header_video);
            return { ...state, header_video: aVideo }

        case action_type.DELETE_NEW_VIDEO:
            const videoID = action.header_video;
            let rVideos = [...state.header_video];
            for (let i = 0; i < rVideos.length; i++) {
                const item = rVideos[i];
                if (item.id == videoID) {
                    rVideos.splice(i, 1);
                    break
                }
            }
            return { ...state, header_video: rVideos }

        default:
            return state
    }
}

export default headerVideoReducer;