import { action_type } from "redux/action_type"

const initialState = {
    footer_video: []
}

const footerVideoReducer = (state = initialState, action) => {
    switch (action.type) {
        case action_type.FETCH_FOOTER_VIDEO:
            return { ...state, footer_video: action.footer_video }

        case action_type.ADD_NEW_FOOTER_VIDEO:
            let aVideo = [...state.footer_video];
            aVideo.push(action.footer_video);
            return { ...state, footer_video: aVideo }

        case action_type.DELETE_FOOTER_VIDEO:
            const videoID = action.footer_video;
            let rVideos = [...state.footer_video];
            for (let i = 0; i < rVideos.length; i++) {
                const item = rVideos[i];
                if (item.id == videoID) {
                    rVideos.splice(i, 1);
                    break
                }
            }
            return { ...state, footer_video: rVideos }

        default:
            return state
    }
}

export default footerVideoReducer;