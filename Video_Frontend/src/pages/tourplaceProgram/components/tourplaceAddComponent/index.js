import { Form, Formik } from "formik";
import { useDispatch, useSelector } from 'react-redux';

import TourplaceComponent from "./tourplaceComponent";
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import { addTourPlace } from "redux/actions/tourplace";
import form from "./schemas/form";
import initialValues from "./schemas/initialValues";
import validations from "./schemas/validations";

function TourplaceAddComponent(props) {
    const { formId, formField } = form;
    const dispatch = useDispatch();
    const userdata = useSelector((state) => state.auth.userData);

    const handleSubmit = async (values, actions) => {
        const access_token = userdata.access;
        dispatch(addTourPlace(access_token, values));
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
                    <TourplaceComponent formData={{ values, touched, formField, errors }} />
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
                            Register Tour Place
                        </VuiButton>
                    </VuiBox>
                </Form>
            )}
        </Formik>
    );

}

export default TourplaceAddComponent