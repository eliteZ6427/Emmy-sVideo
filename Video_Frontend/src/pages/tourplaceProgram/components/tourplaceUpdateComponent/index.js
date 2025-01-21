import { useEffect } from "react";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from 'react-redux';

import TourplaceComponent from "./tourplaceComponent";
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import { action_type } from "redux/action_type";
import form from "./schemas/form";
import { getTourplaceByID, updateTourplace } from "redux/actions/tourplace";

import initialValues from "./schemas/initialValues";
import validations from "./schemas/validations";

function TourplaceUpdateComponent({ tourplace_id }) {
    const { formId, formField } = form;
    const dispatch = useDispatch();
    const selected_tourplace_data = useSelector((state) => state.tourplaceReducer.selectedTourplaceData);
    const tourplace_update_modal_status = useSelector((state) => state.tourplaceReducer.tourplaceUpdateModalStatus);
    const userdata = useSelector((state) => state.auth.userData);
    const access_token = userdata.access;
    const toogleTourplaceModal = (id) => {
        dispatch({ type: action_type.SELECT_FOR_UPDATE_TOURPLACE, status: id });
        dispatch({ type: action_type.TOURPLACE_UPDATE_MODAL_STATUS, status: !tourplace_update_modal_status });
    }
    useEffect(() => {
        dispatch(getTourplaceByID(access_token, tourplace_id));
    }, [])
    const handleSubmit = async (values, actions) => {
        values.id = tourplace_id;
        dispatch(updateTourplace(access_token, values));
        toogleTourplaceModal(-1);
    };
    if (selected_tourplace_data.length != 0) {
        initialValues.place_name = selected_tourplace_data.place_name
        initialValues.status = selected_tourplace_data.status
    }
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
                            Update Tour Place
                        </VuiButton>
                    </VuiBox>
                </Form>
            )}
        </Formik>
    );

}

export default TourplaceUpdateComponent