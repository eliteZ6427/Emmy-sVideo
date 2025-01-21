import { ErrorMessage, Field } from "formik";

import PropTypes from "prop-types";
import VuiBox from "components/VuiBox";
import VuiSelect from "components/VuiSelect";
import VuiTypography from "components/VuiTypography";
import { useFormikContext } from "formik";

function SelectFormField({ label, selectArray, initialValue, name, field, value, ...rest }) {
    const { setFieldValue } = useFormikContext();
    const handleOnChange = (e) => {
        setFieldValue(name, e.map(item => item.value));
    }
    return (
        <VuiBox mb={1.5}>
            <VuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <VuiTypography
                    component="label"
                    variant="caption"
                    color="white"
                    fontWeight="bold"
                    textTransform="capitalize"
                >
                    {label}
                </VuiTypography>
            </VuiBox>
            <Field {...rest} name={name}>
                {({ field, form }) => (
                    <VuiSelect
                        options={selectArray}
                        isMulti
                        onChange={(e) => { handleOnChange(e) }}
                        size="large"
                    />
                )}
            </Field>
            <VuiBox mt={0.75}>
                <VuiTypography component="div" variant="caption" color="error">
                    <ErrorMessage name={name} />
                </VuiTypography>
            </VuiBox>
        </VuiBox>
    );
}

// typechecking props for FormField
SelectFormField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.array.isRequired,
};

SelectFormField.defaultProps = {
    setEntriesPerPage: () => {},
};
export default SelectFormField;
