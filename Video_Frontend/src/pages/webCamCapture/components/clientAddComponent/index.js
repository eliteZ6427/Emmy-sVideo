import { Form, Formik } from "formik";
import { useDispatch, useSelector } from 'react-redux';

import ClientComponent from "./clientComponent";
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import { action_type } from "redux/action_type";
// import { addClient } from "redux/actions/client_manage";
import form from "./schemas/form";
import initialValues from "./schemas/initialValues";
import { useNavigate } from 'react-router-dom';
import validations from "./schemas/validations";

function ClientAddComponent(props) {
    const { formId, formField } = form;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const face_alarm = () => dispatch({ type: action_type.ALERT_SNACK_BAR, snack_bar_open: true, snack_bar_type: 'error', snack_bar_text: 'Please take your all face pictures' });
    const storePhotos = useSelector((state) => state.webCamReducer.client_photos);
    const userdata = useSelector((state) => state.auth.userData);
    const navigateClientProgram = () => {
        return navigate('/clientProgram');
    }
    const handleSubmit = async (values, actions) => {
        if (storePhotos.length < 3) {
            face_alarm();
            props.toogleModal();
        } else {
            storePhotos.map(async (item) => {
                switch (item.side) {
                    case 1:
                        values.front_1_file = item;
                        values.front_2_file = item;
                        break;
                    case 2:
                        values.left_file = item;
                        break;
                    case 3:
                        values.right_file = item;
                        break;
                    default:
                        break;
                }
            })
            values.customer_id = userdata.user_id;
            const access_token = userdata.access;
            // dispatch(addClient(access_token, values));
            navigateClientProgram();
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validations[0]}
            onSubmit={handleSubmit}
        >
            {({ values, errors, touched, isSubmitting }) => (
                <Form id={formId} autoComplete="off">
                    <ClientComponent formData={{ values, touched, formField, errors }} />
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
                            Register Client
                        </VuiButton>
                    </VuiBox>
                </Form>
            )}
        </Formik>
    );

}

export default ClientAddComponent