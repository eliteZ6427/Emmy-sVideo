import { Form, Formik } from "formik";
import { alert_client_not_selected, alert_invalid_faces } from "redux/actions/warningMsgFunc";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";

import ChildComponent from "./childComponent";
import ClientSelectList from "./components/clientListComponent";
import { Divider } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
// import { addChild } from "redux/actions/client_manage";
import form from "./schemas/form";
// import { getClientByCustomerID } from 'redux/actions/client_manage';
import initialValues from "./schemas/initialValues";
import { useNavigate } from 'react-router-dom';
import validations from "./schemas/validations";

function ChildAddComponent(props) {
    const { formId, formField } = form;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userdata = useSelector((state) => state.auth.userData);
    const storePhotos = useSelector((state) => state.webCamReducer.client_photos);
    const selectClient = useSelector((state) => state.clientReducer.selectClient);

    const navigateClientProgram = () => {
        return navigate('/clientProgram');
    }

    const handleSubmit = async (values, actions) => {
        if (storePhotos.length < 3) {
            dispatch(alert_invalid_faces());
            props.toogleModal();
        } else if (selectClient === -1) {
            dispatch(alert_client_not_selected());
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
            values.client_id = selectClient;
            values.customer_id = userdata.user_id;
            const access_token = userdata.access;
            // dispatch(addChild(access_token, values));
            navigateClientProgram();
        }
    };
    useEffect(() => {
        const customer_id = { 'customer_id': userdata.user_id };
        const access_token = userdata.access;
        // dispatch(getClientByCustomerID(access_token, customer_id))
    }, [])
    return (
        <>
            <ClientSelectList />
            <Divider light sx={{ marginTop: 5 }} />
            <Formik
                initialValues={initialValues}
                validationSchema={validations[0]}
                onSubmit={handleSubmit}
            >
                {({ values, errors, touched, isSubmitting }) => (
                    <Form id={formId} autoComplete="off">
                        <ChildComponent formData={{ values, touched, formField, errors }} />
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
                                Register Parent
                            </VuiButton>
                        </VuiBox>
                    </Form>
                )}
            </Formik>
        </>
    );

}

export default ChildAddComponent