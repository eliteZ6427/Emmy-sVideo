import { Form, Formik } from "formik";
import { useDispatch, useSelector } from 'react-redux';

import CameraComponent from "./cameraComponent";
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import { addCamera } from "redux/actions/camera";
import form from "./schemas/form";
import initialValues from "./schemas/initialValues";
import validations from "./schemas/validations";

function CameraAddComponent(props) {
    const { formId, formField } = form;
    const dispatch = useDispatch();
    const userdata = useSelector((state) => state.auth.userData);
    const access_token = userdata.access; 

    const handleSubmit = async (values, actions) => {
        dispatch(addCamera(access_token, values));
        props.toogleModal();
    };

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
                            Register Camera
                        </VuiButton>
                    </VuiBox>
                </Form>
            )}
        </Formik>
    );

}

export default CameraAddComponent