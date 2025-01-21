import { Form, Formik } from "formik";
import { useDispatch, useSelector } from 'react-redux';

import PricingComponent from "./pricingComponent";
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import { addPricing } from "redux/actions/pricing";
import form from "./schemas/form";
import initialValues from "./schemas/initialValues";
import validations from "./schemas/validations";
import { alert_tourplace_select_error } from "redux/actions/warningMsgFunc";

function PricingAddComponent({toogleModal, tourplace}) {
    const { formId, formField } = form;
    const dispatch = useDispatch();
    const userdata = useSelector((state) => state.auth.userData);
    const handleSubmit = async (values, actions) => {
        if(tourplace === undefined){
            dispatch(alert_tourplace_select_error());
        }else{
            const access_token = userdata.access;
            values.tourplace = tourplace
            dispatch(addPricing(access_token, values));
        }
        toogleModal();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validations[0]}
            onSubmit={handleSubmit}
        >
            {({ values, errors, touched, isSubmitting }) => (
                <Form id={formId} autoComplete="off">
                    <PricingComponent formData={{ values, touched, formField, errors }} />
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
                            Register Pricing
                        </VuiButton>
                    </VuiBox>
                </Form>
            )}
        </Formik>
    );

}

export default PricingAddComponent