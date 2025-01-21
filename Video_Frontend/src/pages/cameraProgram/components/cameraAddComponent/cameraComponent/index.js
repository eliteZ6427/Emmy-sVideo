import FormField from 'pages/cameraProgram/components/formField/index'
import SelectFormField from 'pages/cameraProgram/components/formField/select_form_field';
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import {useDispatch, useSelector } from 'react-redux';
import { getTourplaceByISP } from "redux/actions/tourplace";
import { useEffect } from "react";

function CameraComponent({ formData }) {
    const userdata = useSelector((state) => state.auth.userData);
    const access_token = userdata.access; 
    const { formField, values, errors, touched } = formData;
    const tourplaceData = useSelector((state) => state.tourplaceReducer.tourplaceData);
    const tourplaceDataForm = tourplaceData.map((item) => ({label: item.place_name, value: item.id}));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTourplaceByISP(access_token));
    }, [])

    const {
        camera_name,
        tourplace,
        rtsp_url,
    } = formField;

    const {
        camera_name: camera_name_V,
        tourplace: tourplace_V,
        rtsp_url: rtsp_url_V,
    } = values;

    return (
        <Grid container>
            <Grid item xs={12} sm={12}>
                <FormField
                    label={camera_name.label}
                    name={camera_name.name}
                    type={camera_name.type}
                    value={camera_name_V}
                    placeholder={camera_name.placeholder}
                    error={errors.camera_name && touched.camera_name}
                    success={camera_name_V.length > 0 && !errors.camera_name}
                />
                <SelectFormField
                    label={tourplace.label}
                    name={tourplace.name}
                    type={tourplace.type}
                    value={tourplace_V}
                    selectArray={tourplaceDataForm}
                    placeholder={tourplace.placeholder}
                    initialValue={0}
                />
                <FormField
                    label={rtsp_url.label}
                    name={rtsp_url.name}
                    type={rtsp_url.type}
                    value={rtsp_url_V}
                    placeholder={rtsp_url.placeholder}
                    error={errors.rtsp_url && touched.rtsp_url}
                    success={rtsp_url_V.length > 0 && !errors.rtsp_url}
                />
            </Grid>
        </Grid>
    );
}

// typechecking props for Address
CameraComponent.propTypes = {
    formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default CameraComponent;
