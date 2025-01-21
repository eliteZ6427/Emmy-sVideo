import FormField from "pages/authentication/signup/components/FormField";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import OptionFormField from "./option_form_field";
import VuiBox from "components/VuiBox";

function CustomerEditInfo({ formData }) {

    const { formField, values, errors, touched } = formData;

    const {
        username,
        email,
        phone_number,
        street,
        country,
        city,
        state,
        zipcode,
        contact_name,
        contact_email,
        contact_phone_number,
        status,
    } = formField;

    const {
        username: usernameV,
        email: emailV,
        phone_number: phone_numberV,
        street: streetV,
        country: countryV,
        city: cityV,
        state: stateV,
        zipcode: zipcodeV,
        contact_name: contact_nameV,
        contact_phone_number: contact_phone_numberV,
        contact_email: contact_emailV,
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
                <FormField
                    label={country.label}
                    name={country.name}
                    type={country.type}
                    value={countryV}
                    placeholder={country.placeholder}
                    error={errors.country && touched.country}
                    success={countryV.length > 0 && !errors.country}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <FormField
                    label={street.label}
                    name={street.name}
                    type={street.type}
                    value={streetV}
                    placeholder={street.placeholder}
                    error={errors.street && touched.street}
                    success={streetV.length > 0 && !errors.street}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <FormField
                    label={city.label}
                    name={city.name}
                    type={city.type}
                    value={cityV}
                    placeholder={city.placeholder}
                    error={errors.city && touched.city}
                    success={cityV.length > 0 && !errors.city}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <FormField
                    label={state.label}
                    name={state.name}
                    type={state.type}
                    value={stateV}
                    placeholder={state.placeholder}
                    error={errors.state && touched.state}
                    success={stateV.length > 0 && !errors.state}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormField
                    label={zipcode.label}
                    name={zipcode.name}
                    type={zipcode.type}
                    value={zipcodeV}
                    placeholder={zipcode.placeholder}
                    error={errors.zipcode && touched.zipcode}
                    success={zipcodeV.length > 0 && !errors.zipcode}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormField
                    label={contact_name.label}
                    name={contact_name.name}
                    type={contact_name.type}
                    value={contact_nameV}
                    placeholder={contact_name.placeholder}
                    error={errors.contact_name && touched.contact_name}
                    success={contact_nameV.length > 0 && !errors.contact_name}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <FormField
                    label={contact_email.label}
                    name={contact_email.name}
                    type={contact_email.type}
                    value={contact_emailV}
                    placeholder={contact_email.placeholder}
                    error={errors.contact_email && touched.contact_email}
                    success={contact_emailV.length > 0 && !errors.contact_email}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <FormField
                    label={contact_phone_number.label}
                    name={contact_phone_number.name}
                    type={contact_phone_number.type}
                    value={contact_phone_numberV}
                    placeholder={contact_phone_number.placeholder}
                    error={errors.contact_phone_number && touched.contact_phone_number}
                    success={contact_phone_numberV.length > 0 && !errors.contact_phone_number}
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
CustomerEditInfo.propTypes = {
    formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default CustomerEditInfo;
