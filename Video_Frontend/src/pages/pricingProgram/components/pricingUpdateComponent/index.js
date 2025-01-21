import { useEffect } from "react";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from 'react-redux';

import PricingComponent from "./pricingComponent";
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import { action_type } from "redux/action_type";
import form from "./schemas/form";
import { getPricingByID, updatePricing } from "redux/actions/pricing";
import initialValues from "./schemas/initialValues";
import validations from "./schemas/validations";

function PricingUpdateComponent({ pricing_id }) {
    const { formId, formField } = form;
    const dispatch = useDispatch();
    const selected_pricing_data = useSelector((state) => state.pricingReducer.selectedPricingData);
    const pricing_update_modal_status = useSelector((state) => state.pricingReducer.pricingUpdateModalStatus);
    const userdata = useSelector((state) => state.auth.userData);
    const access_token = userdata.access;
    const tooglePricingModal = (id) => {
        dispatch({ type: action_type.SELECT_FOR_UPDATE_PRICING, status: id });
        dispatch({ type: action_type.PRICING_UPDATE_MODAL_STATUS, status: !pricing_update_modal_status });
    }
    useEffect(() => {
        dispatch(getPricingByID(access_token, pricing_id));
    }, [])
    const handleSubmit = async (values, actions) => {
        values.id = pricing_id;
        values.tourplace = selected_pricing_data.tourplace
        dispatch(updatePricing(access_token, values));
        tooglePricingModal(-1);
    };
    if (selected_pricing_data.length != 0) {
        initialValues.level = selected_pricing_data.level
        initialValues.title = selected_pricing_data.title
        initialValues.price = selected_pricing_data.price
        initialValues.record_time = selected_pricing_data.record_time
        initialValues.record_limit = selected_pricing_data.record_limit
        initialValues.snapshot_limit = selected_pricing_data.snapshot_limit
    }
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
                            Update Pricing
                        </VuiButton>
                    </VuiBox>
                </Form>
            )}
        </Formik>
    );

}

export default PricingUpdateComponent