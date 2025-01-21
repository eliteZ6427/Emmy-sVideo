import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types";
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import { action_type } from "redux/action_type";
import { deleteCamera, restartCamera } from "redux/actions/camera";

function ActionComponent({ camera_id }) {
    const dispatch = useDispatch();
    const userdata = useSelector((state) => state.auth.userData);
    const camera_update_modal_status = useSelector((state) => state.cameraReducer.cameraUpdateModalStatus);

    const toogleCameraModal = (id) => {
        dispatch({ type: action_type.SELECT_FOR_UPDATE_CAMERA, camera_id: id });
        dispatch({ type: action_type.CAMERA_UPDATE_MODAL_STATUS, status: !camera_update_modal_status });
    }

    const deleteHandleChange = (camera_id) => {
        dispatch(deleteCamera(camera_id, userdata.access));
    }

    const restartHandleChange = (camera_id) => {
        dispatch(restartCamera(camera_id, userdata.access));
    }
    return (
        <VuiBox>
            <VuiButton
                component="button"
                variant="gradient"
                color="dark"
                sx={({ breakpoints }) => ({
                    [breakpoints.up("md")]: {
                        minWidth: "30px",
                    },
                    [breakpoints.only("lg")]: {
                        minWidth: "auto",
                    },
                })}
                size="small"
                onClick={() => toogleCameraModal(camera_id)}
            >
                Edit
            </VuiButton>
            <VuiButton
                component="button"
                variant="gradient"
                color="primary"
                sx={({ breakpoints }) => ({
                    [breakpoints.up("md")]: {
                        minWidth: "30px",
                    },
                    [breakpoints.only("lg")]: {
                        minWidth: "auto",
                    },
                })}
                size="small"
                onClick={() => {
                    restartHandleChange(camera_id);
                }}
            >
                Restart
            </VuiButton>
            <VuiButton
                component="button"
                variant="gradient"
                color="error"
                sx={({ breakpoints }) => ({
                    [breakpoints.up("md")]: {
                        minWidth: "30px",
                    },
                    [breakpoints.only("lg")]: {
                        minWidth: "auto",
                    },
                })}
                size="small"
                onClick={() => {
                    deleteHandleChange(camera_id);
                }}
            >
                Delete
            </VuiButton>
        </VuiBox>
    );
}

ActionComponent.propTypes = {
    camera_id: PropTypes.number.isRequired
}
export default ActionComponent;
