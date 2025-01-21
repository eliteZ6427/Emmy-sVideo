import FormField from "pages/authentication/signup/components/FormField";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import OptionFormField from "./option_form_field";
import SelectFormField from "./select_form_field";

function ISPUserEditInfo({ formData, tourplacedata }) {
    const { formField, values, errors, touched } = formData;
    const {
        username,
        email,
        phone_number,
        tourplace,
        status,
    } = formField;

    const {
        username: usernameV,
        email: emailV,
        phone_number: phone_numberV,
        tourplace: tourplaceV,
        status: status_V
    } = values;
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <FormField
                    label={username.label}
                    name={username.name}
                    type={username.type}
                    value={usernameV}
                    placeholder={username.placeholder}
                    error={errors.username && touched.username}
                    success={usernameV.length > 0 && !errors.username}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormField
                    label={email.label}
                    name={email.name}
                    type={email.type}
                    value={emailV}
                    placeholder={email.placeholder}
                    error={errors.email && touched.email}
                    success={emailV.length > 0 && !errors.email}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormField
                    label={phone_number.label}
                    name={phone_number.name}
                    type={phone_number.type}
                    value={phone_numberV}
                    placeholder={phone_number.placeholder}
                    error={errors.phone_number && touched.phone_number}
                    success={phone_numberV.length > 0 && !errors.phone_number}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <SelectFormField
                    label={tourplace.label}
                    name={tourplace.name}
                    type={tourplace.type}
                    value={tourplaceV}
                    initialValue={tourplaceV}
                    selectArray={tourplacedata}
                    placeholder={tourplace.placeholder}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
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
ISPUserEditInfo.propTypes = {
    formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default ISPUserEditInfo;
