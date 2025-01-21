import { action_type } from "redux/action_type";

// ==============================|| COMBINE REDUCER ||============================== //
// **  Initial State
const initialState = {
    cameraData: [],
    selectedCameraData: [],
    selectCamera: -1,
    cameraUpdateModalStatus: false,
    cameraAddModalStatus: false,
    selectForUpdateCamera: -1,
}

const cameraReducer = (state = initialState, action) => {
    switch (action.type) {
        case action_type.FETCH_ALL_CAMERA:
            return { ...state, cameraData: action.cameraData }

        case action_type.FETCH_CAMERA_BY_ID:
            return { ...state, selectedCameraData: action.cameraData }

        case action_type.ADD_CAMERA:
            let aCamera = [...state.cameraData];
            aCamera.push(action.cameraData);
            return { ...state, cameraData: aCamera }

        case action_type.DELETE_CAMERA:
            const camera_id = action.camera_data_id;
            let rCamera = [...state.cameraData];
            for (let i = 0; i < rCamera.length; i++) {
                const item = rCamera[i];
                if (item.id == camera_id) {
                    rCamera.splice(i, 1);
                    break
                }
            }
            return { ...state, cameraData: rCamera }

        case action_type.UPDATE_CAMERA:
            return {
                ...state,
                cameraData: state.cameraData.map(cameraDataTmp =>
                    cameraDataTmp.id === action.cameraData.id
                        ? { ...cameraDataTmp, ...action.cameraData }
                        : cameraDataTmp
                )
            };
        case action_type.UPDATE_CAMERA_STATUS:
            return {
                ...state,
                cameraData: state.cameraData.map(cameraDataTmp => {
                    if (
                        cameraDataTmp.id === action.cameraData.id &&
                        cameraDataTmp.camera_name === action.cameraData.camera_name &&
                        cameraDataTmp.rstp_url === action.cameraData.rstp_url
                    ) {
                        return { ...cameraDataTmp, ...action.cameraData };
                    }
                    return cameraDataTmp;
                })
            };
        case action_type.CAMERA_UPDATE_MODAL_STATUS:
            return { ...state, cameraUpdateModalStatus: action.status }
        case action_type.CAMERA_ADD_MODAL_STATUS:
            return { ...state, cameraAddModalStatus: action.status }
        case action_type.SELECT_FOR_UPDATE_CAMERA:
            return { ...state, selectForUpdateCamera: action.camera_id }
        default:
            return state
    }
}

export default cameraReducer;
