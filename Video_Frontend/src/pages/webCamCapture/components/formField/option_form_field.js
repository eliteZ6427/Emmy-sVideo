/** 

=========================================================
* Vision UI PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

// prop-type is a library for typechecking of props

import { ErrorMessage, Field } from "formik";

import PropTypes from "prop-types";
import VuiBox from "components/VuiBox";
import VuiSwitch from "components/VuiSwitch";
import VuiTypography from "components/VuiTypography";

// formik components


// Vision UI Dashboard PRO React components




function OptionFormField({ label, name, field, value, ...rest }) {

    return (
        <VuiBox mb={1.5}>
            <VuiBox display="flex" mb="14px">
                <VuiBox mt={0.25}>
                    <Field {...rest} name={name}>
                        {({ field, form }) => (
                            <VuiSwitch
                                sx={{ background: "#1B1F3D", color: "#fff" }}
                                color="info"
                                checked={value}
                                onChange={() => form.setFieldValue(name, !value)}
                            />
                        )}
                    </Field>
                </VuiBox>
                <VuiBox width="80%" ml={2}>
                    <VuiTypography variant="button" fontWeight="regular" color="text">
                        {label}
                    </VuiTypography>
                </VuiBox>
            </VuiBox>

            <VuiBox mt={0.75}>
                <VuiTypography component="div" variant="caption" color="error">
                    <ErrorMessage name={name} />
                </VuiTypography>
            </VuiBox>


        </VuiBox>
    );
}

// typechecking props for FormField
OptionFormField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
};

export default OptionFormField;
