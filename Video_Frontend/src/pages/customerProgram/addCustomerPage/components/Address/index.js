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

// NewUser page components
import FormField from "pages/customerProgram/addCustomerPage/components/FormField";
// @mui material components
import Grid from "@mui/material/Grid";
// prop-type is a library for typechecking of props
import PropTypes from "prop-types";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function Address({ formData }) {
  const { formField, values, errors, touched } = formData;
  const { street, country, city, state, zipcode } = formField;
  const { street: streetV, country: countryV, city: cityV, state: stateV, zipcode: zipcodeV } = values;

  return (
    <VuiBox>
      <VuiTypography variant="lg" color="white" fontWeight="bold">
        Address
      </VuiTypography>
      <VuiBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <VuiBox mt={-1.625}>
              <FormField
                label={country.label}
                name={country.name}
                value={countryV}
                placeholder={country.placeholder}
                error={errors.country && touched.country}
                success={countryV.length > 0 && !errors.countryV}
              />
            </VuiBox>
          </Grid>
          <Grid item xs={12}>
            <FormField
              label={street.label}
              name={street.name}
              value={streetV}
              placeholder={street.placeholder}
              error={errors.street && touched.street}
              success={streetV.length > 0 && !errors.street}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              label={city.label}
              name={city.name}
              value={cityV}
              placeholder={city.placeholder}
              error={errors.city && touched.city}
              success={cityV.length > 0 && !errors.city}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormField
              label={state.label}
              name={state.name}
              value={stateV}
              placeholder={state.placeholder}
              error={errors.state && touched.state}
              success={stateV.length > 0 && !errors.state}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormField
              label={zipcode.label}
              name={zipcode.name}
              value={zipcodeV}
              placeholder={zipcode.placeholder}
              error={errors.zipcode && touched.zipcode}
              success={zipcodeV.length > 0 && !errors.zipcode}
            />
          </Grid>
        </Grid>
      </VuiBox>
    </VuiBox>
  );
}

// typechecking props for Address
Address.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Address;
