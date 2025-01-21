import FormField from 'pages/tourplaceProgram/components/formField/index'
import OptionFormField from 'pages/tourplaceProgram/components/formField/option_form_field';

import { Grid } from "@mui/material";
import PropTypes from "prop-types";

function TourplaceComponent({ formData }) {

    const { formField, values, errors, touched } = formData;

    const {
        place_name,
        status,
    } = formField;

    const {
        place_name: place_name_V,
        status: status_V,
    } = values;

    return (
        <Grid container>
            <Grid item xs={12} sm={12}>
                <FormField
                    label={place_name.label}
                    name={place_name.name}
                    type={place_name.type}
                    value={place_name_V}
                    placeholder={place_name.placeholder}
                    error={errors.place_name && touched.place_name}
                    success={place_name_V.length > 0 && !errors.place_name}
                />
                <OptionFormField
                    label={status.label}
                    name={status.name}
                    type={status.type}
                    value={status_V}
                    placeholder={status.placeholder}
                    error={errors.status && touched.status}
                    success={status_V.length > 0 && !errors.status}
                />
            </Grid>
        </Grid>
    );
}

// typechecking props for Address
TourplaceComponent.propTypes = {
    formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default TourplaceComponent;
