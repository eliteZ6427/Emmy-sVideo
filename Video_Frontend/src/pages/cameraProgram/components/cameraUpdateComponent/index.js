import { useEffect } from "react";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from 'react-redux';

import CameraComponent from "./cameraComponent";
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import { action_type } from "redux/action_type";
import form from "./schemas/form";
import { getCameraByID, updateCamera } from "redux/actions/camera";
import initialValues from "./schemas/initialValues";
import validations from "./schemas/validations";

function CameraUpdateComponent({ camera_id }) {
    const { formId, formField } = form;
    const dispatch = useDispatch();
    const selected_camera_data = useSelector((state) => state.cameraReducer.selectedCameraData);
    const camera_update_modal_status = useSelector((state) => state.cameraReducer.cameraUpdateModalStatus);
    const userdata = useSelector((state) => state.auth.userData);
    const access_token = userdata.access;
    const toogleCameraModal = (id) => {
        dispatch({ type: action_type.SELECT_FOR_UPDATE_CAMERA, status: id });
        dispatch({ type: action_type.CAMERA_UPDATE_MODAL_STATUS, status: !camera_update_modal_status });
    }
    useEffect(() => {
        dispatch(getCameraByID(access_token, camera_id));
    }, [])
    const handleSubmit = async (values, actions) => {
        values.id = camera_id;
        dispatch(updateCamera(access_token, values));
        toogleCameraModal(-1);
    };
    if (selected_camera_data.length != 0) {
        initialValues.camera_name = selected_camera_data.camera_name
        initialValues.tourplace = selected_camera_data.tourplace?.shift()?.id
        initialValues.rtsp_url = selected_camera_data.rtsp_url
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validations[0]}
            onSubmit={handleSubmit}
        >
            {({ values, errors, touched, isSubmitting }) => (
                <Form id={formId} autoComplete="off">
                    <CameraComponent formData={{ values, touched, formField, errors }} />
                    <VuiBox
                        display="flex"
                        justifyContent="center"
                        p={1.4}
                    >
                        <VuiButton
                            variant="contained"
                            color="error"
                            sx={{ width: '100%' }}
                            size="small"
                            disabled={isSubmitting}
                            type="submit"
                        >
                            Update Camera
                        </VuiButton>
                    </VuiBox>
                </Form>
            )}
        </Formik>
    );

}

export default CameraUpdateComponent