import { action_type } from "redux/action_type";

// ==============================|| COMBINE REDUCER ||============================== //
// **  Initial State
const initialState = {
    voiceData: [],
    selectedVoiceData: [],
}

const voiceReducer = (state = initialState, action) => {
    switch (action.type) {
        case action_type.FETCH_ALL_CAMERA_VOICE:
            return { ...state, voiceData: action.voiceData }

        case action_type.FETCH_CAMERA_VOICE_BY_ID:
            return { ...state, selectedVoiceData: action.selectedVoiceData }

        case action_type.ADD_CAMERA_VOICE:
            let aVoice = [...state.voiceData];
            aVoice.push(action.voiceData);
            return { ...state, voiceData: aVoice }

        case action_type.DELETE_CAMERA_VOICE:
            const voice_id = action.voice_data_id;
            let rVoice = [...state.voiceData];
            for (let i = 0; i < rVoice.length; i++) {
                const item = rVoice[i];
                if (item.camera_voice_data.id == voice_id) {
                    rVoice.splice(i, 1);
                    break
                }
            }
            return { ...state, voiceData: rVoice }

        case action_type.UPDATE_CAMERA_VOICE:
            let allData = [...state.voiceData];
            for (let i = 0; i < allData.length; i++) {
                const voiceDataTmp = allData[i];
                if (voiceDataTmp.camera_voice_data.id == action.voiceData.camera_voice_data.id) {
                    allData[i] = action.voiceData;
                    break;
                }
            }
            return { ...state, voiceData: allData }

        default:
            return state
    }
}


export default voiceReducer;
