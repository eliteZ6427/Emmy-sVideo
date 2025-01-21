import { action_type } from "redux/action_type"

const initialState = {
    available_cameras: [],
    camera_allow: false,
    client_photos: [],
    selected_camera: [],
    permission_status: 'undetermind',
}

const webCamReducer = (state = initialState, action) => {
    switch (action.type) {
        case action_type.ALLOW_CAMERA:
            return { ...state, camera_allow: action.allow_status }
        case action_type.ADD_AVAILABLE_CAMERAS:
            return { ...state, available_cameras: action.available_cameras }
        case action_type.SET_SELECTED_CAMERA:
            return { ...state, selected_camera: action.selected_camera }
        case action_type.SET_PERMISSION_STATUS:
            return { ...state, permission_status: action.permission_status }
        case action_type.ADD_CLIENT_PHOTO:
            let aClientPhotos = [...state.client_photos];
            if (aClientPhotos.some((item) => item.key === action.client_photos.key) !== true) {
                aClientPhotos.push(action.client_photos);
            }
            return { ...state, client_photos: aClientPhotos }
        case action_type.RESET_CLIENT_PHOTO:
            return { ...state, client_photos: [] }
        case action_type.DELETE_CLIENT_PHOTO:
            const photoID = action.photoID;
            let rPhotos = [...state.client_photos];
            for (let i = 0; i < rPhotos.length; i++) {
                const item = rPhotos[i];
                if (item.id == photoID) {
                    rPhotos.splice(i, 1);
                    break
                }
            }
            return { ...state, client_photos: rPhotos }
        case action_type.RESET_PHOTOS:
            return { ...state, client_photos: [] }
        default:
            return state
    }
}

export default webCamReducer;