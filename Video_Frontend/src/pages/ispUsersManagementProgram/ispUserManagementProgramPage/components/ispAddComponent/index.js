import { Form, Formik } from "formik";
import { useDispatch, useSelector } from 'react-redux';

import ISPInviteComponent from "./ispInviteComponent";

import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import { inviteNewISP } from "redux/actions/ispUsers";
import form from "./schemas/form";
import initialValues from "./schemas/initialValues";
import validations from "./schemas/validations";

function ISPADDComponent(props) {
    const { formId, formField } = form;
    const dispatch = useDispatch();
    const userdata = useSelector((state) => state.auth.userData);

    const handleSubmit = async (values, actions) => {
        const access_token = userdata.access;
        dispatch(inviteNewISP(access_token, values));
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
                    <ISPInviteComponent formData={{ values, touched, formField, errors }} />
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
                            Invite New ISP
                        </VuiButton>
                    </VuiBox>
                </Form>
            )}
        </Formik>
    );

}

export default ISPADDComponent