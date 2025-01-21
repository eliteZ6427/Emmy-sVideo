import { ErrorMessage, Field } from "formik";

import PropTypes from "prop-types";
import VuiBox from "components/VuiBox";
import VuiSwitch from "components/VuiSwitch";
import VuiTypography from "components/VuiTypography";

function OptionFormField({ label, name, field, value, ...rest }) {

  return (
    <VuiBox mb={1.5}>
      <VuiBox display="flex" mt={"30px"}>
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
