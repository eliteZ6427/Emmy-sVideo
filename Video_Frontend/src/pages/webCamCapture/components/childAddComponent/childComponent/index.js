import FormField from "pages/webCamCapture/components/formField";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";

function ChildComponent({ formData }) {

    const { formField, values, errors, touched } = formData;

    const { children_name } = formField;

    const { children_name: children_name_V } = values;

    return (
        <Grid container>
            <Grid item xs={12} sm={12}>
                <FormField
                    label={children_name.label}
                    name={children_name.name}
                    type={children_name.type}
                    value={children_name_V}
                    placeholder={children_name.placeholder}
                    error={errors.children_name && touched.children_name}
                    success={children_name_V.length > 0 && !errors.children_name}
                />
            </Grid>
        </Grid>
    );
}

// typechecking props for Address
ChildComponent.propTypes = {
    formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default ChildComponent;
