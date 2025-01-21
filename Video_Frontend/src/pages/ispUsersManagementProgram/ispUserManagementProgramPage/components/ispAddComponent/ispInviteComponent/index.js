import FormField from "./FormField";
import SelectFormField from "./SelectFormField";

import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTourplaceForISP } from "redux/actions/tourplace";

function ISPInviteComponent({ formData }) {
    const dispatch = useDispatch();
    const userdata = useSelector((state) => state.auth.userData);
    const selectTourPlace = useSelector((state) => state.tourplaceReducer.tourplaceData);
    const tourplacedata = selectTourPlace.map((item) => ({ value: item.id, label: item.place_name }))

    useEffect(() => {
        const access_token = userdata.access;
        dispatch(getTourplaceForISP(access_token));
    }, [])

    const { formField, values, errors, touched } = formData;
    const {
        email,
        tourplace,
    } = formField;
    const {
        email: email_V,
        tourplace: tourplace_V,
    } = values;
    return (
        <Grid container>
            <Grid item xs={12} sm={12}>
                <FormField
                    label={email.label}
                    name={email.name}
                    type={email.type}
                    value={email_V}
                    placeholder={email.placeholder}
                    error={errors.email && touched.email}
                    success={email_V.length > 0 && !errors.email}
                />
            </Grid>
            <Grid item xs={12} sm={12}>
                <SelectFormField
                    label={tourplace.label}
                    name={tourplace.name}
                    type={tourplace.type}
                    value={tourplace_V}
                    selectArray={tourplacedata}
                    placeholder={tourplace.placeholder}
                    initialValue={0}
                />
            </Grid>
        </Grid>
    );
}

// typechecking props for Address
ISPInviteComponent.propTypes = {
    formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default ISPInviteComponent;
